"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { COMPANY, CONTACT } from "@/lib/constants";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {nav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "text-brand-black"
                : "text-brand-text hover:text-brand-black",
              "hover:bg-black/5"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div
            className="grid h-10 w-10 place-items-center rounded-xl bg-brand-red text-white shadow-sm"
            aria-hidden="true"
          >
            <span className="text-sm font-bold">FK</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-brand-black">{COMPANY.name}</div>
            <div className="text-xs text-brand-text">{COMPANY.tagline}</div>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <NavLinks />
          <Button asChild className="ml-2">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button variant="outline" asChild className="border-black/15">
            <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`} aria-label="Call now">
              <PhoneCall className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-black/15" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="text-brand-black">Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                <NavLinks onNavigate={() => {}} />
                <div className="mt-4 grid gap-2">
                  <Button asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button variant="outline" asChild className="border-black/15">
                    <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}>
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
