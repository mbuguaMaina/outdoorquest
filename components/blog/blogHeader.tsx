import Link from "next/link";

const BlogHeader = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-2xl font-bold text-foreground">
          The Edit
        </Link>
        <nav className="flex items-center gap-6 text-sm font-body">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </Link>
          <Link href="/blog" className="text-foreground font-semibold">
            Journal
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;
