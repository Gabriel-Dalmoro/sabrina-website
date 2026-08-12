import Link from 'next/link';
import { GraduationCap, Award, BookOpen, Users, Briefcase, CheckCircle2, Building, Sparkles } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Écoles & Formations - Hospitalité, Management & Sommelerie | Sabrina Carlier',
  description: 'Interventions en écoles supérieures et formations professionnelles. Hospitalité, Sommellerie, Management et Entrepreneuriat par Sabrina Carlier (ISG Luxury Management).',
};

const domains = [
  {
    title: 'Hospitalité & Expérience Client',
    icon: Award,
    badge: 'LUXE & LIFESTYLE',
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
    badge: 'TERRAIN & ÉQUIPE',
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
    badge: 'ANALYSE & CARTES',
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
    badge: 'PROJET & CONCEPT',
    textColor: 'text-[#161720]',
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
    <div className="space-y-20 py-12 pb-24">
      
      {/* HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0AAE98] text-white p-10 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill badge-pill-yellow">
              <GraduationCap className="w-3.5 h-3.5 text-[#FF4F14]" /> ENSEIGNEMENT & FORMATION
            </span>
            <h1 className="font-bodoni text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none">
              ÉCOLES & INTERVENTIONS
            </h1>
            <p className="font-script text-2xl text-[#FCFF97] font-semibold">
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
        <div className="bg-[#FCFF97] p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#4747F4] text-white rounded-2xl flex items-center justify-center font-anton text-2xl font-bold shadow-md">
              ISG
            </div>
            <div>
              <span className="text-xs font-anton tracking-widest text-[#FF4F14] uppercase block">RÉFÉRENCE ACADÉMIQUE</span>
              <h2 className="font-bodoni text-2xl sm:text-3xl font-bold text-[#161720]">
                ISG LUXURY MANAGEMENT – GENÈVE ET LYON
              </h2>
              <p className="text-xs font-semibold text-gray-700 mt-1">
                Intervenante en Hospitality Management & Wine Business
              </p>
            </div>
          </div>
          <span className="badge-pill bg-white text-[#161720] shadow-sm">
            <Building className="w-3.5 h-3.5 text-[#0AAE98]" /> Lyon & Genève
          </span>
        </div>
      </section>

      {/* DOMAINS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge-pill badge-pill-lavender">
            PROGRAMMES & EXPÉRIMENTATIONS
          </span>
          <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-[#161720] tracking-tight">
            MES DOMAINES D&apos;INTERVENTION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div key={idx} className="card-modern p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FAF9F6] text-[#161720] rounded-xl flex items-center justify-center border border-gray-200">
                      <Icon className={`w-5 h-5 ${domain.textColor}`} />
                    </div>
                    <h3 className="font-bodoni font-bold text-2xl text-[#161720]">{domain.title}</h3>
                  </div>
                  <span className="text-[10px] font-anton tracking-widest text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    {domain.badge}
                  </span>
                </div>

                <ul className="space-y-3 pt-2">
                  {domain.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-sm text-gray-700">
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

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm defaultSubject="Formation & Enseignement" />
      </section>

    </div>
  );
}
