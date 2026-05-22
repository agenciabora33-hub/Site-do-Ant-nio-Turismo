import { NAP_DATA, IMAGES } from "../data";

export default function StructuredData() {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const pathname = typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, "") : "";
  const basePageUrl = `${origin}${pathname}`;

  // Helper to convert relative asset paths to absolute URLs dynamic for search crawlers
  const resolveAbsoluteUrl = (relPath: string) => {
    if (!relPath) return "";
    const cleanPath = relPath.replace(/^\.\//, "");
    return `${basePageUrl}/${cleanPath}`;
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Antonio Turismo | City Tour, Passeios e Transfer em Gramado e Canela",
    "legalName": "Antonio Turismo",
    "image": resolveAbsoluteUrl(IMAGES.logo),
    "@id": `${basePageUrl}/#antonio-turismo`,
    "url": basePageUrl,
    "telephone": "+5554981544043",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": NAP_DATA.address.street,
      "addressLocality": NAP_DATA.address.city,
      "addressRegion": NAP_DATA.address.state,
      "postalCode": NAP_DATA.address.zip,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": NAP_DATA.coordinates.latitude,
      "longitude": NAP_DATA.coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://wa.me/5554981544043"
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Gramado"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Canela"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bento Gonçalves"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Nova Petrópolis"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Vale dos Vinhedos"
      }
    ],
    "description": "Premium private tours and transfers in Gramado, Canela, Bento Gonçalves, and Vale dos Vinhedos. Featuring local driver-guide Antonio, comfortable high-end cars, and personalized schedules."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
