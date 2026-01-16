"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const PROJECTS = [
  { src: "/images/hero-1.png", title: "Electrical Maintenance", category: "Commercial" },
  { src: "/images/hero-2.png", title: "Luxury Villa Renovation", category: "Residential" },
  { src: "/images/hero-3.png", title: "Interior Painting", category: "Residential" },
  { src: "/images/about-team.png", title: "Office Fit-out", category: "Commercial" },
  { src: "/images/why-us-tools.png", title: "Equipment Servicing", category: "Industrial" },
  { src: "/images/industries-bg.png", title: "High-rise Maintenance", category: "Commercial" },
];

export function ProjectGallery() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <Card key={idx} className="group overflow-hidden rounded-2xl border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 relative aspect-[4/3]">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
