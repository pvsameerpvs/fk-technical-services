import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { COMPANY, CONTACT } from "@/lib/constants";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-red font-bold">
                FK
              </div>
              <div>
                <div className="text-sm font-semibold">{COMPANY.name}</div>
                <div className="text-xs text-white/70">{COMPANY.tagline}</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Reliable technical & maintenance services for residential, commercial, and industrial properties in Dubai.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge className="bg-white/10 text-white hover:bg-white/15">Dubai</Badge>
              <Badge className="bg-white/10 text-white hover:bg-white/15">Maintenance</Badge>
              <Badge className="bg-white/10 text-white hover:bg-white/15">Technical Services</Badge>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <Separator className="my-3 bg-white/15" />
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    <span className="text-brand-red">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <Separator className="my-3 bg-white/15" />
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-red" aria-hidden="true" />
                <div>
                  <div>{CONTACT.addressLines[0]}</div>
                  <div>{CONTACT.addressLines[1]}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-brand-red" aria-hidden="true" />
                <div className="space-y-1">
                  {CONTACT.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block hover:text-white"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-brand-red" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/15" />

        <div className="flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brand-red" aria-hidden="true" />
            <span>Professional Technical & Maintenance Services in Dubai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
