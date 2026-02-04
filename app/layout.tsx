import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OutDoorQuest - Home",
  description: "OutDoorQuest is a brand that specializes in providing safe and educational toys for children. We believe that every child deserves access to toys that are not only fun but also safe and educational. Our mission is to bring smiles to children&apos;s faces while giving parents peace of mind.",
  keywords: ["OutDoorQuest", "toys", "children", "safety", "education"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "OutDoorQuest - Home",
    description: "OutDoorQuest is a brand that specializes in providing safe and educational toys for children. We believe that every child deserves access to toys that are not only fun but also safe and educational. Our mission is to bring smiles to children&apos;s faces while giving parents peace of mind.",
    images: [
      {
        url: "https://outdoorquest.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "OutDoorQuest - Home",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
