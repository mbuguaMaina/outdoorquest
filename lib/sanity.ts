import { createClient } from "next-sanity";
import  { createImageUrlBuilder } from "@sanity/image-url";

// ============================================================
//  SANITY CLIENT
// ============================================================
export const client = createClient({
  projectId: "ho50zau1",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return source ? builder.image(source) : null;
}

// ============================================================
//  IMAGE HELPERS
// ============================================================
type ImageFit = "clip" | "crop" | "fill" | "fillmax" | "max" | "scale" | "min";

interface ImageUrlOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: ImageFit;
  dpr?: number;
  blur?: number;
 
}

/**
 * Build optimized Sanity image URL
 * Uses Sanity CDN transforms (NOT Next optimizer)
 */
export function getImageUrl(
  source: any,
  {
    width = 800,
    height,
    quality = 80,
    fit = "clip",
    dpr = 1,
    blur,
  
  }: ImageUrlOptions = {}
): string | null {
  if (!source) return null;
 

  try {
    let img = urlFor(source)
      ?.width(width)
      .quality(quality)
      .fit(fit)
      .dpr(dpr)
      .auto("format"); // WebP/AVIF auto

    if (height) img = img?.height(height);

    if (blur) img = img?.blur(blur);
 

    return img?.url() || null;
  } catch (err) {
    console.warn("Sanity image URL error:", err);
    return null;
  }
}


export function getSrcset(source: any, widths = [40, 80,409, 200, 600, 800, 1200]) {
  if (!source) return null;
  return widths.map((w) => `${getImageUrl(source,{ width:w})} ${w}w`).join(", ");
}

export function getSMImageUrl(source: any) {
  if (!source) return null;
  if (typeof source === "string") return source;
  return urlFor(source)?.width(1200).height(630).auto("format").url();
}

export function getBlurDataUrl(source: any) {
  if (!source) return null;
  if (typeof source === "string") return source;
  return urlFor(source)?.width(20).blur(50).auto("format").url();
}

// ============================================================
//  FETCH HELPERS
// ============================================================
async function safeFetch(query: string, params: any = {}) {
  try {
    return await client.fetch(query, params);
  } catch (err) {
    console.error("Sanity fetch error:", err);
    return null;
  }
}

// ============================================================
//  SIMPLE IN-MEMORY CACHE
// ============================================================
const cache: Record<string, { data: any; expires: number }> = {};
const CACHE_TTL = 60 * 1000; // 1 minute

async function cachedFetch(
  key: string,
  fetchFn: () => Promise<any>,
  ttl = CACHE_TTL
) {
  const now = Date.now();
  if (cache[key] && cache[key].expires > now) return cache[key].data;
  const data = await fetchFn();
  cache[key] = { data, expires: now + ttl };
  return data;
}

// ============================================================
//  PRODUCTS
// ============================================================
export async function getSanityAllProducts(options: any = {}) {
  // eslint-disable-next-line prefer-const
  let { search = "", limit = 12, page = 1, ...filters } = options;
  limit = Number(limit) || 12;
  page = Number(page) || 1;
  const start = (page - 1) * limit;
  const end = start + limit;

  let dynamicFilters = "";
  if (Object.keys(filters).length > 0) {
    const built = Object.entries(filters)
      .map(([key, value]) =>
        value === false
          ? `!(${key} == true)`
          : `${key} == ${JSON.stringify(value)}`
      )
      .join(" && ");
    dynamicFilters += ` && ${built}`;
  }

  if (search) {
    dynamicFilters += ` && (string::lower(name) match "${search.toLowerCase()}*")`;
  }

  const query = `
  {
    "products": *[_type == "product"${dynamicFilters}]
      | order(_createdAt desc) [${start}...${end}]{
        _id,
        title,
        "slug": slug.current,
        price,
        description,
        "coverimage":image.asset->url,
        gallery[]{ "url": asset->url },
        inStock,
        featured,
        "category": category->{
        title, _id},
        seo
      },
    "total": count(*[_type == "product"${dynamicFilters}])
  }
  `;

  const res = await safeFetch(query);
  if (!res) {
    return { products: [], total: 0, page, limit, totalPages: 0 };
  }

  return {
    products: res.products,
    total: res.total,
    page,
    limit,
    totalPages: Math.ceil(res.total / limit),
  };
}


export async function getSanitySingleProduct({
  slug,
  id,
}: {
  slug?: string;
  id?: string;
}) {
  if (!slug && !id) return null;
  const query = `
    *[_type == "product" && ${slug ? "slug.current == $slug" : "_id == $id"}][0]{
      _id, title, "slug": slug.current, price, description,
      "coverimage": image.asset->url,
      gallery[]{ "url": asset->url },
      "category": category->{ _id, title, "slug": slug.current},
      seo
    }
  `;
  return await safeFetch(query, slug ? { slug } : { id });
}

export async function getSanitySingleProductCached({
  slug,
  id,
}: {
  slug?: string;
  id?: string;
}) {
  const key = `singleProduct:${slug || id}`;
  return await cachedFetch(key, async () =>
    getSanitySingleProduct({ slug, id })
  );
}

// ============================================================
//  CATEGORIES
// ============================================================
export async function getSanityCategories(
  { page = 1, limit = 10 } = {}
) {
  const key = `categories:${page}:${limit}`;

  return await cachedFetch(key, async () => {
    page = Number(page) || 1;
    limit = Number(limit) || 10;

    const start = (page - 1) * limit;

    const query = `
    {
      "categories": *[
        _type == "category"
      ] {
          _id,
          title,
          "slug": slug.current,
          "imageUrl": image.asset->url,
          seo
        },
      "total": count(*[
        _type == "category" 
      ])
    }
    `;

  

    const res = await safeFetch(query);

    if (!res) {
      return {
        categories: [],
        total: 0,
        page,
        limit,
        totalPages: 0,
      };
    }

    return {
      categories: res.categories,
      total: res.total,
      page,
      limit,
      totalPages: Math.ceil(res.total / limit),
    };
  });
}


export async function getSanityCategory(id: string) {
  const query = `
    *[_type == "category" && _id == $id][0]{
      _id, title, "slug": slug.current, "imageUrl": image.asset->url,
      "subcategories": *[_type == "category" && parentCategory._ref == ^._id]{ _id, title, "slug": slug.current, "imageUrl": image.asset->url, "parentCategory": parentCategory->_id },
      "parentCategory": parentCategory->_id,
      seo
    }
  `;
  return await cachedFetch(`category:${id}`, async () =>
    safeFetch(query, { id })
  );
}

export async function getSanityCategoryProducts(
  categoryId: string,
  page = 1,
  limit = 12
) {
  const key = `categoryProducts:${categoryId}:${page}:${limit}`;
  return await cachedFetch(key, async () => {
    page = Number(page) || 1;
    limit = Number(limit) || 12;
    const start = (page - 1) * limit;
    const end = start + limit;

    const query = `
      {
        "products": *[_type == "product" && category._ref == $categoryId]
          [${start}...${end}]{
          _id, title, "slug": slug.current, price, description,
           
          "coverimage": image.asset->url,
          gallery[]{ "url": asset->url },
          "category": category->{ _id, title, "slug": slug.current},
          seo
        },
        "total": count(*[_type == "product" && category._ref == $categoryId])
      }
    `;
    const res = await safeFetch(query, { categoryId });
    if (!res) return { products: [], total: 0, page, limit, totalPages: 0 };
    return {
      products: res.products,
      total: res.total,
      page,
      limit,
      totalPages: Math.ceil(res.total / limit),
    };
  });
}

// ============================================================
//  RELATED PRODUCTS
// ============================================================
export async function getSanityRelatedProducts(
  categoryId: string,
  productId?: string,
  page = 1,
  limit = 8
) {
  const key = `relatedProducts:${categoryId}:${productId || "none"}:${page}:${limit}`;
  return await cachedFetch(key, async () => {
    const category = await getSanityCategory(categoryId);
    if (!category)
      return { products: [], total: 0, page, limit, totalPages: 0 };

    let products: any[] = [];
    if (category.subcategories?.length) {
      const ids = category.subcategories.map((c: any) => c._id);
      const results = await Promise.all(
        ids.map((id: any) => getSanityCategoryProducts(id, page, limit))
      );
      products = results.flatMap((r) => r.products);
    } else {
      const result = await getSanityCategoryProducts(categoryId, page, limit);
      products = result.products;
    }

    if (productId) products = products.filter((p) => p._id !== productId);
    return {
      products,
      total: products.length,
      page,
      limit,
      totalPages: Math.ceil(products.length / limit),
    };
  });
}

// ============================================================
//  BANNERS & SUBCATEGORIES
// ============================================================
export async function getSanitySiteColors() {
  return await cachedFetch("siteSettings", async () => {
    const query = `
      *[_type == "siteSettings"]{
        backgroundColor,
         textColor,
         minorcolor,
         minorbg
      }
    `;
    return (await safeFetch(query)) || [];
  });
}
export async function getSanityBanners() {
  return await cachedFetch("banner", async () => {
    const query = `
      *[_type == "banner"]{
        name,
        "link": product->slug.current,
        "mobile": imageMobile.asset->url,
        "desktop": imageDesktop.asset->url
      }
    `;
    return (await safeFetch(query)) || [];
  });
}


export async function getSanitySubcategories() {
  return await cachedFetch("subcategories", async () => {
    const query = `*[_type == "category" && defined(parentCategory)]{ _id, title, "slug": slug.current, "imageUrl": image.asset->url }`;
    return (await safeFetch(query)) || [];
  });
}
