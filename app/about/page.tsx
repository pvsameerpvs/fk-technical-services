import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ABOUT_US, CORE_VALUES, MISSION, VISION } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";
import { WhyUs } from "@/components/sections/why-us";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about F K Technical Services Co., our mission, vision, and core values in delivering professional technical and maintenance services in Dubai."
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
            About Us
          </h1>
          <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-brand-text">
            {ABOUT_US}
          </p>
        </header>
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 lg:h-[500px]">
          <Image
            src="/fk-owner.png"
            alt="FK Technical Services Owner"
            fill
            className="object-contain object-bottom pt-8"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-brand-black">Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-brand-text">
            {MISSION}
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-brand-black">Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-brand-text">
            {VISION}
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-brand-black">Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-brand-text">
              {CORE_VALUES.map((v) => (
                <li key={v} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-red" aria-hidden="true" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-16">
        <WhyUs />
      </div>
    </div>
  );
}
