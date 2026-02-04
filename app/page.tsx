import CategoriesSection from "@/components/home/categoriesSection";
import HeroSection from "@/components/home/HeroSection";
import NewsletterSection from "@/components/home/newslettersection";
import PopularToysSection from "@/components/home/populartoysection";
import WhyChooseUsSection from "@/components/home/whychooseus";
import { Metadata } from "next";
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
const Index = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <PopularToysSection />
      <NewsletterSection />
    </>
  );
};

export default Index;
