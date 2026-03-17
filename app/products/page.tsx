import { Metadata } from 'next'
import Products from './productComp'
import { getImageUrl, getSanityAllProducts, getSanityCategories } from '@/lib/sanity'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

 

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams
  const query = resolvedSearchParams.query

  const products = await getSanityAllProducts()
  const firstProduct = products.products?.[0]

  const ogImage = getImageUrl(firstProduct?.coverimage)  
  const ogImageAlt = firstProduct?.title ?? 'OutDoorQuest - Fun Gaming and Outdoor toys for Every Age'

  const title = query
    ? `Search Results for "${query}" - OutDoorQuest`
    : 'All Gaming and Outdoor toys - OutDoorQuest | Fun for Every Age'

  return {
    title,
    description:
      'Discover our magical collection of Gaming and Outdoor toys for kids of all ages. From educational Gaming and Outdoor toys and board games to action figures, dolls, and outdoor play sets — find the perfect toy at OutDoorQuest.',
    keywords: [
      'Gaming and Outdoor toys',
      'kids Gaming and Outdoor toys',
      'educational Gaming and Outdoor toys',
      'action figures',
      'dolls',
      'board games',
      'outdoor Gaming and Outdoor toys',
      'baby Gaming and Outdoor toys',
      'toy shop',
      'children gifts',
    ],
    openGraph: {
      title: query ? `Search Results for "${query}" - OutDoorQuest` : 'OutDoorQuest | Fun for Every Age',
      description:
        'Shop the best Gaming and Outdoor toys for children of all ages. Explore our wide range of educational, creative, and fun Gaming and Outdoor toys at OutDoorQuest.',
      url: 'https://www.outdoorquest.co.ke/products',
      siteName: 'OutDoorQuest',
      images: [
        {
          url: ogImage!,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: query ? `Search Results for "${query}" - OutDoorQuest` : 'OutDoorQuest | Fun for Every Age',
      description:
        'Explore our magical collection of Gaming and Outdoor toys for kids of all ages. Find the perfect toy at OutDoorQuest!',
      images: [ogImage!],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
    alternates: {
      canonical: 'https://www.outdoorquest.co.ke/products',
    },
  }
}

export default async function ProductsPage({ searchParams }: Props): Promise<any> {
  const resolvedSearchParams = await searchParams
  const query = resolvedSearchParams.query
  const [products, categories] = await Promise.all([getSanityAllProducts(), getSanityCategories()])

  return <Products products={products.products} categories={categories.categories} />
}