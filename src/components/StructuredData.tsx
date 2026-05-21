import { NAP_DATA } from "../data";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Antonio Turismo | City Tour, Passeios e Transfer em Gramado e Canela",
    "legalName": "Antonio Turismo",
    "image": "https://ais-dev-kmlyequph6apcu45paszeh-186713379987.us-east1.run.app/src/assets/images/brand_logo_1779403377598.png",
    "logo": "https://ais-dev-kmlyequph6apcu45paszeh-186713379987.us-east1.run.app/src/assets/images/brand_logo_1779403377598.png",
    "@id": "https://ais-dev-kmlyequph6apcu45paszeh-186713379987.us-east1.run.app/#antonio-turismo",
    "url": "https://ais-dev-kmlyequph6apcu45paszeh-186713379987.us-east1.run.app",
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
