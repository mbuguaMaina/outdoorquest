"use client";

import { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

// Product Data
const allProducts = [
  { id: 1, name: "Kids Gaming Headset", category: "gaming", ageRange: "6+", emoji: "🎧", rating: 4.9, description: "Lightweight, volume-limited headset for kids" },
  { id: 2, name: "Bounceland Bounce House Castle", category: "outdoor", ageRange: "3+", emoji: "🏰", rating: 4.9, description: "Inflatable castle with blower for backyard fun" },
  { id: 3, name: "Junior Game Controller", category: "gaming", ageRange: "6+", emoji: "🕹️", rating: 5.0, description: "Ergonomic controller sized for small hands" },
  { id: 4, name: "Play Tent Teepee", category: "outdoor", ageRange: "3+", emoji: "⛺", rating: 4.8, description: "Indoor/outdoor teepee for imaginative play" },
  { id: 5, name: "RGB Kids Keyboard", category: "gaming", ageRange: "6+", emoji: "⌨️", rating: 4.7, description: "Quiet keys and fun lighting for kids" },
  { id: 6, name: "Foam Ball Pit Set", category: "outdoor", ageRange: "3+", emoji: "🎪", rating: 4.8, description: "Soft play pit with colorful balls" },
  { id: 7, name: "Kids Gaming Chair", category: "gaming", ageRange: "6+", emoji: "💺", rating: 4.6, description: "Supportive mini chair for gaming sessions" },
  { id: 8, name: "Pop-Up Play Tunnel", category: "outdoor", ageRange: "3+", emoji: "🌀", rating: 4.7, description: "Foldable tunnel for active fun" },
  { id: 9, name: "Kid-Safe Monitor", category: "gaming", ageRange: "6+", emoji: "🖥️", rating: 4.8, description: "Low blue-light display for safer viewing" },
  { id: 10, name: "Princess Playhouse", category: "outdoor", ageRange: "3+", emoji: "🏡", rating: 4.8, description: "Decorative playhouse for indoor and outdoor play" },
  { id: 11, name: "Console Controller (Kids)", category: "gaming", ageRange: "6+", emoji: "🎮", rating: 4.8, description: "Wireless controller with safety grip" },
  { id: 12, name: "Sleeping Bag (Kids)", category: "outdoor", ageRange: "3+", emoji: "🛌", rating: 4.7, description: "Cozy sleeping bag sized for kids" },
  { id: 13, name: "Streaming Mic (Kids)", category: "gaming", ageRange: "8+", emoji: "🎙️", rating: 4.6, description: "Kid-friendly mic for voice chat and streaming" },
  { id: 14, name: "Outdoor Play Mat", category: "outdoor", ageRange: "3+", emoji: "🧩", rating: 4.8, description: "Soft interlocking mats for safe play" },
  { id: 15, name: "VR Viewer (Kids)", category: "gaming", ageRange: "8+", emoji: "🕶️", rating: 4.7, description: "Simplified viewer for educational experiences" },
  { id: 16, name: "Toddler Trampoline", category: "outdoor", ageRange: "3+", emoji: "🤸", rating: 4.7, description: "Mini trampoline with safety bar" },
  { id: 17, name: "Gaming Desk (Kids)", category: "gaming", ageRange: "6+", emoji: "🔲", rating: 4.5, description: "Compact desk with cable management" },
  { id: 18, name: "LED Night Lantern", category: "outdoor", ageRange: "3+", emoji: "🏮", rating: 4.6, description: "Rechargeable lantern for bedtime forts" },
  { id: 19, name: "Capture Card (Kids)", category: "gaming", ageRange: "8+", emoji: "📹", rating: 4.5, description: "Simple capture for beginner streaming" },
  { id: 20, name: "Water Play Table", category: "outdoor", ageRange: "3+", emoji: "💧", rating: 4.6, description: "Outdoor table for splashing fun" },
  { id: 21, name: "Webcam 1080p (Kids)", category: "gaming", ageRange: "All Ages", emoji: "📷", rating: 4.5, description: "Automatic light adjustment for video calls" },
  { id: 22, name: "Explorer Binoculars (Kids)", category: "outdoor", ageRange: "5+", emoji: "🔭", rating: 4.7, description: "Durable binoculars for nature watching" },
  { id: 23, name: "Cooling Pad (Kids Laptops)", category: "gaming", ageRange: "All Ages", emoji: "❄️", rating: 4.4, description: "Quiet cooling for compact devices" },
  { id: 24, name: "Hammock (Kids)", category: "outdoor", ageRange: "3+", emoji: "🧶", rating: 4.8, description: "Cozy hammock for backyard naps" },
];

// Category Colors
const categoryColors: Record<string, { border: string; bg: string; text: string }> = {
  all: { border: "border-primary", bg: "bg-primary", text: "text-primary" },
  gaming: { border: "border-secondary", bg: "bg-secondary", text: "text-secondary" },
  outdoor: { border: "border-accent", bg: "bg-accent", text: "text-accent" },
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

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-linear-to-br from-secondary/20 via-background to-purple/20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-secondary/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🎮 Our Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-fredoka font-bold mb-4">
            Explore Our <span className="text-secondary">Products</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a curated collection of gaming gear and outdoor adventures that bring fun, excitement, and performance!
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
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-2 border-border focus:border-primary"
              />
            </div>

            {/* Category Tabs */}
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
              <TabsList className="bg-muted/50 p-1 rounded-full w-full md:w-auto overflow-x-auto justify-start">
                <TabsTrigger value="all" className="rounded-full px-6">All</TabsTrigger>
                <TabsTrigger value="gaming" className="rounded-full px-6">Gaming</TabsTrigger>
                <TabsTrigger value="outdoor" className="rounded-full px-6">Outdoor</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => {
                const colors = categoryColors[product.category] || categoryColors.all;
                return (
                  <div
                    key={product.id}
                    className={`group bg-card rounded-3xl overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colors.border}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Image Area */}
                    <div className={`aspect-square ${colors.bg}/10 flex items-center justify-center p-8 relative overflow-hidden`}>
                      <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl filter">
                        {product.emoji}
                      </div>
                      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-fredoka text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 text-orange text-sm font-bold bg-orange/10 px-2 py-0.5 rounded-full">
                          <Star className="h-3 w-3 fill-current" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4 h-10">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                        <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-md">
                          Age: {product.ageRange}
                        </span>
                        <Button size="sm" className={`rounded-full ${colors.bg} ${colors.text} bg-opacity-20 hover:bg-opacity-30 border-0`}>
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const Products = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
};

export default Products;
