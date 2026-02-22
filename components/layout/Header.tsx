"use client"
import { useState } from "react";
 
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SocialIcons from "../socialIcons";
 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center group-hover:animate-wiggle transition-transform">
                <Image unoptimized src={`/outdoor.jpg`} alt="OutDoorQuest Logo" width={48} height={48} className="object-cover text-primary-foreground" />
              </div>
        
            </div>
            <span className="text-2xl font-fredoka font-bold text-gradient">
              OutDoorQuest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-primary/10 hover:scale-105 ${
                  location === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
                       <SocialIcons size="sm"/>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    location === link.href                  
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/10"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.name}
                </Link>
              ))}
            <SocialIcons size="sm"/>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
