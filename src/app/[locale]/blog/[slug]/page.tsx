"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/layout";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getLang } from "@/utils/i18n";
import Text from "@/components/ui/basics/Text";
import Link from "next/link";

import CustomMarkdown from "@/components/ui/markdown/CustomMarkdown";

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

export default function BlogPostPage() {
  const { locale, slug } = useParams<{ locale?: string; slug: string }>();
  const lang = getLang(locale) as LocaleCode;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

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
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
        if (active) setLoading(false);
        return;
      }

      if (active && data) {
        const p = data as RawPost;
        setPost({
          id: p.id,
          slug: p.slug,
          image_url: p.image_url,
          published_at: p.published_at,
          title: p[`title_${lang}` as keyof RawPost] as string,
          summary: p[`summary_${lang}` as keyof RawPost] as string,
          content: (p[`content_${lang}` as keyof RawPost] as string) || "",
        });
        setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [lang, slug]);

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 min-h-screen box-border">
      {/* Full-width hero with fixed 16:9 aspect */}
      <div className="min-h-screen mb-20">
        {!loading && post && post.image_url && (
          <div className="relative w-full max-w-6xl mx-auto aspect-[21/9] overflow-hidden">
            <Image
              src={post.image_url}
              alt={post.title || "cover"}
              fill
              className="object-cover object-center"
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/35" />
            {/* Back to blog link - top left */}
            <div className="absolute top-0 left-0 p-4 z-20">
              <Link
                href={`/${lang}/blog`}
                className="text-zinc-200 px-3 py-1 rounded hover:text-white transition no-underline"
              >
                ←{" "}
                {lang === "es"
                  ? "Volver al blog"
                  : lang === "de"
                  ? "Zurück zum Blog"
                  : "Back to blog"}
              </Link>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
              <Text variant="h1" align="center" className="mb-2">
                {post.title || "Sin título"}
              </Text>
              {post.summary && (
                <Text align="center" className="text-zinc-200">
                  {post.summary}
                </Text>
              )}
            </div>
          </div>
        )}

        <div className="relative flex justify-center">
          <div className="max-w-3xl w-full bg-zinc-950 shadow-xl p-10 -mt-25 z-30">
            {loading && <Text className="text-zinc-400">Cargando...</Text>}

            {!loading && !post && (
              <Text variant="h2" className="text-zinc-400">
                {lang === "es"
                  ? "Publicación no encontrada."
                  : lang === "de"
                  ? "Beitrag nicht gefunden."
                  : "Post not found."}
              </Text>
            )}

            {!loading && post && (
              <>
                <div className="text-zinc-200 mb-4 prose prose-invert max-w-none">
                  <CustomMarkdown content={post.content || ""} />
                </div>
                {post.published_at && (
                  <Text className="text-sm text-zinc-400">
                    {new Date(post.published_at).toLocaleDateString(lang)}
                  </Text>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
