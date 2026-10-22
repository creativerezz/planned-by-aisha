import { SiteRoot } from "@/components/site/root";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Founder } from "@/components/site/founder";
import { WorkGallery } from "@/components/site/work-gallery";
import { Process } from "@/components/site/process";
import { Testimonial } from "@/components/site/testimonial";
import { Inquire } from "@/components/site/inquire";
import { Footer } from "@/components/site/footer";

export default function HomePage() {
  return (
    <SiteRoot>
      <Header />
      <Hero />
      <Founder />
      <WorkGallery />
      <Process />
      <Testimonial />
      <Inquire />
      <Footer />
    </SiteRoot>
  );
}
