"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-playful opacity-90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <span className="text-5xl">🎁</span>
      </div>
      <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: "1s" }}>
        <span className="text-5xl">🎈</span>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: "0.5s" }}>
        <span className="text-4xl">⭐</span>
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float" style={{ animationDelay: "1.5s" }}>
        <span className="text-4xl">🌈</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
            <Gift className="h-10 w-10 text-white" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-4">
            Join the OutDoorQuest Family!
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl mx-auto">
            Subscribe to get exclusive updates on new gear, special offers, 
            and adventure tips for your next journey! 🚀
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 animate-slide-up">
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="h-6 w-6 animate-spin-slow" />
                <span className="text-xl font-bold">Hooray! You&apos;re in! 🎊</span>
              </div>
              <p className="mt-2 opacity-90">Check your inbox for a special welcome surprise!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 rounded-full text-foreground bg-white border-0 shadow-lg"
                  required
                />
              </div>
              <Button
                type="submit"
                className="btn-playful h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold text-base shadow-lg"
              >
                Subscribe! 🚀
              </Button>
            </form>
          )}

          {/* Trust Text */}
          <p className="mt-6 text-sm opacity-75">
            🔒 No spam, just fun! Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
