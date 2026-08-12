/**
 * Career history transcribed from "Sabrina Carlier — Direction exploitation".
 *
 * Everything here comes from that document. The previous version of this page
 * carried invented figures ("100+ ateliers", "30 ans d'histoire") and an
 * invented job title; those are gone. Her phone number and home address are in
 * the same PDF and are deliberately NOT published here.
 */

export interface Role {
  period: string;
  role: string;
  place: string;
  kind?: string;
  highlights: string[];
}

export const ROLES: Role[] = [
  {
    period: 'Août 2025 — Juillet 2026',
    role: 'Directrice de la restauration & cheffe sommelière',
    place: 'Wine You Want',
    kind: 'Mission de transition',
    highlights: [
      "Pilotage global de l'ouverture et du lancement opérationnel d'un concept Food & Beverage à forte identité.",
      'Offre vins premium de 50 références au verre et parcours client personnalisé.',
      'Stratégie vins complète : sélection, achats, pricing et stocks, budget trimestriel de 80 K€.',
      'Beverage cost maîtrisé à 32 %, panier moyen supérieur de 50 % au prévisionnel.',
      'Équipe de 15 collaborateurs : zéro turnover et zéro arrêt de travail en huit mois.',
      'Clientèle BtoB à 80 % et portefeuille de 250 membres.',
      'Conception et pilotage d’événements expérientiels de 16 à 80 personnes.',
    ],
  },
  {
    period: 'Octobre 2024 — Juillet 2025',
    role: 'Responsable expérience œnologique & hospitalité',
    place: 'La Cave des Halles Saint-Martin',
    kind: 'Mission de transition',
    highlights: [
      "Construction et déploiement d'une offre vins sur mesure, cohérente avec l'identité de la maison.",
      "Développement de l'expérience client et de la fidélisation via le CRM, la satisfaction et l'e-réputation.",
    ],
  },
  {
    period: 'Saison été 2024',
    role: 'Accompagnement opérationnel & montée en gamme',
    place: 'Restaurant Nuance, Annecy',
    kind: 'Mission de transition',
    highlights: [
      "Structuration des équipes dans une démarche d'excellence de service : recrutement, formation, standards d'hospitalité.",
      'Pilotage de l’organisation quotidienne : plannings, ressources, caisses et process.',
      'Suivi de la performance via KPI, ratios et reportings, avec plans correctifs.',
    ],
  },
  {
    period: 'Saison hiver 2023 — 2024',
    role: 'Directrice de la restauration & cheffe sommelière',
    place: 'Le Hameau de mon Père — Maison Marc Veyrat',
    kind: 'Mission de transition · maison étoilée',
    highlights: [
      "Pilotage de l'ensemble de l'activité restauration : gastronomique, petits-déjeuners, room service.",
      "Carte des vins d'exception en cohérence avec l'identité culinaire de la Maison, accords personnalisés pour une clientèle internationale.",
      'Sélection et développement d’un réseau de vignerons français et internationaux ; gestion de la cave et des inventaires.',
    ],
  },
  {
    period: '2020 — 2023',
    role: "Fondatrice & directrice d'exploitation",
    place: 'Who Run The World — tiers-lieu d’hospitalité',
    kind: 'Entrepreneuriat',
    highlights: [
      'Création et direction d’un concept hybride : restauration, coworking et programmation événementielle, plus de 6 000 visiteurs par an.',
      'Stratégie de développement, budget, indicateurs de performance et rentabilité.',
      'Équipe de 6 collaborateurs et coordination de 23 intervenants extérieurs.',
      'Programmation régulière — afterworks, conférences, ateliers, brunchs — et création d’un podcast.',
    ],
  },
  {
    period: '2018 — 2020',
    role: 'Responsable restauration (F&B Manager)',
    place: 'Mercure Lyon Eurexpo — Groupe Accor',
    highlights: [
      'Restaurant, bar, petits-déjeuners et activité séminaires & banquets, aux standards du Groupe Accor.',
      'Gestion opérationnelle et financière : budgets, KPI, ratios d’exploitation et ventes additionnelles.',
      'Coordination des événements professionnels et des prestataires extérieurs.',
    ],
  },
  {
    period: '2016 — 2018',
    role: 'Manager F&B & cheffe sommelière — bar à vins',
    place: 'Maison Christian Têtedoie — restaurant gastronomique étoilé',
    highlights: [
      'Création de l’offre et de la carte des vins du bar à vins de la Maison.',
      'Approche pédagogique autour des terroirs et des vignerons, accords mets-vins personnalisés.',
      'Animation de dégustations et d’événements œnologiques ; formation des équipes à la culture vin.',
    ],
  },
  {
    period: '2014 — 2016',
    role: "Fondatrice & directrice d'exploitation",
    place: 'Les Enfants Terribles, Annecy',
    kind: 'Entrepreneuriat',
    highlights: [
      'Création et direction d’un établissement hybride : cave à vins, bar à vins et découverte des terroirs.',
      'Quatre services par jour, structuration des process et optimisation des flux.',
      'Équipe de 16 collaborateurs ; budgets annuels, ratios, KPI et rentabilité.',
    ],
  },
  {
    period: '2013 — 2014',
    role: 'Expériences boissons — clientèle BtoB luxe',
    place: 'Theillard SA, Genève',
    highlights: [
      'Conception et pilotage des expériences boissons pour le Salon International de la Haute Horlogerie, Hermès, Cartier, JTI, Procter & Gamble.',
    ],
  },
];

export const EDUCATION = [
  { year: '2013', label: 'MC Sommellerie — Tain-l’Hermitage' },
  { year: '1997', label: 'BTS Management en hôtellerie-restauration — LP Aiguerande' },
  { year: '1995', label: 'BAC Pro Métiers des arts de la table' },
];

export const SKILLS = [
  {
    title: 'Leadership opérationnel',
    body: "Encadrement et coordination d'équipes jusqu'à 40 personnes, gestion de services en forte affluence.",
  },
  {
    title: 'Management bienveillant',
    body: 'Recrutement, intégration, planning, formation continue, animation de briefings.',
  },
  {
    title: 'Culture de la performance',
    body: 'Suivi des KPI, optimisation de la masse salariale, analyse des marges et des flux.',
  },
  {
    title: 'Hospitalité & expérience client',
    body: 'Création de parcours client uniques, gestion de litiges, fidélisation.',
  },
  {
    title: 'Événementiel & privatisations',
    body: "Organisation de grands événements jusqu'à 200 personnes, ateliers, soirées thématiques.",
  },
  {
    title: 'Sommellerie & food pairing',
    body: 'Expertise vins et accords, storytelling autour du produit, conseil client.',
  },
  {
    title: 'Communication & transmission',
    body: 'Chroniqueuse radio, intervenante en école hôtelière, storytelling réseaux sociaux.',
  },
  {
    title: 'Énergie & esprit d’équipe',
    body: "Leader positif, forte capacité d'adaptation, sens de l'humour et de la fête.",
  },
];
