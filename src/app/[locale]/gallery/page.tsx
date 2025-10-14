'use client';
import { galleryImages } from '@/data/gallery';
import { Text } from '@/components/ui/basics';
import Gallery from '@/components/gallery/Gallery';
import { useState, useMemo } from 'react';
import { Footer } from '@/components/layout';
import { useParams } from 'next/navigation';
import { getLang, tr } from '@/utils/i18n';

export default function GalleryPage() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);
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
      <div className="py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-30">
        <Text variant="h1" align="center" className="mb-6">{t.title}</Text>

        {/* Toggle filtros solo móvil */}
        <div className="md:hidden mb-6 flex justify-center">
          <button
            onClick={() => setMobileFiltersOpen(v => !v)}
            aria-expanded={mobileFiltersOpen}
            className="px-4 py-2 rounded-md text-sm font-medium border bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:bg-zinc-700/70 flex items-center gap-2"
          >
            {t.filters}
            <span className={`transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`}>▾</span>
          </button>
        </div>

        {/* Contenedor principal centrado (colapsable en móvil) */}
        <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
          <div className="mb-12 flex flex-col items-center md:flex-row md:items-start justify-center gap-6 md:gap-50">
            {/* Bloque de Styles */}
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

            {/* Bloque de Artists */}
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
        </div>

        {/* Galería filtrada */}
        <Gallery images={filteredImages} />
      </div>
      <Footer />
    </main>
  );
}
