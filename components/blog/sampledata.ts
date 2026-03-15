export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "morning-rituals-for-glowing-skin",
    title: "Morning Rituals for Glowing Skin",
    excerpt: "Discover the simple daily habits that transform your complexion from dull to radiant — all before your first cup of coffee.",
    category: "Skincare",
    date: "March 10, 2026",
    author: "Amara Chen",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=500&fit=crop",
    content: `<p>There's something magical about the quiet hours of morning — before the world wakes up, before the inbox fills. It's the perfect time to nurture your skin with intention.</p>
<h2>Start With Water</h2>
<p>Before reaching for any product, drink a full glass of warm water with lemon. Hydration from within is the foundation of every great skincare routine. Your skin cells need water to function optimally, and after eight hours of sleep, your body is naturally dehydrated.</p>
<h2>The Double Cleanse</h2>
<p>Begin with an oil-based cleanser to dissolve overnight sebum, followed by a gentle water-based cleanser. This two-step process ensures a perfectly clean canvas without stripping your skin's natural moisture barrier.</p>
<h2>Vitamin C Serum</h2>
<p>Apply a few drops of vitamin C serum to damp skin. This powerhouse antioxidant brightens, protects against environmental damage, and stimulates collagen production. Think of it as your morning shield.</p>
<h2>Never Skip SPF</h2>
<p>Rain or shine, sunscreen is non-negotiable. Choose a mineral SPF 30+ that doubles as a primer for a seamless transition into makeup — or wear it beautifully on its own.</p>`,
  },
  {
    slug: "creating-a-cozy-minimalist-home",
    title: "Creating a Cozy Minimalist Home",
    excerpt: "Less clutter, more warmth. Learn how to blend minimalism with inviting textures for a home that feels like a hug.",
    category: "Home",
    date: "March 5, 2026",
    author: "Jules Martin",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=500&fit=crop",
    content: `<p>Minimalism doesn't have to mean cold, sterile spaces. The best minimalist homes are warm, layered, and deeply personal.</p>
<h2>Choose Natural Materials</h2>
<p>Linen throws, wooden bowls, ceramic vases — natural materials bring organic warmth that plastic and metal simply can't replicate. Each piece carries its own subtle texture and imperfection.</p>
<h2>The Power of Negative Space</h2>
<p>Let your walls breathe. A single piece of art on an otherwise empty wall creates far more impact than a gallery cluttered with frames. Give each object room to be appreciated.</p>
<h2>Warm Lighting Is Everything</h2>
<p>Swap cool-toned overhead lights for warm-toned table lamps and candles. Lighting sets the entire mood of a space — make it soft, golden, and inviting.</p>`,
  },
  {
    slug: "the-art-of-slow-living",
    title: "The Art of Slow Living",
    excerpt: "In a world obsessed with hustle, discover why slowing down might be the most productive thing you do.",
    category: "Lifestyle",
    date: "February 28, 2026",
    author: "Amara Chen",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    content: `<p>Slow living isn't about doing everything at a snail's pace. It's about being intentional with your time, energy, and attention.</p>
<h2>Morning Pages</h2>
<p>Start each day by writing three pages of stream-of-consciousness thoughts. No editing, no judgment. This practice clears mental clutter and surfaces ideas you didn't know you had.</p>
<h2>Single-Tasking</h2>
<p>Choose one task. Give it your full attention. Complete it. Move to the next. This simple shift eliminates the cognitive drain of constant context-switching.</p>
<h2>Digital Sunsets</h2>
<p>Set a time each evening when all screens go off. Read a physical book, take a walk, or simply sit with your thoughts. Your nervous system will thank you.</p>`,
  },
  {
    slug: "sustainable-fashion-essentials",
    title: "Sustainable Fashion Essentials",
    excerpt: "Build a capsule wardrobe that's kind to the planet without sacrificing an ounce of style.",
    category: "Fashion",
    date: "February 20, 2026",
    author: "Sofia Reyes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
    content: `<p>Sustainable fashion isn't a trend — it's a return to how clothing was always meant to be: well-made, well-loved, and long-lasting.</p>
<h2>The 30-Wear Test</h2>
<p>Before purchasing anything, ask yourself: "Will I wear this at least 30 times?" If the answer is no, put it back. This simple question eliminates impulse buys.</p>
<h2>Invest in Foundations</h2>
<p>A perfect white tee, well-fitted jeans, a timeless blazer, quality leather shoes — these pieces form the backbone of endless outfits. Spend more here, save everywhere else.</p>`,
  },
  {
    slug: "natural-ingredients-kitchen-beauty",
    title: "Beauty Recipes From Your Kitchen",
    excerpt: "Your pantry holds more beauty secrets than you think. Try these simple, effective DIY treatments tonight.",
    category: "Skincare",
    date: "February 15, 2026",
    author: "Jules Martin",
    image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=800&h=500&fit=crop",
    content: `<p>Long before the beauty industry existed, people used what nature provided. Many of those ingredients are sitting in your kitchen right now.</p>
<h2>Honey & Oat Face Mask</h2>
<p>Mix two tablespoons of raw honey with one tablespoon of finely ground oats. Apply to clean skin, leave for 15 minutes, then rinse with warm water. Honey is naturally antibacterial; oats soothe and gently exfoliate.</p>
<h2>Coffee Body Scrub</h2>
<p>Combine used coffee grounds with coconut oil and a pinch of cinnamon. Massage into skin in circular motions before rinsing. The caffeine boosts circulation while the oil deeply moisturizes.</p>`,
  },
  {
    slug: "mindful-spaces-work-from-home",
    title: "Designing Mindful Work-From-Home Spaces",
    excerpt: "Transform your home office into a sanctuary of focus and creativity with these intentional design choices.",
    category: "Home",
    date: "February 8, 2026",
    author: "Sofia Reyes",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop",
    content: `<p>Your environment shapes your thoughts. A cluttered desk leads to a cluttered mind. Here's how to design a workspace that inspires clarity.</p>
<h2>Face Natural Light</h2>
<p>Position your desk near a window. Natural light reduces eye strain, improves mood, and helps regulate your circadian rhythm. If a window isn't possible, invest in a quality daylight lamp.</p>
<h2>Plants as Colleagues</h2>
<p>Add two or three low-maintenance plants to your workspace. Studies show that greenery reduces stress, improves air quality, and can boost productivity by up to 15%.</p>`,
  },
];

export const relatedProducts: Product[] = [
  {
    id: "1",
    name: "Botanical Face Oil",
    price: 48,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Linen Throw Blanket",
    price: 89,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Ceramic Pour-Over Set",
    price: 62,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Organic Cotton Tote",
    price: 34,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop",
  },
];
