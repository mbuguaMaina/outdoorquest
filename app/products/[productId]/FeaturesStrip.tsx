import { Droplets, Feather, Users, Clock } from "lucide-react";

const features = [
  { icon: Droplets, label: "Waterproof", value: "3000mm" },
  { icon: Feather, label: "Weight", value: "3.2 kg" },
  { icon: Users, label: "Capacity", value: "4 Person" },
  { icon: Clock, label: "Setup", value: "< 5 min" },
];

const FeaturesStrip = () => (
  <section className="border-y bg-[hsl(210,40%,96.1%)]/50">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
      {features.map((f) => (
        <div key={f.label} className="flex flex-col items-center gap-2 text-center">
          <f.icon className="h-7 w-7 text-[hsl(152,45%,28%)]" />
          <p className="text-sm font-medium text-[hsl(215.4,16.3%,46.9%)]">{f.label}</p>
          <p className="text-lg font-semibold text-[hsl(222.2,84%,4.9%)]">{f.value}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesStrip;
