/**
 * Planned by Ayesha — design system entry.
 *
 * Every component renders against the token layer and `hon-*` class vocabulary
 * defined in `app/globals.css`. All props are optional: rendered bare, each
 * component shows the studio's own content.
 */
export { SiteRoot, type SiteRootProps } from "./root";
export { Wordmark, type WordmarkProps } from "./wordmark";
export { Header, type HeaderProps, type NavLink } from "./header";
export { Hero, type HeroProps, type HeroAction, type HeroImage } from "./hero";
export { Founder, type FounderProps, type FounderAction, type FounderImage } from "./founder";
export { WorkGallery, type WorkGalleryProps, type WorkGalleryAction } from "./work-gallery";
export { Process, type ProcessProps } from "./process";
export { Testimonial, type TestimonialProps } from "./testimonial";
export { Inquire, type InquireProps, type ContactLink } from "./inquire";
export { InquireForm, type InquireFormProps, type InquireFormStatus } from "./inquire-form";
export { Footer, type FooterProps, type FooterColumn, type FooterLink } from "./footer";
export { RevealProvider, type RevealProviderProps } from "./reveal-provider";
export type { GalleryItem, Phase, Tier } from "../../lib/content";
