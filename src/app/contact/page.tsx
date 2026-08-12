import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Radio } from 'lucide-react';

export const metadata = {
  title: 'Contact - Sabrina Carlier | Sommelerie & Émotions',
  description: 'Contactez Sabrina Carlier pour vos projets radio, ateliers dégustation B2B, interventions en écoles supérieures ou conférences.',
};

export default function ContactPage() {
  return (
    <div className="space-y-20 py-12 pb-24">
      
      {/* HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FF4F14] text-white p-10 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill badge-pill-yellow">
              <Mail className="w-3.5 h-3.5 text-[#FF4F14]" /> ÉCRIVEZ-MOI
            </span>
            <h1 className="font-bodoni text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none">
              CONTACT & COLLABORATION
            </h1>
            <p className="font-script text-2xl text-[#FCFF97] font-semibold">
              Une envie d&apos;atelier, une intervention en école, une émission ou une conférence ?
            </p>
            <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
              Sabrina Carlier étudie chaque proposition avec attention pour créer une expérience authentique et sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* FORM & SIDEBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Contact Form */}
          <div className="lg:col-span-8">
            <ContactForm defaultSubject="Ateliers Dégustation B2B" />
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Email Card */}
            <div className="card-modern p-7 space-y-4">
              <div className="w-10 h-10 bg-[#4747F4] text-white rounded-xl flex items-center justify-center shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-anton text-[#4747F4] tracking-widest uppercase block">EMAIL PROFESSIONNEL</span>
                <a
                  href="mailto:hello@sabrinacarlier.fr"
                  className="font-bodoni font-bold text-xl text-[#161720] hover:text-[#FF4F14] transition-colors block break-all mt-1"
                >
                  hello@sabrinacarlier.fr
                </a>
              </div>
              <p className="text-xs text-gray-500">
                Réponse garantie sous 24h à 48h ouvrées.
              </p>
            </div>

            {/* Location Card */}
            <div className="card-modern p-7 space-y-4">
              <div className="w-10 h-10 bg-[#0AAE98] text-white rounded-xl flex items-center justify-center shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-anton text-[#0AAE98] tracking-widest uppercase block">BASE & DÉPLACEMENTS</span>
                <h3 className="font-bodoni font-bold text-xl text-[#161720] mt-1">LYON, FRANCE & SUISSE</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Basée à Lyon. Interventions régulières en région Rhône-Alpes, Genève, Paris et toute la France.
              </p>
            </div>

            {/* Media Card */}
            <div className="bg-[#FCFF97] p-7 rounded-3xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#FF4F14]" />
                <span className="font-bodoni font-bold text-base text-[#161720]">PRESSE & MÉDIAS</span>
              </div>
              <p className="text-xs text-gray-800">
                Retrouvez &quot;Les 400 Coups&quot; diffusés sur France Bleu et disponibles en replay.
              </p>
              <a
                href="https://www.radiofrance.fr/francebleu/podcasts/les-400-coups-4969189"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-anton text-[#4747F4] hover:underline pt-1"
              >
                Écouter le podcast →
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
