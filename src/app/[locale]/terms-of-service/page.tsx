import Link from "next/link";
import { Footer } from "@/components/layout";
import { getLang, tr } from "@/utils/i18n";

type PageProps = { params: { locale?: string } };

export default function TermsOfServicePage({ params }: PageProps) {
  const lang = getLang(params?.locale);
  const localePrefix = `/${lang}`;

  const t = {
    title: tr(lang, {
      es: "Términos del Servicio – Maleficium Tattoo Studio",
      de: "Nutzungsbedingungen – Maleficium Tattoo Studio",
      en: "Terms of Service – Maleficium Tattoo Studio",
    }),
    updatedLabel: tr(lang, {
      es: "Fecha de última actualización",
      de: "Zuletzt aktualisiert",
      en: "Last updated",
    }),
    updatedDate: tr(lang, {
      es: "20 de octubre de 2025",
      de: "20. Oktober 2025",
      en: "October 20, 2025",
    }),

    s1Title: tr(lang, {
      es: "1. Aceptación de los términos",
      de: "1. Annahme der Bedingungen",
      en: "1. Acceptance of the terms",
    }),
    s1P1: tr(lang, {
      es: "Al acceder y utilizar este sitio web, aceptas estos Términos del Servicio.",
      de: "Durch den Zugriff auf und die Nutzung dieser Website akzeptieren Sie diese Nutzungsbedingungen.",
      en: "By accessing and using this website, you agree to these Terms of Service.",
    }),
    s1P2: tr(lang, {
      es: "Si no estás de acuerdo con alguno de los términos, no utilices esta web.",
      de: "Wenn Sie mit irgendeinem der Bedingungen nicht einverstanden sind, nutzen Sie diese Website nicht.",
      en: "If you do not agree with any of the terms, do not use this website.",
    }),

    s2Title: tr(lang, {
      es: "2. Uso permitido del sitio web",
      de: "2. Zulässige Nutzung der Website",
      en: "2. Permitted use of the website",
    }),
    s2P1: tr(lang, {
      es: "El sitio está destinado únicamente a información sobre Maleficium Tattoo Studio y a enviar consultas a través del formulario de contacto.",
      de: "Die Website dient ausschließlich der Bereitstellung von Informationen über Maleficium Tattoo Studio und dem Senden von Anfragen über das Kontaktformular.",
      en: "The site is intended solely to provide information about Maleficium Tattoo Studio and to send inquiries via the contact form.",
    }),
    s2P2: tr(lang, {
      es: "Se prohíbe cualquier uso ilegal o que pueda dañar la web, sus sistemas o sus contenidos.",
      de: "Jegliche rechtswidrige Nutzung oder Nutzung, die der Website, ihren Systemen oder Inhalten schaden könnte, ist untersagt.",
      en: "Any illegal use or use that may damage the site, its systems, or its contents is prohibited.",
    }),
    s2P3: tr(lang, {
      es: "No se permite la copia, distribución o modificación del contenido sin autorización expresa del propietario.",
      de: "Das Kopieren, Verteilen oder Ändern von Inhalten ohne ausdrückliche Genehmigung des Eigentümers ist nicht gestattet.",
      en: "Copying, distributing, or modifying the content without the owner's express authorization is not permitted.",
    }),

    s3Title: tr(lang, {
      es: "3. Contenido del sitio web",
      de: "3. Inhalte der Website",
      en: "3. Website content",
    }),
    s3P1: tr(lang, {
      es: "Todos los contenidos (textos, imágenes, gráficos) son propiedad de Maleficium Tattoo Studio o de terceros que nos han otorgado permiso.",
      de: "Alle Inhalte (Texte, Bilder, Grafiken) sind Eigentum von Maleficium Tattoo Studio oder von Dritten, die uns die Nutzung gestattet haben.",
      en: "All content (texts, images, graphics) is owned by Maleficium Tattoo Studio or third parties who have granted us permission.",
    }),
    s3P2: tr(lang, {
      es: "No garantizamos que la información sea completa, precisa o actualizada en todo momento, aunque hacemos todo lo posible para mantenerla correcta.",
      de: "Wir garantieren nicht, dass die Informationen stets vollständig, korrekt oder aktuell sind, obwohl wir uns bemühen, sie aktuell zu halten.",
      en: "We do not guarantee that the information is complete, accurate, or up to date at all times, although we do our best to keep it correct.",
    }),
    s3P3: tr(lang, {
      es: "El uso de la información es bajo tu propio riesgo.",
      de: "Die Nutzung der Informationen erfolgt auf eigenes Risiko.",
      en: "Use of the information is at your own risk.",
    }),

    s4Title: tr(lang, {
      es: "4. Formulario de contacto",
      de: "4. Kontaktformular",
      en: "4. Contact form",
    }),
    s4P1: tr(lang, {
      es: "Al enviar consultas mediante el formulario de contacto, aceptas que tratemos tus datos personales según nuestra Política de Privacidad.",
      de: "Durch das Absenden von Anfragen über das Kontaktformular stimmen Sie der Verarbeitung Ihrer personenbezogenen Daten gemäß unserer Datenschutzerklärung zu.",
      en: "By submitting inquiries via the contact form, you agree to our processing of your personal data according to our Privacy Policy.",
    }),
    s4P2: tr(lang, {
      es: "No se permite enviar spam, mensajes comerciales no solicitados o contenido ilegal.",
      de: "Das Versenden von Spam, unerwünschter Werbung oder illegalen Inhalten ist nicht gestattet.",
      en: "Sending spam, unsolicited commercial messages, or illegal content is not allowed.",
    }),

    s5Title: tr(lang, {
      es: "5. Responsabilidad",
      de: "5. Haftung",
      en: "5. Liability",
    }),
    s5P1: tr(lang, {
      es: "Maleficium Tattoo Studio no se hace responsable de daños directos o indirectos que puedan derivarse del uso de esta web o de la información proporcionada.",
      de: "Maleficium Tattoo Studio haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung dieser Website oder der bereitgestellten Informationen entstehen können.",
      en: "Maleficium Tattoo Studio is not liable for direct or indirect damages arising from the use of this website or the information provided.",
    }),
    s5P2: tr(lang, {
      es: "El sitio puede contener enlaces a sitios externos; no somos responsables del contenido de esos sitios.",
      de: "Die Website kann Links zu externen Seiten enthalten; für deren Inhalte übernehmen wir keine Verantwortung.",
      en: "The site may contain links to external websites; we are not responsible for the content of those sites.",
    }),

    s6Title: tr(lang, {
      es: "6. Propiedad intelectual",
      de: "6. Geistiges Eigentum",
      en: "6. Intellectual property",
    }),
    s6P1: tr(lang, {
      es: "Todos los derechos de propiedad intelectual sobre textos, imágenes, logos, diseños y demás contenidos pertenecen a Maleficium Tattoo Studio o a sus respectivos propietarios.",
      de: "Alle Rechte an Texten, Bildern, Logos, Designs und sonstigen Inhalten liegen bei Maleficium Tattoo Studio oder den jeweiligen Rechteinhabern.",
      en: "All intellectual property rights over texts, images, logos, designs, and other content belong to Maleficium Tattoo Studio or their respective owners.",
    }),
    s6P2: tr(lang, {
      es: "Queda prohibida su reproducción, distribución o explotación sin autorización.",
      de: "Ihre Reproduktion, Verbreitung oder Nutzung ohne Genehmigung ist untersagt.",
      en: "Reproduction, distribution, or exploitation without authorization is prohibited.",
    }),

    s7Title: tr(lang, {
      es: "7. Modificaciones",
      de: "7. Änderungen",
      en: "7. Modifications",
    }),
    s7P1: tr(lang, {
      es: "Maleficium Tattoo Studio se reserva el derecho de modificar estos Términos del Servicio en cualquier momento.",
      de: "Maleficium Tattoo Studio behält sich das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern.",
      en: "Maleficium Tattoo Studio reserves the right to modify these Terms of Service at any time.",
    }),
    s7P2: tr(lang, {
      es: "Los cambios se publicarán en esta página y la fecha de última actualización se actualizará en consecuencia.",
      de: "Änderungen werden auf dieser Seite veröffentlicht und das Aktualisierungsdatum wird entsprechend angepasst.",
      en: "Changes will be published on this page and the last updated date will be adjusted accordingly.",
    }),

    s8Title: tr(lang, {
      es: "8. Ley aplicable y jurisdicción",
      de: "8. Anwendbares Recht und Gerichtsstand",
      en: "8. Governing law and jurisdiction",
    }),
    s8P1: tr(lang, {
      es: "Estos Términos se rigen por la legislación de Austria.",
      de: "Diese Bedingungen unterliegen dem österreichischen Recht.",
      en: "These Terms are governed by the laws of Austria.",
    }),
    s8P2: tr(lang, {
      es: "Cualquier disputa que surja en relación con la web se resolverá ante los tribunales competentes en Austria.",
      de: "Alle Streitigkeiten im Zusammenhang mit der Website werden vor den zuständigen Gerichten in Österreich beigelegt.",
      en: "Any disputes related to the website shall be resolved before the competent courts in Austria.",
    }),

    privacyLinkLabel: tr(lang, { es: "Política de Privacidad", de: "Datenschutz", en: "Privacy Policy" }),
  };

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 min-h-screen box-border">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 text-white">
        <h1 className="text-3xl md:text-4xl font-display mb-2">{t.title}</h1>
        <p className="text-sm text-zinc-400 mb-8">
          {t.updatedLabel}: {t.updatedDate}
        </p>

        <h2 className="text-2xl font-semibold mb-3">{t.s1Title}</h2>
        <p className="text-zinc-200">{t.s1P1}</p>
        <p className="text-zinc-200 mb-8">{t.s1P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s2Title}</h2>
        <p className="text-zinc-200">{t.s2P1}</p>
        <p className="text-zinc-200">{t.s2P2}</p>
        <p className="text-zinc-200 mb-8">{t.s2P3}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s3Title}</h2>
        <p className="text-zinc-200">{t.s3P1}</p>
        <p className="text-zinc-200 mb-8">{t.s3P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s4Title}</h2>
        <p className="text-zinc-200">{t.s4P1}{" "}
          <Link href={`${localePrefix}/privacy-policy`} className="underline underline-offset-2">
            {t.privacyLinkLabel}
          </Link>
          .
        </p>
        <p className="text-zinc-200 mb-8">{t.s4P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s5Title}</h2>
        <p className="text-zinc-200">{t.s5P1}</p>
        <p className="text-zinc-200 mb-8">{t.s5P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s6Title}</h2>
        <p className="text-zinc-200">{t.s6P1}</p>
        <p className="text-zinc-200 mb-8">{t.s6P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s7Title}</h2>
        <p className="text-zinc-200">{t.s7P1}</p>
        <p className="text-zinc-200 mb-8">{t.s7P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s8Title}</h2>
        <p className="text-zinc-200">{t.s8P1}</p>
        <p className="text-zinc-200 mb-8">{t.s8P2}</p>
      </section>

      <Footer />
    </main>
  );
}
