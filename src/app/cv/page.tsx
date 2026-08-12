import Link from 'next/link';
import { FileText, Briefcase, Star, Sparkles, CheckCircle2, Lock } from 'lucide-react';

export const metadata = {
  title: 'Parcours & CV Web - Sabrina Carlier',
  description: 'Profil professionnel et parcours de Sabrina Carlier. 30 ans d\'expérience en direction d\'exploitation, sommellerie, enseignement et événements.',
};

const careerMilestones = [
  {
    period: '2023 - PRÉSENT',
    role: 'Fondatrice & Sommelier d\'Émotion',
    company: 'Sabrina Carlier Freelance',
    badge: 'Actuel',
    pillColor: 'badge-pill-orange',
    highlights: [
      'Création et animation des chroniques radio "Les 400 Coups" sur France Bleu.',
      'Conception et animation d\'ateliers dégustation sur-mesure B2B (entreprises, chefs, évènements).',
      'Création de la conférence-expérience "Le vin, vecteur d\'émotion" (Automne 2026 / Jan 2027).',
      'Interventions en écoles supérieures (ISG Luxury Management Lyon & Genève).',
    ],
  },
  {
    period: 'ENSEIGNEMENT',
    role: 'Intervenante Hospitality & Wine Business',
    company: 'ISG Luxury Management – Lyon & Genève',
    badge: 'Académique',
    pillColor: 'badge-pill-blue',
    highlights: [
      'Cours de fondamentaux d\'hospitalité, expérience client et codes du luxe/lifestyle.',
      'Modules de Sommellerie, initiation à la dégustation et création de carte des vins.',
      'Enseignement du management d\'équipe, recrutement et culture d\'entreprise en restauration.',
    ],
  },
  {
    period: 'PARCOURS TERRAIN',
    role: 'Direction d\'Exploitation & Sommellerie',
    company: 'Restaurants Étoilés, Maisons d\'Exception & Bars à Vins',
    badge: '30 Ans d\'Histoire',
    pillColor: 'badge-pill-teal',
    highlights: [
      '30 années de terrain : plonge, service, réceptions, sommellerie et direction générale.',
      'Pilotage et ouverture d\'établissements d\'exception (Annecy, Lyon, Val d\'Isère).',
      'Gestion d\'événements intimistes ou géants (jusqu\'à 1 000 convives).',
      'Management d\'équipes passionnées, recrutement et structuration de la culture d\'accueil.',
      'Vente de flacons de 10 € à 12 000 € avec la même passion d\'histoire et de partage.',
    ],
  },
];

const skills = [
  { category: 'Sommellerie & Dégustation', list: ['Sélection cuvées & pépites', 'Accords mets-vins audacieux', 'Ingénierie de cartes des vins', 'Storytelling des terroirs'] },
  { category: 'Management & Direction', list: ['Direction d\'exploitation', 'Leadership de terrain', 'Recrutement & fidélisation', 'Gestion des ouvertures'] },
  { category: 'Transmission & Médias', list: ['Animation de chroniques radio', 'Prise de parole & Conférences', 'Ingénierie pédagogique', 'Ateliers dégustation B2B'] },
  { category: 'Hospitalité & Expérience', list: ['Nouveaux codes restauration', 'Hôtellerie lifestyle & luxe', 'Gestion d\'événements majeurs', 'Culture de l\'accueil'] },
];

export default function CVPage() {
  return (
    <div className="space-y-20 py-12 pb-24">
      
      {/* HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FCFF97] text-[#161720] p-10 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="badge-pill badge-pill-blue">
              <FileText className="w-3.5 h-3.5 text-[#FCFF97]" /> PARCOURS PROFESSIONNEL
            </span>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-gray-200">
              <Lock className="w-3.5 h-3.5 text-[#FF4F14]" /> PROFIL WEB INTERACTIF
            </div>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-bodoni text-4xl sm:text-6xl font-bold tracking-tight text-[#161720] leading-none">
              SABRINA CARLIER
            </h1>
            <p className="font-script text-2xl text-[#FF4F14] font-semibold">
              Direction d&apos;Exploitation • Sommellerie d&apos;Émotion • Enseignement & Médias
            </p>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              30 ans au cœur des restaurants et de l&apos;hospitalité. Un parcours ancré dans la passion du terrain, le management humain et l&apos;art du partage autour du vin.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(22,23,32,0.04)] space-y-10">
          
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 className="font-bodoni text-3xl font-bold text-[#161720] flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#FF4F14]" /> REPÈRES DE CARRIÈRE & EXPÉRIENCES
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-7 before:w-0.5 before:bg-gray-200">
            {careerMilestones.map((item, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-16 space-y-3">
                
                {/* Node dot */}
                <div className="absolute left-3.5 sm:left-5.5 top-2 w-3.5 h-3.5 bg-[#4747F4] rounded-full border-2 border-white shadow-sm -translate-x-1/2" />

                <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`badge-pill ${item.pillColor}`}>
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bodoni font-bold text-2xl text-[#161720]">{item.role}</h3>
                    <p className="font-script text-lg text-[#4747F4] font-semibold">{item.company}</p>
                  </div>

                  <ul className="space-y-2.5 pt-2 border-t border-gray-200/60">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#FF4F14] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge-pill badge-pill-lavender">
            <Star className="w-3.5 h-3.5 text-[#FF4F14]" /> COMPÉTENCES CLÉS
          </span>
          <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-[#161720] tracking-tight">
            SAVOIR-FAIRE & EXPERTISES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, idx) => (
            <div key={idx} className="card-modern p-7 space-y-4">
              <h3 className="font-bodoni font-bold text-xl text-[#FF4F14] border-b border-gray-100 pb-3">
                {s.category}
              </h3>
              <ul className="space-y-2.5 text-xs font-medium text-gray-700">
                {s.list.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#4747F4]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4747F4] text-white p-10 sm:p-12 rounded-3xl shadow-xl text-center space-y-4">
          <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-white">
            ENVIE DE COLLABORER SUR UN PROJET SUR-MESURE ?
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto">
            Écrivez directement à <span className="font-bold text-[#FCFF97]">hello@sabrinacarlier.fr</span> pour échanger avec Sabrina.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF4F14] text-white font-anton text-xs tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-[#161720] transition-colors shadow-lg"
            >
              ME CONTACTER
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
