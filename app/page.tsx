import { Hero } from "@/components/sections/hero";
import { TrustHighlights } from "@/components/sections/trust-highlights";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Industries } from "@/components/sections/industries";
import { WhyUs } from "@/components/sections/why-us";
import { CtaStrip } from "@/components/sections/cta-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <ServicesGrid variant="preview" />
      <Industries />
      <WhyUs />
      <CtaStrip />
    </>
  );
}
