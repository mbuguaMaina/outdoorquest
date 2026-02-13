"use client"

import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search } from 'lucide-react'
 
 

function FilterSection({categories, searchQuery,setSearchQuery, activeCategory, setActiveCategory}: {categories: any[], searchQuery: string, activeCategory: string, setSearchQuery: (query: string) => void, setActiveCategory: (category: string) => void}) {
  return (
          <section className="py-8 border-b border-border sticky top-8 bg-background/95 backdrop-blur-sm z-40">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-full border-2 border-border focus:border-primary"
                  />
                </div>
    
                {/* Category Tabs */}
                <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
                  <TabsList className="bg-muted/50 p-1 rounded-full w-full md:w-auto overflow-x-auto justify-start">
                    <TabsTrigger value="all" className="rounded-full px-6">All</TabsTrigger>
                  {
                    categories.map((category) => (
                      <TabsTrigger key={category.title} value={category.title} className="rounded-full px-6">
                        {category.title}
                      </TabsTrigger>
                    ))
                  }
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </section>
  )
}

export default FilterSection