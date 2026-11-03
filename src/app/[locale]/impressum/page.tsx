
import Link from "next/link";
import { Footer } from "@/components/layout";
import { getLang, tr } from "@/utils/i18n";

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;
  const lang = getLang(locale);
  const localePrefix = `/${lang}`;

  const t = {
    title: tr(lang, {
      es: "Aviso legal – Maleficium Tattoo",
      de: "Impressum – Maleficium Tattoo",
      en: "Legal Notice – Maleficium Tattoo",
    }),

    intro: tr(lang, {
      es: "Información según el § 5 de la Ley austriaca de comercio electrónico (ECG) y el § 25 de la Ley de medios (MedienG).",
      de: "Informationspflicht laut § 5 E-Commerce-Gesetz, Offenlegung laut § 25 Mediengesetz.",
      en: "Information according to § 5 E-Commerce Act (ECG) and § 25 Media Act (MedienG).",
    }),

    operator: tr(lang, {
      es: "Titular",
      de: "Betreiber",
      en: "Operator",
    }),

    studio: "Maleficium Tattoo",

    owner: tr(lang, {
      es: "Titular: Alexis Massó Galiano, empresario individual",
      de: "Inhaber: Alexis Massó Galiano, Einzelunternehmer",
      en: "Owner: Alexis Massó Galiano, sole proprietor",
    }),

    address: "Herzogenburger Straße 66/1, 3100 St. Pölten, Österreich",

    phone: "+43 676 6726865",

    email: "maleficium.tattoo@gmail.com",

    trade: tr(lang, {
      es: "Licencias comerciales",
      de: "Gewerbe",
      en: "Trade licences",
    }),

    trade1: tr(lang, {
      es: "Cosmética (cuidado de belleza), limitada a tatuajes (n.º GISA 37396176).",
      de: "Kosmetik (Schönheitspflege), eingeschränkt auf Tätowieren (GISA-Zahl 37396176).",
      en: "Cosmetics (beauty care), limited to tattooing (GISA no. 37396176).",
    }),

    trade2: tr(lang, {
      es: "Comercio general, excepto comercios regulados y agentes comerciales (n.º GISA 39059819).",
      de: "Handelsgewerbe mit Ausnahme der reglementierten Handelsgewerbe und Handelsagent (GISA-Zahl 39059819).",
      en: "General trade, excluding regulated trades and commercial agents (GISA no. 39059819).",
    }),

    chamber: tr(lang, {
      es: "Miembro de la Cámara de Comercio de Baja Austria (WKO): gremio de podología, cosmética y masajes; gremio de comercio de moda y artículos de ocio.",
      de: "Mitglied der Wirtschaftskammer Niederösterreich: Landesinnung der Fußpfleger, Kosmetiker und Masseure; Landesgremium Handel mit Mode und Freizeitartikeln.",
      en: "Member of the Austrian Economic Chamber, Lower Austria: guild of foot care, cosmetics and massage; trade group for fashion and leisure goods.",
    }),

    authority: tr(lang, {
      es: "Autoridad de control: Magistrat der Stadt St. Pölten.",
      de: "Aufsichtsbehörde: Magistrat der Stadt St. Pölten.",
      en: "Supervisory authority: Magistrat der Stadt St. Pölten.",
    }),

    regulations: tr(lang, {
      es: "Normativa profesional: Ley austriaca de actividades comerciales (Gewerbeordnung), disponible en www.ris.bka.gv.at.",
      de: "Berufsrecht: Gewerbeordnung, abrufbar unter www.ris.bka.gv.at.",
      en: "Professional regulations: Austrian Trade Act (Gewerbeordnung), available at www.ris.bka.gv.at.",
    }),

    disclosure: tr(lang, {
      es: "Información sobre el medio",
      de: "Offenlegung",
      en: "Disclosure",
    }),

    publisher: tr(lang, {
      es: "Propietario y editor: Alexis Massó Galiano.",
      de: "Medieninhaber und Herausgeber: Alexis Massó Galiano.",
      en: "Media owner and publisher: Alexis Massó Galiano.",
    }),

    editorial: tr(lang, {
      es: "Línea editorial: información sobre el estudio Maleficium Tattoo, nuestros artistas y temas relacionados con el tatuaje.",
      de: "Blattlinie: Informationen über das Tattoostudio Maleficium, unsere Künstler und Themen rund ums Tätowieren.",
      en: "Editorial line: information about Maleficium Tattoo studio, our artists and topics around tattooing.",
    }),

    imageRights: tr(lang, {
      es: "Derechos de imagen",
      de: "Bildrechte",
      en: "Image rights",
    }),

    imageText: tr(lang, {
      es: "Las fotografías de los tatuajes pertenecen a los respectivos artistas. Su utilización solo está permitida con autorización.",
      de: "Die Fotos der Tattoos gehören den jeweiligen Künstlern. Verwendung nur mit Erlaubnis.",
      en: "The tattoo photos belong to the respective artists. Use only with permission.",
    }),

    contact: tr(lang, {
      es: "Contacto",
      de: "Kontakt",
      en: "Contact",
    }),

    updated: tr(lang, {
      es: "Última actualización: 3 de noviembre de 2026",
      de: "Letzte Aktualisierung: 3. November 2026",
      en: "Last updated: November 3, 2026",
    }),
  };

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 min-h-screen box-border">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 text-white">

        <h1 className="text-3xl md:text-4xl font-display mb-6">
          {t.title}
        </h1>

        <p className="text-zinc-200 mb-8">
          {t.intro}
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {t.operator}
        </h2>

        <div className="space-y-2 text-zinc-200 mb-8">
          <p className="font-semibold text-white">{t.studio}</p>
          <p>{t.owner}</p>
          <p>{t.address}</p>
          <p>Tel.: {t.phone}</p>
          <p>E-Mail: {t.email}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          {t.trade}
        </h2>

        <div className="space-y-3 text-zinc-200 mb-8">
          <p>{t.trade1}</p>
          <p>{t.trade2}</p>
          <p>{t.chamber}</p>
          <p>{t.authority}</p>
          <p>{t.regulations}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          {t.disclosure}
        </h2>

        <div className="space-y-3 text-zinc-200 mb-8">
          <p>{t.publisher}</p>
          <p>{t.editorial}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          {t.imageRights}
        </h2>

        <p className="text-zinc-200 mb-8">
          {t.imageText}
        </p>

        <p className="text-sm text-zinc-400">
          {t.updated}
        </p>

        <Link
          href={`${localePrefix}/contact`}
          className="inline-block mt-6 px-4 py-2 rounded-md border border-white/30 hover:bg-white hover:text-black transition-colors"
        >
          {t.contact}
        </Link>

      </section>

      <Footer />
    </main>
  );
}
