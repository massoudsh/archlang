import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-persian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Archlang | معماری مسکونی لوکس — طراحی و مدیریت اجرا",
  description:
    "ساختمان‌های مسکونی اختصاصی با طراحی و مدیریت اجرای دقیق از مفهوم تا تحویل.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="min-h-screen flex flex-col font-persian">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
