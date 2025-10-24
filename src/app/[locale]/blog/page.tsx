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

type PostTranslation = {
  id: string;
  post_id: string;
  lang: string;
  title?: string;
  summary?: string;
  content?: string;
};

type JoinedPost = Post & {
  post_translations: PostTranslation[];
};

const t = {
  latest: {
    es: "Últimas publicaciones",
    en: "Latest posts",
    de: "Neueste Beiträge",
  },
  loading: {
    es: "Cargando...",
    en: "Loading...",
    de: "Wird geladen...",
  },
  noTitle: {
    es: "Sin título",
    en: "No title",
    de: "Kein Titel",
  },
  noSummary: {
    es: "Sin resumen disponible.",
    en: "No summary available.",
    de: "Keine Zusammenfassung verfügbar.",
  },
  noPosts: {
    es: "No hay publicaciones todavía.",
    en: "No posts yet.",
    de: "Noch keine Beiträge.",
  },
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
        .select(`
        id,
        slug,
        image_url,
        published_at,
        post_translations (
          id,
          lang,
          title,
          summary,
          content
        )
      `)
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
        return;
      }

      if (active) {
        const localizedPosts: Post[] =
          (data as JoinedPost[] | null)?.map((p) => {
            const translation = p.post_translations.find(
              (tr) => tr.lang === lang
            );
            return {
              id: p.id,
              slug: p.slug,
              image_url: p.image_url,
              published_at: p.published_at,
              title: translation?.title,
              summary: translation?.summary,
              content: translation?.content,
            };
          }) ?? [];

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
      <div className="max-w-5xl mx-auto px-5 md:px-10 py-10 min-h-screen text-white">
        <Text variant="h1" align="center" className="mb-2">
          Blog
        </Text>
        <Text variant="h2" muted align="center" className="mb-6">
          {t.latest[lang]}
        </Text>

        {loading && <Text className="text-zinc-400">{t.loading[lang]}</Text>}

        {!loading && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">
            {posts.map((post) => (
              <li key={post.id} className="flex justify-center items-center">
                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="group block relative rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer aspect-[3/4] h-120 max-w-full"
                >
                  {post.image_url && (
                    <Image
                      src={post.image_url}
                      alt={post.title || "cover"}
                      fill
                      className="absolute inset-0 object-cover object-center z-0 transition-all duration-500"
                      sizes="192px"
                      unoptimized
                    />
                  )}
                  <div className="absolute inset-0 z-10 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                  <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-2">
                    <Text variant="h3" className="font-semibold mb-2" align="center">
                      {post.title || t.noTitle[lang]}
                    </Text>
                    <Text className="text-zinc-300 text-sm line-clamp-5 w-full px-2" align="center">
                      {post.summary || t.noSummary[lang]}
                    </Text>
                  </div>
                </Link>
              </li>
            ))}
            {posts.length === 0 && (
              <li className="col-span-full">
                <Text className="text-zinc-400">
                  {t.noPosts[lang]}
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
