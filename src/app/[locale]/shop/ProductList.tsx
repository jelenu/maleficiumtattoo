import Text from "@/components/ui/basics/Text";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useIntlayer } from "react-intlayer";

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
  images: { image_url: string }[];
  variants: {
    id: string;
    name: string;
    price: number;
    stock: number;
    sku: string;
  }[];
};



type ProductListProps = {
  products: Product[];
  locale?: string;
  lang: "es" | "en" | "de";
};

export default function ProductList({ products, locale, lang }: ProductListProps) {
    const t = useIntlayer("shop-page");
    
  const router = useRouter();


  if (products.length === 0) {
    return (
      <Text className="text-zinc-400 text-center">
        {t.noProducts[lang]}
      </Text>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.map((product) => (
        <li key={product.id} className="flex flex-col items-center">
          <div
            className="w-full max-w-xs flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
            onClick={() => router.push(`/${locale}/shop/${product.slug}`)}
            tabIndex={0}
            role="button"
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(`/${locale}/shop/${product.slug}`);
              }
            }}
          >
            <div className="relative w-full aspect-square overflow-hidden shadow">
              {product.image_url && (
                <Image
                  src={product.image_url}
                  alt={product.title || "Product image"}
                  fill
                  className="object-cover object-center"
                  sizes="256px"
                  unoptimized
                />
              )}
            </div>
            <Text variant="h3" className="mt-2">
              {product.title}
            </Text>
            {product.price !== undefined && (
              <Text>
                {t.price[lang]}: {product.price}€
              </Text>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
