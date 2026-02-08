import CategoriesSection from "@/components/home/categoriesSection";
import HeroSection from "@/components/home/HeroSection";
import NewsletterSection from "@/components/home/newslettersection";
import PopularProductsSection from "@/components/home/popularproductssection";
import WhyChooseUsSection from "@/components/home/whychooseus";
import { getSanityCategories } from "@/lib/sanity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OutDoorQuest - Gaming & Outdoor Gear",
  description: "OutDoorQuest is your premier destination for gaming gear and outdoor products. We provide high-quality equipment for adventures both digital and physical.",
  keywords: ["OutDoorQuest", "gaming", "outdoor", "gear", "adventure"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "OutDoorQuest - Gaming & Outdoor Gear",
    description: "OutDoorQuest is your premier destination for gaming gear and outdoor products. We provide high-quality equipment for adventures both digital and physical.",
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
const Index = async () => {
  const categories = await getSanityCategories()
  console.log(categories)
  return (
    <>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <WhyChooseUsSection />
      <PopularProductsSection />
      <NewsletterSection />
    </>
  );
};

export default Index;
