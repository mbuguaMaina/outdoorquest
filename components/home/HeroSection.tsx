import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TentIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
 

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary/20 via-background to-secondary/20 py-6 md:py-24">
      {/* Decorative Elements */}
       <div className="absolute top-10 left-10 w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-float" /> 
       <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-destructive/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-20 right-1/3 w-12 h-12 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "0.5s" }} /> 

      {/* Stars decoration */}
      {[...Array(6)].map((_, i) => (
        <Star
          key={i}
          className="absolute text-primary/40 animate-pulse"
          style={{
            top: `${(i * 13.33 + 10)}%`,
            left: `${(i * 13.33 + 10)}%`,
            width: `${i * 13.33 + 10}px`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="hidden md:inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
              <span className="animate-bounce">🎮</span>
              <span className="font-semibold text-sm">Welcome to OutDoorQuest!</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-fredoka font-bold leading-tight">
              Gear Up for <span className="text-primary">Game</span>
              <br />
              & <span className="text-secondary">Outdoors!</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
             Discover a world of premium Gaming gear and Outdoor equipment, where every item fuels your passion, enhances your skills, and creates unforgettable experiences!
            </p>

            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <Button className="btn-playful bg-primary text-primary-foreground px-8 py-6 text-lg group">
                  Explore Gear
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="btn-playful px-8 py-6 text-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-6">
              {[
                { number: "500+", label: "Products" },
                { number: "10K+", label: "Happy Customers" },
                { number: "100%", label: "Quality" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-fredoka font-bold text-destructive">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Content - Product Display */}
          <div className="hidden md:flex flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-square rounded-full bg-linear-to-br from-primary/40 via-secondary/30 to-accent/40 p-8 animate-pulse-scale">
                <div className="w-full h-full rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                        <Image src={`/outdoor.jpg`} width={100} height={100} alt="Premium Gear" className="text-8xl animate-bounce"/>
                    <p className="font-fredoka text-xl font-bold text-foreground">
                      Premium Gear
                    </p>
                    <p className="text-sm text-muted-foreground">
                      For Every Adventure
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-destructive p-4 rounded-2xl shadow-lg animate-float">
                <span className="text-4xl"><TentIcon/></span>
              </div>
                  <div className="absolute bottom-10 -right-4 bg-accent p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                    <span className="text-4xl">🏰</span>
              </div>
              
            </div>
          </div>
           
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
