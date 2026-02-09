"use client";

import {   useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";

// Inner Products Component
const ProductsContent = ({allProducts, categories}: {allProducts: any[], categories: any[]}) => {

const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.title?.toLowerCase().includes(activeCategory.toLowerCase()) ||
         product.category?.title?.toLowerCase().includes(searchQuery.toLowerCase()) 
    const matchesCategory = activeCategory === "all" || product.category?.title?.toLowerCase() === activeCategory.toLowerCase();
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
<FilterSection categories={categories} activeCategory={activeCategory} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setActiveCategory={setActiveCategory} />
    
<ProductList activeCategory={activeCategory} products={filteredProducts} searchQuery={searchQuery} />
    
    </>
  );
};

const Products = ({products, categories}:{products:any, categories:any}) => {
  return (
 
      <ProductsContent allProducts={products} categories={categories} />
   
  );
};

export default Products;
