import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WHY_US } from "@/lib/constants";
import { Shield, BadgeCheck, Timer, Handshake, Wrench, Wallet } from "lucide-react";

const icons = [Wrench, BadgeCheck, Wallet, Timer, Handshake, Shield] as const;

export function WhyUs() {
  return (
    <section className="bg-white">
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-6">
            <header className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-black sm:text-3xl">
                Why Choose Us
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-text">
                Practical service delivery focused on safety, quality, and timely completion across Dubai.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </header>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <Image
                src="/why-us-tools.jpeg"
                alt="High Quality Tools"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {WHY_US.map((item, idx) => {
              const Icon = icons[idx] ?? BadgeCheck;
              return (
                <Card key={item} className="rounded-2xl">
                  <CardContent className="flex gap-3 p-5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-red/10">
                      <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
                    </div>
                    <div className="text-sm font-medium text-brand-black">{item}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
