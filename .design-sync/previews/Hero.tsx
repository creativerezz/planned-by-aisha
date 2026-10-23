import { Hero } from "noor";

/** The opening screen as the site ships it. */
export const Default = () => <Hero />;

/** Every string, both calls to action, and the framed image are props. */
export const AlternateEvent = () => (
  <Hero
    eyebrow="Private dining · Los Angeles"
    titleLead="Small rooms,"
    titleEm="long evenings."
    body="Intimate dinners and milestone gatherings for twenty to eighty guests — sourced, staged, and run end to end."
    primaryAction={{ label: "Plan a dinner", href: "#hon-inquire" }}
    secondaryAction={{ label: "See past evenings", href: "#hon-work" }}
    image={{
      src: "https://plannedbyayesha.vercel.app/images/candlelit-setting.png",
      alt: "Candlelit private dinner setting with burgundy florals and brass candelabras",
    }}
    imageBadge="Candlelit · seats forty"
    tags={["Private dinners", "Milestones", "Rehearsal dinners"]}
  />
);

/** Drop the image with `image={null}` and the copy takes the full measure. */
export const TypeOnly = () => (
  <Hero
    eyebrow="Now booking · 2026"
    titleLead="A year of"
    titleEm="good rooms."
    body="Weddings, walimas, and private gatherings across Southern California. Twelve dates remain."
    image={null}
    secondaryAction={null}
  />
);
