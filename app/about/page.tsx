 
import { Heart, Target,  Sparkles, Shield } from "lucide-react";
import { Metadata } from "next";

const values = [
  {
    icon: Heart,
    title: "Love in Every Toy",
    description: "Each product is designed with love and care to bring maximum joy.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "All toys meet strict safety standards for worry-free play.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Sparkles,
    title: "Spark Imagination",
    description: "We create toys that fuel creativity and endless adventures.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Target,
    title: "Quality Focused",
    description: "Premium materials and construction that lasts for years.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const team = [
  { name: "Sarah Johnson", role: "Founder & CEO", emoji: "👩‍💼" },
  { name: "Mike Chen", role: "Head of Design", emoji: "👨‍🎨" },
  { name: "Emma Williams", role: "Product Manager", emoji: "👩‍💻" },
  { name: "Alex Rivera", role: "Safety Expert", emoji: "👨‍🔬" },
];

export const metadata: Metadata = {
  title: "OutDoorQuest - About",
  description: "Learn about OutDoorQuest, our mission, values, and the team that makes it all possible.",
  keywords: ["OutDoorQuest", "about", "mission", "values", "team"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "OutDoorQuest - About",
    description: "Learn about OutDoorQuest, our mission, values, and the team that makes it all possible.",
    images: [
      {
        url: "https://outdoorquest.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "OutDoorQuest - About",
      },
    ],
  },
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/20 via-background to-secondary/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float">🎪</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-float" style={{ animationDelay: "1s" }}>🎠</div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-primary/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-fredoka font-bold mb-6">
            About <span className="text-primary">OutDoorQuest</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2022, we&apos;ve been on a mission to bring joy to children around the country 
            through carefully curated, safe, and educational toys that spark imagination 
            and create lasting memories.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold">
                🌟 How It Started
              </span>
              <h2 className="text-3xl md:text-4xl font-fredoka font-bold">
                From a Small Dream to a <span className="text-destructive">Big Adventure</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
             OutDoorQuest started in a small garage with a simple mission: to bring joy to every child through toys that are not only fun but safe and educational. Our founder, Sarah, a mother of three with a deep love for children, wanted to create a world where every child could experience the happiness and wonder that the right toys can bring.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we&apos;ve grown into a beloved brand trusted by thousands of families 
                countrywide. But our core mission remains the same – to bring smiles to 
                children&apos;s faces while giving parents peace of mind.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-muted rounded-2xl p-4 text-center">
                  <div className="text-3xl font-fredoka font-bold text-primary">14+</div>
                  <div className="text-sm text-muted-foreground">Years of Joy</div>
                </div>
                <div className="bg-muted rounded-2xl p-4 text-center">
                  <div className="text-3xl font-fredoka font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Unique Toys</div>
                </div>
                <div className="bg-muted rounded-2xl p-4 text-center">
                  <div className="text-3xl font-fredoka font-bold text-accent">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Families</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-primary/30 via-secondary/20 to-accent/30 p-8">
                <div className="w-full h-full rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-9xl">🏠</div>
                    <p className="font-fredoka text-xl font-bold">Where Dreams Begin</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-destructive p-4 rounded-2xl shadow-lg animate-float">
                <span className="text-3xl">❤️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                <span className="text-3xl">🌈</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/50 confetti-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
              💎 What We Believe
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold">
              Our Core <span className="text-secondary">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 text-center shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${value.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="font-fredoka text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple/10 text-purple px-4 py-1 rounded-full text-sm font-semibold mb-4">
              👋 Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold">
              The <span className="text-primary">Dreamers</span> Behind OutDoorQuest
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl p-6 text-center shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary/30 to-secondary/30 flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle">
                  <span className="text-5xl">{member.emoji}</span>
                </div>
                <h3 className="font-fredoka text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-r from-secondary via-purple to-pink">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-fredoka font-bold mb-4">
            Ready to Explore Our Toys?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Join thousands of happy families and discover the perfect toy for your little one!
          </p>
          <a
            href="/products"
            className="inline-block btn-playful bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl"
          >
            Browse Our Collection 🎁
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
