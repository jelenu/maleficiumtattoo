
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
      es: "Titular: Alexis Massó Galiano",
      de: "Inhaber: Alexis Massó Galiano",
      en: "Owner: Alexis Massó Galiano",
    }),

    address: tr(lang, {
      es: "Domicilio: Herzogenburger Strasse 66/1, 3100 Sankt Pölten, Austria",
      de: "Anschrift: Herzogenburger Strasse 66/1, 3100 Sankt Pölten, Österreich",
      en: "Address: Herzogenburger Strasse 66/1, 3100 Sankt Pölten, Austria",
    }),

    email: tr(lang, {
      es: "Correo electrónico: Maleficium.tattoo@gmail.com",
      de: "E-Mail: Maleficium.tattoo@gmail.com",
      en: "Email: Maleficium.tattoo@gmail.com",
    }),

    phone: tr(lang, {
      es: "Teléfono: 06766726865",
      de: "Telefon: 06766726865",
      en: "Phone: 06766726865",
    }),

    tax: tr(lang, {
      es: "Número de identificación fiscal: no publicado.",
      de: "Steuerliche Identifikationsnummer: nicht veröffentlicht.",
      en: "Tax identification number: not published.",
    }),

    registry: tr(lang, {
      es: "Datos registrales: no aplicable o no facilitados.",
      de: "Registereintrag: nicht zutreffend oder nicht angegeben.",
      en: "Registration details: not applicable or not provided.",
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
      es: "El titular procura mantener la información de esta web actualizada y correcta, pero no garantiza la ausencia de errores u omisiones. No se responsabiliza de los daños derivados del uso de la información publicada, en la medida permitida por la legislación aplicable. Esta limitación no afecta a las responsabilidades que legalmente no puedan excluirse.",
      de: "Der Betreiber bemüht sich, die Informationen auf dieser Website aktuell und korrekt zu halten, übernimmt jedoch keine Gewähr für Fehler oder Auslassungen. Eine Haftung für Schäden aus der Nutzung der veröffentlichten Informationen wird im gesetzlich zulässigen Umfang ausgeschlossen. Diese Einschränkung gilt nicht für Haftungsfälle, die gesetzlich nicht ausgeschlossen werden dürfen.",
      en: "The owner makes reasonable efforts to keep the information on this website accurate and up to date but does not guarantee that it is free from errors or omissions. Liability for damages arising from the use of published information is excluded to the extent permitted by applicable law. This limitation does not affect liabilities that cannot legally be excluded.",
    }),

    s4Title: tr(lang, {
      es: "4. Enlaces externos",
      de: "4. Externe Links",
      en: "4. External links",
    }),

    s4Text: tr(lang, {
      es: "Esta página puede contener enlaces a sitios web de terceros, como Instagram o Google Maps. El titular no tiene control sobre los contenidos, las políticas o las prácticas de dichos sitios externos y no asume responsabilidad por ellos. El acceso a estos sitios se realiza bajo la responsabilidad del usuario.",
      de: "Diese Website kann Links zu Websites Dritter enthalten, beispielsweise zu Instagram oder Google Maps. Der Betreiber hat keinen Einfluss auf die Inhalte, Richtlinien oder Praktiken dieser externen Websites und übernimmt dafür keine Verantwortung. Der Zugriff auf diese Websites erfolgt in der Verantwortung des Nutzers.",
      en: "This website may contain links to third-party websites, such as Instagram or Google Maps. The owner has no control over the content, policies or practices of these external websites and accepts no responsibility for them. Users access these websites at their own responsibility.",
    }),

    s5Title: tr(lang, {
      es: "5. Legislación aplicable y jurisdicción",
      de: "5. Anwendbares Recht und Gerichtsstand",
      en: "5. Applicable law and jurisdiction",
    }),

    s5Text: tr(lang, {
      es: "Este aviso legal se rige por la legislación aplicable en Austria y por las disposiciones de la Unión Europea que correspondan, sin perjuicio de las normas imperativas de protección de los consumidores y de otras disposiciones legales que puedan resultar aplicables. Cuando corresponda, serán competentes los tribunales determinados por la legislación aplicable.",
      de: "Dieses Impressum unterliegt dem in Österreich geltenden Recht sowie den einschlägigen Bestimmungen der Europäischen Union, unbeschadet zwingender Verbraucherschutzvorschriften und sonstiger anwendbarer gesetzlicher Bestimmungen. Soweit anwendbar, richtet sich die Zuständigkeit der Gerichte nach den gesetzlichen Vorschriften.",
      en: "This legal notice is governed by the laws applicable in Austria and the relevant provisions of European Union law, without prejudice to mandatory consumer protection rules and other applicable legal provisions. Where applicable, jurisdiction shall be determined in accordance with the relevant laws.",
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

  const sections = [
    [t.s1Title, t.s1Text],
    [t.s2Title, t.s2Text],
    [t.s3Title, t.s3Text],
    [t.s4Title, t.s4Text],
    [t.s5Title, t.s5Text],
  ];

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 min-h-screen box-border">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 text-white">
        <h1 className="text-3xl md:text-4xl font-display mb-6">
          {t.title}
        </h1>

        <p className="text-zinc-200 mb-4">
          {t.intro}
        </p>

        <div className="space-y-1 text-zinc-200 mb-8">
          <p>{t.studio}</p>
          <p>{t.owner}</p>
          <p>{t.address}</p>
          <p>{t.email}</p>
          <p>{t.phone}</p>
          <p>{t.tax}</p>
          <p>{t.registry}</p>
        </div>

        {sections.map(([heading, content]) => (
          <div key={heading} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {heading}
            </h2>
            <p className="text-zinc-200">
              {content}
            </p>
          </div>
        ))}

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
