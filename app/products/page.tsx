
import { Metadata } from 'next'
import Products from './productComp'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { searchParams }: Props
): Promise<Metadata> {
  const resolvedSearchParams = await searchParams
  const query = resolvedSearchParams.query
  
  const title = query 
    ? `Search Results for "${query}" - OutDoorQuest`
    : 'All Products - OutDoorQuest Gaming & Outdoor Gear'

  return {
    title,
    description: 'Explore our collection of high-performance gaming gear and premium outdoor equipment.',
  }
}

export default function ProductsPage() {
  return (
    <Products />    
  )
}
