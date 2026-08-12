import Link from 'next/link';
import { GraduationCap, Award, BookOpen, Users, Briefcase, CheckCircle2, Sparkles, Building } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Écoles & Formations - Hospitalité, Management & Sommelerie | Sabrina Carlier',
  description: 'Interventions en écoles supérieures et formations professionnelles. Hospitalité, Sommellerie, Management et Entrepreneuriat par Sabrina Carlier (ISG Luxury Management).',
};

const domains = [
  {
    title: 'Hospitalité & Expérience Client',
    icon: Award,
    color: 'bg-[#4747F4]',
    textColor: 'text-[#4747F4]',
    items: [
      'Les fondamentaux de l\'hospitalité',
      'L\'expérience client d\'excellence',
      'Les nouveaux codes de la restauration moderne',
      'L\'hôtellerie lifestyle et les palaces',
    ],
  },
  {
    title: 'Management & Leadership',
    icon: Users,
    color: 'bg-[#FF4F14]',
    textColor: 'text-[#FF4F14]',
    items: [
      'Manager une équipe en restauration',
      'Recruter et fidéliser les talents',
      'Construire une culture d\'entreprise forte',
      'Gérer une ouverture d\'établissement',
      'Accompagner le changement & leadership de terrain',
    ],
  },
  {
    title: 'Vin & Sommellerie d\'Émotion',
    icon: BookOpen,
    color: 'bg-[#0AAE98]',
    textColor: 'text-[#0AAE98]',
    items: [
      'Initiation à la dégustation et à l\'analyse sensorielle',
      'Construire une carte des vins rentable et vivante',
      'Accords mets-vins & storytelling gastronomique',
      'L\'émotion dans la dégustation',
    ],
  },
  {
    title: 'Entrepreneuriat & Restauration',
    icon: Briefcase,
    color: 'bg-[#E6CEFC]',
    textColor: 'text-[#12131A]',
    items: [
      'Concevoir un concept de restaurant de A à Z',
      'Construire une offre stratégique et cohérente',
      'Développer un projet & pilotage d\'exploitation',
      'Accompagnement aux ouvertures d\'établissements',
    ],
  },
];

export default function FormationsPage() {
  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0AAE98] text-white p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="sticker-badge bg-[#FCFF97] text-[#12131A]">
              <GraduationCap className="w-4 h-4 text-[#FF4F14]" /> ENSEIGNEMENT & FORMATION
            </span>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wide text-white leading-none">
              ÉCOLES & INTERVENTIONS
            </h1>
            <p className="font-bodoni italic text-xl sm:text-2xl text-[#FCFF97] font-medium">
              Transmettre le terrain, la rigueur et la passion du métier aux futurs leaders de la gastronomie.
            </p>
            <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
              Intervenante régulière dans les grandes écoles supérieures de management et d&apos;hospitalité à Lyon et Genève.
            </p>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL REFERENCE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FCFF97] p-8 rounded-3xl border-3 border-[#12131A] pop-shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#4747F4] text-white rounded-2xl flex items-center justify-center font-anton text-2xl border-2 border-[#12131A] pop-shadow">
              ISG
            </div>
            <div>
              <span className="text-xs font-anton tracking-wider text-[#FF4F14] uppercase block">RÉFÉRENCE ENSEIGNEMENT</span>
              <h2 className="font-anton text-2xl sm:text-3xl text-[#12131A]">
                ISG LUXURY MANAGEMENT – GENÈVE ET LYON
              </h2>
              <p className="text-xs font-bold text-gray-800">
                Intervenante en Hospitality Management & Wine Business
              </p>
            </div>
          </div>
          <span className="sticker-badge bg-white text-[#12131A] whitespace-nowrap">
            <Building className="w-4 h-4 text-[#0AAE98]" /> Lyon & Genève
          </span>
        </div>
      </section>

      {/* 4 DOMAINS OF INTERVENTION GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="sticker-badge bg-[#E6CEFC] text-[#12131A] mb-2">
            <Sparkles className="w-4 h-4 text-[#FF4F14]" /> PROGRAMMES
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl text-[#12131A]">
            MES DOMAINES D&apos;INTERVENTION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-5">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${domain.color} text-white rounded-xl flex items-center justify-center border-2 border-[#12131A] pop-shadow`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-anton text-2xl text-[#12131A]">{domain.title}</h3>
                </div>

                <ul className="space-y-3 pt-2">
                  {domain.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-gray-800">
                      <CheckCircle2 className={`w-4 h-4 ${domain.textColor} shrink-0 mt-0.5`} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm defaultSubject="Formation & Enseignement" />
      </section>

    </div>
  );
}
