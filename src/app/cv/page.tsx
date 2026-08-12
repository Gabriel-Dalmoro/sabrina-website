import Link from 'next/link';
import { FileText, Briefcase, GraduationCap, Award, Star, Sparkles, CheckCircle2, MapPin, Mail, Lock } from 'lucide-react';

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
    color: 'bg-[#FF4F14]',
    highlights: [
      'Création et animation des chroniques radio "Les 400 Coups" sur France Bleu.',
      'Conception et animation d\'ateliers dégustation sur-mesure B2B (entreprises, chefs, évènements).',
      'Création de la conférence-expérience "Le vin, vecteur d\'émotion" (Autumn 2026 / Jan 2027).',
      'Interventions en écoles supérieures (ISG Luxury Management Lyon & Genève).',
    ],
  },
  {
    period: 'ENSEIGNEMENT',
    role: 'Intervenante Hospitality & Wine Business',
    company: 'ISG Luxury Management – Lyon & Genève',
    badge: 'Académique',
    color: 'bg-[#4747F4]',
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
    color: 'bg-[#0AAE98]',
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
    <div className="space-y-16 py-12 pb-24">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FCFF97] text-[#12131A] p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow-lg relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="sticker-badge bg-[#4747F4] text-white">
              <FileText className="w-4 h-4 text-[#FCFF97]" /> PARCOURS PROFESSIONNEL
            </span>
            <div className="inline-flex items-center gap-1.5 text-xs font-anton text-gray-700 bg-white px-3 py-1 rounded-full border border-[#12131A]">
              <Lock className="w-3.5 h-3.5 text-[#FF4F14]" /> PROFIL WEB INTERACTIF
            </div>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wide text-[#12131A] leading-none">
              SABRINA CARLIER
            </h1>
            <p className="font-bodoni italic text-xl sm:text-2xl text-[#FF4F14] font-bold">
              Direction d&apos;Exploitation • Sommellerie d&apos;Émotion • Enseignement & Médias
            </p>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              30 ans au cœur des restaurants et de l&apos;hospitalité. Un parcours ancré dans la passion du terrain, le management humain et l&apos;art du partage autour du vin.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-10">
          
          <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4">
            <h2 className="font-anton text-3xl text-[#12131A] flex items-center gap-2">
              <Briefcase className="w-7 h-7 text-[#FF4F14]" /> REPÈRES DE CARRIÈRE & EXPÉRIENCES
            </h2>
            <span className="text-xs font-bold text-gray-500 hidden sm:inline">Lyon & International</span>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-1 before:bg-[#12131A] before:-z-0">
            {careerMilestones.map((item, idx) => (
              <div key={idx} className="relative z-10 pl-12 sm:pl-16 space-y-3">
                
                {/* Node circle */}
                <div className={`absolute left-4 sm:left-6 top-1.5 w-5 h-5 ${item.color} rounded-full border-2 border-[#12131A] -translate-x-1/2`} />

                <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`text-xs font-anton px-2.5 py-0.5 text-white rounded ${item.color}`}>
                      {item.period}
                    </span>
                    <span className="text-xs font-bold text-[#12131A] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded border border-[#12131A]">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-anton text-2xl text-[#12131A]">{item.role}</h3>
                    <p className="font-bodoni italic text-sm text-[#4747F4] font-bold">{item.company}</p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-gray-200">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
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

      {/* SKILLS GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="sticker-badge bg-[#E6CEFC] text-[#12131A] mb-2">
            <Star className="w-4 h-4 text-[#FF4F14]" /> COMPÉTENCES CLÉS
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl text-[#12131A]">
            SAVOIR-FAIRE & EXPERTISES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow space-y-3">
              <h3 className="font-anton text-xl text-[#FF4F14] border-b-2 border-gray-100 pb-2">
                {s.category}
              </h3>
              <ul className="space-y-2 text-xs font-medium text-gray-700">
                {s.list.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#4747F4]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECT CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4747F4] text-white p-8 sm:p-10 rounded-3xl border-3 border-[#12131A] pop-shadow text-center space-y-4">
          <h2 className="font-anton text-3xl sm:text-4xl text-white">
            VOUS SOUHAITEZ CONSULTER UNE INTERVENTION SUR-MESURE ?
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto">
            Pour un accompagnement en entreprise, un projet d&apos;enseignement ou une mission de conseil, écrivez directement à{' '}
            <a href="mailto:hello@sabrinacarlier.fr" className="font-bold text-[#FCFF97] underline">
              hello@sabrinacarlier.fr
            </a>
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF4F14] text-white font-anton px-8 py-3.5 rounded-xl border-2 border-white pop-shadow hover:bg-[#FCFF97] hover:text-[#12131A] transition-colors text-base"
            >
              PRENDRE CONTACT
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
