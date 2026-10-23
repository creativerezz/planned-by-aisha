export const SITE = {
  email: "info@huesofnoor.com",
  phone: "562-341-2539",
  phoneHref: "tel:5623412539",
  instagram: "@byhuesofnoor",
  instagramUrl: "https://instagram.com/byhuesofnoor",
} as const;

export const NAV_LINKS = [
  { href: "#hon-top", label: "Home" },
  { href: "#hon-work", label: "Portfolio" },
  { href: "#hon-process", label: "Services" },
  { href: "#hon-inquire", label: "Contact" },
] as const;

export const EVENT_TAGS = [
  "Weddings",
  "Walimas",
  "Engagements",
  "Mehndis",
  "Private dinners",
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  span: "lg" | "sm" | "third";
  delay?: "d1" | "d2";
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/walima-stage.png",
    alt: "Walima stage with burgundy florals and gold drapery",
    kicker: "Stages & decor",
    title: "Walima stage",
    span: "lg",
  },
  {
    src: "/images/centerpiece.png",
    alt: "Burgundy and gold floral wedding centerpiece with candlelight",
    kicker: "Tablescapes",
    title: "Centerpieces",
    span: "sm",
    delay: "d1",
  },
  {
    src: "/images/custom-signage.png",
    alt: "Custom wedding signage with burgundy florals and gold calligraphy",
    kicker: "Paper & favors",
    title: "Custom signage",
    span: "sm",
  },
  {
    src: "/images/banquet-reception.png",
    alt: "Walima banquet reception with coordinated tablescapes and candlelight",
    kicker: "Tablescapes",
    title: "Banquet reception",
    span: "lg",
    delay: "d1",
  },
  {
    src: "/images/candlelit-setting.png",
    alt: "Candlelit wedding setting with burgundy florals and gold brass candelabras",
    kicker: "Stages & decor",
    title: "Candlelit setting",
    span: "third",
  },
  {
    src: "/images/floral-photobooth.png",
    alt: "Floral photobooth backdrop with burgundy roses and gold frame",
    kicker: "Vendor spotlight",
    title: "Floral photobooth",
    span: "third",
    delay: "d1",
  },
  {
    src: "/images/coffee-matcha-bar.png",
    alt: "Styled coffee and matcha bar with burgundy florals and gold brass accents",
    kicker: "Vendor spotlight",
    title: "Coffee & matcha bar",
    span: "third",
    delay: "d2",
  },
];

export type Phase = {
  tag: string;
  title: string;
  lede: string;
  items: string[];
};

export const PHASES: Phase[] = [
  {
    tag: "01 — Before",
    title: "Pre-event coordination",
    lede: "Strategy, vendors, and the master timeline.",
    items: [
      "Vendor confirmations & communication — catering, photography, venue, decor",
      "Negotiation on your behalf for the best possible pricing",
      "Review of all vendor contracts and scope of services",
      "A detailed event-day timeline & program itinerary",
      "Planning calls to finalize logistics, set-up, and flow",
    ],
  },
  {
    tag: "02 — The day",
    title: "Day-of execution",
    lede: "Ten to twelve hours of on-site management.",
    items: [
      "On-site coordination from set-up to send-off",
      "Vendor setup, arrivals, and overall event flow",
      "Cueing of entrances, songs, speeches, and games",
      "Photography & program schedule management",
      "A single point of contact, so you remain fully present",
    ],
  },
];

export type Tier = {
  kicker: string;
  title: string;
  price: string;
  priceRange: string;
  items: string[];
};

export const TIERS: Tier[] = [
  {
    kicker: "i. Planning tier",
    title: "Pre-event planning & creation",
    price: "$800",
    priceRange: " – $1,500",
    items: [
      "Main point of contact for all vendors",
      "Vendor communication in the weeks leading up",
      "Timeline & program creation, with revisions",
      "Planning calls & logistics organization",
    ],
  },
  {
    kicker: "ii. Execution tier",
    title: "Wedding-day execution",
    price: "$500",
    priceRange: " – $1,200",
    items: [
      "Ten to twelve hours of on-site service",
      "Coordination from pre-event start to end",
      "Managing vendors and the timeline",
      "Cueing key moments & real-time problem-solving",
    ],
  },
];

export const EVENT_TYPES = [
  "Wedding",
  "Walima",
  "Engagement",
  "Mehndi",
  "Social gathering",
  "Private celebration",
] as const;
