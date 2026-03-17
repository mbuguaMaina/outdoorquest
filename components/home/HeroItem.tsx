"use client"
import { getImageUrl } from '@/lib/sanity'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
 
 
function HeroItem({product}:{product:any}) {
 
  const router = useRouter()
  return (
      <div className="flex max-h-full  flex-col-reverse md:flex-row items-start gap-6 shrink-0   rounded-lg md:rounded-l-none w-full shadow   md:gap-12">

          {/* TEXT CONTENT */}
          <div className="space-y-6 hidden md:flex flex-col justify-between h-full ps-5 py-5 flex-1">
            <div className="space-y-6">
           
            <span className="inline-block rounded-full bg-orange-100 w-max px-4 py-1 text-sm font-medium text-orange-600">
              Featured Product
            </span>

            <h1 onClick={() => router.push(`/products/${product.slug}`)} className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              {product.title}
            </h1>

            <p className="text-base text-gray-600 line-clamp-2 max-w-xl">
              {product.description}
            </p>
 </div>

            <div className="flex flex-wrap justify-end gap-4 pt-2">
               <a 
                    href={`https://wa.me/+254758929927?text=${encodeURIComponent(
                      `Sell me ${product.title}`
                    )}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white font-bold">
                      Buy on WhatsApp
                    </Button>
                  </a>

              <Button size="lg" onClick={() => router.push(`/products/${product.slug}`)}  onFocus={() => router.push(`/products/${product.slug}`)} className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition">
                View Details
              </Button>
            </div>
          </div>

          {/* IMAGE */}
<div className="relative md:flex-1 w-full">
  <Image
    unoptimized
    priority={true}
    loading="eager"
    
    onClick={() => router.push(`/products/${product.slug}`)}
    onFocus={() => router.push(`/products/${product.slug}`)}
    width={1280}
    height={800}
    src={getImageUrl(product.coverimage)!}
              alt="Mahogany Door"
              className=" object-cover h-[35dvh] md:h-[55dvh] object-center w-full rounded-xl md:rounded-l-none shadow-xl"
            />

            <span className='md:hidden absolute bottom-1 right-2 bg-black/25 text-white p-1 rounded'>Tap for details</span>
  </div>
          
         

        </div>
  )
}

export default HeroItem