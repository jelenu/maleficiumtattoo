
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
      es: "A través del formulario de contacto recogemos los datos personales que nos facilitas voluntariamente para poder responder a tus consultas:",
      de: "Über das Kontaktformular erheben wir die personenbezogenen Daten, die Sie uns freiwillig mitteilen, damit wir Ihre Anfragen beantworten können:",
      en: "Through our contact form, we collect the personal data you voluntarily provide so that we can respond to your inquiries:",
    }),

    s1Items: [
      tr(lang, {
        es: "Nombre y apellidos.",
        de: "Vor- und Nachname.",
        en: "Full name.",
      }),
      tr(lang, {
        es: "Dirección de correo electrónico.",
        de: "E-Mail-Adresse.",
        en: "Email address.",
      }),
      tr(lang, {
        es: "Contenido del mensaje y cualquier información que decidas incluir en él.",
        de: "Inhalt der Nachricht und alle weiteren Informationen, die Sie darin angeben.",
        en: "Message content and any additional information you choose to include.",
      }),
    ],

    s1Note: tr(lang, {
      es: "Asimismo, mediante Google Analytics y Cloudflare Insights podemos recopilar información técnica y estadística relacionada con el uso y el rendimiento de nuestra web, como páginas visitadas, datos de navegación, tipo de dispositivo, navegador e información de interacción. Google Analytics se utiliza de acuerdo con las preferencias de consentimiento seleccionadas por el usuario. El funcionamiento de Cloudflare Insights está sujeto a la configuración técnica y de consentimiento aplicable.",
      de: "Darüber hinaus können wir über Google Analytics und Cloudflare Insights technische und statistische Informationen über die Nutzung und Leistung unserer Website erfassen, beispielsweise besuchte Seiten, Navigationsdaten, Gerätetyp, Browser und Interaktionsinformationen. Google Analytics wird entsprechend den vom Nutzer ausgewählten Einwilligungseinstellungen verwendet. Die Nutzung von Cloudflare Insights richtet sich nach den geltenden technischen Einstellungen und Einwilligungsanforderungen.",
      en: "Additionally, through Google Analytics and Cloudflare Insights, we may collect technical and statistical information relating to the use and performance of our website, such as pages visited, browsing data, device type, browser and interaction information. Google Analytics is used according to the user's selected consent preferences. Cloudflare Insights operates subject to the applicable technical and consent settings.",
    }),

    s1Internal: tr(lang, {
      es: "También utilizamos Supabase para gestionar y almacenar determinados datos internos necesarios para el funcionamiento de nuestros sistemas. Estos datos pueden incluir información operativa del estudio y no necesariamente corresponden a información facilitada por los visitantes de la página web.",
      de: "Wir verwenden außerdem Supabase zur Verwaltung und Speicherung bestimmter interner Daten, die für den Betrieb unserer Systeme erforderlich sind. Diese Daten können betriebliche Informationen des Studios umfassen und entsprechen nicht notwendigerweise Informationen, die von Besuchern der Website bereitgestellt wurden.",
      en: "We also use Supabase to manage and store certain internal data required for the operation of our systems. These data may include operational information relating to the studio and do not necessarily correspond to information provided by website visitors.",
    }),

    s2Title: tr(lang, {
      es: "2. Finalidad y base legal del tratamiento",
      de: "2. Zweck und Rechtsgrundlage der Verarbeitung",
      en: "2. Purpose and legal basis",
    }),

    s2P1: tr(lang, {
      es: "Los datos enviados mediante el formulario de contacto se utilizan para gestionar y responder a tus consultas, solicitudes de información, presupuestos y posibles solicitudes de cita.",
      de: "Die über das Kontaktformular übermittelten Daten werden zur Bearbeitung und Beantwortung Ihrer Anfragen, Informations- und Angebotsanfragen sowie möglicher Terminanfragen verwendet.",
      en: "Data submitted through the contact form is used to manage and respond to inquiries, requests for information, quotations and potential appointment requests.",
    }),

    s2Bases: [
      tr(lang, {
        es: "Consultas y solicitudes de cita: aplicación de medidas precontractuales solicitadas por el interesado o, cuando corresponda, interés legítimo en gestionar y responder a las comunicaciones recibidas (art. 6.1.b y 6.1.f RGPD, según el caso).",
        de: "Anfragen und Terminanfragen: Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person oder, soweit zutreffend, berechtigtes Interesse an der Bearbeitung und Beantwortung eingehender Mitteilungen (Art. 6 Abs. 1 lit. b und f DSGVO, je nach Fall).",
        en: "Inquiries and appointment requests: taking pre-contractual steps at the request of the data subject or, where applicable, legitimate interest in managing and responding to communications received (Art. 6(1)(b) and (f) GDPR, as applicable).",
      }),
      tr(lang, {
        es: "Google Analytics y tecnologías no esenciales: consentimiento previo del usuario cuando sea legalmente necesario (art. 6.1.a RGPD).",
        de: "Google Analytics und nicht notwendige Technologien: vorherige Einwilligung des Nutzers, soweit gesetzlich erforderlich (Art. 6 Abs. 1 lit. a DSGVO).",
        en: "Google Analytics and non-essential technologies: the user's prior consent where legally required (Art. 6(1)(a) GDPR).",
      }),
      tr(lang, {
        es: "Gestión de sistemas internos: la base jurídica dependerá de la naturaleza de los datos y de la finalidad concreta de cada tratamiento.",
        de: "Verwaltung interner Systeme: Die Rechtsgrundlage richtet sich nach der Art der Daten und dem konkreten Zweck der jeweiligen Verarbeitung.",
        en: "Internal systems management: the legal basis depends on the nature of the data and the specific purpose of each processing activity.",
      }),
    ],

    s3Title: tr(lang, {
      es: "3. Conservación de los datos",
      de: "3. Aufbewahrung der Daten",
      en: "3. Data retention",
    }),

    s3P1: tr(lang, {
      es: "Los datos enviados mediante el formulario de contacto se conservarán durante el tiempo necesario para gestionar y responder a tu consulta. Posteriormente, podrán conservarse durante los plazos exigidos por las obligaciones legales aplicables o para atender posibles responsabilidades.",
      de: "Die über das Kontaktformular übermittelten Daten werden so lange gespeichert, wie es zur Bearbeitung und Beantwortung Ihrer Anfrage erforderlich ist. Anschließend können sie für die Dauer gesetzlicher Aufbewahrungspflichten oder zur Geltendmachung beziehungsweise Abwehr möglicher Ansprüche gespeichert werden.",
      en: "Data submitted through the contact form will be retained for as long as necessary to manage and respond to your inquiry. Afterwards, it may be retained for periods required by applicable legal obligations or to address potential liabilities.",
    }),

    s3P2: tr(lang, {
      es: "Los datos estadísticos recopilados mediante Google Analytics se conservarán durante el periodo configurado en nuestra cuenta de Google Analytics. Los plazos pueden variar según la configuración del servicio.",
      de: "Die über Google Analytics erhobenen statistischen Daten werden entsprechend der in unserem Google-Analytics-Konto festgelegten Aufbewahrungsdauer gespeichert. Die Fristen können je nach Dienstkonfiguration variieren.",
      en: "Statistical data collected through Google Analytics will be retained according to the retention period configured in our Google Analytics account. These periods may vary depending on the service configuration.",
    }),

    s3P3: tr(lang, {
      es: "Los datos gestionados mediante Supabase y los mensajes procesados mediante Resend se conservarán durante el tiempo necesario para las finalidades correspondientes y de acuerdo con las configuraciones de los servicios y nuestras obligaciones legales.",
      de: "Die über Supabase verwalteten Daten und die über Resend verarbeiteten Nachrichten werden so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist, unter Berücksichtigung der Dienstkonfigurationen und unserer gesetzlichen Verpflichtungen.",
      en: "Data managed through Supabase and messages processed through Resend will be retained for as long as necessary for the relevant purposes, taking into account service configurations and our legal obligations.",
    }),

    s4Title: tr(lang, {
      es: "4. Destinatarios y proveedores de servicios",
      de: "4. Empfänger und Dienstleister",
      en: "4. Data recipients and service providers",
    }),

    s4P1: tr(lang, {
      es: "No vendemos tus datos personales ni los cedemos a terceros con fines comerciales. Sin embargo, utilizamos proveedores tecnológicos necesarios para el funcionamiento de nuestra web y nuestros sistemas internos. Estos proveedores pueden tratar datos personales cuando sea necesario para prestar sus servicios.",
      de: "Wir verkaufen Ihre personenbezogenen Daten nicht und geben sie nicht zu kommerziellen Zwecken an Dritte weiter. Wir nutzen jedoch technische Dienstleister, die für den Betrieb unserer Website und unserer internen Systeme erforderlich sind. Diese Anbieter können personenbezogene Daten verarbeiten, soweit dies zur Erbringung ihrer Dienstleistungen notwendig ist.",
      en: "We do not sell your personal data or disclose it to third parties for commercial purposes. However, we use technology providers necessary for the operation of our website and internal systems. These providers may process personal data where necessary to provide their services.",
    }),

    s4Items: [
      tr(lang, {
        es: "Google Analytics (Google): servicio de análisis estadístico que permite conocer cómo se utiliza nuestra web y mejorar su funcionamiento.",
        de: "Google Analytics (Google): Analysedienst, der uns hilft, die Nutzung unserer Website zu verstehen und deren Funktion zu verbessern.",
        en: "Google Analytics (Google): analytics service that helps us understand how our website is used and improve its performance.",
      }),
      tr(lang, {
        es: "Cloudflare Insights (Cloudflare): servicio de análisis técnico y estadístico que proporciona información sobre el tráfico, el rendimiento y el uso de nuestra web.",
        de: "Cloudflare Insights (Cloudflare): technischer Analyse- und Statistikdienst, der Informationen über Datenverkehr, Leistung und Nutzung unserer Website bereitstellt.",
        en: "Cloudflare Insights (Cloudflare): technical analytics service providing information about website traffic, performance and usage.",
      }),
      tr(lang, {
        es: "Cookiebot: plataforma de gestión del consentimiento que permite mostrar el aviso de cookies, gestionar las preferencias y registrar las decisiones de los usuarios.",
        de: "Cookiebot: Plattform zur Verwaltung von Einwilligungen, die den Cookie-Hinweis anzeigt, Einstellungen verwaltet und Nutzerentscheidungen dokumentiert.",
        en: "Cookiebot: consent management platform that displays the cookie notice, manages preferences and records users' consent choices.",
      }),
      tr(lang, {
        es: "Resend: servicio de envío de correos electrónicos utilizado para gestionar los mensajes enviados mediante el formulario de contacto. Puede tratar datos incluidos en dichos mensajes, como el nombre, la dirección de correo electrónico y el contenido de la consulta.",
        de: "Resend: E-Mail-Versanddienst zur Verwaltung der über das Kontaktformular gesendeten Nachrichten. Dabei können in diesen Nachrichten enthaltene Daten wie Name, E-Mail-Adresse und Inhalt der Anfrage verarbeitet werden.",
        en: "Resend: email delivery service used to manage messages submitted through the contact form. It may process data included in those messages, such as name, email address and inquiry content.",
      }),
      tr(lang, {
        es: "Supabase: infraestructura tecnológica utilizada para gestionar y almacenar determinados datos internos necesarios para el funcionamiento de nuestros sistemas.",
        de: "Supabase: technische Infrastruktur zur Verwaltung und Speicherung bestimmter interner Daten, die für den Betrieb unserer Systeme erforderlich sind.",
        en: "Supabase: technology infrastructure used to manage and store certain internal data required for the operation of our systems.",
      }),
      tr(lang, {
        es: "OpenStreetMap: proporciona los datos cartográficos utilizados para mostrar nuestro mapa.",
        de: "OpenStreetMap: stellt die Kartendaten bereit, die zur Anzeige unserer Karte verwendet werden.",
        en: "OpenStreetMap: provides the map data used to display our map.",
      }),
      tr(lang, {
        es: "CARTO: proporciona los mosaicos cartográficos que permiten visualizar el mapa.",
        de: "CARTO: stellt die Kartenkacheln bereit, die zur Darstellung unserer Karte verwendet werden.",
        en: "CARTO: provides the map tiles used to display the map.",
      }),
      tr(lang, {
        es: "unpkg: servicio CDN desde el que se carga la hoja de estilos de Leaflet.",
        de: "unpkg: CDN-Dienst, über den das Stylesheet von Leaflet geladen wird.",
        en: "unpkg: CDN service used to load the Leaflet stylesheet.",
      }),
      tr(lang, {
        es: "Proveedores de alojamiento web y servicios técnicos necesarios para mantener y proteger nuestra página web.",
        de: "Hosting-Anbieter und technische Dienstleister, die für den Betrieb und den Schutz unserer Website erforderlich sind.",
        en: "Web hosting providers and technical services necessary to maintain and protect our website.",
      }),
    ],

    s4P2: tr(lang, {
      es: "Los proveedores pueden tratar datos personales de acuerdo con sus propias condiciones de servicio y, cuando corresponda, con los acuerdos de tratamiento de datos aplicables. Algunos proveedores pueden estar ubicados fuera del Espacio Económico Europeo o tratar datos desde otros países. Cuando se produzcan transferencias internacionales, se deberán aplicar las garantías exigidas por el RGPD.",
      de: "Die Anbieter können personenbezogene Daten gemäß ihren jeweiligen Dienstleistungsbedingungen und gegebenenfalls den geltenden Auftragsverarbeitungsverträgen verarbeiten. Einige Anbieter können außerhalb des Europäischen Wirtschaftsraums ansässig sein oder Daten aus anderen Ländern verarbeiten. Bei internationalen Datenübermittlungen müssen die von der DSGVO vorgeschriebenen Garantien angewendet werden.",
      en: "Providers may process personal data under their respective service terms and, where applicable, relevant data processing agreements. Some providers may be located outside the European Economic Area or process data from other countries. Where international transfers occur, the safeguards required by the GDPR must be applied.",
    }),

    s5Title: tr(lang, {
      es: "5. Derechos de los usuarios",
      de: "5. Rechte der Nutzer",
      en: "5. Your rights",
    }),

    s5Intro: tr(lang, {
      es: "De acuerdo con la normativa de protección de datos, tienes derecho a:",
      de: "Gemäß den Datenschutzvorschriften haben Sie das Recht auf:",
      en: "Under applicable data protection law, you have the right to:",
    }),

    s5Items: [
      tr(lang, {
        es: "Acceder a tus datos personales.",
        de: "Auskunft über Ihre personenbezogenen Daten zu erhalten.",
        en: "Access your personal data.",
      }),
      tr(lang, {
        es: "Solicitar la rectificación de datos inexactos o incompletos.",
        de: "Die Berichtigung unrichtiger oder unvollständiger Daten zu verlangen.",
        en: "Request correction of inaccurate or incomplete data.",
      }),
      tr(lang, {
        es: "Solicitar la supresión de tus datos cuando corresponda.",
        de: "Die Löschung Ihrer Daten zu verlangen, sofern die Voraussetzungen erfüllt sind.",
        en: "Request deletion of your data where applicable.",
      }),
      tr(lang, {
        es: "Solicitar la limitación del tratamiento.",
        de: "Die Einschränkung der Verarbeitung zu verlangen.",
        en: "Request restriction of processing.",
      }),
      tr(lang, {
        es: "Oponerte al tratamiento cuando la normativa lo permita.",
        de: "Der Verarbeitung zu widersprechen, soweit dies gesetzlich vorgesehen ist.",
        en: "Object to processing where permitted by law.",
      }),
      tr(lang, {
        es: "Solicitar la portabilidad de tus datos cuando sea aplicable.",
        de: "Die Datenübertragbarkeit zu verlangen, sofern anwendbar.",
        en: "Request data portability where applicable.",
      }),
      tr(lang, {
        es: "Retirar tu consentimiento en cualquier momento cuando el tratamiento se base en él, sin que ello afecte a la licitud del tratamiento anterior.",
        de: "Ihre Einwilligung jederzeit zu widerrufen, sofern die Verarbeitung darauf beruht, ohne dass die Rechtmäßigkeit der vorherigen Verarbeitung berührt wird.",
        en: "Withdraw your consent at any time when processing is based on it, without affecting the lawfulness of prior processing.",
      }),
    ],

    s5HowTo: tr(lang, {
      es: "Para ejercer tus derechos, puedes enviar una solicitud a [tu-email@ejemplo.com]. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): https://www.aepd.es.",
      de: "Zur Ausübung Ihrer Rechte senden Sie bitte eine Anfrage an [your-email@example.com]. Außerdem können Sie sich bei der zuständigen Datenschutzaufsichtsbehörde beschweren.",
      en: "To exercise your rights, please send a request to [your-email@example.com]. You may also lodge a complaint with your relevant data protection authority.",
    }),

    s6Title: tr(lang, {
      es: "6. Cookies y tecnologías similares",
      de: "6. Cookies und ähnliche Technologien",
      en: "6. Cookies and similar technologies",
    }),

    s6P1: tr(lang, {
      es: "Nuestra web utiliza cookies y tecnologías similares propias y de terceros para garantizar su funcionamiento y, cuando corresponda y exista consentimiento, analizar el tráfico y mejorar la experiencia de navegación.",
      de: "Unsere Website verwendet eigene und Drittanbieter-Cookies sowie ähnliche Technologien, um ihre Funktion zu gewährleisten und, sofern erforderlich und eine Einwilligung vorliegt, den Datenverkehr zu analysieren und das Surferlebnis zu verbessern.",
      en: "Our website uses first-party and third-party cookies and similar technologies to ensure its functionality and, where applicable and with consent, analyze traffic and improve the browsing experience.",
    }),

    s6P2: tr(lang, {
      es: "Google Analytics se utiliza para obtener estadísticas sobre el uso de nuestra página web. Puede utilizar cookies y tecnologías similares para recopilar información sobre las visitas, las páginas consultadas, el dispositivo y la interacción con el sitio web.",
      de: "Google Analytics wird verwendet, um Statistiken über die Nutzung unserer Website zu erhalten. Der Dienst kann Cookies und ähnliche Technologien einsetzen, um Informationen über Besuche, aufgerufene Seiten, Geräte und Interaktionen mit der Website zu erfassen.",
      en: "Google Analytics is used to obtain statistics about the use of our website. It may use cookies and similar technologies to collect information about visits, pages viewed, devices and interactions with the website.",
    }),

    s6P3: tr(lang, {
      es: "Utilizamos Cookiebot como plataforma de gestión del consentimiento. Cookiebot permite mostrar el banner de cookies, informar sobre las tecnologías utilizadas y permitirte aceptar, rechazar o configurar las distintas categorías.",
      de: "Wir verwenden Cookiebot als Plattform zur Verwaltung von Einwilligungen. Cookiebot zeigt den Cookie-Banner an, informiert über die verwendeten Technologien und ermöglicht es Ihnen, die verschiedenen Kategorien zu akzeptieren, abzulehnen oder individuell einzustellen.",
      en: "We use Cookiebot as our consent management platform. Cookiebot displays the cookie banner, provides information about the technologies used and allows you to accept, reject or configure the different categories.",
    }),

    s6P4: tr(lang, {
      es: "Según la configuración de nuestro sitio, Google Analytics se carga cuando Cookiebot confirma el consentimiento para la categoría de estadísticas. Las tecnologías no esenciales que requieran consentimiento no deben activarse antes de obtenerlo. La configuración efectiva de cada proveedor puede consultarse en el panel de preferencias.",
      de: "Gemäß der Konfiguration unserer Website wird Google Analytics geladen, sobald Cookiebot die Einwilligung für die Kategorie Statistik bestätigt. Nicht notwendige Technologien, für die eine Einwilligung erforderlich ist, dürfen erst nach deren Erteilung aktiviert werden. Die tatsächliche Konfiguration der einzelnen Anbieter kann im Einstellungsbereich eingesehen werden.",
      en: "According to our website configuration, Google Analytics loads when Cookiebot confirms consent for the statistics category. Non-essential technologies requiring consent must not be activated before consent is obtained. The actual configuration of each provider can be checked in the preference panel.",
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
      es: "7. Mapa interactivo (Leaflet, OpenStreetMap y CARTO)",
      de: "7. Interaktive Karte (Leaflet, OpenStreetMap und CARTO)",
      en: "7. Interactive map (Leaflet, OpenStreetMap and CARTO)",
    }),

    s7P1: tr(lang, {
      es: "Nuestra web utiliza un mapa interactivo basado en Leaflet para mostrar la ubicación fija de nuestro estudio de tatuajes. El mapa utiliza datos cartográficos de OpenStreetMap y mosaicos proporcionados por CARTO.",
      de: "Unsere Website verwendet eine interaktive Karte auf Basis von Leaflet, um den festen Standort unseres Tattoo-Studios anzuzeigen. Die Karte verwendet Kartendaten von OpenStreetMap und Kartenkacheln von CARTO.",
      en: "Our website uses an interactive map based on Leaflet to display the fixed location of our tattoo studio. The map uses map data from OpenStreetMap and map tiles provided by CARTO.",
    }),

    s7P2: tr(lang, {
      es: "Cuando se carga el mapa, el navegador establece conexiones con los servidores de estos proveedores para descargar los recursos necesarios y mostrar los mosaicos cartográficos. Durante este proceso pueden transmitirse datos técnicos, como la dirección IP, información del navegador y datos de conexión.",
      de: "Beim Laden der Karte stellt der Browser Verbindungen zu den Servern dieser Anbieter her, um die erforderlichen Ressourcen und Kartenkacheln herunterzuladen. Dabei können technische Daten wie die IP-Adresse, Browserinformationen und Verbindungsdaten übertragen werden.",
      en: "When the map loads, the browser connects to these providers' servers to download the necessary resources and map tiles. During this process, technical information such as your IP address, browser information and connection data may be transmitted.",
    }),

    s7P3: tr(lang, {
      es: "No solicitamos ni utilizamos la ubicación GPS del dispositivo del visitante mediante este mapa. La ubicación que aparece es la dirección fija de nuestro estudio.",
      de: "Wir fragen den GPS-Standort des Geräts des Besuchers über diese Karte weder ab noch verwenden wir ihn. Angezeigt wird ausschließlich der feste Standort unseres Studios.",
      en: "We do not request or use the visitor's device GPS location through this map. The location displayed is the fixed location of our studio.",
    }),

    s7P4: tr(lang, {
      es: "Si haces clic en el marcador del mapa, se abrirá Google Maps en una nueva pestaña para que puedas consultar cómo llegar a nuestro estudio. Esta acción te dirige a un servicio externo de Google, que tratará los datos conforme a su propia política de privacidad. Google Maps no está incrustado dentro de nuestro mapa.",
      de: "Wenn Sie auf den Kartenmarker klicken, wird Google Maps in einem neuen Tab geöffnet, damit Sie eine Wegbeschreibung zu unserem Studio abrufen können. Dabei werden Sie zu einem externen Google-Dienst weitergeleitet, der Daten gemäß seiner eigenen Datenschutzerklärung verarbeitet. Google Maps ist nicht in unsere Karte eingebettet.",
      en: "If you click the map marker, Google Maps will open in a new tab so you can get directions to our studio. This takes you to an external Google service, which processes data according to its own privacy policy. Google Maps is not embedded in our map.",
    }),

    s7P5: tr(lang, {
      es: "Más información sobre los servicios utilizados: OpenStreetMap (https://osmfoundation.org/wiki/Privacy_Policy), CARTO (https://carto.com/privacy/) y Google (https://policies.google.com/privacy).",
      de: "Weitere Informationen zu den verwendeten Diensten: OpenStreetMap (https://osmfoundation.org/wiki/Privacy_Policy), CARTO (https://carto.com/privacy/) und Google (https://policies.google.com/privacy).",
      en: "Further information about the services used: OpenStreetMap (https://osmfoundation.org/wiki/Privacy_Policy), CARTO (https://carto.com/privacy/) and Google (https://policies.google.com/privacy).",
    }),

    s8Title: tr(lang, {
      es: "8. Enlaces a servicios externos",
      de: "8. Links zu externen Diensten",
      en: "8. Links to external services",
    }),

    s8P1: tr(lang, {
      es: "Nuestra web puede contener enlaces a servicios externos, como Instagram y Google Maps. Estos servicios no están integrados directamente en nuestra página web mediante publicaciones o mapas incrustados. Al hacer clic en dichos enlaces, accederás a plataformas externas que tratarán tus datos conforme a sus propias políticas de privacidad. Te recomendamos consultarlas antes de utilizar esos servicios.",
      de: "Unsere Website kann Links zu externen Diensten wie Instagram und Google Maps enthalten. Diese Dienste sind nicht durch eingebettete Beiträge oder Karten direkt in unsere Website integriert. Wenn Sie auf diese Links klicken, gelangen Sie zu externen Plattformen, die Ihre Daten gemäß ihren eigenen Datenschutzerklärungen verarbeiten. Wir empfehlen Ihnen, diese vor der Nutzung der Dienste zu lesen.",
      en: "Our website may contain links to external services such as Instagram and Google Maps. These services are not directly embedded into our website through posts or maps. When you click these links, you access external platforms that process your data according to their own privacy policies. We recommend reviewing those policies before using these services.",
    }),

    s8P2: tr(lang, {
      es: "Instagram es un servicio de Meta Platforms. Puedes consultar su política de privacidad en https://privacycenter.instagram.com/policy/. La política de privacidad de Google está disponible en https://policies.google.com/privacy.",
      de: "Instagram ist ein Dienst von Meta Platforms. Die Datenschutzerklärung finden Sie unter https://privacycenter.instagram.com/policy/. Die Datenschutzerklärung von Google ist unter https://policies.google.com/privacy verfügbar.",
      en: "Instagram is a service provided by Meta Platforms. Its privacy policy is available at https://privacycenter.instagram.com/policy/. Google's privacy policy is available at https://policies.google.com/privacy.",
    }),

    s9Title: tr(lang, {
      es: "9. Seguridad de los datos",
      de: "9. Datensicherheit",
      en: "9. Data security",
    }),

    s9P1: tr(lang, {
      es: "Implementamos medidas técnicas y organizativas adecuadas para proteger los datos personales frente a pérdidas, accesos no autorizados, divulgación o modificaciones indebidas. No obstante, ningún sistema de transmisión o almacenamiento de datos puede garantizar una seguridad absoluta.",
      de: "Wir setzen geeignete technische und organisatorische Maßnahmen ein, um personenbezogene Daten vor Verlust, unbefugtem Zugriff, Offenlegung oder unzulässigen Änderungen zu schützen. Dennoch kann kein System zur Datenübertragung oder Speicherung absolute Sicherheit gewährleisten.",
      en: "We implement appropriate technical and organizational measures to protect personal data against loss, unauthorized access, disclosure or improper modification. However, no data transmission or storage system can guarantee absolute security.",
    }),

    s10Title: tr(lang, {
      es: "10. Cambios en la política de privacidad",
      de: "10. Änderungen dieser Datenschutzerklärung",
      en: "10. Changes to this privacy policy",
    }),

    s10P1: tr(lang, {
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

        <p className="text-zinc-200 mb-3">{t.s1Note}</p>
        <p className="text-zinc-200 mb-8">{t.s1Internal}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s2Title}</h2>
        <p className="text-zinc-200 mb-2">{t.s2P1}</p>

        <ul className="list-disc list-inside space-y-2 text-zinc-200 mb-8">
          {t.s2Bases.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">{t.s3Title}</h2>
        <p className="text-zinc-200 mb-2">{t.s3P1}</p>
        <p className="text-zinc-200 mb-2">{t.s3P2}</p>
        <p className="text-zinc-200 mb-8">{t.s3P3}</p>

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
        <p className="text-zinc-200 mb-3">{t.s7P1}</p>
        <p className="text-zinc-200 mb-3">{t.s7P2}</p>
        <p className="text-zinc-200 mb-3">{t.s7P3}</p>
        <p className="text-zinc-200 mb-3">{t.s7P4}</p>
        <p className="text-zinc-200 mb-8">{t.s7P5}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s8Title}</h2>
        <p className="text-zinc-200 mb-3">{t.s8P1}</p>
        <p className="text-zinc-200 mb-8">{t.s8P2}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s9Title}</h2>
        <p className="text-zinc-200 mb-8">{t.s9P1}</p>

        <h2 className="text-2xl font-semibold mb-3">{t.s10Title}</h2>
        <p className="text-zinc-200 mb-6">{t.s10P1}</p>

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
