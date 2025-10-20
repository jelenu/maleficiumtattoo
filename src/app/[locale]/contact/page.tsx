import Head from "next/head";
import { Footer } from "@/components/layout";
import { ContactSection } from "@/components/sections";
import { getLang, tr } from "@/utils/i18n";

export default function ContactPage({ params }: { params: { locale?: string } }) {
  const lang = getLang(params?.locale);

  const meta = {
    title: tr(lang, {
      en: "Contact – Maleficium Tattoo Studio",
      de: "Kontakt – Maleficium Tattoo Studio",
      es: "Contacto – Maleficium Tattoo Studio",
    }),
    description: tr(lang, {
      en: "Get in touch to discuss your tattoo idea and book an appointment.",
      de: "Kontaktieren Sie uns, um Ihre Tattoo-Idee zu besprechen und einen Termin zu buchen.",
      es: "Ponte en contacto para hablar de tu idea de tatuaje y reservar una cita.",
    }),
    url: tr(lang, {
      en: `https://maleficiumtattoo.com/en/contact`,
      de: `https://maleficiumtattoo.com/de/contact`,
      es: `https://maleficiumtattoo.com/es/contact`,
    }),
    image: "https://maleficiumtattoo.com/images/mf.png",
  };

  return (
    <main className="flex flex-col min-h-screen ">
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

      <ContactSection />
      <Footer />
    </main>
  );
}
