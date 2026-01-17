import type { Metadata } from "next";
import Image from "next/image";
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
      {/* Hero Header */}
      <div className="relative h-[400px] w-full overflow-hidden sm:h-[500px]">
        <Image
          src="/fk-service-maintenance.png"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
            Reliable maintenance solutions delivered by skilled technicians and professional workmanship.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <ServicesGrid variant="full" />
      </div>

      <Industries />
      <CtaStrip />
    </>
  );
}
