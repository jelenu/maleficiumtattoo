'use client';
import Head from 'next/head';
import { galleryImages } from '@/data/gallery';
import { Text } from '@/components/ui/basics';
import Gallery from '@/components/ui/gallery/Gallery';
import { useState, useMemo } from 'react';
import { Footer } from '@/components/layout';
import { useParams } from 'next/navigation';
import { getLang, tr } from '@/utils/i18n';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);

  const meta = {
    title: tr(lang, {
      en: 'Gallery – Maleficium Tattoo Studio',
      de: 'Galerie – Maleficium Tattoo Studio',
      es: 'Galería – Maleficium Tattoo Studio',
    }),
    description: tr(lang, {
      en: 'Explore our blackwork and realism tattoos crafted by our artists.',
      de: 'Entdecke unsere Blackwork- und Realismus-Tattoos unserer Künstler.',
      es: 'Explora nuestros tatuajes blackwork y realismo creados por nuestros artistas.',
    }),
    url: tr(lang, {
      en: `https://maleficiumtattoo.com/en/gallery`,
      de: `https://maleficiumtattoo.com/de/gallery`,
      es: `https://maleficiumtattoo.com/es/gallery`,
    }),
    image: 'https://maleficiumtattoo.com/images/mf.png',
  };

  const t = {
    title: tr(lang, { en: 'Our Gallery', de: 'Unsere Galerie', es: 'Nuestra Galería' }),
    filters: tr(lang, { en: 'Filters', de: 'Filter', es: 'Filtros' }),
    styles: tr(lang, { en: 'Styles', de: 'Stile', es: 'Estilos' }),
    artists: tr(lang, { en: 'Artists', de: 'Künstler', es: 'Artistas' }),
    allStyles: tr(lang, { en: 'All Styles', de: 'Alle Stile', es: 'Todos los estilos' }),
    blackwork: tr(lang, { en: 'Blackwork', de: 'Blackwork', es: 'Blackwork' }),
    realism: tr(lang, { en: 'Realism', de: 'Realismus', es: 'Realismo' }),
    allArtists: tr(lang, { en: 'All Artists', de: 'Alle Künstler', es: 'Todos los artistas' }),
  };

  const [selectedStyle, setSelectedStyle] = useState<'all' | 'blackwork' | 'realism'>('all');
  const [selectedArtist, setSelectedArtist] = useState<'all' | 'Alexis' | 'Manu'>('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredImages = useMemo(
    () =>
      galleryImages.filter(
        (img) =>
          (selectedStyle === 'all' || img.style === selectedStyle) &&
          (selectedArtist === 'all' || img.artist === selectedArtist)
      ),
    [selectedStyle, selectedArtist]
  );

  const styleOptions: Array<{ key: 'all' | 'blackwork' | 'realism'; label: string }> = [
    { key: 'all', label: t.allStyles },
    { key: 'blackwork', label: t.blackwork },
    { key: 'realism', label: t.realism },
  ];

  const artistOptions: Array<{ key: 'all' | 'Alexis' | 'Manu'; label: string }> = [
    { key: 'all', label: t.allArtists },
    { key: 'Alexis', label: 'Alexis' },
    { key: 'Manu', label: 'Manu' },
  ];

  const baseBtn =
    'px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors border';
  const activeBtn = 'bg-zinc-200 text-zinc-900 border-zinc-300';
  const inactiveBtn =
    'bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:bg-zinc-700/70';

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full box-border">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-30">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Text variant="h1" align="center" className="mb-6">
            {t.title}
          </Text>
        </motion.div>

        {/* Toggle filtros móvil */}
        <motion.div
          className="md:hidden mb-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <button
            onClick={() => setMobileFiltersOpen((v) => !v)}
            aria-expanded={mobileFiltersOpen}
            className="px-4 py-2 rounded-md text-sm font-medium border bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:bg-zinc-700/70 flex items-center gap-2"
          >
            {t.filters}
            <span
              className={`transition-transform ${
                mobileFiltersOpen ? 'rotate-180' : ''
              }`}
            >
              ▾
            </span>
          </button>
        </motion.div>

        {/* Bloque de filtros */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}
        >
          <div className="mb-12 flex flex-col items-center md:flex-row md:items-start justify-center gap-6 md:gap-50">
            {/* Styles */}
            <div className="flex flex-col items-center text-center">
              <span className="text-sm tracking-wider text-zinc-400 mb-2 uppercase">{t.styles}</span>
              <div className="flex flex-wrap justify-center gap-2">
                {styleOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setSelectedStyle(opt.key)}
                    className={`${baseBtn} ${selectedStyle === opt.key ? activeBtn : inactiveBtn}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Artists */}
            <div className="flex flex-col items-center text-center">
              <span className="text-sm tracking-wider text-zinc-400 mb-2 uppercase">{t.artists}</span>
              <div className="flex flex-wrap justify-center gap-2">
                {artistOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setSelectedArtist(opt.key)}
                    className={`${baseBtn} ${selectedArtist === opt.key ? activeBtn : inactiveBtn}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Galería con fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Gallery images={filteredImages} />
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
