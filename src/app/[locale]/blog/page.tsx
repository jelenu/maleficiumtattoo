"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/layout";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getLang } from "@/utils/i18n";
import Text from "@/components/ui/basics/Text";
import Link from "next/link";

type LocaleCode = "en" | "de" | "es";

type Post = {
  id: string;
  slug: string;
  image_url?: string;
  published_at: string;
  title?: string;
  summary?: string;
  content?: string;
};

type RawPost = {
  id: string;
  slug: string;
  image_url?: string;
  published_at: string;
  title_en?: string;
  title_es?: string;
  title_de?: string;
  summary_en?: string;
  summary_es?: string;
  summary_de?: string;
  content_en?: string;
  content_es?: string;
  content_de?: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale) as LocaleCode;

  useEffect(() => {
    let active = true;

    (async () => {
      const { data, error } = await supabase
        .from("posts")
        .select(
          `
          id,
          slug,
          image_url,
          published_at,
          title_${lang},
          summary_${lang},
          content_${lang}
        `
        )
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
        return;
      }

      if (active) {
        // 👇 Tipamos correctamente el mapeo sin usar `any`
        const localizedPosts: Post[] =
          (data as RawPost[] | null)?.map((p) => ({
            id: p.id,
            slug: p.slug,
            image_url: p.image_url,
            published_at: p.published_at,
            title: p[`title_${lang}` as keyof RawPost] as string,
            summary: p[`summary_${lang}` as keyof RawPost] as string,
            content: p[`content_${lang}` as keyof RawPost] as string,
          })) ?? [];

        setPosts(localizedPosts);
        setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [lang]);

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full min-h-screen box-border">
      <div className="max-w-5xl mx-auto px-4 py-10 min-h-screen text-white">
        <Text variant="h1" className="mb-2">
          Blog
        </Text>
        <Text variant="h2" muted className="mb-6">
          Últimas publicaciones
        </Text>

        {loading && <Text className="text-zinc-400">Cargando...</Text>}

        {!loading && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="block bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition no-underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
                >
                  {post.image_url && (
                    <div className="relative w-full aspect-[16/9] mb-2 overflow-hidden rounded">
                      <Image
                        src={post.image_url}
                        alt={post.title || "cover"}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 50vw, 100vw"
                        unoptimized
                      />
                    </div>
                  )}
                  <Text variant="h3" className="font-semibold">
                    {post.title || "Sin título"}
                  </Text>
                  <Text className="text-zinc-400">
                    {post.summary || "Sin resumen disponible."}
                  </Text>
                </Link>
              </li>
            ))}
            {posts.length === 0 && (
              <li className="col-span-full">
                <Text className="text-zinc-400">
                  No hay publicaciones todavía.
                </Text>
              </li>
            )}
          </ul>
        )}
      </div>

      <Footer />
    </main>
  );
}
