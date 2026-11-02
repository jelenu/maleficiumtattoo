
import Link from "next/link";
import { Footer } from "@/components/layout";
import { getLang, tr } from "@/utils/i18n";

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;
  const lang = getLang(locale);
  const localePrefix = `/${lang}`;

  const t = {
    title: tr(lang, {
      es: "Política de Privacidad – Maleficium Tattoo Studio",
      de: "Datenschutzerklärung – Maleficium Tattoo Studio",
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
      de: "Telefon: [+34 123 456 789]",
      en: "Phone: [+34 123 456 789]",
    }),

    s1Title: tr(lang, {
      es: "1. Datos que recopilamos",
      de: "1. Welche Daten wir erheben",
      en: "1. Data we collect",
    }),

    s1Intro: tr(lang, {
      es: "A través del formulario de contacto recogemos únicamente los datos necesarios para responder a tus consultas:",
      de: "Über das Kontaktformular erheben wir nur die Daten, die zur Beantwortung Ihrer Anfragen erforderlich sind:",
      en: "Through the contact form, we collect only the data necessary to respond to your inquiries:",
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
      es: "Además, mediante Google Analytics podemos recopilar información técnica y estadística sobre el uso de nuestra web, como páginas visitadas, duración de las visitas, tipo de dispositivo, navegador y datos de interacción. Esta información se recopila de acuerdo con las preferencias de consentimiento seleccionadas por el usuario.",
      de: "Darüber hinaus können wir über Google Analytics technische und statistische Informationen über die Nutzung unserer Website erfassen, beispielsweise besuchte Seiten, Besuchsdauer, Gerätetyp, Browser und Interaktionsdaten. Diese Informationen werden entsprechend den vom Nutzer ausgewählten Einwilligungseinstellungen erhoben.",
      en: "Additionally, through Google Analytics, we may collect technical and statistical information about the use of our website, such as pages visited, visit duration, device type, browser and interaction data. This information is collected according to the user's selected consent preferences.",
    }),

    s2Title: tr(lang, {
      es: "2. Finalidad y base legal del tratamiento",
      de: "2. Zweck und Rechtsgrundlage der Verarbeitung",
      en: "2. Purpose and legal basis",
    }),

    s2P1: tr(lang, {
      es: "Los datos del formulario de contacto se utilizan exclusivamente para responder a tus consultas y ponernos en contacto contigo.",
      de: "Die über das Kontaktformular erhobenen Daten werden ausschließlich verwendet, um Ihre Anfragen zu beantworten und Sie zu kontaktieren.",
      en: "Data submitted through the contact form is used exclusively to respond to your inquiries and contact you.",
    }),

    s2Bases: [
      tr(lang, {
        es: "Base legal para las consultas: consentimiento del interesado o aplicación de medidas precontractuales solicitadas por este (art. 6.1.a y 6.1.b RGPD, según corresponda).",
        de: "Rechtsgrundlage für Anfragen: Einwilligung der betroffenen Person oder vorvertragliche Maßnahmen auf deren Anfrage (Art. 6 Abs. 1 lit. a und b DSGVO, je nach Fall).",
        en: "Legal basis for inquiries: data subject consent or pre-contractual steps requested by the data subject (Art. 6(1)(a) and 6(1)(b) GDPR, as applicable).",
      }),
      tr(lang, {
        es: "Base legal para las cookies de analítica: consentimiento previo del usuario (art. 6.1.a RGPD).",
        de: "Rechtsgrundlage für Analyse-Cookies: vorherige Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).",
        en: "Legal basis for analytics cookies: the user's prior consent (Art. 6(1)(a) GDPR).",
      }),
    ],

    s3Title: tr(lang, {
      es: "3. Conservación de los datos",
      de: "3. Aufbewahrung der Daten",
      en: "3. Data retention",
    }),

    s3P1: tr(lang, {
      es: "Los datos enviados mediante el formulario de contacto se conservarán únicamente durante el tiempo necesario para gestionar tu consulta y las posibles obligaciones legales derivadas de ella.",
      de: "Die über das Kontaktformular übermittelten Daten werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage und zur Erfüllung möglicher daraus entstehender gesetzlicher Verpflichtungen erforderlich ist.",
      en: "Data submitted through the contact form will only be retained for as long as necessary to handle your inquiry and any related legal obligations.",
    }),

    s3P2: tr(lang, {
      es: "Los datos estadísticos recopilados mediante Google Analytics se conservarán durante el periodo configurado en nuestra cuenta de Google Analytics. Los plazos pueden variar según la configuración del servicio.",
      de: "Die über Google Analytics erhobenen statistischen Daten werden entsprechend der in unserem Google-Analytics-Konto festgelegten Aufbewahrungsdauer gespeichert. Die Fristen können je nach Dienstkonfiguration variieren.",
      en: "Statistical data collected through Google Analytics will be retained according to the retention period configured in our Google Analytics account. These periods may vary depending on the service configuration.",
    }),

    s4Title: tr(lang, {
      es: "4. Destinatarios de los datos",
      de: "4. Empfänger der Daten",
      en: "4. Data recipients",
    }),

    s4P1: tr(lang, {
      es: "No vendemos ni cedemos tus datos personales a terceros con fines comerciales. Sin embargo, utilizamos proveedores tecnológicos necesarios para el funcionamiento de nuestra web y la prestación de nuestros servicios, entre ellos:",
      de: "Wir verkaufen Ihre personenbezogenen Daten nicht und geben sie nicht zu kommerziellen Zwecken an Dritte weiter. Allerdings nutzen wir technische Dienstleister, die für den Betrieb unserer Website und die Bereitstellung unserer Dienste erforderlich sind, darunter:",
      en: "We do not sell or disclose your personal data to third parties for commercial purposes. However, we use technology providers necessary for the operation of our website and services, including:",
    }),

    s4Items: [
      tr(lang, {
        es: "Google Analytics (Google LLC): servicio de análisis estadístico que nos permite conocer cómo se utiliza nuestra web y mejorar su funcionamiento.",
        de: "Google Analytics (Google LLC): Analysedienst, der uns hilft, die Nutzung unserer Website zu verstehen und deren Funktion zu verbessern.",
        en: "Google Analytics (Google LLC): analytics service that helps us understand how our website is used and improve its performance.",
      }),
      tr(lang, {
        es: "Cookiebot: herramienta de gestión del consentimiento que permite mostrar el aviso de cookies, gestionar las preferencias y registrar las decisiones de los usuarios.",
        de: "Cookiebot: Einwilligungsverwaltungstool, das den Cookie-Hinweis anzeigt, die Einstellungen verwaltet und die Entscheidungen der Nutzer dokumentiert.",
        en: "Cookiebot: consent management tool that displays the cookie notice, manages preferences and records users' consent choices.",
      }),
      tr(lang, {
        es: "Proveedores de hosting y servicios técnicos necesarios para mantener la web.",
        de: "Hosting-Anbieter und technische Dienstleister, die für den Betrieb der Website erforderlich sind.",
        en: "Hosting providers and technical services necessary to maintain the website.",
      }),
    ],

    s4P2: tr(lang, {
      es: "Estos proveedores pueden tratar datos personales siguiendo nuestras instrucciones y conforme a los acuerdos contractuales correspondientes. En determinados casos, los datos podrían tratarse fuera del Espacio Económico Europeo. Cuando esto ocurra, se deberán aplicar las garantías exigidas por el RGPD para las transferencias internacionales de datos.",
      de: "Diese Anbieter können personenbezogene Daten gemäß unseren Weisungen und den entsprechenden vertraglichen Vereinbarungen verarbeiten. In bestimmten Fällen können Daten außerhalb des Europäischen Wirtschaftsraums verarbeitet werden. In solchen Fällen müssen die von der DSGVO vorgeschriebenen Garantien für internationale Datenübermittlungen angewendet werden.",
      en: "These providers may process personal data following our instructions and under the relevant contractual agreements. In certain cases, data may be processed outside the European Economic Area. Where this occurs, the safeguards required by the GDPR for international data transfers must be applied.",
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
        es: "Acceder a tus datos personales.",
        de: "Auskunft über Ihre personenbezogenen Daten zu erhalten.",
        en: "Access your personal data.",
      }),
      tr(lang, {
        es: "Solicitar la corrección de datos inexactos.",
        de: "Die Berichtigung unrichtiger Daten zu verlangen.",
        en: "Request correction of inaccurate data.",
      }),
      tr(lang, {
        es: "Solicitar la eliminación de tus datos (derecho al olvido).",
        de: "Die Löschung Ihrer Daten zu verlangen (Recht auf Vergessenwerden).",
        en: "Request deletion of your data (right to be forgotten).",
      }),
      tr(lang, {
        es: "Solicitar la limitación del tratamiento.",
        de: "Die Einschränkung der Verarbeitung zu verlangen.",
        en: "Request restriction of processing.",
      }),
      tr(lang, {
        es: "Oponerte al tratamiento de tus datos.",
        de: "Der Verarbeitung Ihrer Daten zu widersprechen.",
        en: "Object to the processing of your data.",
      }),
      tr(lang, {
        es: "Solicitar la portabilidad de tus datos.",
        de: "Die Datenübertragbarkeit zu verlangen.",
        en: "Request data portability.",
      }),
      tr(lang, {
        es: "Retirar tu consentimiento en cualquier momento, cuando el tratamiento se base en él.",
        de: "Ihre Einwilligung jederzeit zu widerrufen, sofern die Verarbeitung darauf beruht.",
        en: "Withdraw your consent at any time when processing is based on it.",
      }),
    ],

    s5HowTo: tr(lang, {
      es: "Para ejercer tus derechos, puedes enviar una solicitud a: [tu-email@ejemplo.com]. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): www.aepd.es.",
      de: "Zur Ausübung Ihrer Rechte senden Sie bitte eine Anfrage an: [your-email@example.com]. Außerdem können Sie sich bei der zuständigen Datenschutzaufsichtsbehörde beschweren.",
      en: "To exercise your rights, please send a request to: [your-email@example.com]. You may also lodge a complaint with your relevant data protection authority.",
    }),

    s6Title: tr(lang, {
      es: "6. Cookies y tecnologías similares",
      de: "6. Cookies und ähnliche Technologien",
      en: "6. Cookies and similar technologies",
    }),

    s6P1: tr(lang, {
      es: "Nuestra web utiliza cookies propias y de terceros para garantizar su funcionamiento y, cuando el usuario lo autoriza, analizar el tráfico y mejorar la experiencia de navegación.",
      de: "Unsere Website verwendet eigene Cookies und Cookies von Drittanbietern, um ihre Funktion zu gewährleisten und, sofern der Nutzer zustimmt, den Datenverkehr zu analysieren und das Surferlebnis zu verbessern.",
      en: "Our website uses first-party and third-party cookies to ensure its functionality and, where the user gives consent, analyze traffic and improve the browsing experience.",
    }),

    s6P2: tr(lang, {
      es: "En particular, utilizamos Google Analytics para obtener estadísticas sobre el uso de nuestra página web. Este servicio puede utilizar cookies y tecnologías similares para recopilar información sobre las visitas, las páginas consultadas, el dispositivo y la interacción con el sitio web.",
      de: "Insbesondere verwenden wir Google Analytics, um Statistiken über die Nutzung unserer Website zu erhalten. Dieser Dienst kann Cookies und ähnliche Technologien verwenden, um Informationen über Besuche, aufgerufene Seiten, Geräte und Interaktionen mit der Website zu erfassen.",
      en: "In particular, we use Google Analytics to obtain statistics about the use of our website. This service may use cookies and similar technologies to collect information about visits, pages viewed, devices and interactions with the website.",
    }),

    s6P3: tr(lang, {
      es: "Utilizamos Cookiebot como plataforma de gestión del consentimiento. Cookiebot permite mostrar el banner de cookies, informar sobre las cookies utilizadas y permitirte aceptar, rechazar o configurar las distintas categorías de cookies.",
      de: "Wir verwenden Cookiebot als Plattform zur Verwaltung von Einwilligungen. Cookiebot zeigt den Cookie-Banner an, informiert über die verwendeten Cookies und ermöglicht es Ihnen, die verschiedenen Cookie-Kategorien zu akzeptieren, abzulehnen oder individuell einzustellen.",
      en: "We use Cookiebot as our consent management platform. Cookiebot displays the cookie banner, provides information about the cookies used and allows you to accept, reject or configure the different cookie categories.",
    }),

    s6P4: tr(lang, {
      es: "Las cookies no esenciales, incluidas las de analítica, no deben activarse antes de que hayas otorgado tu consentimiento. Puedes aceptar todas las cookies, rechazarlas o personalizar tus preferencias desde el banner de cookies.",
      de: "Nicht notwendige Cookies, einschließlich Analyse-Cookies, dürfen erst aktiviert werden, nachdem Sie Ihre Einwilligung erteilt haben. Sie können alle Cookies akzeptieren, ablehnen oder Ihre Einstellungen über den Cookie-Banner anpassen.",
      en: "Non-essential cookies, including analytics cookies, must not be activated before you have given your consent. You can accept all cookies, reject them or customize your preferences through the cookie banner.",
    }),

    s6P5: tr(lang, {
      es: "Puedes modificar o retirar tu consentimiento en cualquier momento haciendo clic en el enlace «Configuración de cookies» disponible en el pie de página de nuestra web.",
      de: "Sie können Ihre Einwilligung jederzeit ändern oder widerrufen, indem Sie auf den Link «Cookie-Einstellungen» im Footer unserer Website klicken.",
      en: "You can change or withdraw your consent at any time by clicking the «Cookie Settings» link in the footer of our website.",
    }),

    s6P6: tr(lang, {
      es: "Para obtener información detallada sobre las cookies concretas utilizadas, sus proveedores, finalidades y periodos de conservación, puedes consultar el panel de configuración de Cookiebot.",
      de: "Ausführliche Informationen zu den verwendeten Cookies, deren Anbietern, Zwecken und Speicherdauern finden Sie im Cookiebot-Einstellungsbereich.",
      en: "For detailed information about the specific cookies used, their providers, purposes and retention periods, please consult the Cookiebot settings panel.",
    }),

    s7Title: tr(lang, {
      es: "7. Seguridad de los datos",
      de: "7. Datensicherheit",
      en: "7. Data security",
    }),

    s7P1: tr(lang, {
      es: "Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a pérdidas, accesos no autorizados, divulgación o modificaciones indebidas.",
      de: "Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, unbefugtem Zugriff, Offenlegung oder unzulässigen Änderungen zu schützen.",
      en: "We implement appropriate technical and organizational measures to protect your data against loss, unauthorized access, disclosure or improper modification.",
    }),

    s8Title: tr(lang, {
      es: "8. Cambios en la política de privacidad",
      de: "8. Änderungen dieser Datenschutzerklärung",
      en: "8. Changes to this privacy policy",
    }),

    s8P1: tr(lang, {
      es: "Nos reservamos el derecho de modificar esta política de privacidad para adaptarla a cambios legales, técnicos o en nuestros servicios. Cualquier modificación será publicada en esta página con su correspondiente fecha de actualización.",
      de: "Wir behalten uns das Recht vor, diese Datenschutzerklärung an rechtliche, technische oder dienstleistungsbezogene Änderungen anzupassen. Änderungen werden auf dieser Seite mit dem entsprechenden Aktualisierungsdatum veröffentlicht.",
      en: "We reserve the right to modify this privacy policy to reflect legal, technical or service-related changes. Any changes will be published on this page with the corresponding update date.",
    }),

    updatedLabel: tr(lang, {
      es: "Fecha de última actualización",
      de: "Datum der letzten Aktualisierung",
      en: "Last updated",
    }),

    updatedDate: tr(lang, {
      es: "2 de noviembre de 2026",
      de: "2. November 2026",
      en: "November 2, 2026",
    }),

    contactCta: tr(lang, {
      es: "Contacto",
      de: "Kontakt",
      en: "Contact",
    }),
  };

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 min-h-screen box-border">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 text-white">

        <h1 className="text-3xl md:text-4xl font-display mb-6">
          {t.title}
        </h1>

        <h2 className="text-xl font-semibold mb-2">
          {t.controllerHeading}
        </h2>

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

        <ul className="list-disc list-inside space-y-2 text-zinc-200 mb-8">
          {t.s2Bases.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">{t.s3Title}</h2>
        <p className="text-zinc-200 mb-2">{t.s3P1}</p>
        <p className="text-zinc-200 mb-8">{t.s3P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s4Title}</h2>
        <p className="text-zinc-200 mb-3">{t.s4P1}</p>

        <ul className="list-disc list-inside space-y-2 text-zinc-200 mb-3">
          {t.s4Items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>

        <p className="text-zinc-200 mb-8">{t.s4P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s5Title}</h2>
        <p className="text-zinc-200 mb-2">{t.s5Intro}</p>

        <ul className="list-disc list-inside space-y-1 text-zinc-200 mb-2">
          {t.s5Items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>

        <p className="text-zinc-200 mb-8">{t.s5HowTo}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s6Title}</h2>
        <p className="text-zinc-200 mb-3">{t.s6P1}</p>
        <p className="text-zinc-200 mb-3">{t.s6P2}</p>
        <p className="text-zinc-200 mb-3">{t.s6P3}</p>
        <p className="text-zinc-200 mb-3">{t.s6P4}</p>
        <p className="text-zinc-200 mb-3">{t.s6P5}</p>
        <p className="text-zinc-200 mb-8">{t.s6P6}</p>

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
