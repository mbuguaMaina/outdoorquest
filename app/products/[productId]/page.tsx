import { Metadata } from 'next'
import { getImageUrl, getSanitySingleProduct } from '@/lib/sanity'
import ProductSection from './ProductSection'
import FeaturesStrip from './FeaturesStrip'
import ProductDescription from './ProductDescription'

type Props = {
  params: Promise<{ productId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params
  const product = await getSanitySingleProduct({ slug: productId })

  if (!product) {
    return {
      title: 'Product Not Found - OutDoorQuest',
      description: 'The item you are looking for could not be found.',
    }
  }

  const ogImage = getImageUrl(product.coverimage)
  const ogImageAlt = product.title

  return {
    title: `${product.title} - OutDoorQuest`,
    description:
      product.description ??
      `Shop ${product.title} at OutDoorQuest. Fun, safe, and high-quality Gaming and Outdoor toys for kids of all ages.`,
    keywords: [
      product.title,
      product.category ?? 'Gaming and Outdoor toys',
      'kids Gaming and Outdoor toys',
      'toy shop',
      'OutDoorQuest',
      'children gifts',
    ].filter(Boolean) as string[],
    openGraph: {
      title: `${product.title} - OutDoorQuest`,
      description:
        product.description ??
        `Discover ${product.title} at OutDoorQuest — fun and safe Gaming and Outdoor toys for every child.`,
      url: `https://www.outdoorquest.co.ke/products/${productId}`,
      siteName: 'OutDoorQuest',
      images: [{ url: ogImage!, width: 1200, height: 630, alt: ogImageAlt }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} - OutDoorQuest`,
      description:
        product.description ??
        `Discover ${product.title} at OutDoorQuest — fun and safe Gaming and Outdoor toys for every child.`,
      images: [ogImage!],
    },
    alternates: {
      canonical: `https://www.outdoorquest.co.ke/products/${productId}`,
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { productId } = await params
  const product = await getSanitySingleProduct({ slug: productId })

  if (!product) {
    return (
      <div className='text-center h-dvh'>
        <h1>Product not found</h1>
      </div>
    )
  }

  return (
    <article>
      <ProductSection product={product} />
      <FeaturesStrip />
      <ProductDescription />
    </article>
  )
}