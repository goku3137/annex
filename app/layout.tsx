import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Annex Training Institute | Professional & Vocational Training in Abu Dhabi",
    template: "%s | Annex Training Institute",
  },
  description:
    "Annex Training Institute offers professional and vocational training programs in Abu Dhabi, UAE. Courses in Medical Coding, IT, Engineering, Languages, Business, and more.",
  keywords: [
    "training institute Abu Dhabi",
    "professional courses UAE",
    "medical coding course",
    "IELTS preparation",
    "AutoCAD training",
    "vocational training Abu Dhabi",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://annexinstitute.com",
    siteName: "Annex Training Institute",
    title: "Annex Training Institute | Professional Training in Abu Dhabi",
    description:
      "Build skills, earn certifications, and advance your career with professional training programs at Annex Training Institute, Abu Dhabi.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-navy-900 text-slate-100 antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
