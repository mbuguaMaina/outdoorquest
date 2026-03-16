
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl, getSanityAllProducts } from "@/lib/sanity";
import ProductCard from "@/app/products/ProductCard";

 
 

const PopularProductsSection = async ( ) => {
 const {products:popularProducts} = await getSanityAllProducts({featured:false});
  return (
    <section className="py-4 md:py-8 bg-muted">
      <div className="container mx-auto px-2">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-12 gap-4">
          <div>
           
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-fredoka font-bold">
              Sellers <span className="text-secondary">Choice</span>
            </h2>
          </div>
          
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2  md:grid-cols-4 gap-1 md:gap-2">
          {popularProducts?.slice(0,6)?.map((product:any, index:number) => (
          <ProductCard key={product._id}   index={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
