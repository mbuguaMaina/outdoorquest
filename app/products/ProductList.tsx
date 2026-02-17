"use client"
import ProductCard from "./ProductCard";

const categoryColors: Record<string, { border: string; bg: string; text: string }> = {
  all: { border: "border-primary", bg: "bg-primary", text: "text-primary" },
  gaming: { border: "border-secondary", bg: "bg-secondary", text: "text-secondary" },
  outdoor: { border: "border-accent", bg: "bg-accent", text: "text-accent" },
  default: { border: "border-primary", bg: "bg-primary", text: "text-primary" },
};

function ProductList({products, activeCategory, searchQuery}: {products: any[], activeCategory: string, searchQuery: string}) {
    const filteredProducts = products.filter(product => 
        product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.title?.toLowerCase().includes(activeCategory.toLowerCase()) ||
         product.category?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activeCategory === "all"
    );
  return (
   
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className=" flex flex-wrap  w-full md:grid sm:grid-cols-2  md:grid-cols-4 gap-2">
              {filteredProducts.map((product, index) => {
                
                const colors = categoryColors[product.category.title] || categoryColors.default;
                return (
                <ProductCard key={product._id} colors={colors} index={index} product={product} />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter</p>
              {/* <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Clear Filters
              </Button> */}
            </div>
          )}
        </div>
      </section>
  )
}

export default ProductList