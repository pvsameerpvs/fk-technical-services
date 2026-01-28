import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ABOUT_US } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 lg:h-[500px]">
            <Image
              src="/fk-owner.png"
              alt="FK Technical Services Owner"
              fill
              className="object-contain object-bottom pt-6"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-4 shadow-xl border border-gray-100">
              <div className="text-2xl font-bold text-brand-red">15+</div>
              <div className="text-xs font-medium text-brand-black uppercase tracking-wider">Years of Excellence</div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
              About F K Technical Services
            </h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-brand-text/80">
              {ABOUT_US.slice(0, 300)}...
            </p>
            <div className="mt-8 flex gap-4">
               <Button asChild size="lg" className="bg-brand-red text-white hover:bg-brand-red/90 border-none">
                <Link href="/about">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
