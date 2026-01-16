import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaStrip } from "@/components/sections/cta-strip";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact F K Technical Services Co. for professional technical and maintenance services in Dubai. Call, email, or request a quote."
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Header */}
      <div className="relative h-[400px] w-full overflow-hidden sm:h-[500px]">
        <Image
          src="/fk-services9.jpeg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
            Reach out for service scheduling, maintenance support, and quotes across Dubai.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50/50">
        <ContactSection />
      </div>
      
      <CtaStrip />
    </>
  );
}
