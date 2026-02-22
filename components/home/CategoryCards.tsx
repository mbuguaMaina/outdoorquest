import { getImageUrl } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({cat}: {cat: any}) => {
  return (
       <Link
            key={cat.title}
            href={`/products?query=${cat._id}`}
            className="group relative block aspect-square md:aspect-3/4 overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
          >
            {/* Background image */}
            <Image
              unoptimized
              width={500}
              height={500}
              src={getImageUrl(cat.imageUrl, {width:500, height:500})!}
              alt={cat.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text content */}
            <div className="absolute  bottom-0 left-0 right-0 p-4 md:p-5">
              <h3 className="text-white text-xs text-shadow text-shadow-accent-foreground   md:text-lg font-bold leading-tight mb-2">
                {cat.title}
              </h3>
              <span className="flex items-center gap-1 text-sm font-semibold text-white/90 group-hover:text-amber-600 transition-colors">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
  );
};

export default CategoryCard;