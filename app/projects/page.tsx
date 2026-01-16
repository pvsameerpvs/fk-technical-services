import type { Metadata } from "next";
import { ProjectGallery } from "@/components/sections/project-gallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of maintenance and technical services projects by F K Technical Services Co. in Dubai. More projects will be added soon."
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-brand-black py-16 text-white">
        <div className="container text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Discover a selection of our completed works across Dubai, showcasing our commitment to quality and excellence.
          </p>
        </div>
      </div>
      
      <ProjectGallery />
    </div>
  );
}
