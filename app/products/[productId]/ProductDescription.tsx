const specs = [
  ["Dimensions", "240 × 210 × 130 cm"],
  ["Packed Size", "58 × 18 × 18 cm"],
  ["Material", "210T Ripstop Polyester"],
  ["Frame", "Aluminum alloy poles"],
  ["Floor", "210D Oxford, waterproof"],
  ["Seasons", "3-season"],
  ["Warranty", "2 years"],
];

const ProductDescription = () => (
  <section className="mx-auto max-w-6xl px-4 py-16">
    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-2xl font-bold text-foreground">About This Tent</h2>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            The Alpine Pro 4-Person Camping Tent is built for adventurers who demand reliability
            without the bulk. Its lightweight aluminum frame and ripstop polyester fly keep you
            dry through Kenya&apos;s unpredictable weather, while the spacious interior comfortably
            sleeps four.
          </p>
          <p>
            Two large mesh doors provide excellent ventilation, and the integrated vestibule
            gives you extra storage space for boots and gear. Whether you&apos;re camping at Hell&apos;s
            Gate or trekking Mt. Longonot, this tent is your home away from home.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold text-foreground">Specifications</h2>
        <dl className="divide-y">
          {specs.map(([label, value]) => (
            <div key={label} className="flex justify-between py-3">
              <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
              <dd className="text-sm font-semibold text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default ProductDescription;
