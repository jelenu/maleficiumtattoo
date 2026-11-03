
import Link from "next/link";
import { Footer } from "@/components/layout";
import { getLang, tr } from "@/utils/i18n";

export default async function BookingTermsPage({
  params,
}: {
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;
  const lang = getLang(locale);
  const localePrefix = `/${lang}`;

  const t = {
    title: tr(lang, {
      es: "Condiciones de cita – Maleficium Tattoo Studio",
      de: "Terminbedingungen – Maleficium Tattoo Studio",
      en: "Booking Terms – Maleficium Tattoo Studio",
    }),

    intro: tr(lang, {
      es: "Estas condiciones valen para todas las citas en Maleficium Tattoo, excepto con Christoph (Epi), que trabaja de forma independiente y tiene sus propias condiciones.",
      de: "Diese Bedingungen gelten für alle Termine bei Maleficium Tattoo, außer bei Christoph (Epi), der selbstständig arbeitet und eigene Bedingungen hat.",
      en: "These terms apply to all appointments at Maleficium Tattoo, except with Christoph (Epi), who works independently and has his own terms.",
    }),

    sections: [
      {
        title: tr(lang, {
          es: "1. Cita y depósito",
          de: "1. Termin und Anzahlung",
          en: "1. Booking and deposit",
        }),
        items: [
          tr(lang, {
            es: "Puedes pedir cita por el formulario de contacto, Instagram o WhatsApp.",
            de: "Termine vereinbaren wir über das Kontaktformular, Instagram oder WhatsApp.",
            en: "You can book through the contact form, Instagram or WhatsApp.",
          }),
          tr(lang, {
            es: "El depósito depende del tatuaje (tamaño y trabajo).",
            de: "Die Höhe der Anzahlung hängt vom Tattoo ab (Größe und Aufwand).",
            en: "The deposit depends on the tattoo (size and amount of work).",
          }),
          tr(lang, {
            es: "El depósito se paga por transferencia bancaria. Después, mándanos una captura de la transferencia por WhatsApp.",
            de: "Die Anzahlung erfolgt per Banküberweisung. Bitte schick uns danach einen Screenshot der Überweisung per WhatsApp.",
            en: "The deposit is paid by bank transfer. Please send us a screenshot of the transfer on WhatsApp.",
          }),
          tr(lang, {
            es: "Tu cita solo queda confirmada cuando recibimos el depósito. Sin depósito no apuntamos la cita.",
            de: "Erst mit der Anzahlung ist dein Termin fix. Ohne Anzahlung tragen wir keinen Termin ein.",
            en: "Your appointment is only confirmed once we receive the deposit. Without a deposit, we don't book the date.",
          }),
          tr(lang, {
            es: "El depósito se descuenta del precio final. En tatuajes de varias sesiones, se descuenta de la última.",
            de: "Die Anzahlung wird vom Endpreis abgezogen. Bei Tattoos mit mehreren Sitzungen von der letzten Sitzung.",
            en: "The deposit is deducted from the final price. For tattoos with several sessions, it is deducted from the last session.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "2. Cambiar o cancelar la cita",
          de: "2. Termin verschieben oder absagen",
          en: "2. Rescheduling or cancelling",
        }),
        items: [
          tr(lang, {
            es: "Puedes cancelar o cambiar tu cita hasta 72 horas antes. Si cancelas a tiempo, te devolvemos el depósito.",
            de: "Du kannst deinen Termin bis 72 Stunden vorher absagen oder verschieben. Bei einer rechtzeitigen Absage bekommst du die Anzahlung zurück.",
            en: "You can cancel or reschedule your appointment up to 72 hours before. If you cancel in time, you get your deposit back.",
          }),
          tr(lang, {
            es: "Puedes cambiar tu cita dos veces. Si la cambias una tercera vez sin un motivo justificado, pierdes el depósito y necesitas uno nuevo para otra fecha.",
            de: "Du kannst deinen Termin zweimal verschieben. Beim dritten unbegründeten Verschieben verfällt die Anzahlung, und für einen neuen Termin ist eine neue Anzahlung nötig.",
            en: "You can reschedule twice. If you reschedule a third time without a valid reason, the deposit is lost and a new deposit is needed for a new date.",
          }),
          tr(lang, {
            es: "Si cancelas con menos de 72 horas, pierdes el depósito.",
            de: "Bei einer Absage weniger als 72 Stunden vorher verfällt die Anzahlung.",
            en: "If you cancel less than 72 hours before, the deposit is lost.",
          }),
          tr(lang, {
            es: "Excepción: enfermedad con justificante médico.",
            de: "Ausnahme: Krankheit mit ärztlicher Bestätigung.",
            en: "Exception: illness with a doctor's note.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "3. Retrasos y no presentarse",
          de: "3. Verspätung und Nichterscheinen",
          en: "3. Being late or not showing up",
        }),
        items: [
          tr(lang, {
            es: "Esperamos 30 minutos. Si no nos has avisado antes, la cita se cancela y pierdes el depósito.",
            de: "Wir warten 30 Minuten. Wenn du dich bis dahin nicht gemeldet hast, gilt der Termin als abgesagt und die Anzahlung verfällt.",
            en: "We wait 30 minutes. If you haven't contacted us by then, the appointment is cancelled and the deposit is lost.",
          }),
          tr(lang, {
            es: "Si no te presentas, también pierdes el depósito.",
            de: "Wenn du nicht erscheinst, verfällt die Anzahlung ebenfalls.",
            en: "If you don't show up, the deposit is also lost.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "4. Si cancelamos nosotros",
          de: "4. Absage durch uns",
          en: "4. If we cancel",
        }),
        items: [
          tr(lang, {
            es: "Si tenemos que cancelar, te ofrecemos una nueva fecha o la devolución del depósito.",
            de: "Wenn wir einen Termin absagen müssen, bieten wir dir einen neuen Termin oder die Rückzahlung der Anzahlung an.",
            en: "If we have to cancel, we offer you a new date or a refund of your deposit.",
          }),
          tr(lang, {
            es: "Si el artista está enfermo, cambiamos la cita a otra fecha.",
            de: "Wenn der Künstler krank ist, verschieben wir den Termin.",
            en: "If the artist is ill, we move your appointment to a new date.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "5. Diseño",
          de: "5. Design",
          en: "5. Design",
        }),
        items: [
          tr(lang, {
            es: "Solo empezamos a dibujar cuando el depósito está pagado. Unos días antes de la cita te enseñamos un esbozo. Cuándo exactamente y cuántos cambios caben depende del diseño y del artista.",
            de: "Wir zeichnen erst, wenn die Anzahlung da ist. Ein paar Tage vor dem Termin zeigen wir dir eine Skizze. Wann genau und wie viele Änderungen möglich sind, hängt vom Design und vom Künstler ab.",
            en: "We only start drawing once the deposit is paid. A few days before your appointment, we show you a sketch. When exactly and how many changes are possible depends on the design and the artist.",
          }),
          tr(lang, {
            es: "Cada diseño pertenece al artista que lo ha dibujado. No se puede compartir ni tatuar en otro estudio.",
            de: "Jedes Design gehört dem Künstler, der es gezeichnet hat. Es darf nicht weitergegeben oder in einem anderen Studio gestochen werden.",
            en: "Every design belongs to the artist who drew it. It may not be shared or tattooed at another studio.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "6. Precio y pago",
          de: "6. Preis und Bezahlung",
          en: "6. Price and payment",
        }),
        items: [
          tr(lang, {
            es: "Normalmente trabajamos con un precio cerrado por sesión. Al final también depende de cuánto tiempo tatuemos.",
            de: "Wir arbeiten meist mit einem Fixpreis pro Sitzung. Am Ende hängt er auch davon ab, wie lange wir tätowieren.",
            en: "We usually work with a fixed price per session. In the end, it also depends on how long we tattoo.",
          }),
          tr(lang, {
            es: "Por ahora, en el estudio solo aceptamos pago en efectivo.",
            de: "Im Studio ist derzeit nur Barzahlung möglich.",
            en: "At the moment, we only accept cash at the studio.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "7. El día de la cita",
          de: "7. Am Tag des Termins",
          en: "7. On the day",
        }),
        items: [
          tr(lang, {
            es: "Solo tatuamos a mayores de 18 años. Trae un documento de identidad oficial.",
            de: "Wir tätowieren nur Personen ab 18 Jahren. Bitte bring einen amtlichen Ausweis mit.",
            en: "We only tattoo people aged 18 or over. Please bring an official ID.",
          }),
          tr(lang, {
            es: "Acompañantes solo si el artista lo confirma antes.",
            de: "Begleitpersonen nur nach Rücksprache mit dem Künstler.",
            en: "Companions only after checking with the artist.",
          }),
          tr(lang, {
            es: "No tatuamos bajo los efectos del alcohol, durante el embarazo o la lactancia, símbolos que representen odio (a criterio del artista), ni en ningún caso que no permita la ley austriaca.",
            de: "Wir tätowieren nicht: unter Alkoholeinfluss, während Schwangerschaft oder Stillzeit, Symbole, die Hass darstellen (nach Einschätzung des Künstlers), und in keinem Fall, in dem es nach österreichischem Recht nicht erlaubt ist.",
            en: "We don't tattoo: under the influence of alcohol, during pregnancy or breastfeeding, symbols that represent hate (at the artist's discretion), or in any case not allowed under Austrian law.",
          }),
        ],
      },
      {
        title: tr(lang, {
          es: "8. Retoques",
          de: "8. Nachstechen",
          en: "8. Touch-ups",
        }),
        items: [
          tr(lang, {
            es: "El retoque es gratis entre el primer y el segundo mes después del tatuaje, según el criterio del artista que lo hizo.",
            de: "Ein Nachstechen ist zwischen dem ersten und zweiten Monat nach dem Tattoo kostenlos, nach Einschätzung des Künstlers, der es gestochen hat.",
            en: "A touch-up is free between the first and second month after the tattoo, at the discretion of the artist who did it.",
          }),
        ],
      },
    ],

    updatedLabel: tr(lang, {
      es: "Última actualización",
      de: "Stand",
      en: "Last updated",
    }),

    updatedDate: tr(lang, {
    es: "3 de noviembre de 2026",
    de: "3. November 2026",
    en: "November 3, 2026",
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

        <p className="text-zinc-200 mb-8">
          {t.intro}
        </p>

        {t.sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {section.title}
            </h2>

            <ul className="list-disc list-inside space-y-2 text-zinc-200">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

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
