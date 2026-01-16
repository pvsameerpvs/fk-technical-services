import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-16 text-white sm:py-20">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/cta-pattern.png"
          alt="Pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="container relative z-10 flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to upgrade your property?
        </h2>
        <p className="mt-4 max-w-xl text-lg text-white/80">
          Get in touch with our expert team for a free consultation and quote.
          We are ready to handle all your technical and maintenance needs.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-brand-red text-white hover:bg-brand-red/90 border-none">
            <Link href="/contact">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
             asChild
             variant="outline"
             size="lg"
             className="border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
             <Link href="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
