import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { ToastProvider } from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: "MK Electra | Software, Embedded, Mechanical & 3D Printing Solutions",
  description:
    "MK Electra provides software development, embedded systems, mechanical engineering, 3D printing, industrial automation, AI/ML and custom engineering solutions. Build on Trust. Powered by Quality.",
  keywords: [
    "MK Electra",
    "software development",
    "embedded systems",
    "IoT",
    "mechanical engineering",
    "3D printing service",
    "wholesale 3D printing",
    "custom 3D printing",
    "industrial automation",
    "PLC programming",
    "computer vision AI",
    "product development",
    "engineering solutions",
  ],
  authors: [{ name: "MK Electra" }],
  robots: "index, follow",
  openGraph: {
    title: "MK Electra | Software, Embedded, Mechanical & 3D Printing Solutions",
    description:
      "MK Electra provides integrated engineering and technology solutions across Software, Embedded & IoT, Mechanical Engineering, 3D Printing, and Industrial Automation.",
    siteName: "MK Electra",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MK Electra",
    alternateName: "MK Electra Engineering & Technology Solutions",
    description:
      "Multidisciplinary engineering solutions across software, embedded IoT, mechanical design, 3D printing, and automation.",
    url: "https://mkelectra.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8220660081",
        contactType: "technical support",
        availableLanguage: ["English", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9790630883",
        contactType: "sales & quotations",
        availableLanguage: ["English", "Tamil"],
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-navy-950 text-steel-100 antialiased selection:bg-brand-500 selection:text-white">
        <ToastProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </ToastProvider>
      </body>
    </html>
  );
}
