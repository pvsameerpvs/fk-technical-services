import { Hero } from "@/components/sections/hero";
import { TrustHighlights } from "@/components/sections/trust-highlights";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Industries } from "@/components/sections/industries";
import { WhyUs } from "@/components/sections/why-us";
import { WorkShowcase } from "@/components/sections/work-showcase";
import { CtaStrip } from "@/components/sections/cta-strip";
import { AboutSection } from "@/components/sections/about-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <AboutSection />
      <ServicesGrid variant="preview" />
      <Industries />
      <WhyUs />
      <WorkShowcase />
      <CtaStrip />
    </>
  );
}
