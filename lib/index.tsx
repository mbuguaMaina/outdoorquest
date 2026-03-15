/* eslint-disable @next/next/no-img-element */
import { JSX } from "react/jsx-dev-runtime"

export   function Paragraph({ children }: any) {
  return (
    <p className="mt-6 text-lg leading-relaxed text-foreground/90">
      {children}
    </p>
  )
}

export function Heading({ level = 2, children }: any) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const sizes: any = {
    1: "text-4xl md:text-5xl",
    2: "text-2xl md:text-3xl",
    3: "text-xl md:text-2xl",
    4: "text-lg md:text-xl",
  }

  return (
    <Tag
      className={`font-serif font-semibold tracking-tight mt-4 mb-3 ${sizes[level]}`}
      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
    >
      {children}
    </Tag>
  )
}

export  function ImageBlock({ value }: any) {
  return (
    <figure className="my-6">
      <img
        src={value.asset.url}
        alt={value.alt}
        className="w-full object-cover"
      />

      {value.caption && (
        <figcaption className="mt-3 text-xs tracking-wide text-muted-foreground">
          {value.caption}
        </figcaption>
      )}
    </figure>
  )
}

export   function PullQuote({ value }: any) {
  return (
    <blockquote className="my-12 py-8 border-y border-border">
      <p className="font-serif text-2xl md:text-3xl italic leading-snug">
        {value.quote}
      </p>

      {value.author && (
        <cite className="block mt-4 text-sm not-italic text-muted-foreground">
          — {value.author}
        </cite>
      )}
    </blockquote>
  )
}

export   function CodeBlock({ value }: any) {
  return (
    <pre className="my-10 overflow-x-auto rounded-lg bg-black p-5 text-sm text-white">
      <code>{value.code}</code>
    </pre>
  )
}
export function ShopProducts({ value }: any) {
  return (
    <section className="my-16">
      <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Shop the Story
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {value.products?.map((product: any) => (
          <div key={product._id} className="border bg-card">
      
            <img
            alt={product.title}
              src={product.image}
              className="aspect-4/5 object-cover w-full"
            />

            <div className="p-4">
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {product.price}
              </p>

              <button className="mt-3 w-full text-xs uppercase py-2 bg-primary text-primary-foreground">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export   function LinkMark({ children, value }: any) {
  return (
    <a
      href={value?.href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 decoration-muted-foreground hover:text-primary"
    >
      {children}
    </a>
  )
}