import type { Metadata } from "next";
import Image from "next/image";
import { ProjectGallery } from "@/components/sections/project-gallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of maintenance and technical services projects by F K Technical Services Co. in Dubai. More projects will be added soon."
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <section className="relative overflow-hidden py-20 text-white sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/hero-2.jpeg"
            alt="Projects Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/70" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Our Projects
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover a selection of our completed works across Dubai, showcasing our commitment to quality and excellence.
          </p>
        </div>
      </section>
      
      <ProjectGallery />
    </div>
  );
}
