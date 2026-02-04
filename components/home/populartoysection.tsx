
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const popularToys = [
  {
    id: 1,
    name: "Rainbow Stacking Blocks",
    category: "Educational",
    ageRange: "2-5 years",
    emoji: "🧱",
    color: "border-secondary",
    bgGradient: "from-secondary/20 to-secondary/5",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Adventure Bicycle",
    category: "Outdoor",
    ageRange: "5-10 years",
    emoji: "🚲",
    color: "border-accent",
    bgGradient: "from-accent/20 to-accent/5",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Cuddly Bear Friend",
    category: "Plush",
    ageRange: "0-8 years",
    emoji: "🧸",
    color: "border-pink",
    bgGradient: "from-pink/20 to-pink/5",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Space Explorer Kit",
    category: "Educational",
    ageRange: "6-12 years",
    emoji: "🚀",
    color: "border-purple",
    bgGradient: "from-purple/20 to-purple/5",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Art Studio Set",
    category: "General",
    ageRange: "4-10 years",
    emoji: "🎨",
    color: "border-primary",
    bgGradient: "from-primary/20 to-primary/5",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Soccer Champion Ball",
    category: "Outdoor",
    ageRange: "3-12 years",
    emoji: "⚽",
    color: "border-orange",
    bgGradient: "from-orange/20 to-orange/5",
    rating: 4.8,
  },
];

const PopularToysSection = () => {
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
              Popular <span className="text-secondary">Toys</span>
            </h2>
          </div>
          <Link href="/products">
            <Button variant="outline" className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Toys
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Toys Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularToys.map((toy, index) => (
            <div
              key={toy.id}
              className={`card-toy border-2 ${toy.color} overflow-hidden group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Toy Image Area */}
              <div className={`bg-gradient-to-br ${toy.bgGradient} p-8 flex items-center justify-center`}>
                <span className="text-7xl group-hover:animate-bounce transition-transform">
                  {toy.emoji}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {toy.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span className="text-sm font-semibold">{toy.rating}</span>
                  </div>
                </div>
                
                {/* Toy Name */}
                <h3 className="font-fredoka text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {toy.name}
                </h3>
                
                {/* Age Range */}
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>👶</span>
                  Ages {toy.ageRange}
                </p>
                
                {/* View Button */}
                <Button className="w-full mt-2 btn-playful bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToysSection;
