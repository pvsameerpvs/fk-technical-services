import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { COMPANY, CONTACT } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`
  },
  description: COMPANY.tagline,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    title: COMPANY.name,
    description: COMPANY.tagline,
    siteName: COMPANY.name,
    locale: "en_US"
  },
  icons: {
    icon: "/favicon.ico"
  },
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Technical services Dubai",
    "Maintenance services Dubai",
    "Electrical works",
    "Plumbing services",
    "AC maintenance",
    "Painting works",
    "Gypsum ceiling",
    "Carpentry",
    "Tiling flooring",
    "Deira Dubai"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-dvh antialiased">
        <SiteHeader />
        <main className="min-h-[calc(100dvh-64px)]">{children}</main>
        <SiteFooter />
        <Toaster richColors closeButton />
        {/* Basic JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: COMPANY.name,
              description: COMPANY.tagline,
              email: CONTACT.email,
              telephone: CONTACT.phones[0],
              address: {
                "@type": "PostalAddress",
                streetAddress: CONTACT.addressLines[0],
                addressLocality: "Dubai",
                addressCountry: "AE"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
