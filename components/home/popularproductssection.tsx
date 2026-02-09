
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl, getSanityAllProducts } from "@/lib/sanity";

 
 

const PopularProductsSection = async () => {
  const {products:popularProducts} = await getSanityAllProducts({featured:false});
  return (
    <section className="py-4 md:py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              🌟 Fan Favorites
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold">
              Popular <span className="text-secondary">Products</span>
            </h2>
          </div>
          
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product:any, index:number) => (
            <div
              key={product._id}
              className={`card-product border-2 ${product.color} overflow-hidden group rounded-lg`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image Area */}
              <div className={`bg-linear-to-br ${product.bgGradient} flex items-center justify-center relative overflow-hidden aspect-square`}>
               
                  <Image
                    src={getImageUrl(product.coverimage)!}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
               
              </div>

              {/* Product Info */}
              <div className="md:p-4 p-2 bg-card">
                {/* <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-muted uppercase tracking-wider ${product.color?.replace('border-', 'text-') || 'text-primary'}`}>
                    {product.category?.title}
                  </span>
                  <div className="flex items-center gap-1 text-orange text-sm font-bold">
                    <span>★</span>
                    <span>{product.rating || 4.5}</span>
                  </div>
                </div> */}
                <Link href={`/products/${product.slug}`} >
                <h3 className="font-fredoka text-base md:text-xl md:font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                </Link>
                
                <div className="flex items-center justify-end mt-4">
                  <Link 
                    href={`https://wa.me/+254758929927?text=${encodeURIComponent(
                      `Sell me ${product.title}${product.coverimage ? `\nImage: ${getImageUrl(product.coverimage)}` : product.emoji}`
                    )}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="rounded-full bg-green-500 hover:bg-green-600 text-white font-bold">
                      Buy on WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
