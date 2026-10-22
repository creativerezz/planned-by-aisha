# design-sync notes — Planned by Ayesha

Repo-specific gotchas for future syncs. Read this before re-running anything.

## Shape

This is a **Next.js app, not a published component library**. The design system
is `components/site/` plus the token layer in `app/globals.css`. Nothing about
that is discoverable from `package.json` alone, hence the setup below.

- `npm run build:ds` (`cfg.buildCmd`) is the DS build: `tsc -p tsconfig.ds.json`
  emits `dist/` with declarations, then `scripts/build-ds-dist.mjs` post-processes
  it. `npm run build` is the *app* build and produces nothing the converter uses.
- Converter entry is `./dist/components/site/index.js` — pass it explicitly with
  `--entry`; there is no `node_modules/noor`.
- `package.json` carries `main`/`module`/`types`/`exports` purely so the
  converter's `.d.ts` discovery finds the entry. Remove them and component
  discovery silently falls back to `lib/` and reports `[ZERO_MATCH]`.
- `dist/package.json` (`{"type":"module"}`) is written by the build script; the
  emitted JS is ESM and the root package has no `"type"`.

## What `scripts/build-ds-dist.mjs` does, and why

1. **Fonts.** The app loads Libre Baskerville / Source Serif 4 / Outfit through a
   `<link>` in `app/layout.tsx`, which nothing outside Next.js sees. The script
   lifts that same href into an `@import` at the top of `dist/design-system.css`
   (`cfg.cssEntry`). This is why validate reports `[FONT_REMOTE]` and not
   `[FONT_MISSING]` — expected, no action.
2. **Images.** Component defaults use root-relative `/images/...`, which only
   resolves while Next serves `public/`. The script rewrites them to the
   deployed origin in `dist/` **only** — app source keeps relative paths. Both
   values are parsed out of `app/layout.tsx` (the fonts `<link>` and
   `openGraph.url`) rather than duplicated, so they cannot drift.

## Rendering the previews

- **`cfg.provider` is `SiteRoot`, and it is mandatory.** `.hon-root` carries the
  ground, ink, base type, and element reset. Without it components render
  unstyled.
- **`reveal: "none"` in the provider props is what makes previews visible at
  all.** Every section marks its children `.reveal`, which starts at
  `opacity: 0`; the class is only cleared by the `RevealProvider` observer, which
  never fires usefully in a screenshot. `reveal="none"` adds `.hon-static`
  (`app/globals.css`) which shows everything with no transition.
- Sections are page-width, so all of them use `cardMode: "single"` with an
  explicit desktop `viewport`. Heights are tuned per component — `WorkGallery`
  (2100) and `Process` (1800) are tall and **will clip if the viewport is
  reduced**.
- `InquireForm` renders at `1100x1100` on purpose: below the narrow breakpoint
  the `.hon-field-row` pairs collapse to one column, which is not how the form
  appears in the page.
- Playwright is installed in `.ds-sync/` with browser download suppressed; the
  render check runs against system Chrome via
  `DS_CHROMIUM_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`.
  Export it before `package-validate.mjs` / `package-capture.mjs` or you get
  `[RENDER_SKIPPED]`.

## Bugs this sync found and fixed in the app

- **Invisible buttons.** `.hon-root a { color: inherit }` is specificity (0,1,1)
  and outranked `.btn-ivory` / `.btn-wine` (0,1,0), painting each label in its
  own background colour. Both were unreadable — caught by the render check, not
  yet deployed. Fixed by scoping those two rules to `.hon-root`. The `:hover`
  rules are already (0,2,0) and stay flat. **If new `.btn-*` variants are added,
  they need the same scoping.**
- **Grids hardcoded to two columns.** `.hon-phases`, `.hon-tiers`, and
  `.hon-foot-grid` had fixed column counts, so any component handed a different
  length array left empty tracks or wrapped. They now read `--hon-cols`, set
  inline by the component from its own data (clamped: 3 for phases/tiers, 4 for
  footer columns). The narrow breakpoint still overrides to one column.
- **Empty slots left holes.** `Founder` with `image={null}` and `Inquire` with
  `children={null}` left an empty grid column / an empty bordered card. Both now
  add a `-solo` modifier that collapses to a centred single column.

## Known render warns

- `[FONT_REMOTE]` on every run — the Google Fonts `@import`. Expected, see above.

## Re-sync risks

- **The deployed origin is baked into `dist/`.** If the site moves off
  `plannedbyayesha.vercel.app`, update `openGraph.url` in `app/layout.tsx` and
  rebuild — every synced image URL follows it. If the deployment goes away,
  every image in every synced component 404s with no local fallback.
- **Preview image URLs are hardcoded** in `.design-sync/previews/*.tsx` (the
  `IMG` constant in `WorkGallery.tsx`, inline URLs in `Hero.tsx` / `Founder.tsx`).
  These do *not* follow `app/layout.tsx`; update them by hand if the origin moves.
- **Content defaults live in `lib/content.ts` and `components/hero-copy.ts`** and
  are bundled into the DS. Copy edits there change every synced component's
  default render, and `_ds_sync.json` will correctly re-verify them.
- **Viewport heights are hand-tuned.** Adding gallery tiles, phases, or tiers can
  push a section past its declared viewport and clip the card. Check the review
  sheets after any content change.
- The whole DS build depends on `app/layout.tsx` keeping a Google Fonts `<link
  href>` and an `openGraph.url` — `scripts/build-ds-dist.mjs` exits 1 if either
  is gone, which is deliberate.
