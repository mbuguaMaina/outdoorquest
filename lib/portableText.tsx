 
import { PortableText } from "next-sanity"
import { CodeBlock, ImageBlock, PullQuote, ShopProducts,Heading, Paragraph, LinkMark } from "."
 

export default function PortableTextRenderer({ value }:{value:any}) {
  const components = {
    types: {
      image: ImageBlock,
      pullQuote: PullQuote,
      shopProducts: ShopProducts,
      code: CodeBlock,
    },

    block: {
      h1: (props: any) => <Heading level={1} {...props} />,
      h2: (props: any) => <Heading level={2} {...props} />,
      h3: (props: any) => <Heading level={3} {...props} />,
      normal: Paragraph,
      blockquote: PullQuote,
    },

    marks: {
      link: LinkMark,
    },
  }

  return (
    <article className="max-w-180 mx-auto px-6 py-2">
      <PortableText value={value} components={components} />
    </article>
  )
}