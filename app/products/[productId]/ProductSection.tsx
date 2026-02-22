"use client"
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/lib/sanity";

const colors = [
  { name: "Olive", value: "hsl(82 40% 45%)" },
  { name: "Stone", value: "hsl(30 15% 55%)" },
  { name: "Slate", value: "hsl(210 10% 40%)" },
];

const ProductSection = ({product}:{product:any}) => {
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl bg-secondary h-112.5">
        <Image
        unoptimized
        width={500}
        height={500}
          src={product.coverimage ? getImageUrl(product.coverimage)! :  '/tent-product.jpg'}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-center gap-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-primary">OutdoorQuest</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {product.title}
          </h1>
        </div>

        <p className="text-3xl font-semibold text-foreground">{Intl.NumberFormat("en-US",{style:"currency", currency:"KES"}).format(product.price)}</p>

        <p className="leading-relaxed line-clamp-2 text-muted-foreground">
          {product.description}
        </p>

        {/* Colors */}
        <div>
          <p className="mb-2 text-sm font-medium text-foreground">Color: {colors[selectedColor].name}</p>
          <div className="flex gap-3">
            {colors.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(i)}
                aria-label={c.name}
                className={`h-8 w-8 rounded-full border-2 transition-all ${
                  i === selectedColor ? "border-primary scale-110" : "border-border"
                }`}
                style={{ backgroundColor: c.value }}
              />
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium text-foreground">Quantity</p>
          <div className="flex items-center rounded-lg border">
            <Button variant="ghost" size="icon" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center text-sm font-medium">{qty}</span>
            <Button variant="ghost" size="icon" onClick={() => setQty(qty + 1)} aria-label="Increase">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
            
          <Link 
                    href={`https://wa.me/+254758929927?text=${encodeURIComponent(
                      `Sell me ${product.title}${product.coverimage ? `\nImage: ${getImageUrl(product.coverimage)}` : product.emoji} - Quantity: ${qty}`
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
    </section>
  );
};

export default ProductSection;
