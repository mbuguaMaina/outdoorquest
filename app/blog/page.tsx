import Blog from '@/components/blog/blog'
import { getAllBlogPosts } from '@/lib/sanity'
 

async function BlogPage() {
  const blogs = await getAllBlogPosts()

  if (!blogs || blogs.length === 0) {
    return <div className='h-dvh grid place-items-center'>No blog posts found.</div>
  }
  return (
    <Blog  blogs={blogs}/>
  )
}

export default BlogPage