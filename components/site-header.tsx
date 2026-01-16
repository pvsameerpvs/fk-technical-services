"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { COMPANY, CONTACT } from "@/lib/constants";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
] as const;

function NavLinks({ className, onNavigate }: { className?: string, onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {nav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-brand-red/10 text-brand-red"
                : "text-brand-text hover:bg-black/5 hover:text-brand-black",
                className?.includes("flex-col") ? "w-full text-base" : ""
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
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="relative flex items-center gap-2">
            <div className="relative h-14 w-40 overflow-hidden sm:h-16 sm:w-48">
              <Image
                src="/logo1.png"
                alt={COMPANY.name}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            {/* Fallback text hidden if logo fails to load? styling ensures layout. */}
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <NavLinks />
          <Button asChild className="ml-4 bg-brand-red hover:bg-brand-red/90 text-white border-none shadow-md shadow-brand-red/20">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button variant="outline" asChild className="border-black/10">
            <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`} aria-label="Call now">
              <PhoneCall className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-black/10 h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
               <div className="flex flex-col h-full">
                  <div className="border-b p-6">
                    <Link href="/" className="relative block h-12 w-40">
                      <Image
                        src="/logo2.png"
                        alt={COMPANY.name}
                        fill
                        className="object-contain object-left"
                      />
                    </Link>
                  </div>
                  
                  <div className="flex-1 overflow-auto py-6 px-4">
                     <div className="mb-2 px-2 text-xs font-semibold text-brand-text/50 uppercase tracking-wider">Navigation</div>
                     <NavLinks className="flex-col items-start gap-2" />
                  </div>

                  <div className="border-t p-6 bg-gray-50">
                     <Button asChild className="w-full bg-brand-red hover:bg-brand-red/90 text-white shadow-lg shadow-brand-red/20 mb-3" size="lg">
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full border-black/10 bg-white" size="lg">
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
