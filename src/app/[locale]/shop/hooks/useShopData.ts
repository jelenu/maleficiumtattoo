import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type ProductTranslation = {
  title: string;
  description?: string;
};

type ProductImage = {
  image_url: string;
};

type ProductVariant = {
  id: string;
  name: string;
  price: number;
  stock: number;
  sku: string;
};

type ProductResponse = {
  id: string;
  slug: string;
  price?: number;
  image_url?: string;
  category_id?: string;
  created_at?: string;
  published_at?: string;
  product_translations: ProductTranslation[];
  product_images: ProductImage[];
  product_variants: ProductVariant[];
};

type Product = {
  id: string;
  slug: string;
  price?: number;
  image_url?: string;
  category_id?: string;
  created_at?: string;
  published_at?: string;
  title: string;
  description?: string;
  images: ProductImage[];
  variants: ProductVariant[];
};

type CategoryTranslation = {
  name: string;
};

type CategoryResponse = {
  id: string;
  slug: string;
  category_translations: CategoryTranslation[];
};

type Category = {
  id: string;
  slug: string;
  name?: string;
};

export function useShopData(
  lang: "es" | "en" | "de",
  slug?: string
) {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [catLoading, setCatLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id,slug,category_translations(name)")
        .eq("category_translations.lang", lang);

      if (!active) return;
      if (error) {
        setCatLoading(false);
        return;
      }
      const cats = ((data as CategoryResponse[]) ?? []).map((cat) => ({
        id: cat.id,
        slug: cat.slug,
        name: cat.category_translations?.[0]?.name || cat.slug,
      }));
      setCategories(cats);
      setCatLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [lang]);

  useEffect(() => {
    let active = true;
    (async () => {
      if (slug) {
        // Buscar solo el producto por slug
        const { data, error } = await supabase
          .from("products")
          .select(`
            id,
            slug,
            price,
            image_url,
            category_id,
            created_at,
            published_at,
            product_translations(title,description),
            product_images(image_url),
            product_variants(id,name,price,stock,sku)
          `)
          .eq("slug", slug)
          .eq("product_translations.lang", lang)
          .single();

        if (error) {
          setProduct(null);
          setLoading(false);
          return;
        }
        if (active && data) {
          setProduct({
            id: data.id,
            slug: data.slug,
            price: data.price,
            image_url: data.image_url,
            category_id: data.category_id,
            created_at: data.created_at,
            published_at: data.published_at,
            title: data.product_translations?.[0]?.title || data.slug,
            description: data.product_translations?.[0]?.description,
            images: data.product_images || [],
            variants: data.product_variants || [],
          });
          setLoading(false);
        }
      } else {
        // Buscar todos los productos
        const { data, error } = await supabase
          .from("products")
          .select(`
            id,
            slug,
            price,
            image_url,
            category_id,
            created_at,
            published_at,
            product_translations(title,description),
            product_images(image_url),
            product_variants(id,name,price,stock,sku)
          `)
          .eq("product_translations.lang", lang);

        if (error) {
          setLoading(false);
          return;
        }
        if (active) {
          const now = new Date();
          const filtered = ((data as ProductResponse[]) ?? []).filter(
            (product) =>
              product.published_at && new Date(product.published_at) <= now
          );
          const mapped: Product[] = filtered.map((p) => ({
            id: p.id,
            slug: p.slug,
            price: p.price,
            image_url: p.image_url,
            category_id: p.category_id,
            created_at: p.created_at,
            published_at: p.published_at,
            title: p.product_translations?.[0]?.title || p.slug,
            description: p.product_translations?.[0]?.description,
            images: p.product_images || [],
            variants: p.product_variants || [],
          }));
          setProducts(mapped);
          setLoading(false);
        }
      }
    })();
    return () => {
      active = false;
    };
  }, [lang, slug]);

  return {
    products,
    product,
    loading,
    categories,
    catLoading,
  };
}
