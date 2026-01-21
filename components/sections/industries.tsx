"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { INDUSTRIES } from "@/lib/constants";

export function Industries() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src="/industries-bg.jpeg"
          alt="Industries"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/90" />
      </div>

      <div className="container relative z-10">
        <header className="text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Trusted by diverse sectors across Dubai for maintaining operational excellence and safety.
          </p>
        </header>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
