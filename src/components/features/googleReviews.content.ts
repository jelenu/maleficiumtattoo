import { t, type Dictionary } from "intlayer";

const reviewsPopupContent = {
  key: "reviews-popup",
  content: {
    studioName: t({
      en: "Maleficium Tattoo",
      de: "Maleficium Tattoo",
      es: "Maleficium Tattoo",
    }),
    close: t({
      en: "Close",
      de: "Schließen",
      es: "Cerrar",
    }),
    reviewsFromGoogle: t({
      en: "Reviews from Google",
      de: "Bewertungen von Google",
      es: "Reseñas de Google",
    }),
    viewAll: t({
      en: "View all reviews",
      de: "Alle Bewertungen anzeigen",
      es: "Ver todas las reseñas",
    }),
    reviews: [
      {
        id: 1,
        name: "Jasmin Sch",
        rating: 5,
        date: "March, 2026",
        text: t({
          en: "Such a great studio—everything is clean and cozy! Alexis was incredibly kind and professional. I already felt comfortable during the consultation. He understood exactly what I wanted and adapted the tattoo to my body shape. I've never had such great advice before. The tattoo turned out absolutely amazing. Thank you for everything, it definitely won't be my last tattoo with Alexis! 😍🔥",
          de: "So ein tolles Studio, alles sauber und gemütlich! Alexis war super nett und professionell. Hab mich schon beim Kennenlern-Termin wohlgefühlt. Er hat genau verstanden was ich wollte und hat das Tattoo meiner Körperform angepasst. Ich hatte noch nie eine so gute Beratung. Und das Tattoo ist einfach super super gut geworden. Danke für Alles, das war sicher nicht das letzte Tatto von Alexis!😍🔥",
          es: "¡Un estudio increíble! Todo está limpio y es muy acogedor. Alexis fue muy amable y profesional. Ya me sentí cómoda desde la primera cita de consulta. Entendió exactamente lo que quería y adaptó el tatuaje a la forma de mi cuerpo. Nunca había recibido un asesoramiento tan bueno. El tatuaje quedó simplemente espectacular. ¡Gracias por todo, seguro que no será mi último tatuaje con Alexis! 😍🔥",
        }),
        avatar: "J",
        reviewUrl: "https://maps.app.goo.gl/GLGWUKVvsPkUXSWC7",
      },
      {
        id: 2,
        name: "Dorian Schautz",
        rating: 5,
        date: "February, 2026",
        text: t({
          en: "Until now I had only been to large tattoo studios with five or more artists. I came here because my tattoo artist moved to this studio. I always thought bigger studios were better, but after coming here I don't want to go back to one. It's much cozier, with a calmer and more pleasant atmosphere. Alexis, the owner, is an incredibly kind and welcoming person and has created something truly special with this studio. I'm already looking forward to my next session. This is the kind of place where you don't mind the pain. ❤️",
          de: "Ich kannte bis jetzt nur relativ große Studios mit 5 oder mehr Artists gleichzeitig. Dann bin ich auf Grund von einem Wechsel meines Tättoowieres zu dem Studio gekommen. Ich dachte immer dass es immer große Studios besser sind aber seitdem ich hier war, will ich gar nicht mehr in ein großes Studio. Es ist hier viel gemütlicher, eine ruhigere und angenehmere Atmosphäre. Alexis der Besitzer ist so ein unfassbarer lieber und zuvorkommender Mensch und hat mit dem Studio alles richtig gemacht. Ich freue mich schon auf die nächste Sitzung bei euch. Hier hat man gerne Schmerzen❤️",
          es: "Hasta ahora solo conocía estudios grandes con cinco o más tatuadores. Llegué a este estudio porque mi tatuador se cambió aquí. Siempre pensé que los estudios grandes eran mejores, pero después de venir ya no quiero volver a uno. Aquí el ambiente es mucho más acogedor, tranquilo y agradable. Alexis, el propietario, es una persona increíblemente amable y atenta, y ha creado un estudio fantástico. Ya estoy deseando que llegue mi próxima sesión. ¡Aquí hasta el dolor se lleva con gusto! ❤️",
        }),
        avatar: "D",
        reviewUrl: "https://maps.app.goo.gl/M6hPqrsCA6W4z1Af7",
      },
      {
        id: 3,
        name: "Moni H.",
        rating: 5,
        date: "January, 2026",
        text: t({
          en: "Simply perfect! Professional, beautiful studio, cozy, hygienic, incredibly kind... I couldn't be happier! Alexis is a brilliant tattoo artist who works with impressive precision and great care. I felt safe and comfortable throughout the entire process. I love my tattoo, I'm grateful for this experience, and I'll definitely be back! 🥰",
          de: "Einfach alles perfekt! Professionell, schönes Studio, gemütlich, hygienisch, mega lieb, usw. Bin einfach nur begeistert! Alexis ist ein genialer Tattooartist, arbeitet mit einer beeindruckenden Präzision, und ist sehr umsichtig! Ich habe mich die ganze Zeit sicher und wohl gefühlt. Ich liebe mein Tattoo, bin dankbar für diese Erfahrung und werde garantiert wieder kommen! 🥰",
          es: "¡Simplemente perfecto! Profesional, un estudio precioso, acogedor, muy higiénico y con un trato increíblemente amable. ¡Estoy encantada! Alexis es un tatuador excepcional que trabaja con una precisión impresionante y muchísimo cuidado. Me sentí segura y cómoda durante todo el proceso. Me encanta mi tatuaje, estoy muy agradecida por la experiencia y volveré sin ninguna duda. 🥰",
        }),
        avatar: "MH",
        reviewUrl: "https://maps.app.goo.gl/zCDYcWL18BfJdiKv6",
      },
      {
        id: 4,
        name: "Elisabeth",
        rating: 5,
        date: "January, 2026",
        text: t({
          en: "Fantastic tattoo studio! Cozy atmosphere, expert advice, and an outstanding level of hygiene. Alexis really takes individual wishes into account and does wonderful work from the stencil to the finished tattoo. I felt completely at ease and I'm already looking forward to the next time.",
          de: "Super Tattoo Studio! Gemütliche Atmosphäre, kompetente Beratung und ein sehr hohes Maß an Hygiene. Alexis geht super auf individuelle Wünsche ein und leistet vom Stencil bis zum fertigen Tattoo wundervolle Arbeit. Ich habe mich sehr wohl gefühlt und freue mich aufs nächste Mal.",
          es: "¡Un estudio de tatuajes fantástico! Ambiente acogedor, asesoramiento profesional y un nivel de higiene excelente. Alexis presta muchísima atención a los deseos de cada cliente y realiza un trabajo maravilloso desde el diseño del stencil hasta el tatuaje terminado. Me sentí muy cómoda y ya estoy deseando volver.",
        }),
        avatar: "E",
        reviewUrl: "https://maps.app.goo.gl/cKvmNoVtj78bVx5H8",
      },
      {
        id: 5,
        name: "Laura Birkhoven",
        rating: 5,
        date: "February, 2026",
        text: t({
          en: "I'm absolutely thrilled with this tattoo studio! From the moment you walk in, you immediately feel comfortable. The atmosphere is relaxed, clean, and simply pleasant. The team is incredibly friendly, open, and truly takes the time for you. You can immediately tell that they don't just tattoo here—they work with passion, dedication, and genuine attention to detail.",
          de: "Ich bin absolut begeistert von diesem Tattoo-Studio! Schon beim Reinkommen fühlt man sich sofort wohl – die Atmosphäre ist entspannt, sauber und einfach angenehm. Das Team ist unglaublich freundlich, offen und nimmt sich wirklich Zeit für einen. Man merkt sofort, dass hier nicht einfach nur tätowiert wird, sondern mit Herz, Leidenschaft und echter Liebe zum Detail gearbeitet wird.",
          es: "¡Estoy absolutamente encantada con este estudio de tatuajes! Desde que entras por la puerta te sientes como en casa. El ambiente es relajado, limpio y muy agradable. Todo el equipo es increíblemente amable, cercano y se toma el tiempo necesario contigo. Se nota enseguida que aquí no solo tatúan, sino que trabajan con pasión, dedicación y un auténtico cuidado por cada detalle.",
        }),
        avatar: "LB",
        reviewUrl: "https://maps.app.goo.gl/38vUgrUN4R1Dw1PX9",
      },
      {
        id: 6,
        name: "Hanna Aicher",
        rating: 5,
        date: "March, 2026",
        text: t({
          en: "I recently got my first tattoo from the lovely Manu and I'm extremely happy with it. The studio is beautiful, cleanliness is a top priority, and they regularly check during the session to make sure you're feeling okay. They even offer drinks if you need one. 😄 The tattoo looks amazing—thank you so much! Overall, I can absolutely recommend this studio. 😊",
          de: "Ich war vor kurzem das erste mal bei der lieben manu tätowieren und bin super happy. Das Studio ist total schön, es wird sehr auf Sauberkeit geachtet und auch öfter mal zwischen dem stechen nachgefragt, ob es einem gut geht. Getränke gibt's bei Bedarf auch 😄.Das tatoo schaut mega aus, vielen Dank dafür! Also alles in allem absolut weiter zu empfehlen. 😊",
          es: "Hace poco me tatué por primera vez con la encantadora Manu y estoy súper feliz con el resultado. El estudio es precioso, la limpieza es impecable y durante la sesión preguntan varias veces cómo te encuentras. Además, si lo necesitas, también te ofrecen bebidas. 😄 ¡El tatuaje quedó increíble, muchas gracias! En definitiva, recomiendo este estudio al 100 %. 😊",
        }),
        avatar: "Ha",
        reviewUrl: "https://maps.app.goo.gl/Y2fvS2UHokyhvddA9",
      },
    ],
  },
} satisfies Dictionary;

export default reviewsPopupContent;
