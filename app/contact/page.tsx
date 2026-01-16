import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact F K Technical Services Co. for professional technical and maintenance services in Dubai. Call, email, or request a quote."
};

export default function ContactPage() {
  return <ContactSection />;
}
