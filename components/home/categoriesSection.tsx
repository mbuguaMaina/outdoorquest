
import {   getSanityCategories } from "@/lib/sanity";
import CategoryCard from "./CategoryCards";

const CategoriesSection = async () => {
  const categories = await getSanityCategories()
  return (
    <section className="py-2 md:py-24 bg-muted/50 confetti-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center md:mb-8 mb-4">
          <span className="inline-block bg-destructive/10 text-destructive px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🎪 Our Categories
          </span>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-4">
            Explore Our <span className="text-primary">Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto md:text-lg">
          Whether it’s high-performance gaming gear or rugged outdoor equipment, find the perfect tools to fuel your passion!
          </p>
        </div>

        {/* Categories Grid */}
        <div className=" grid grid-cols-2 md:grid-cols-4 w-full justify-center gap-1 md:gap-6 flex-wrap">
          {categories?.categories?.map((category:any) => (
          <CategoryCard cat={category} key={category._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
