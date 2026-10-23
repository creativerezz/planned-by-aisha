// Post-processes the `tsc -p tsconfig.ds.json` output into a standalone
// design-system dist, for /design-sync. Two jobs, both of which exist because
// the components are written for Next.js and the bundle is consumed outside it:
//
//   1. Stylesheet. The app loads its webfonts through a <link> in
//      app/layout.tsx, which nothing outside Next.js sees. A standalone
//      consumer needs them in the stylesheet, so we lift that same href into
//      an @import ahead of globals.css.
//   2. Image URLs. Component defaults use root-relative `/images/...`, which
//      only resolves when Next is serving public/. Rewritten to the deployed
//      origin so a component rendered anywhere else still shows its photo.
//
// Both values are read out of app/layout.tsx rather than duplicated here, so
// they cannot drift from what the site actually uses.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const layout = readFileSync("app/layout.tsx", "utf8");

const read = (re, what) => {
  const m = layout.match(re);
  if (!m) {
    console.error(`build-ds-dist: no ${what} found in app/layout.tsx`);
    process.exit(1);
  }
  return m[1].replace(/&amp;/g, "&");
};

const fontsUrl = read(/href="(https:\/\/fonts\.googleapis\.com\/css2\?[^"]+)"/, "Google Fonts <link href>");
const origin = read(/url:\s*"(https:\/\/[^"]+?)\/?"/, "openGraph.url origin");

// -- 1. stylesheet ---------------------------------------------------------
mkdirSync("dist", { recursive: true });
writeFileSync(
  "dist/design-system.css",
  `@import url("${fontsUrl}");\n\n${readFileSync("app/globals.css", "utf8")}`,
  "utf8",
);
writeFileSync("dist/package.json", JSON.stringify({ type: "module" }, null, 2) + "\n", "utf8");

// -- 2. absolute image URLs in the emitted JS ------------------------------
const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

let rewritten = 0;
for (const file of walk("dist").filter((p) => p.endsWith(".js"))) {
  const src = readFileSync(file, "utf8");
  const out = src.replaceAll('"/images/', `"${origin}/images/`);
  if (out !== src) {
    writeFileSync(file, out, "utf8");
    rewritten++;
  }
}

console.log(`build-ds-dist: design-system.css + ${rewritten} file(s) rewritten to ${origin}/images/`);
