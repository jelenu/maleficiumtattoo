import Link from "next/link";
import { Footer } from "@/components/layout";
import { getLang, tr } from "@/utils/i18n";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ locale?: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const lang = getLang(locale);
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://maleficiumtattoo.com";
  const pathname = `/${lang}/privacy-policy`;
  const title = tr(lang, {
    en: "Privacy Policy – Maleficium Tattoo Studio",
    de: "Datenschutzrichtlinie – Maleficium Tattoo Studio",
    es: "Política de Privacidad – Maleficium Tattoo Studio",
  });
  const description = tr(lang, {
    en: "Learn how we collect, use, and protect your data.",
    de: "Erfahren Sie, wie wir Ihre Daten erheben, verwenden und schützen.",
    es: "Conoce cómo recopilamos, usamos y protegemos tus datos.",
  });

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${pathname}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${pathname}`,
      siteName: "Maleficium Tattoo",
      images: [`${SITE_URL}/images/mf.png`],
      type: "website",
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/mf.png`],
    },
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params;
  const lang = getLang(locale);
  const localePrefix = `/${lang}`;

  const t = {
    title: tr(lang, {
      es: "Política de Privacidad – Maleficium Tattoo Studio",
      de: "Datenschutzrichtlinie – Maleficium Tattoo Studio",
      en: "Privacy Policy – Maleficium Tattoo Studio",
    }),
    controllerHeading: tr(lang, {
      es: "Responsable del tratamiento de datos",
      de: "Verantwortlicher für die Datenverarbeitung",
      en: "Data Controller",
    }),
    studioName: "Maleficium Tattoo Studio",
    owner: tr(lang, {
      es: "Propietario: [Tu nombre completo]",
      de: "Inhaber: [Ihr vollständiger Name]",
      en: "Owner: [Your full name]",
    }),
    address: tr(lang, {
      es: "Dirección: [Calle, Número, Ciudad, Código Postal, País]",
      de: "Adresse: [Straße, Nummer, Stadt, PLZ, Land]",
      en: "Address: [Street, Number, City, ZIP, Country]",
    }),
    email: tr(lang, {
      es: "Correo electrónico: [tu-email@ejemplo.com]",
      de: "E-Mail: [your-email@example.com]",
      en: "Email: [your-email@example.com]",
    }),
    phone: tr(lang, {
      es: "Teléfono: [+34 123 456 789]",
      de: "Telefon: [+43 123 456 789]",
      en: "Phone: [+43 123 456 789]",
    }),

    s1Title: tr(lang, {
      es: "1. Datos que recopilamos",
      de: "1. Welche Daten wir erheben",
      en: "1. Data we collect",
    }),
    s1Intro: tr(lang, {
      es: "A través del formulario de contacto recogemos únicamente los datos estrictamente necesarios para responder a tus consultas:",
      de: "Über das Kontaktformular erheben wir nur die Daten, die unbedingt erforderlich sind, um Ihre Anfragen zu beantworten:",
      en: "Through the contact form we collect only the data strictly necessary to respond to your inquiries:",
    }),
    s1Items: [
      tr(lang, {
        es: "Nombre y apellidos",
        de: "Vor- und Nachname",
        en: "Full name",
      }),
      tr(lang, {
        es: "Correo electrónico",
        de: "E-Mail-Adresse",
        en: "Email address",
      }),
      tr(lang, {
        es: "Mensaje enviado",
        de: "Gesendete Nachricht",
        en: "Message sent",
      }),
    ],
    s1Note: tr(lang, {
      es: "No se recopilan otros datos sensibles ni información adicional innecesaria.",
      de: "Es werden keine weiteren sensiblen Daten oder unnötigen Informationen erhoben.",
      en: "No other sensitive or unnecessary information is collected.",
    }),

    s2Title: tr(lang, {
      es: "2. Finalidad y base legal del tratamiento",
      de: "2. Zweck und Rechtsgrundlage der Verarbeitung",
      en: "2. Purpose and legal basis",
    }),
    s2P1: tr(lang, {
      es: "Los datos se utilizan únicamente para responder a tus consultas y ponernos en contacto contigo.",
      de: "Die Daten werden ausschließlich verwendet, um Ihre Anfragen zu beantworten und Sie zu kontaktieren.",
      en: "Data is used solely to respond to your inquiries and contact you.",
    }),
    s2Bases: [
      tr(lang, {
        es: "Base legal: Consentimiento del interesado (art. 6.1.a RGPD)",
        de: "Rechtsgrundlage: Einwilligung der betroffenen Person (Art. 6 Abs. 1 lit. a DSGVO)",
        en: "Legal basis: Data subject consent (Art. 6(1)(a) GDPR)",
      }),
      tr(lang, {
        es: "Base legal alternativa: Cumplimiento de una solicitud realizada por el interesado (art. 6.1.b RGPD)",
        de: "Alternative Rechtsgrundlage: Erfüllung einer Anfrage der betroffenen Person (Art. 6 Abs. 1 lit. b DSGVO)",
        en: "Alternative legal basis: Performance of a request by the data subject (Art. 6(1)(b) GDPR)",
      }),
    ],

    s3Title: tr(lang, {
      es: "3. Conservación de los datos",
      de: "3. Aufbewahrung der Daten",
      en: "3. Data retention",
    }),
    s3P1: tr(lang, {
      es: "Tus datos se conservarán solo durante el tiempo necesario para gestionar tu consulta.",
      de: "Ihre Daten werden nur so lange aufbewahrt, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist.",
      en: "Your data will be kept only as long as necessary to handle your inquiry.",
    }),
    s3P2: tr(lang, {
      es: "Una vez finalizado el proceso o si nos lo solicitas, los datos serán eliminados de forma segura.",
      de: "Nach Abschluss des Vorgangs oder auf Ihren Wunsch werden die Daten sicher gelöscht.",
      en: "Once the process is completed or upon your request, the data will be securely deleted.",
    }),

    s4Title: tr(lang, {
      es: "4. Destinatarios de los datos",
      de: "4. Empfänger der Daten",
      en: "4. Data recipients",
    }),
    s4P1: tr(lang, {
      es: "No compartimos tus datos con terceros, salvo proveedores que nos ayudan a gestionar el formulario o el hosting, quienes están obligados a cumplir el RGPD mediante un contrato de tratamiento de datos (DPA).",
      de: "Wir geben Ihre Daten nicht an Dritte weiter, außer an Dienstleister (z. B. Formular- oder Hosting-Anbieter), die per Auftragsverarbeitungsvertrag (DPA) zur DSGVO-Compliance verpflichtet sind.",
      en: "We do not share your data with third parties, except providers that help us manage the form or hosting, who are bound by a Data Processing Agreement (DPA) under the GDPR.",
    }),

    s5Title: tr(lang, {
      es: "5. Derechos de los usuarios",
      de: "5. Rechte der Nutzer",
      en: "5. Your rights",
    }),
    s5Intro: tr(lang, {
      es: "Tienes derecho a:",
      de: "Sie haben das Recht auf:",
      en: "You have the right to:",
    }),
    s5Items: [
      tr(lang, {
        es: "Acceder a tus datos personales",
        de: "Zugang zu Ihren personenbezogenen Daten",
        en: "Access your personal data",
      }),
      tr(lang, {
        es: "Solicitar la corrección de datos inexactos",
        de: "Berichtigung unrichtiger Daten zu verlangen",
        en: "Request correction of inaccurate data",
      }),
      tr(lang, {
        es: "Solicitar la eliminación de tus datos (derecho al olvido)",
        de: "Löschung Ihrer Daten zu verlangen (Recht auf Vergessenwerden)",
        en: "Request deletion of your data (right to be forgotten)",
      }),
      tr(lang, {
        es: "Solicitar la limitación del tratamiento",
        de: "Einschränkung der Verarbeitung zu verlangen",
        en: "Request restriction of processing",
      }),
      tr(lang, {
        es: "Oponerte al tratamiento de tus datos",
        de: "Widerspruch gegen die Verarbeitung Ihrer Daten",
        en: "Object to the processing of your data",
      }),
      tr(lang, {
        es: "Solicitar la portabilidad de tus datos",
        de: "Datenübertragbarkeit zu verlangen",
        en: "Request data portability",
      }),
    ],
    s5HowTo: tr(lang, {
      es: "Para ejercer tus derechos, puedes enviar una solicitud a: [tu-email@ejemplo.com]",
      de: "Zur Ausübung Ihrer Rechte senden Sie bitte eine Anfrage an: [your-email@example.com]",
      en: "To exercise your rights, please send a request to: [your-email@example.com]",
    }),

    s6Title: tr(lang, {
      es: "6. Cookies y tecnologías similares",
      de: "6. Cookies und ähnliche Technologien",
      en: "6. Cookies and similar technologies",
    }),
    s6P1: tr(lang, {
      es: "Nuestra web no utiliza cookies no esenciales.",
      de: "Unsere Website verwendet keine nicht wesentlichen Cookies.",
      en: "Our website does not use non-essential cookies.",
    }),
    s6P2: tr(lang, {
      es: "Si en el futuro utilizamos cookies de analítica o marketing, se solicitará consentimiento explícito previo mediante un banner de cookies.",
      de: "Sollten wir künftig Analyse- oder Marketing-Cookies verwenden, holen wir vorher Ihre ausdrückliche Einwilligung über ein Cookie-Banner ein.",
      en: "If we use analytics or marketing cookies in the future, we will request explicit prior consent via a cookie banner.",
    }),

    s7Title: tr(lang, {
      es: "7. Seguridad de los datos",
      de: "7. Datensicherheit",
      en: "7. Data security",
    }),
    s7P1: tr(lang, {
      es: "Implementamos medidas técnicas y organizativas para proteger tus datos frente a pérdidas, accesos no autorizados o modificaciones indebidas.",
      de: "Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, unbefugtem Zugriff oder unzulässigen Änderungen zu schützen.",
      en: "We implement technical and organizational measures to protect your data against loss, unauthorized access, or improper modification.",
    }),

    s8Title: tr(lang, {
      es: "8. Cambios en la política de privacidad",
      de: "8. Änderungen dieser Datenschutzerklärung",
      en: "8. Changes to this privacy policy",
    }),
    s8P1: tr(lang, {
      es: "Nos reservamos el derecho de modificar esta política de privacidad. Cualquier cambio será publicado en esta página con la fecha de actualización.",
      de: "Wir behalten uns das Recht vor, diese Datenschutzerklärung zu ändern. Änderungen werden auf dieser Seite mit dem Aktualisierungsdatum veröffentlicht.",
      en: "We reserve the right to modify this privacy policy. Any changes will be published on this page with the update date.",
    }),

    updatedLabel: tr(lang, {
      es: "Fecha de última actualización",
      de: "Datum der letzten Aktualisierung",
      en: "Last updated",
    }),
    updatedDate: tr(lang, {
      es: "20 de octubre de 2025",
      de: "20. Oktober 2025",
      en: "October 20, 2025",
    }),
    contactCta: tr(lang, { es: "Contacto", de: "Kontakt", en: "Contact" }),
  };

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 min-h-screen box-border">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 text-white">
        <h1 className="text-3xl md:text-4xl font-display mb-6">{t.title}</h1>

        <h2 className="text-xl font-semibold mb-2">{t.controllerHeading}</h2>
        <div className="space-y-1 text-zinc-200 mb-6">
          <p>{t.studioName}</p>
          <p>{t.owner}</p>
          <p>{t.address}</p>
          <p>{t.email}</p>
          <p>{t.phone}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-3">{t.s1Title}</h2>
        <p className="text-zinc-200 mb-2">{t.s1Intro}</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-200 mb-2">
          {t.s1Items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
        <p className="text-zinc-200 mb-8">{t.s1Note}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s2Title}</h2>
        <p className="text-zinc-200 mb-2">{t.s2P1}</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-200 mb-8">
          {t.s2Bases.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">{t.s3Title}</h2>
        <p className="text-zinc-200">{t.s3P1}</p>
        <p className="text-zinc-200 mb-8">{t.s3P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s4Title}</h2>
        <p className="text-zinc-200 mb-8">{t.s4P1}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s5Title}</h2>
        <p className="text-zinc-200 mb-2">{t.s5Intro}</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-200 mb-2">
          {t.s5Items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
        <p className="text-zinc-200 mb-8">{t.s5HowTo}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s6Title}</h2>
        <p className="text-zinc-200">{t.s6P1}</p>
        <p className="text-zinc-200 mb-8">{t.s6P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s7Title}</h2>
        <p className="text-zinc-200 mb-8">{t.s7P1}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s8Title}</h2>
        <p className="text-zinc-200 mb-6">{t.s8P1}</p>

        <p className="text-sm text-zinc-400">
          {t.updatedLabel}: {t.updatedDate}
        </p>

        <Link
          href={`${localePrefix}/contact`}
          className="inline-block mt-6 px-4 py-2 rounded-md border border-white/30 hover:bg-white hover:text-black transition-colors"
        >
          {t.contactCta}
        </Link>
      </section>

      <Footer />
    </main>
  );
}
