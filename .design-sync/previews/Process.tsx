import { Process } from "noor";

/** The shipping section: two phase cards above the two pricing tiers. */
export const Default = () => <Process />;

/** Phases and tiers are plain data — here, a single all-in engagement. */
export const SingleEngagement = () => (
  <Process
    eyebrow="Full service"
    title="One engagement, from the first call to the last van out."
    phases={[
      {
        tag: "01 — Together",
        title: "Design & planning",
        lede: "Direction, vendors, and the master timeline.",
        items: [
          "Moodboarding and design direction for every room",
          "Vendor sourcing, negotiation, and contract review",
          "A detailed event-day timeline and program itinerary",
          "Monthly planning calls from booking to the final week",
        ],
      },
    ]}
    pricingEyebrow="Investment"
    pricingLede="A single fee covering design, planning, and the day itself. Quoted after your discovery call."
    tiers={[
      {
        kicker: "i. Full service",
        title: "Design, planning & execution",
        price: "$2,400",
        priceRange: " – $4,000",
        items: [
          "Everything in the planning and execution tiers",
          "Design direction and vendor sourcing from scratch",
          "Two coordinators on site for the full event day",
          "Post-event vendor settlement and rentals return",
        ],
      },
    ]}
    pricingFoot="Limited to eight full-service events a year."
  />
);
