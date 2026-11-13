export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "@id": "https://maleficiumtattoo.com/#tattoostudio",
    "name": "Maleficium Tattoo",
    "url": "https://maleficiumtattoo.com/",
    "description":
      "Private tattoo studio in Sankt Pölten, Austria, specializing in custom Blackwork, Ignorant, New School and Fineline tattoos.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sankt Pölten",
      "addressRegion": "Lower Austria",
      "addressCountry": "AT"
    },
    "founder": {
      "@type": "Person",
      "name": "Alexisdarkart"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sankt Pölten"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c")
      }}
    />
  );
}