import { Button } from '@/components/ui/button'
import { getImageUrl } from '@/lib/sanity'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function ProductCard({product, index, colors}:{product:any, index:number, colors:any}) {
  return (
       <div
                    key={product._id}
                    className={`group bg-card rounded-3xl cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colors.border}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Image Area */}
                    <div className={`aspect-square ${colors.bg}/10 flex items-center justify-center relative overflow-hidden`}>
                     
                        <Image
                          src={getImageUrl(product.coverimage)!}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                   
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-fredoka text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                        {/* <div className="flex items-center gap-1 text-orange text-sm font-bold bg-orange/10 px-2 py-0.5 rounded-full">
                          <Star className="h-3 w-3 fill-current" />
                          <span>{product.rating || 4.5}</span>
                        </div> */}
                      </div>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4 h-10">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-end mt-auto pt-4 border-t border-border/50">
                       <a 
                    href={`https://wa.me/+254758929927?text=${encodeURIComponent(
                      `Sell me ${product.title}${getImageUrl(product.coverimage) ? `\nImage: ${product.coverimage}` : product.emoji}`
                    )}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="rounded-full bg-green-500 hover:bg-green-600 text-white font-bold">
                      Buy on WhatsApp
                    </Button>
                  </a>
                      </div>
                    </div>
                  </div>
  )
}

export default ProductCard