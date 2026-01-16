import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Industries } from "@/components/sections/industries";
import { CtaStrip } from "@/components/sections/cta-strip";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore technical and maintenance services by F K Technical Services Co. in Dubai, including electrical, plumbing, AC, painting, gypsum, carpentry, and tiling works."
};

export default function ServicesPage() {
  return (
    <>
      <div className="container py-12">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
            Services
          </h1>
          <p className="mt-3 text-base leading-relaxed text-brand-text">
            Reliable maintenance solutions delivered by skilled technicians and professional workmanship.
          </p>
        </header>

        <div className="mt-8">
          <ServicesGrid variant="full" />
        </div>
      </div>

      <Industries />
      <CtaStrip />
    </>
  );
}
