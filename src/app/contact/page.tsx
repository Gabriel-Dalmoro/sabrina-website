import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Radio, Sparkles, Clock, Globe } from 'lucide-react';

export const metadata = {
  title: 'Contact - Sabrina Carlier | Sommelerie & Émotions',
  description: 'Contactez Sabrina Carlier pour vos projets radio, ateliers dégustation B2B, interventions en écoles supérieures ou conférences.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FF4F14] text-white p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="sticker-badge bg-[#FCFF97] text-[#12131A]">
              <Mail className="w-4 h-4 text-[#FF4F14]" /> ÉCRIVEZ-MOI
            </span>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wide text-white leading-none">
              CONTACT & COLLABORATION
            </h1>
            <p className="font-bodoni italic text-xl sm:text-2xl text-[#FCFF97] font-medium">
              Une envie d&apos;atelier, une intervention en école, une émission ou une conférence ?
            </p>
            <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
              Sabrina Carlier étudie chaque proposition avec attention pour créer une expérience authentique et sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + INFO GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Contact Form */}
          <div className="lg:col-span-8">
            <ContactForm defaultSubject="Atelier Dégustation B2B" />
          </div>

          {/* Direct Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-white p-6 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-4">
              <div className="w-12 h-12 bg-[#4747F4] text-white rounded-2xl flex items-center justify-center border-2 border-[#12131A] pop-shadow">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-anton text-[#4747F4] tracking-wider uppercase block">EMAIL PROFESSIONNEL</span>
                <a
                  href="mailto:hello@sabrinacarlier.fr"
                  className="font-anton text-xl text-[#12131A] hover:text-[#FF4F14] transition-colors block break-all"
                >
                  hello@sabrinacarlier.fr
                </a>
              </div>
              <p className="text-xs text-gray-500">
                Réponse garantie sous 24h à 48h ouvrées.
              </p>
            </div>

            {/* Location & Region */}
            <div className="bg-white p-6 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-4">
              <div className="w-12 h-12 bg-[#0AAE98] text-white rounded-2xl flex items-center justify-center border-2 border-[#12131A] pop-shadow">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-anton text-[#0AAE98] tracking-wider uppercase block">BASE & DÉPLACEMENTS</span>
                <h3 className="font-anton text-xl text-[#12131A]">LYON & INTERVENTIONS FRANCE / SUISSE</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Basée à Lyon. Interventions régulières en région Rhône-Alpes, Genève, Paris et toute la France.
              </p>
            </div>

            {/* Radio France Bleu Badge */}
            <div className="bg-[#FCFF97] p-6 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-3">
              <div className="flex items-center gap-2">
                <Radio className="w-5 h-5 text-[#FF4F14]" />
                <span className="font-anton text-base text-[#12131A]">PRESSE & MÉDIAS</span>
              </div>
              <p className="text-xs text-gray-800">
                Retrouvez &quot;Les 400 Coups&quot; diffusés sur France Bleu et disponibles en replay sur Radio France.
              </p>
              <a
                href="https://www.radiofrance.fr/francebleu/podcasts/les-400-coups-4969189"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-anton text-[#4747F4] hover:underline"
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
