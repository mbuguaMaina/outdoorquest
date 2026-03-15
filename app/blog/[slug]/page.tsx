
/* eslint-disable @next/next/no-img-element */

import PortableTextRenderer from "@/lib/portableText";
import Link from "next/link";
 

 
 
const post = {
  title: "The Quiet Craft of Building Things That Last",

  slug: {
    current: "the-quiet-craft-of-building-things-that-last"
  },

  excerpt:
    "Why thoughtful craftsmanship still matters in a world of disposable products and fast software.",

  publishedAt: "2026-03-15T09:00:00Z",

  mainImage: {
    asset: {
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000"
    },
    alt: "Woodworker shaping timber in workshop"
  },

  author: {
    name: "Alex Chen",
    bio: "Product designer and engineer writing about craftsmanship, software, and thoughtful design.",
    image: {
      asset: {
        url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160"
      }
    }
  },

  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Craft is not merely the act of making something. It is the discipline of caring about every detail long after the novelty has worn off."
        }
      ]
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Whether you are shaping wood, writing software, or designing a door that will greet someone every day for the next thirty years, the principle is the same: build with intention."
        }
      ]
    },

    {
      _type: "pullQuote",
      quote:
        "Quality is never an accident. It is always the result of intelligent effort.",
      author: "John Ruskin"
    },

    {
      _type: "block",
      style: "h2",
      children: [
        {
          _type: "span",
          text: "The Beauty of Materials"
        }
      ]
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Natural materials age. But they do not simply deteriorate — they develop character. A mahogany door slowly deepens in tone, absorbing sunlight and the passing of years."
        }
      ]
    },

    {
      _type: "image",
      asset: {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400"
      },
      alt: "Wooden door with natural sunlight",
      caption: "Solid wood doors develop richer tones over time."
    },

    {
      _type: "block",
      style: "h2",
      children: [
        {
          _type: "span",
          text: "Tools Shape the Outcome"
        }
      ]
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "The right tools amplify human skill. In woodworking, a perfectly sharpened plane reveals the grain of timber in ribbons."
        }
      ]
    },

    {
      _type: "gallery",
      images: [
        {
          asset: {
            url: "https://images.unsplash.com/photo-1582582494700-2a0b8cbd3c88?w=900"
          },
          caption: "Hand tools in a traditional workshop"
        },
        {
          asset: {
            url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900"
          },
          caption: "Carefully crafted wooden surfaces"
        }
      ]
    },

    {
      _type: "block",
      style: "h2",
      children: [
        {
          _type: "span",
          text: "Software Craft Matters Too"
        }
      ]
    },

    {
      _type: "code",
      language: "javascript",
      code: `function buildProduct(userNeeds) {
  return userNeeds
    .map(problem => solve(problem))
    .filter(solution => solution.isElegant)
}`
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "In software, craftsmanship means clarity. Code that another engineer can read five years later without confusion."
        }
      ]
    },

    {
      _type: "shopProducts",
      products: [
        {
          _id: "door1",
          name: "6 Panel Mahogany Door",
          price: "KSh 18,500",
          image:
            "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"
        },
        {
          _id: "door2",
          name: "Solid Hardwood Entrance Door",
          price: "KSh 24,000",
          image:
            "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800"
        }
      ]
    },

    {
      _type: "ctaBanner",
      title: "Discover Timeless Doors",
      text: "Explore our collection of handcrafted wooden doors designed to last decades.",
      buttonText: "Browse Collection",
      buttonLink: "/doors"
    },

    {
      _type: "newsletter",
      title: "Get Craftsmanship Insights",
      description:
        "Join our newsletter for weekly articles about woodworking, architecture, and thoughtful design."
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "In the end, craftsmanship is a philosophy. It is the belief that the things we build should respect the time and trust of the people who use them."
        }
      ]
    }
  ]
}

async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
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
          <img
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