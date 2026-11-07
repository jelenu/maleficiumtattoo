
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
            es: "El depósito se descuenta del precio final. En tatuajes de varias sesiones, se descuenta de la última sesión.",
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
            es: "Puedes cancelar o cambiar tu cita gratis hasta 48 horas antes. Si cancelas a tiempo, te devolvemos el depósito.",
            de: "Du kannst deinen Termin bis 48 Stunden vorher kostenlos absagen oder verschieben. Bei einer rechtzeitigen Absage bekommst du die Anzahlung zurück.",
            en: "You can cancel or reschedule your appointment free of charge up to 48 hours before. If you cancel in time, you get your deposit back.",
          }),
          tr(lang, {
            es: "Puedes cambiar tu cita dos veces. Si la cambias una tercera vez sin un motivo justificado, pierdes el depósito y necesitas uno nuevo para otra fecha.",
            de: "Du kannst deinen Termin zweimal verschieben. Beim dritten unbegründeten Verschieben verfällt die Anzahlung, und für einen neuen Termin ist eine neue Anzahlung nötig.",
            en: "You can reschedule twice. If you reschedule a third time without a valid reason, the deposit is lost and a new deposit is needed for a new date.",
          }),
          tr(lang, {
            es: "Si cancelas con menos de 48 horas de antelación o no te presentas, nos quedamos el depósito como compensación por el tiempo reservado y el diseño ya realizado.",
            de: "Bei einer Absage weniger als 48 Stunden vorher oder wenn du nicht erscheinst, behalten wir die Anzahlung als Entschädigung für den reservierten Termin und den bereits erstellten Entwurf ein.",
            en: "If you cancel less than 48 hours before your appointment or don't show up, we keep the deposit as compensation for the reserved appointment and the design already drawn.",
          }),
          tr(lang, {
            es: "Esto no se aplica si podemos ofrecer la cita a otra persona, si acreditas un motivo importante (por ejemplo, enfermedad con justificante médico) o si demuestras que no hemos sufrido ningún perjuicio o que este ha sido menor.",
            de: "Das gilt nicht, wenn wir den Termin anderweitig vergeben können, wenn du einen wichtigen Grund nachweist (z. B. Krankheit mit ärztlicher Bestätigung), oder wenn du nachweist, dass uns kein oder ein geringerer Schaden entstanden ist.",
            en: "This does not apply if we can give the appointment to someone else, if you prove an important reason (e.g. illness with a doctor's note), or if you prove that we suffered no loss or a smaller loss.",
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
            es: "Esperamos 30 minutos. Si no nos has avisado antes, la cita se considera cancelada.",
            de: "Wir warten 30 Minuten. Wenn du dich bis dahin nicht gemeldet hast, gilt der Termin als abgesagt.",
            en: "We wait 30 minutes. If you haven't contacted us by then, the appointment is considered cancelled.",
          }),
          tr(lang, {
            es: "Si no te presentas, se aplican las condiciones de cancelación indicadas en el apartado anterior.",
            de: "Wenn du nicht erscheinst, gelten die oben genannten Stornierungsbedingungen.",
            en: "If you don't show up, the cancellation conditions described in the previous section apply.",
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
            de: "Wir tätowieren nicht unter Alkoholeinfluss, während Schwangerschaft oder Stillzeit, Symbole, die Hass darstellen (nach Einschätzung des Künstlers), und in keinem Fall, in dem es nach österreichischem Recht nicht erlaubt ist.",
            en: "We don't tattoo under the influence of alcohol, during pregnancy or breastfeeding, symbols that represent hate (at the artist's discretion), or in any case not allowed under Austrian law.",
          }),
        ],
      },

      {
        title: tr(lang, {
          es: "8. Salud",
          de: "8. Gesundheit",
          en: "8. Health",
        }),
        items: [
          tr(lang, {
            es: "Antes de tatuarte, cuéntanos lo mejor que sepas si tienes enfermedades, alergias u otros problemas físicos (sobre todo diabetes, anticoagulantes, etc.).",
            de: "Bitte teile uns vor dem Tätowieren Erkrankungen, Allergien oder andere körperliche Beschwerden (insbesondere Diabetes, Blutverdünnung usw.) nach bestem Wissen und Gewissen mit.",
            en: "Before your tattoo, please tell us to the best of your knowledge about any illnesses, allergies or other physical conditions (especially diabetes, blood thinners, etc.).",
          }),
          tr(lang, {
            es: "Responde con cuidado y con la verdad a las preguntas de salud de la hoja de consentimiento, para que podamos evitar complicaciones.",
            de: "Bitte beantworte die Fragen zu deinem Gesundheitszustand in der Einverständniserklärung gewissenhaft und wahrheitsgemäß, damit wir Komplikationen vermeiden können.",
            en: "Please answer the health questions in the consent form carefully and truthfully, so that we can avoid complications.",
          }),
        ],
      },

      {
        title: tr(lang, {
          es: "9. Retoques",
          de: "9. Nachstechen",
          en: "9. Touch-ups",
        }),
        items: [
          tr(lang, {
            es: "El retoque es gratis entre el primer y el segundo mes después del tatuaje, según el criterio del artista que lo hizo.",
            de: "Ein Nachstechen ist zwischen dem ersten und zweiten Monat nach dem Tattoo kostenlos, nach Einschätzung des Künstlers, der es gestochen hat.",
            en: "A touch-up is free between the first and second month after the tattoo, at the discretion of the artist who did it.",
          }),
        ],
      },

      {
        title: tr(lang, {
          es: "10. Vales regalo",
          de: "10. Gutscheine",
          en: "10. Gift vouchers",
        }),
        items: [
          tr(lang, {
            es: "Los vales se emiten por una cantidad de dinero y se pueden canjear por cualquier tatuaje en Maleficium.",
            de: "Gutscheine werden auf einen bestimmten Geldbetrag ausgestellt und können für alle Tattoos bei Maleficium eingelöst werden.",
            en: "Gift vouchers are issued for a specific amount and can be redeemed for any tattoo at Maleficium.",
          }),
          tr(lang, {
            es: "Son válidos durante 5 años desde su emisión. El tatuaje debe realizarse dentro de ese plazo.",
            de: "Sie sind 5 Jahre ab Ausstellung gültig; das Tattoo muss innerhalb dieser Frist gestochen werden.",
            en: "They are valid for 5 years from the date of issue; the tattoo must be done within this period.",
          }),
          tr(lang, {
            es: "Para pedir la cita se aplican estas condiciones de reserva.",
            de: "Für die Terminvereinbarung gelten diese Buchungsbedingungen.",
            en: "These booking terms apply to making the appointment.",
          }),
          tr(lang, {
            es: "Los vales no se cambian por dinero en efectivo. El saldo restante se conserva como crédito.",
            de: "Eine Barauszahlung ist nicht möglich. Ein Restbetrag bleibt als Guthaben erhalten.",
            en: "Vouchers cannot be exchanged for cash. Any remaining balance stays as credit.",
          }),
          tr(lang, {
            es: "Los vales se pueden transferir a otra persona.",
            de: "Gutscheine sind übertragbar.",
            en: "Vouchers are transferable.",
          }),
        ],
      },

      {
        title: tr(lang, {
          es: "11. Protección de datos – Comprobación de la edad",
          de: "11. Datenschutz – Altersnachweis",
          en: "11. Data protection – Proof of age",
        }),
        items: [
          tr(lang, {
            es: "Solo tatuamos a personas mayores de 18 años. Para comprobarlo, revisamos un documento oficial (DNI, pasaporte o carnet de conducir). No hacemos ninguna copia del documento.",
            de: "Wir tätowieren nur Personen ab 18 Jahren. Dafür prüfen wir einen amtlichen Ausweis (Personalausweis, Reisepass oder Führerschein). Wir machen keine Kopie des Ausweises.",
            en: "We only tattoo people aged 18 or over. We check an official ID (ID card, passport or driving licence). We do not make a copy of the ID.",
          }),
          tr(lang, {
            es: "En la hoja de consentimiento solo anotamos que se ha comprobado la edad y qué tipo de documento se ha mostrado.",
            de: "In der Einverständniserklärung vermerken wir nur, dass das Alter geprüft wurde und mit welcher Art von Ausweis.",
            en: "In the consent form we only note that the age was checked and which type of ID was shown.",
          }),
          tr(lang, {
            es: "Base legal: interés legítimo en acreditar la edad (art. 6.1.f del RGPD).",
            de: "Rechtsgrundlage: berechtigtes Interesse am Nachweis des Alters (Art. 6 Abs. 1 lit. f DSGVO).",
            en: "Legal basis: legitimate interest in proving age (Art. 6(1)(f) GDPR).",
          }),
        ],
      },

      {
        title: tr(lang, {
          es: "12. Otros",
          de: "12. Sonstiges",
          en: "12. Miscellaneous",
        }),
        items: [
          tr(lang, {
            es: "Si alguna cláusula de estas condiciones no fuera válida o dejara de serlo, el resto de cláusulas seguirán siendo válidas.",
            de: "Sollte eine Bestimmung dieser Buchungsbedingungen unwirksam sein oder werden, bleibt die Gültigkeit der übrigen Bestimmungen davon unberührt.",
            en: "If any provision of these booking terms is or becomes invalid, the validity of the remaining provisions remains unaffected.",
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
      es: "7 de noviembre de 2026",
      de: "7. November 2026",
      en: "November 7, 2026",
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
