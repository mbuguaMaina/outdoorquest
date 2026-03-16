"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
 
import whatsapp from "../../public/whatsapp.png"
function HeroItem({product}:{product:any}) {
 
  const router = useRouter()
  return (
      <div className="flex max-h-full  flex-col-reverse md:flex-row items-start gap-6 shrink-0 w-full rounded-lg shadow   md:gap-12">

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
              <button className="rounded-md flex gap-1.5 bg-green-600 px-6 items-center font-semibold text-white hover:bg-green-700 transition">
               <Image alt='whatapp logo' className='object-cover object-center '  width={20} height={20} src={whatsapp} /> Buy Now 
              </button>

              <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition">
                View Details
              </button>
            </div>
          </div>

          {/* IMAGE */}
<div className="relative md:flex-1 w-full">
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <Image
    unoptimized
    priority={true}
    loading="eager"
    
    onClick={() => router.push(`/products/${product.slug}`)}
    width={1280}
    height={800}
    src={product.coverimage}
              alt="Mahogany Door"
              className=" object-cover h-[35dvh] md:h-[55dvh] object-center w-full rounded-xl shadow-xl"
            />
  </div>
          
         

        </div>
  )
}

export default HeroItem