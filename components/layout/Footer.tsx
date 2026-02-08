
import { Facebook, Instagram, Twitter, Youtube, Heart, Sparkles, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Wave Divider */}
      <div className="relative h-16 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          className="absolute bottom-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--foreground))"
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center group-hover:animate-wiggle">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-fredoka font-bold text-primary">
                OutDoorQuest
              </span>
            </Link>
            <p className="text-background/80 text-sm leading-relaxed">
              Where adventure comes alive! We bring excitement to enthusiasts worldwide with our 
              carefully curated collection of high-performance gaming gear and outdoor equipment.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, color: "bg-secondary" },
                { icon: Instagram, color: "bg-pink" },
                { icon: Twitter, color: "bg-secondary" },
                { icon: Youtube, color: "bg-destructive" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${social.color} p-2 rounded-full hover:scale-110 transition-transform`}
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-fredoka text-lg font-bold text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Products", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                    className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-fredoka text-lg font-bold text-secondary mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              {["Gaming Gear", "Outdoor Equipment", "Accessories", "Best Sellers"].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/products?query=${cat.toLowerCase().split(" ")[0]}`}    
                    className="text-background/80 hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-fredoka text-lg font-bold text-accent mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/80">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm">Digital Mall - Nairobi City, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-background/80">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm">0758929927</span>
              </li>
              <li className="flex items-center gap-3 text-background/80">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm">OutDoorQuest@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} OutDoorQuest. All rights reserved. 
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive animate-pulse" />  by <a href="https://ggmtechnologies.co.ke">GGM TECHNOLOGIES</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
