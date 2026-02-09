import { getSanitySingleProduct } from '@/lib/sanity';
import React from 'react'
import ProductSection from './ProductSection';
import FeaturesStrip from './FeaturesStrip';
import ProductDescription from './ProductDescription';

async function page({params}:{params:{productId:string}}) {
    const {productId} = await params;
    const product = await getSanitySingleProduct({slug:productId});
    if(!product){
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        )
    }
    console.log(product)
  return (
    <article>
       <ProductSection product={product} />
      <FeaturesStrip />
      <ProductDescription />               
    </article>
  )
}

export default page 