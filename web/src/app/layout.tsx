import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "فا | معماری مسکونی لوکس — طراحی و مدیریت اجرا",
  description:
    "زبان معماری",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/dana"
          rel="stylesheet"
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
