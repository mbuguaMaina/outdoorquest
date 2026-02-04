import { Gamepad, Castle, Baby, Tent, Truck, Smile } from "lucide-react";

const features = [
  {
    icon: Gamepad,
    title: "Kids Gaming Gear",
    description: "Controllers, headsets, and accessories designed for safe, comfortable play.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Castle,
    title: "Inflatable Fun",
    description: "Bounce houses and play castles perfect for parties and backyard adventures.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Baby,
    title: "Kid-Safe Materials",
    description: "Products tested for safety and comfort for children of all ages.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Tent,
    title: "Play Tents & Forts",
    description: "Indoor and outdoor tents to spark imagination and playful exploration.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Quick and secure delivery to get you equipped as soon as possible!",
    color: "text-orange",
    bgColor: "bg-orange/10",
  },
  {
    icon: Smile,
    title: "Satisfaction Guaranteed",
    description: "If you're not satisfied with your gear, we'll make it right. That's our promise!",
    color: "text-purple",
    bgColor: "bg-purple/10",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            ⭐ Why OutDoorQuest?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-4">
            Why Enthusiasts <span className="text-destructive">Love</span> Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We&apos;re not just about gear – we&apos;re about fueling passions
            and creating lasting memories on every adventure!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`${feature.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-fredoka text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
