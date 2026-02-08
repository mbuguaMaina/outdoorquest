
import { Gamepad2, Tent,  Castle } from "lucide-react";
import Link from "next/link";

const categoriesStatic = [
  {
    id: "gaming",
    name: "Gaming",
    description: "Fun & safe controls",
    icon: Gamepad2,
    color: "bg-secondary",
    emoji: "🎮",
    borderColor: "border-secondary",
    
  },
  {
    id: "outdoor",
    name: "Inflatable Bouncers",
    description: "Jump & play!",
    icon: Castle,
    color: "bg-primary",
    emoji: "🏰",
    borderColor: "border-primary",
 

  },
  {
    id: "outdoor",
    name: "Play Tents",
    description: "Indoor/outdoor forts",
    icon: Tent,
    color: "bg-accent",
    emoji: "⛺",
    borderColor: "border-accent",
   

  },
 
];

const CategoriesSection = ({categories}: {categories: any}) => {
  return (
    <section className="py-16 md:py-24 bg-muted/50 confetti-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-destructive/10 text-destructive px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🎪 Discover
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-4">
            Explore Our <span className="text-primary">Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Whether it’s high-performance gaming gear or rugged outdoor equipment, find the perfect tools to fuel your passion!
          </p>
        </div>

        {/* Categories Grid */}
        <div className=" flex w-full justify-center gap-6 flex-wrap">
          {categories?.categories?.map((category:any, index:number) => (
            <Link
              key={category.id}
              href={`/products?query=${category.id}`}
              className="group w-11/12 rounded-lg  md:w-72"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`card-product border-2 ${category.borderColor} h-full`}>
                <div className="flex flex-col items-center text-center p-6 space-y-4">
                  {/* Icon Circle */}
                  <div className={`${category.color} w-20 h-20 rounded-full flex items-center justify-center group-hover:animate-wiggle transition-transform shadow-lg`}>
                    <span className="text-4xl"><category.icon/></span>
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="font-fredoka text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                  
                  {/* Explore Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <span className="group-hover:animate-bounce">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
