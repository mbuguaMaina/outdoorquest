"use client"
import { Button } from '@/components/ui/button'
import { getImageUrl } from '@/lib/sanity'
 
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
 

function ProductCard({product, index, colors}:{product:any, index:number, colors?:any}) {
  const router = useRouter()
  return (
       <div
                    key={product._id}
                    className={`group min-w-[45dvw] flex-1 md:min-w-[19dvw] bg-card rounded-md md:rounded-3xl cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colors?.border || "border-border"}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Image Area */}
                    <div className={`aspect-square ${colors?.bg || "bg-card"}/10 flex items-center justify-center relative overflow-hidden`}>
                     
                        <Image
                        unoptimized
                          src={getImageUrl(product.coverimage)!}
                          alt={product.title}
                          fill
                          onClick={()=>{}}
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                          <Button size="sm" className="text-white font-bold" onClick={()=>{router.push(`/products/${product.slug}`)}}>
                            View Details
                          </Button>
                        </div>
                   
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-fredoka text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                            <Link href={`/products/${product.slug}`}>{product.title}</Link>
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