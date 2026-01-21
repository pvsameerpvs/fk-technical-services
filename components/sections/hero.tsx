"use client";

import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { COMPANY, CONTACT } from "@/lib/constants";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

export function Hero() {
  const images = [
    "/hero-section1.jpeg",
    "/hero-section2.jpeg",
    "/hero-section3.jpeg",
    "/hero-section4.jpeg",
    
  ];

  return (
    <section className="relative overflow-hidden h-[calc(100vh-64px)] min-h-[600px] flex items-center">
      {/* Background Slider */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
          align: "start",
        }}
        className="absolute inset-0 size-full"
      >
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="h-full relative pl-0">
               <div className="absolute inset-0 bg-black/50 z-10" />
               <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content */}
      <div className="container relative z-20 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge className="bg-white/10 text-white hover:bg-white/20 border-none backdrop-blur-sm">
              <ShieldCheck className="mr-1 h-4 w-4 text-brand-red" aria-hidden="true" />
              UAE Standards & Best Practices
            </Badge>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl drop-shadow-sm">
              {COMPANY.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-sm">
              {COMPANY.tagline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full bg-brand-red text-white hover:bg-brand-red/90 sm:w-auto border-none">
                <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}>
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20 sm:w-auto backdrop-blur-sm">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-5 text-sm text-white/80 font-medium">
              Fast scheduling • Reliable technicians • Quality workmanship
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-white/95 p-6 shadow-xl backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Maintenance", v: "Residential & Commercial" },
                  { k: "Electrical", v: "Installation & Repair" },
                  { k: "Plumbing", v: "Leak Detection & Fix" },
                  { k: "Air Conditioning", v: "Servicing & Replacement" }
                ].map((x) => (
                  <div key={x.k} className="rounded-2xl border bg-gray-50/50 p-4 hover:bg-gray-100 transition-colors">
                    <div className="text-sm font-semibold text-brand-black">{x.k}</div>
                    <div className="mt-1 text-sm text-brand-text">{x.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-brand-black p-5 text-white shadow-lg">
                <div className="text-sm font-semibold">Need urgent support?</div>
                <div className="mt-1 text-sm text-white/80">
                  Call our team for quick scheduling and professional service.
                </div>
                <div className="mt-4">
                  <Button asChild className="w-full bg-brand-red text-white hover:bg-brand-red/90">
                    <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}>
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Call {CONTACT.phones[0]}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
