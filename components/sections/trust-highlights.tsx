import { Card, CardContent } from "@/components/ui/card";
import { TRUST_HIGHLIGHTS } from "@/lib/constants";
import { Clock3, Users, BadgeCheck, HardHat } from "lucide-react";

const icons = [Clock3, Users, BadgeCheck, HardHat] as const;

export function TrustHighlights() {
  return (
    <section className="border-y bg-white">
      <div className="container py-10">
        <h2 className="text-base font-semibold text-brand-black">Trusted service standards</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_HIGHLIGHTS.map((item, idx) => {
            const Icon = icons[idx] ?? BadgeCheck;
            return (
              <Card key={item.title} className="rounded-2xl">
                <CardContent className="flex gap-3 p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-red/10">
                    <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-black">{item.title}</div>
                    <p className="mt-1 text-sm text-brand-text">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
