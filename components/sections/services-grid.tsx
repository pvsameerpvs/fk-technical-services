import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { Check } from "lucide-react";

export function ServicesGrid({ variant }: { variant: "preview" | "full" }) {
  const items = variant === "preview" ? SERVICES.slice(0, 6) : SERVICES;

  return (
    <section className={variant === "preview" ? "bg-white" : ""}>
      <div className={variant === "preview" ? "container py-12" : ""}>
        {variant === "preview" ? (
          <header className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-black sm:text-3xl">
              Services
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-text">
              End-to-end technical and maintenance solutions for residential, commercial, and industrial properties.
            </p>
          </header>
        ) : null}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.title} className="group overflow-hidden rounded-2xl border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-red/5 hover:border-brand-red/20">
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-brand-black">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-brand-text">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {variant === "preview" ? (
          <div className="mt-8">
            <Button asChild variant="outline" className="border-black/15">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
