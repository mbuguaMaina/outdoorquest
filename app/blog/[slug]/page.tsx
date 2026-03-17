import PortableTextRenderer from "@/lib/portableText";
import { getSingleBlogPost } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
 
 
 

async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getSingleBlogPost(slug);
    if(!post) {
        return <div className="text-center py-20">Post not found</div>
    }
    
  return (
   <section className="pb-7 px-4 prose-base">
    <header className="max-w-7xl w-full mx-auto py-4 md:pt-24 md:pb-14">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          ← Back to Articles
        </Link>
        <h1 className="font-serif text-3xl pt-4  md:text-6xl lg:text-7xl font-semibold leading-[1.08] ">
        {post.title}
        </h1>
        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
       
         <span>{post.excerpt}</span>
        </div>
      </header>

      {/* ─── Featured Image ─── */}
      <div className="max-w-7xl mx-auto  ">
        <div className="relative overflow-hidden" style={{ aspectRatio: "21/9" }}>
          <Image
         width={300}
         height={200}
          priority={true}
          loading="eager"
          unoptimized
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt}
            className="w-full h-full object-cover aspect-video object-center backdrop-grayscale-50 rounded hover:grayscale-0 transition-all duration-700 ease-out"
          />
        </div>
      </div>
 
    <PortableTextRenderer  value={post.body}/>
 
    
   </section>
  )
}

export default SingleBlogPage