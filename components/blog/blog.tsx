 
 
 
import BlogCard from "./BlogCard";
 
import { blogPosts } from "./sampledata";

const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-background">
   
      <main className="container mx-auto px-4 py-12">
        <div className=" mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Blog
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            Stories, tips, and inspiration for intentional living.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-16">
          <BlogCard post={featured} featured />
        </section>

        {/* Blog Grid */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post:any, i:number) => (
            <div key={post.slug} style={{ animationDelay: `${i * 100}ms` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Blog;