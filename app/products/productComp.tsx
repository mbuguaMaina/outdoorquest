"use client";

import { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

// Toy Data
const allToys = [
  { id: 1, name: "Rainbow Stacking Blocks", category: "educational", ageRange: "2-5", emoji: "🧱", rating: 4.9, description: "Colorful blocks for learning shapes and colors" },
  { id: 2, name: "Space Explorer Kit", category: "educational", ageRange: "6-12", emoji: "🚀", rating: 4.9, description: "Complete astronomy set for young scientists" },
  { id: 3, name: "Alphabet Train", category: "educational", ageRange: "2-4", emoji: "🚂", rating: 4.7, description: "Learn letters while building trains" },
  { id: 4, name: "Math Puzzle Set", category: "educational", ageRange: "5-8", emoji: "🔢", rating: 4.8, description: "Fun way to practice math skills" },
  { id: 5, name: "Science Lab Kit", category: "educational", ageRange: "7-12", emoji: "🔬", rating: 4.9, description: "50+ experiments for curious minds" },
  { id: 6, name: "World Map Puzzle", category: "educational", ageRange: "4-10", emoji: "🗺️", rating: 4.6, description: "Learn geography through play" },
  { id: 7, name: "Adventure Bicycle", category: "outdoor", ageRange: "5-10", emoji: "🚲", rating: 4.8, description: "Perfect first bike with training wheels" },
  { id: 8, name: "Soccer Champion Ball", category: "outdoor", ageRange: "3-12", emoji: "⚽", rating: 4.8, description: "Professional quality for young athletes" },
  { id: 9, name: "Kite Flying Set", category: "outdoor", ageRange: "4-10", emoji: "🪁", rating: 4.5, description: "Easy-to-fly colorful kites" },
  { id: 10, name: "Garden Explorer Kit", category: "outdoor", ageRange: "4-8", emoji: "🌻", rating: 4.7, description: "Plant your own garden adventure" },
  { id: 11, name: "Water Splash Toys", category: "outdoor", ageRange: "3-10", emoji: "💦", rating: 4.6, description: "Summer fun water activities" },
  { id: 12, name: "Camping Adventure Set", category: "outdoor", ageRange: "6-12", emoji: "⛺", rating: 4.8, description: "Everything for backyard camping" },
  { id: 13, name: "Cuddly Bear Friend", category: "plush", ageRange: "0-8", emoji: "🧸", rating: 5.0, description: "Super soft and huggable bear" },
  { id: 14, name: "Unicorn Dream Buddy", category: "plush", ageRange: "2-10", emoji: "🦄", rating: 4.9, description: "Magical unicorn with rainbow mane" },
  { id: 15, name: "Dinosaur Plushie", category: "plush", ageRange: "1-6", emoji: "🦕", rating: 4.7, description: "Friendly dino for prehistoric adventures" },
  { id: 16, name: "Bunny Snuggle Pal", category: "plush", ageRange: "0-5", emoji: "🐰", rating: 4.9, description: "Perfect bedtime companion" },
  { id: 17, name: "Penguin Family Set", category: "plush", ageRange: "2-8", emoji: "🐧", rating: 4.8, description: "Set of 3 adorable penguins" },
  { id: 18, name: "Elephant Cuddle Toy", category: "plush", ageRange: "0-6", emoji: "🐘", rating: 4.8, description: "Large and extra cuddly" },
  { id: 19, name: "Art Studio Set", category: "general", ageRange: "4-10", emoji: "🎨", rating: 4.7, description: "Complete art supplies for creativity" },
  { id: 20, name: "Building Bricks Mega Set", category: "general", ageRange: "4-12", emoji: "🏗️", rating: 4.9, description: "1000+ pieces for endless building" },
  { id: 21, name: "Musical Instruments Kit", category: "general", ageRange: "3-8", emoji: "🎵", rating: 4.6, description: "Start a mini band at home" },
  { id: 22, name: "Remote Control Car", category: "general", ageRange: "6-12", emoji: "🚗", rating: 4.8, description: "High-speed racing fun" },
  { id: 23, name: "Dollhouse Deluxe", category: "general", ageRange: "3-10", emoji: "🏠", rating: 4.7, description: "3-story furnished dollhouse" },
  { id: 24, name: "Magic Trick Set", category: "general", ageRange: "6-12", emoji: "🎩", rating: 4.5, description: "Learn amazing magic tricks" },
];

// Category Colors
const categoryColors: Record<string, { border: string; bg: string; text: string }> = {
  all: { border: "border-primary", bg: "bg-primary", text: "text-primary" },
  educational: { border: "border-secondary", bg: "bg-secondary", text: "text-secondary" },
  outdoor: { border: "border-accent", bg: "bg-accent", text: "text-accent" },
  plush: { border: "border-pink", bg: "bg-pink", text: "text-pink" },
  general: { border: "border-orange", bg: "bg-orange", text: "text-orange" },
};

// Inner Products Component
const ProductsContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  const filteredToys = allToys.filter((toy) => {
    const matchesSearch =
      toy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      toy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      toy.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || toy.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-linear-to-br from-secondary/20 via-background to-purple/20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-secondary/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🎁 Our Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-fredoka font-bold mb-4">
            Explore Our <span className="text-secondary">Toys</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover hundreds of carefully selected toys that bring joy, learning, and adventure to children of all ages!
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search toys..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-2 border-border focus:border-primary"
              />
            </div>

            {/* Category Tabs */}
            <Tabs
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full overflow-x-hidden rounded-full md:w-auto"
            >
              <TabsList className="grid grid-cols-5 gap-1 bg-muted p-1 w-max overflow-x-auto">
                {["all", "educational", "outdoor", "plush", "general"].map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className={`rounded-full data-[state=active]:bg-${categoryColors[cat].bg} data-[state=active]:text-${categoryColors[cat].text}`}
                  >
                    {cat === "educational"
                      ? "📚 Learn"
                      : cat === "outdoor"
                      ? "🌳 Outdoor"
                      : cat === "plush"
                      ? "🧸 Plush"
                      : cat === "general"
                      ? "🎯 General"
                      : "All"}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-6">
            Showing <span className="font-bold text-foreground">{filteredToys.length}</span> toys
          </p>

          {filteredToys.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-fredoka font-bold mb-2">No toys found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredToys.map((toy) => {
                const colors = categoryColors[toy.category];
                return (
                  <div
                    key={toy.id}
                    className={`card-toy border-2 ${colors.border} rounded-md overflow-hidden group`}
                  >
                    <div className={`${colors.bg}/20 p-8 flex items-center justify-center`}>
                      <span className="text-6xl group-hover:animate-bounce transition-transform">{toy.emoji}</span>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${colors.bg}/10 ${colors.text} capitalize`}
                        >
                          {toy.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-primary fill-primary" />
                          <span className="text-sm font-semibold">{toy.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-fredoka text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {toy.name}
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-2">{toy.description}</p>

                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <span>👶</span>Ages {toy.ageRange} years
                      </p>

                      <Button
                        asChild
                        className={`w-full mt-2 btn-playful ${colors.bg}/10 ${colors.text} hover:${colors.bg} hover:text-white`}
                      >
                        <a
                          href={`https://wa.me/+254758929927?text=Halo%20OutDoorQuest,do you still have this toy ${toy.name}?`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Buy on Whatsapp
                        </a>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// Suspense Wrapper
const Products = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-96">
          <div className="w-12 h-12 animate-spin border-4 border-primary border-t-transparent rounded-full" />
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
};

export default Products;
