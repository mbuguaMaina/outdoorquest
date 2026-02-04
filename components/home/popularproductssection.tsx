
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const popularProducts = [
  {
    id: 1,
    name: "Kids Gaming Headset",
    category: "Kids Gaming",
    ageRange: "6+",
    emoji: "🎧",
    color: "border-secondary",
    bgGradient: "from-secondary/20 to-secondary/5",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Bounceland Bounce House Castle",
    category: "Inflatables",
    ageRange: "3+",
    emoji: "🏰",
    color: "border-primary",
    bgGradient: "from-primary/20 to-primary/5",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Junior Game Controller",
    category: "Kids Gaming",
    ageRange: "6+",
    emoji: "🕹️",
    color: "border-pink",
    bgGradient: "from-pink/20 to-pink/5",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Play Tent Teepee",
    category: "Play Tents",
    ageRange: "3+",
    emoji: "⛺",
    color: "border-accent",
    bgGradient: "from-accent/20 to-accent/5",
    rating: 4.8,
  },
  {
    id: 5,
    name: "RGB Kids Keyboard",
    category: "Kids Gaming",
    ageRange: "6+",
    emoji: "⌨️",
    color: "border-purple",
    bgGradient: "from-purple/20 to-purple/5",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Foam Ball Pit Set",
    category: "Play",
    ageRange: "3+",
    emoji: "🎪",
    color: "border-orange",
    bgGradient: "from-orange/20 to-orange/5",
    rating: 4.8,
  },
];

const PopularProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
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
          <Link href="/products">
            <Button variant="outline" className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product, index) => (
            <div
              key={product.id}
              className={`card-product border-2 ${product.color} overflow-hidden group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image Area */}
              <div className={`bg-linear-to-br ${product.bgGradient} p-8 flex items-center justify-center`}>
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg filter">
                  {product.emoji}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 bg-card">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-muted uppercase tracking-wider ${product.color.replace('border-', 'text-')}`}>
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-orange text-sm font-bold">
                    <span>★</span>
                    <span>{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-fredoka text-xl font-bold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground font-semibold">
                    Ages: {product.ageRange}
                  </span>
                  <Button size="sm" className="rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold">
                    View Details
                  </Button>
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
