
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
      es: "Aviso Legal – Maleficium Tattoo Studio",
      de: "Impressum – Maleficium Tattoo Studio",
      en: "Legal Notice – Maleficium Tattoo Studio",
    }),
    intro: tr(lang, {
      es: "Información general del titular de esta página web:",
      de: "Allgemeine Informationen über den Betreiber dieser Website:",
      en: "General information about the operator of this website:",
    }),
    studio: "Maleficium Tattoo Studio",
    owner: tr(lang, {
      es: "Titular: [Nombre y apellidos / Razón social]",
      de: "Inhaber: [Vollständiger Name / Firmenname]",
      en: "Owner: [Full name / Company name]",
    }),
    address: tr(lang, {
      es: "Domicilio: [Calle, número, ciudad, código postal, país]",
      de: "Anschrift: [Straße, Hausnummer, Stadt, PLZ, Land]",
      en: "Address: [Street, number, city, postal code, country]",
    }),
    email: tr(lang, {
      es: "Correo electrónico: [Tu email]",
      de: "E-Mail: [Deine E-Mail-Adresse]",
      en: "Email: [Your email]",
    }),
    phone: tr(lang, {
      es: "Teléfono: [Tu teléfono]",
      de: "Telefon: [Deine Telefonnummer]",
      en: "Phone: [Your phone number]",
    }),
    tax: tr(lang, {
      es: "NIF/CIF: [Si corresponde]",
      de: "Steueridentifikationsnummer: [Falls zutreffend]",
      en: "Tax ID: [If applicable]",
    }),
    registry: tr(lang, {
      es: "Datos registrales: [Si corresponde]",
      de: "Registereintrag: [Falls zutreffend]",
      en: "Registration details: [If applicable]",
    }),
    s1Title: tr(lang, {
      es: "1. Objeto de la página web",
      de: "1. Zweck der Website",
      en: "1. Purpose of the website",
    }),
    s1Text: tr(lang, {
      es: "Esta página web tiene como finalidad presentar los servicios de Maleficium Tattoo Studio, mostrar información sobre el estudio y permitir a los usuarios ponerse en contacto para realizar consultas o solicitar información sobre sus servicios.",
      de: "Diese Website dient dazu, die Dienstleistungen von Maleficium Tattoo Studio vorzustellen, Informationen über das Studio bereitzustellen und Nutzern die Kontaktaufnahme für Anfragen und Informationen zu ermöglichen.",
      en: "This website aims to present the services of Maleficium Tattoo Studio, provide information about the studio and allow users to get in touch with questions or service inquiries.",
    }),
    s2Title: tr(lang, {
      es: "2. Propiedad intelectual e industrial",
      de: "2. Geistiges und gewerbliches Eigentum",
      en: "2. Intellectual and industrial property",
    }),
    s2Text: tr(lang, {
      es: "Los contenidos de esta página web, incluyendo textos, imágenes, diseños, logotipos y otros elementos, están protegidos por los derechos de propiedad intelectual e industrial que correspondan. Queda prohibida su reproducción, distribución o utilización sin autorización previa del titular, salvo en los casos legalmente permitidos.",
      de: "Die Inhalte dieser Website, einschließlich Texte, Bilder, Designs, Logos und anderer Elemente, sind durch die geltenden Rechte des geistigen und gewerblichen Eigentums geschützt. Eine Vervielfältigung, Verbreitung oder Nutzung ohne vorherige Zustimmung des Inhabers ist untersagt, soweit dies nicht gesetzlich erlaubt ist.",
      en: "The contents of this website, including texts, images, designs, logos and other elements, are protected by applicable intellectual and industrial property rights. Reproduction, distribution or use without prior authorization from the owner is prohibited, except where legally permitted.",
    }),
    s3Title: tr(lang, {
      es: "3. Responsabilidad",
      de: "3. Haftung",
      en: "3. Liability",
    }),
    s3Text: tr(lang, {
      es: "El titular procura mantener la información de esta web actualizada y correcta, pero no garantiza la ausencia de errores u omisiones. No se responsabiliza de los daños derivados del uso de la información publicada, en la medida permitida por la legislación aplicable.",
      de: "Der Betreiber bemüht sich, die Informationen auf dieser Website aktuell und korrekt zu halten, übernimmt jedoch keine Gewähr für Fehler oder Auslassungen. Eine Haftung für Schäden aus der Nutzung der veröffentlichten Informationen wird im gesetzlich zulässigen Umfang ausgeschlossen.",
      en: "The owner makes reasonable efforts to keep the information on this website accurate and up to date but does not guarantee that it is free from errors or omissions. Liability for damages arising from the use of published information is excluded to the extent permitted by applicable law.",
    }),
    s4Title: tr(lang, {
      es: "4. Enlaces externos",
      de: "4. Externe Links",
      en: "4. External links",
    }),
    s4Text: tr(lang, {
      es: "Esta página puede contener enlaces a sitios web de terceros. El titular no tiene control sobre sus contenidos y no asume responsabilidad por ellos.",
      de: "Diese Website kann Links zu Websites Dritter enthalten. Der Betreiber hat keinen Einfluss auf deren Inhalte und übernimmt dafür keine Verantwortung.",
      en: "This website may contain links to third-party websites. The owner has no control over their content and accepts no responsibility for them.",
    }),
    s5Title: tr(lang, {
      es: "5. Legislación aplicable",
      de: "5. Anwendbares Recht",
      en: "5. Applicable law",
    }),
    s5Text: tr(lang, {
      es: "Este aviso legal se rige por la legislación aplicable al titular de la página web, sin perjuicio de las normas imperativas que puedan resultar aplicables.",
      de: "Dieses Impressum unterliegt dem für den Betreiber dieser Website geltenden Recht, unbeschadet zwingender gesetzlicher Vorschriften.",
      en: "This legal notice is governed by the law applicable to the website owner, without prejudice to any mandatory legal provisions that may apply.",
    }),
    contact: tr(lang, {
      es: "Contacto",
      de: "Kontakt",
      en: "Contact",
    }),
    updated: tr(lang, {
      es: "Última actualización: 2 de noviembre de 2026",
      de: "Letzte Aktualisierung: 2. November 2026",
      en: "Last updated: November 2, 2026",
    }),
  };

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 min-h-screen box-border">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 text-white">
        <h1 className="text-3xl md:text-4xl font-display mb-6">
          {t.title}
        </h1>

        <p className="text-zinc-200 mb-4">{t.intro}</p>

        <div className="space-y-1 text-zinc-200 mb-8">
          <p>{t.studio}</p>
          <p>{t.owner}</p>
          <p>{t.address}</p>
          <p>{t.email}</p>
          <p>{t.phone}</p>
          <p>{t.tax}</p>
          <p>{t.registry}</p>
        </div>

        {[
          [t.s1Title, t.s1Text],
          [t.s2Title, t.s2Text],
          [t.s3Title, t.s3Text],
          [t.s4Title, t.s4Text],
          [t.s5Title, t.s5Text],
        ].map(([heading, content]) => (
          <div key={heading} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">{heading}</h2>
            <p className="text-zinc-200">{content}</p>
          </div>
        ))}

        <p className="text-sm text-zinc-400">{t.updated}</p>

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
