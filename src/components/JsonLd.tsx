import { SITE_URL, SITE_NAME } from '@/lib/seo';
import { CONTACT_EMAIL, PODCAST_URL } from '@/lib/nav';

/**
 * Structured data describing who Sabrina is and what she offers.
 *
 * This is the part search engines and assistants actually read to answer
 * "who is Sabrina Carlier" or "find me a sommelière near Lyon" — the prose on
 * the page is narrative, and narrative does not parse into facts. Everything
 * below is drawn from her own documents; nothing is invented.
 */
export default function JsonLd() {
  const personId = `${SITE_URL}/#sabrina`;

  const graph = [
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Sabrina Carlier',
      givenName: 'Sabrina',
      familyName: 'Carlier',
      url: SITE_URL,
      email: `mailto:${CONTACT_EMAIL}`,
      image: `${SITE_URL}/opengraph-image.jpg`,
      jobTitle: [
        "Directrice d'exploitation",
        'Sommelière',
        'Chroniqueuse radio',
        'Formatrice',
      ],
      description:
        "Trente ans d'hospitalité, de sommellerie et de direction d'exploitation. Chroniqueuse des « 400 Coups » sur France Bleu, créatrice d'ateliers et de dîners autour du vin, intervenante en écoles supérieures et conférencière.",
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lyon',
        addressCountry: 'FR',
      },
      knowsLanguage: ['fr', 'en'],
      knowsAbout: [
        'Sommellerie',
        'Dégustation de vin',
        'Accords mets-vins',
        'Carte des vins',
        'Hospitalité',
        'Management en restauration',
        "Ouverture d'établissement",
        'Expérience client',
        'Vins de Savoie',
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: "MC Sommellerie — Tain-l'Hermitage",
      },
      worksFor: {
        '@type': 'EducationalOrganization',
        name: 'ISG Luxury Management',
        description: 'Intervenante en Hospitality & Wine, Lyon et Genève',
      },
      sameAs: [PODCAST_URL],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'fr-FR',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: 'Sabrina Carlier — sommellerie, formation & conférences',
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image.jpg`,
      email: `mailto:${CONTACT_EMAIL}`,
      founder: { '@id': personId },
      areaServed: [
        { '@type': 'City', name: 'Lyon' },
        { '@type': 'City', name: 'Genève' },
        { '@type': 'Country', name: 'France' },
      ],
      priceRange: 'Sur devis',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Ateliers dégustation et wine dinners en entreprise',
              description:
                "Ateliers de 4 à 60 personnes, wine dinners jusqu'à 100 convives, dîners à quatre mains avec un chef, soirées clients et séminaires.",
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Chroniques radio et interventions média',
              description:
                'Chroniques courtes de 2 à 5 minutes sur le vin, portraits de vignerons et thématiques de saison.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Formations et interventions en écoles supérieures',
              description:
                "Hospitalité et expérience client, management en restauration, sommellerie et dégustation, entrepreneuriat et ouverture d'établissement.",
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: "Conférence « Le vin, vecteur d'émotion »",
              description:
                "Conférence-expérience mêlant récit, dégustation et échanges avec le public. Premières représentations en entreprise à l'automne 2026.",
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: "Missions de transition et direction d'exploitation",
              description:
                "Ouvertures d'établissement, structuration d'équipes, création de cartes des vins et accompagnement au changement.",
            },
          },
        ],
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Content is a literal defined above, not user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
