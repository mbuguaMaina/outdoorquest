"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Sparkles, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import SocialIcons from "@/components/socialIcons";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-linear-to-br from-accent/20 via-background to-pink/20 relative overflow-hidden">
        <div className="absolute top-10 right-10 text-6xl animate-float">📬</div>
        <div className="absolute bottom-10 left-10 text-6xl animate-float" style={{ animationDelay: "1s" }}>💌</div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-accent/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            👋 Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-fredoka font-bold mb-4">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or services? We&apos;d love to hear from you! 
            Our friendly team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 shadow-xl border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-fredoka font-bold">Send us a Message</h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 animate-slide-up">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-10 w-10 text-accent animate-spin-slow" />
                  </div>
                  <h3 className="text-2xl font-fredoka font-bold text-accent mb-2">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="rounded-xl border-2 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="rounded-xl border-2 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-semibold">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="rounded-xl border-2 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more..."
                      rows={5}
                      className="rounded-xl border-2 focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-playful bg-primary text-primary-foreground py-6 text-lg font-bold rounded-xl"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary/10 rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                  <div className="bg-secondary p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-fredoka font-bold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">0758929927</p>
                </div>

                <div className="bg-destructive/10 rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                  <div className="bg-destructive p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-fredoka font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground"> OutDoorQuest@gmail.com</p>
                </div>

                <div className="bg-accent/10 rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                  <div className="bg-accent p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-fredoka font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">Digital Mall - Nairobi City, Kenya</p>
                </div>

                <div className="bg-purple/10 rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                  <div className="bg-purple p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-fredoka font-bold text-lg mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm">Mon-Fri: 8AM-6PM</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl p-8 h-64 flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <span className="text-6xl">🗺️</span>
                  <p className="font-fredoka font-bold mt-2">Find Us Here!</p>
                  <p className="text-sm text-muted-foreground">Digital Mall - Nairobi City, Kenya</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-linear-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-6">
                <h3 className="font-fredoka font-bold text-lg mb-4 text-center">
                  Follow Our Adventures! 🌟
                </h3>
               <SocialIcons   />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-muted/50 confetti-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-fredoka font-bold mb-4">
            Have More Questions? 🤔
          </h2>
          <p className="text-muted-foreground mb-6">
            Check out our frequently asked questions or give us a call!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* <Button className="btn-playful bg-secondary text-secondary-foreground px-6">
              View FAQ
            </Button> */}
            <Button variant="outline" className="btn-playful border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};



export default Contact;
