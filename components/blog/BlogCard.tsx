 
 
 
import Link from "next/link";
import { BlogPost } from "./sampledata";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="grid md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-64 md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              {post.category}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground leading-tight">
              {post.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
    >
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
          {post.category}
        </span>
        <h3 className="mt-3 font-display text-xl font-bold text-foreground leading-snug">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{post.date}</span>
          <span className="font-semibold text-primary group-hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
