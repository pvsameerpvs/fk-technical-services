"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

// Using existing images as placeholders to fill 15 slots
const GALLERY_IMAGES = [
  "/fk-services1.jpeg",
  "/fk-services2.jpeg",
  "/fk-services3.jpeg",
  "/fk-services4.jpeg",
  "/fk-services5.jpeg",
  "/fk-services6.jpeg",
  "/fk-services7.jpeg",
  "/fk-services8.jpeg",
  "/fk-services9.jpeg",
  "/fk-services10.jpeg",
  "/fk-services11.jpeg",
  "/fk-services12.jpeg",
  "/fk-services13.jpeg",
  "/fk-services14.jpeg",
  "/fk-services15.jpeg",
];

export function WorkShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
            Our Work Gallery
          </h2>
          <p className="mt-4 text-brand-text/80">
            A glimpse into the quality and precision of our recent projects across Dubai.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:scale-105 hover:shadow-md group">
                  <Image
                    src={src}
                    alt={`Project Gallery ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none [&>button]:bg-white/20 [&>button]:text-white [&>button]:backdrop-blur-sm [&>button]:hover:bg-white/40 [&>button]:top-4 [&>button]:right-4 [&>button]:h-10 [&>button]:w-10">
                 <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black/5">
                  <Image
                    src={src}
                    alt={`Project Full ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                 </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
