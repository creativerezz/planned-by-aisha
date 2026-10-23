# Planned by Ayesha — how to build with this system

A boutique event-planning brand: wine and oxblood grounds, brass rules, ivory
ink, three serif/sans families. Components are **full-bleed page sections**, not
small primitives — you compose a page by stacking them, then style your own glue
with the `hon-*` classes and tokens below.

## Always wrap in `SiteRoot`

`SiteRoot` is not optional. It carries the wine ground, ivory ink, base type
scale, and the `* { margin: 0; padding: 0 }` reset every section is written
against. **Outside it, sections render unstyled — and anything marked `.reveal`
stays at `opacity: 0` forever**, because the reveal observer lives in the wrapper.

```jsx
<SiteRoot>
  <Header />
  <Hero />
  <WorkGallery />
  <Footer />
</SiteRoot>
```

Use `<SiteRoot reveal="none">` for any static render, screenshot, or preview:
it adds `.hon-static`, which shows every `.reveal` element immediately with no
animation. `grain={false}` drops the film-grain overlay.

Sections are ordered, full-width, and self-spacing (`.hon-section` owns its own
vertical rhythm). Do not wrap them in your own containers or add page padding.

## The styling idiom: semantic classes + tokens

There are **no utility classes** — no `p-4`, no `text-lg`. Every rule is a named
class in one stylesheet, and every colour resolves to a `var(--token)`. Never
write a raw hex value.

| Family | Real names |
|---|---|
| Layout | `.hon-root` `.hon-section` `.hon-shell` (centres at `--measure`) `.hon-layer` `.hon-grain` |
| Type | `.hon-h1` `.hon-h2` `.hon-eyebrow` (`-soft` `-deep` `-block`) `.hon-em` (`-brass` `-deep`) |
| Buttons | `.btn` + `.btn-ivory` / `.btn-wine` / `.btn-block`; `.btn-text` for underlined links |
| Surfaces | `.hon-frame` (`-light`, `-badge`) `.img-slot` (`.on-light`) `.hon-form-card` `.hon-bloom` (`-hero` `-center` `-wide`) |
| Fields | `.hon-field` `.hon-field-row` `.hon-input` `.hon-select` `.hon-textarea` `.hon-field-error` |
| Motion | `.reveal` + `.d1`–`.d4` (stagger); `.hon-static` to opt out |

Tokens worth knowing: grounds `--wine` `--oxblood` `--parchment` `--emerald`;
ink `--ivory` and the alpha scale `--ink-faint` `--ink-muted` `--ink-soft`
`--ink-strong`; brass `--brass` `--brass-soft` `--brass-deep`; rules `--line`
`--line-soft` `--line-faint`; type `--font-display` (Libre Baskerville),
`--font-body` (Source Serif 4), `--font-ui` (Outfit), `--font-em`; layout
`--gutter` `--section-y` `--measure`.

**Grounds alternate down the page** and each section owns its own: `SiteRoot`
and `Hero` are wine, `Founder` is parchment, `Process` is emerald, `Footer` is
oxblood. Don't set a background on a section — pick the section that already has
the ground you want.

## Every prop is optional

Rendered bare, each component shows the studio's real content — so `<Hero />`
alone is a finished, on-brand screen. Pass props to re-skin it. Array props
(`items`, `phases`, `tiers`, `columns`) drive their own grid column count, and
`null` on a slot prop (`image`, `action`, `children`) removes that slot and
collapses the layout around it.

## Where the truth lives

Read `_ds/<folder>/styles.css` and its `@import` closure before styling anything
— it is the complete stylesheet, tokens included. Each component's own
`.prompt.md` and `.d.ts` carry its full prop contract.

## An idiomatic snippet

```jsx
<SiteRoot>
  <Hero
    eyebrow="Private dining · Los Angeles"
    titleLead="Small rooms,"
    titleEm="long evenings."
    body="Intimate dinners for twenty to eighty guests — sourced, staged, and run end to end."
    primaryAction={{ label: "Plan a dinner", href: "#hon-inquire" }}
    image={null}
  />

  {/* Your own glue uses the same vocabulary — never invented class names. */}
  <section className="hon-section">
    <div className="hon-shell">
      <span className="reveal hon-eyebrow">Availability</span>
      <h2 className="reveal d1 hon-h2">
        Twelve dates <em className="hon-em hon-em-brass">remain.</em>
      </h2>
    </div>
  </section>

  <Inquire />
  <Footer />
</SiteRoot>
```
