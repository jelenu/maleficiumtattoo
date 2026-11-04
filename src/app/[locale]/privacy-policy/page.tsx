
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
      es: "Política de privacidad – Maleficium Tattoo",
      de: "Datenschutzerklärung – Maleficium Tattoo",
      en: "Privacy Policy – Maleficium Tattoo",
    }),

    controller: tr(lang, {
      es: "1. Responsable",
      de: "1. Verantwortlicher",
      en: "1. Controller",
    }),

    controllerText: tr(lang, {
      es: "Alexis Massó Galiano, Maleficium Tattoo, Herzogenburger Straße 66/1, 3100 St. Pölten, Austria. Tel.: +43 676 6726865, email: maleficium.tattoo@gmail.com",
      de: "Alexis Massó Galiano, Maleficium Tattoo, Herzogenburger Straße 66/1, 3100 St. Pölten, Österreich. Tel.: +43 676 6726865, E-Mail: maleficium.tattoo@gmail.com",
      en: "Alexis Massó Galiano, Maleficium Tattoo, Herzogenburger Straße 66/1, 3100 St. Pölten, Austria. Phone: +43 676 6726865, email: maleficium.tattoo@gmail.com",
    }),

    sections: [
      {
        title: tr(lang, {
          es: "2. Alojamiento y registros del servidor",
          de: "2. Hosting und Server-Logfiles",
          en: "2. Hosting and server log files",
        }),
        paragraphs: [
          tr(lang, {
            es: "Esta web está alojada en Cloudflare, Inc. (EE. UU.); tenemos un contrato de tratamiento de datos con Cloudflare. El dominio lo gestiona IONOS SE, Montabaur, Alemania.",
            de: "Diese Website wird bei Cloudflare, Inc. (USA) gehostet; mit Cloudflare besteht ein Auftragsverarbeitungsvertrag. Die Domain wird bei IONOS SE, Montabaur, Deutschland, verwaltet.",
            en: "This website is hosted by Cloudflare, Inc. (USA); we have a data processing agreement with Cloudflare. The domain is managed by IONOS SE, Montabaur, Germany.",
          }),
          tr(lang, {
            es: "Al visitar la web se tratan datos técnicos necesarios (dirección IP, fecha y hora, navegador, página visitada), que se borran a los 7 días. Base legal: interés legítimo en una web segura y que funcione (art. 6.1.f RGPD).",
            de: "Beim Besuch der Website werden technisch notwendige Daten (IP-Adresse, Datum und Uhrzeit, Browser, aufgerufene Seite) verarbeitet und nach 7 Tagen gelöscht. Rechtsgrundlage: berechtigtes Interesse an einer sicheren und funktionierenden Website (Art. 6 Abs. 1 lit. f DSGVO).",
            en: "When you visit the website, technically necessary data (IP address, date and time, browser, page visited) is processed and deleted after 7 days. Legal basis: legitimate interest in a secure and working website (Art. 6(1)(f) GDPR).",
          }),
          tr(lang, {
            es: "Con Cloudflare Web Analytics creamos estadísticas anónimas y sin cookies sobre el uso de la web (art. 6.1.f RGPD).",
            de: "Mit Cloudflare Web Analytics erstellen wir ohne Cookies anonyme Statistiken über die Nutzung der Website (Art. 6 Abs. 1 lit. f DSGVO).",
            en: "With Cloudflare Web Analytics we create anonymous, cookie-free statistics on how the website is used (Art. 6(1)(f) GDPR).",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "3. Formulario de contacto, email, WhatsApp e Instagram",
          de: "3. Kontaktformular, E-Mail, WhatsApp und Instagram",
          en: "3. Contact form, email, WhatsApp and Instagram",
        }),
        paragraphs: [
          tr(lang, {
            es: "Si nos escribes por el formulario de contacto, por email, WhatsApp o Instagram, usamos tus datos (nombre, datos de contacto, tu idea de tatuaje y las fotos que nos mandes) para responderte y concertar una cita. Base legal: art. 6.1.b RGPD.",
            de: "Wenn du uns über das Kontaktformular, per E-Mail, WhatsApp oder Instagram schreibst, verwenden wir deine Angaben (Name, Kontaktdaten, deine Tattoo-Idee und Fotos, die du uns schickst), um deine Anfrage zu beantworten und einen Termin zu vereinbaren. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.",
            en: "When you write to us through the contact form, by email, WhatsApp or Instagram, we use your details (name, contact details, your tattoo idea and any photos you send) to answer your request and book an appointment. Legal basis: Art. 6(1)(b) GDPR.",
          }),
          tr(lang, {
            es: "Los mensajes del formulario nos llegan por email a través de Resend (Resend, Inc., EE. UU.). Recibimos los emails en Gmail (Google Ireland Ltd., Irlanda). WhatsApp e Instagram son operados por Meta Platforms Ireland Ltd., Irlanda.",
            de: "Nachrichten aus dem Kontaktformular werden über Resend (Resend, Inc., USA) per E-Mail an uns zugestellt. E-Mails empfangen wir über Gmail (Google Ireland Ltd., Irland). WhatsApp und Instagram werden von Meta Platforms Ireland Ltd., Irland, betrieben.",
            en: "Messages from the contact form are delivered to us by email through Resend (Resend, Inc., USA). We receive emails through Gmail (Google Ireland Ltd., Ireland). WhatsApp and Instagram are operated by Meta Platforms Ireland Ltd., Ireland.",
          }),
          tr(lang, {
            es: "Las consultas que no terminan en cita se borran a los 12 meses.",
            de: "Anfragen, aus denen kein Termin entsteht, löschen wir nach 12 Monaten.",
            en: "Requests that don't lead to an appointment are deleted after 12 months.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "4. Citas y depósito",
          de: "4. Termine und Anzahlung",
          en: "4. Appointments and deposit",
        }),
        paragraphs: [
          tr(lang, {
            es: "Para las citas guardamos tu nombre y tu teléfono en Google Calendar (Google Ireland Ltd.). El depósito se paga por transferencia bancaria. Base legal: ejecución del contrato (art. 6.1.b RGPD).",
            de: "Für Termine speichern wir deinen Vornamen und deine Telefonnummer in Google Calendar (Google Ireland Ltd.). Die Anzahlung erfolgt per Banküberweisung. Rechtsgrundlage: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).",
            en: "For appointments we store your first name and phone number in Google Calendar (Google Ireland Ltd.). The deposit is paid by bank transfer. Legal basis: performance of a contract (Art. 6(1)(b) GDPR).",
          }),
          tr(lang, {
            es: "Las facturas y los documentos contables se conservan durante 7 años, como exige el § 132 de la Ley Tributaria austriaca (BAO) (art. 6.1.c RGPD).",
            de: "Rechnungen und Buchhaltungsunterlagen bewahren wir 7 Jahre auf, wie es § 132 BAO vorschreibt (Art. 6 Abs. 1 lit. c DSGVO).",
            en: "Invoices and accounting records are kept for 7 years, as required by § 132 of the Austrian Federal Fiscal Code (BAO) (Art. 6(1)(c) GDPR).",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "5. Comprobación de la edad",
          de: "5. Altersnachweis",
          en: "5. Proof of age",
        }),
        paragraphs: [
          tr(lang, {
            es: "Solo tatuamos a personas mayores de 18 años. Para ello comprobamos un documento oficial (DNI, pasaporte o carnet de conducir) y guardamos una copia junto con la hoja de consentimiento durante 10 años. Base legal: interés legítimo en acreditar la edad (art. 6.1.f RGPD).",
            de: "Wir tätowieren nur Personen ab 18 Jahren. Dafür prüfen wir einen amtlichen Ausweis (Personalausweis, Reisepass oder Führerschein) und bewahren eine Kopie gemeinsam mit der Einverständniserklärung 10 Jahre auf. Rechtsgrundlage: berechtigtes Interesse am Nachweis des Alters (Art. 6 Abs. 1 lit. f DSGVO).",
            en: "We only tattoo people aged 18 or over. We check an official ID (ID card, passport or driving licence) and keep a copy together with the consent form for 10 years. Legal basis: legitimate interest in proving age (Art. 6(1)(f) GDPR).",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "6. Hoja de consentimiento y datos de salud",
          de: "6. Einverständniserklärung und Gesundheitsdaten",
          en: "6. Consent form and health data",
        }),
        paragraphs: [
          tr(lang, {
            es: "Antes de tatuarte, rellenas una hoja de consentimiento con preguntas sobre tu salud (por ejemplo, alergias, enfermedades o medicación). Son datos de categoría especial. Solo los tratamos con tu consentimiento expreso (art. 9.2.a RGPD), para poder trabajar con seguridad.",
            de: "Vor dem Tätowieren füllst du eine Einverständniserklärung mit Fragen zu deiner Gesundheit aus (z. B. Allergien, Erkrankungen, Medikamente). Das sind besondere Kategorien personenbezogener Daten. Wir verarbeiten sie nur mit deiner ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO), um sicher arbeiten zu können.",
            en: "Before tattooing, you fill in a consent form with questions about your health (e.g. allergies, illnesses, medication). This is a special category of personal data. We only process it with your explicit consent (Art. 9(2)(a) GDPR) so we can work safely.",
          }),
          tr(lang, {
            es: "La hoja de consentimiento se conserva protegida y bajo llave durante 10 años, como exige el § 4 de las normas austriacas para piercing y tatuaje (ARPTV) (art. 6.1.c y art. 9.2.f RGPD). Después se destruye.",
            de: "Die Einverständniserklärung bewahren wir geschützt und verschlossen 10 Jahre auf, wie es § 4 der Ausübungsregeln für das Piercen und Tätowieren (ARPTV) vorschreibt (Art. 6 Abs. 1 lit. c und Art. 9 Abs. 2 lit. f DSGVO). Danach wird sie vernichtet.",
            en: "We keep the consent form locked and protected for 10 years, as required by § 4 of the Austrian rules for piercing and tattooing (ARPTV) (Art. 6(1)(c) and Art. 9(2)(f) GDPR). After that, it is destroyed.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "7. Fotos de tus tatuajes",
          de: "7. Fotos deiner Tattoos",
          en: "7. Photos of your tattoos",
        }),
        paragraphs: [
          tr(lang, {
            es: "Solo publicamos fotos de tu tatuaje en nuestra web y en Instagram si estás de acuerdo (art. 6.1.a RGPD). Puedes retirar tu consentimiento cuando quieras y quitaremos las fotos.",
            de: "Fotos deines Tattoos veröffentlichen wir auf unserer Website und auf Instagram nur, wenn du zustimmst (Art. 6 Abs. 1 lit. a DSGVO). Du kannst die Zustimmung jederzeit widerrufen, dann entfernen wir die Fotos.",
            en: "We only publish photos of your tattoo on our website and Instagram if you agree (Art. 6(1)(a) GDPR). You can withdraw your consent at any time and we will remove the photos.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "8. Cookies y Google Analytics",
          de: "8. Cookies und Google Analytics",
          en: "8. Cookies and Google Analytics",
        }),
        paragraphs: [
          tr(lang, {
            es: "Las cookies técnicamente necesarias se usan sin consentimiento. Todos los demás servicios solo se cargan si aceptas en el banner de cookies (§ 165.3 de la Ley austriaca de telecomunicaciones de 2021, art. 6.1.a RGPD). Puedes cambiar tu elección en cualquier momento desde el enlace «Ajustes de cookies» del pie de página.",
            de: "Technisch notwendige Cookies setzen wir ohne Einwilligung ein. Alle anderen Dienste laden wir erst, wenn du im Cookie-Banner zustimmst (§ 165 Abs. 3 TKG 2021, Art. 6 Abs. 1 lit. a DSGVO). Du kannst deine Auswahl jederzeit über den Link «Cookie-Einstellungen» im Footer ändern.",
            en: "We use technically necessary cookies without consent. All other services only load after you agree in the cookie banner (§ 165(3) Austrian Telecommunications Act 2021, Art. 6(1)(a) GDPR). You can change your choice at any time through the «Cookie settings» link in the footer.",
          }),
          tr(lang, {
            es: "Para el banner de cookies usamos Cookiebot (Usercentrics A/S, Dinamarca). Cookiebot guarda tu elección para que podamos demostrar tu consentimiento (art. 6.1.c en relación con el art. 7.1 RGPD).",
            de: "Für das Cookie-Banner nutzen wir Cookiebot (Usercentrics A/S, Dänemark). Cookiebot speichert deine Auswahl, damit wir nachweisen können, dass du zugestimmt hast (Art. 6 Abs. 1 lit. c i. V. m. Art. 7 Abs. 1 DSGVO).",
            en: "For the cookie banner we use Cookiebot (Usercentrics A/S, Denmark). Cookiebot stores your choice so we can prove your consent (Art. 6(1)(c) with Art. 7(1) GDPR).",
          }),
          tr(lang, {
            es: "Google Analytics 4 (Google Ireland Ltd.) nos muestra cómo se usa nuestra web, por ejemplo, qué páginas se visitan. Solo se carga después de tu consentimiento. Google acorta las direcciones IP y los datos se borran a los 14 meses.",
            de: "Google Analytics 4 (Google Ireland Ltd.) zeigt uns, wie unsere Website genutzt wird, z. B. welche Seiten besucht werden. Es wird nur nach deiner Einwilligung geladen. IP-Adressen werden von Google gekürzt; die Daten werden nach 14 Monaten gelöscht.",
            en: "Google Analytics 4 (Google Ireland Ltd.) shows us how our website is used, e.g. which pages are visited. It only loads after your consent. Google shortens IP addresses; the data is deleted after 14 months.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "9. Mapa",
          de: "9. Karte",
          en: "9. Map",
        }),
        paragraphs: [
          tr(lang, {
            es: "Para el mapa del estudio usamos Leaflet con datos de OpenStreetMap (OpenStreetMap Foundation, Reino Unido) y teselas de mapa de CARTO (CartoDB Inc., EE. UU.). Al cargarse el mapa, tu dirección IP se envía a CARTO. Base legal: interés legítimo en mostrar cómo llegar (art. 6.1.f RGPD). No accedemos a tu ubicación. Al pulsar el marcador se abre Google Maps en una pestaña nueva.",
            de: "Für die Karte zum Studio nutzen wir Leaflet mit Kartendaten von OpenStreetMap (OpenStreetMap Foundation, Vereinigtes Königreich) und Kartenkacheln von CARTO (CartoDB Inc., USA). Beim Laden der Karte wird deine IP-Adresse an CARTO übermittelt. Rechtsgrundlage: berechtigtes Interesse an einer übersichtlichen Anfahrtsbeschreibung (Art. 6 Abs. 1 lit. f DSGVO). Wir greifen nicht auf deinen Standort zu. Ein Klick auf die Markierung öffnet Google Maps in einem neuen Tab.",
            en: "For the map to our studio we use Leaflet with map data from OpenStreetMap (OpenStreetMap Foundation, United Kingdom) and map tiles from CARTO (CartoDB Inc., USA). When the map loads, your IP address is sent to CARTO. Legal basis: legitimate interest in clear directions (Art. 6(1)(f) GDPR). We don't access your location. Clicking the marker opens Google Maps in a new tab.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "10. Base de datos",
          de: "10. Datenbank",
          en: "10. Database",
        }),
        paragraphs: [
          tr(lang, {
            es: "El contenido de nuestro blog (y en el futuro de la sección de merch) se guarda en Supabase (Supabase Inc.), en servidores de la UE. Ahí no se guardan datos personales de quienes visitan la web.",
            de: "Die Inhalte unseres Blogs (und künftig unseres Merch-Bereichs) speichern wir bei Supabase (Supabase Inc.) auf Servern in der EU. Dort werden keine personenbezogenen Daten von Besucherinnen und Besuchern gespeichert.",
            en: "We store the content of our blog (and in future our merch section) with Supabase (Supabase Inc.) on servers in the EU. No personal data of visitors is stored there.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "11. Enlaces a Instagram y Google Maps",
          de: "11. Links zu Instagram und Google Maps",
          en: "11. Links to Instagram and Google Maps",
        }),
        paragraphs: [
          tr(lang, {
            es: "Instagram y Google Maps solo están enlazados, no integrados. Sus políticas de privacidad solo se aplican cuando pulsas un enlace.",
            de: "Instagram und Google Maps sind nur verlinkt, nicht eingebunden. Erst wenn du einen Link anklickst, gelten die Datenschutzbestimmungen dieser Anbieter.",
            en: "Instagram and Google Maps are only linked, not embedded. Their privacy policies only apply once you click a link.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "12. Transferencias fuera de la UE",
          de: "12. Übermittlung in Drittländer",
          en: "12. Transfers outside the EU",
        }),
        paragraphs: [
          tr(lang, {
            es: "Algunos proveedores (Cloudflare, Google, Meta, Resend y CARTO) pueden transferir datos a EE. UU. Esto se hace sobre la base del Marco de Privacidad de Datos UE-EE. UU. (art. 45 RGPD) o de cláusulas contractuales tipo de la UE (art. 46 RGPD).",
            de: "Einige Anbieter (Cloudflare, Google, Meta, Resend, CARTO) können Daten in die USA übermitteln. Das geschieht auf Grundlage des EU-US Data Privacy Framework (Art. 45 DSGVO) oder von EU-Standardvertragsklauseln (Art. 46 DSGVO).",
            en: "Some providers (Cloudflare, Google, Meta, Resend, CARTO) may transfer data to the USA. This is based on the EU-US Data Privacy Framework (Art. 45 GDPR) or EU Standard Contractual Clauses (Art. 46 GDPR).",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "13. Tus derechos",
          de: "13. Deine Rechte",
          en: "13. Your rights",
        }),
        paragraphs: [
          tr(lang, {
            es: "Tienes derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición, así como el derecho a retirar tu consentimiento en cualquier momento. Escríbenos a maleficium.tattoo@gmail.com.",
            de: "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie das Recht, eine Einwilligung jederzeit zu widerrufen. Schreib uns dafür an maleficium.tattoo@gmail.com.",
            en: "You have the right to access, rectification, erasure, restriction, data portability and objection, and the right to withdraw consent at any time. Just write to maleficium.tattoo@gmail.com.",
          }),
          tr(lang, {
            es: "También puedes reclamar ante la autoridad austriaca de protección de datos (Datenschutzbehörde): Barichgasse 40–42, 1030 Viena, www.dsb.gv.at.",
            de: "Du kannst dich auch bei der österreichischen Datenschutzbehörde beschweren: Barichgasse 40–42, 1030 Wien, www.dsb.gv.at.",
            en: "You can also complain to the Austrian Data Protection Authority: Barichgasse 40–42, 1030 Vienna, www.dsb.gv.at.",
          }),
        ],
      },
    ],

    updated: tr(lang, {
      es: "Última actualización: 4 de noviembre de 2026",
      de: "Stand: 4. November 2026",
      en: "Last updated: November 4, 2026",
    }),

    contact: tr(lang, {
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

        <h2 className="text-xl font-semibold mb-3">
          {t.controller}
        </h2>

        <p className="text-zinc-200 mb-8">
          {t.controllerText}
        </p>

        {t.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {section.title}
            </h2>

            <div className="space-y-3 text-zinc-200">
              {section.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
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
