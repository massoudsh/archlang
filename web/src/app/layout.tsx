import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fa-arch.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "فا | معماری مسکونی لوکس — طراحی و مدیریت اجرا",
    template: "%s | فا",
  },
  description:
    "بپیچیده‌ترین مسکن‌های خصوصی در تهران را از ایده تا تحویل طراحی و مدیریت می‌کنیم. کنترل، دقت، اقتدار.",
  keywords: ["معماری مسکونی", "طراحی ویلا", "مدیریت پروژه", "معمار تهران", "معماری لوکس"],
  authors: [{ name: "فرهاد اسکندری" }],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "فا | معماری مسکونی",
    title: "فا | معماری مسکونی لوکس — طراحی و مدیریت اجرا",
    description:
      "بپیچیده‌ترین مسکن‌های خصوصی در تهران را از ایده تا تحویل طراحی و مدیریت می‌کنیم.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "فا معماری" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "فا | معماری مسکونی لوکس",
    description: "طراحی و مدیریت اجرا — یک دیدگاه واحد از ایده تا تحویل",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "دفتر معماری فا",
  description: "طراحی معماری مسکونی لوکس و مدیریت اجرا در تهران",
  url: siteUrl,
  telephone: "+98-912-123-4567",
  email: "info@fa-arch.ir",
  address: {
    "@type": "PostalAddress",
    addressLocality: "تهران",
    addressRegion: "الهیه",
    addressCountry: "IR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.7974,
    longitude: 51.4077,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link href="https://fonts.cdnfonts.com/css/dana" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-persian">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
