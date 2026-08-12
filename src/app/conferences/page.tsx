import Link from 'next/link';
import { Mic, Sparkles, Wine, Brain, Calendar } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Conférence - Le Vin, Vecteur d\'Émotion | Sabrina Carlier',
  description: 'Une conférence-expérience unique par Sabrina Carlier. Redécouvrir le vin à travers la mémoire, les sens et l\'émotion. Représentations entreprises (Automne 2026) & public (Janvier 2027).',
};

export default function ConferencesPage() {
  return (
    <div className="space-y-20 py-12 pb-24">
      
      {/* HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E6CEFC] text-[#161720] p-10 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-pill badge-pill-orange">
                <Mic className="w-3.5 h-3.5" /> CONFÉRENCE-EXPÉRIENCE
              </span>
              <span className="badge-pill bg-white text-[#161720]">
                ✨ PROJET EN CRÉATION
              </span>
            </div>
            <h1 className="font-bodoni text-4xl sm:text-6xl font-bold tracking-tight text-[#161720] leading-none">
              LE VIN, VECTEUR D&apos;ÉMOTION
            </h1>
            <p className="font-script text-2xl text-[#4747F4] font-semibold">
              &quot;Au fond, ce ne sont pas les grands vins que nous retenons. Ce sont les émotions qu&apos;ils nous ont permis de vivre.&quot;
            </p>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              Une conférence vivante mêlant récit, dégustation, éclairages neuro-sensoriels et échanges avec le public.
            </p>
          </div>
        </div>
      </section>

      {/* CORE QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(22,23,32,0.04)] space-y-10">
          
          <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-[#161720] tracking-tight">
            POURQUOI CERTAINS VINS NOUS BOULEVERSENT-ILS ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <Brain className="w-7 h-7 text-[#FF4F14]" />
              <p className="text-sm font-semibold text-[#161720] leading-snug">
                &quot;Pourquoi certains vins nous bouleversent-ils alors que nous sommes incapables de nous souvenir de leur cépage ?&quot;
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <Sparkles className="w-7 h-7 text-[#4747F4]" />
              <p className="text-sm font-semibold text-[#161720] leading-snug">
                &quot;Pourquoi une simple odeur peut-elle nous ramener vingt ans en arrière ?&quot;
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <Wine className="w-7 h-7 text-[#0AAE98]" />
              <p className="text-sm font-semibold text-[#161720] leading-snug">
                &quot;Pourquoi gardons-nous en mémoire un repas ou un instant bien plus qu&apos;une note de dégustation ?&quot;
              </p>
            </div>
          </div>

          <div className="bg-[#FCFF97] p-8 rounded-2xl space-y-3">
            <h3 className="font-bodoni font-bold text-2xl text-[#161720]">UNE AUTRE FAÇON DE PARLER DU VIN</h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              Pas avec des fiches techniques ou des notes sur vingt. Mais avec des souvenirs, des récits, des expériences sensorielles et des échanges avec le public. Parce qu&apos;au fond, ce ne sont pas les grands vins que nous retenons, mais les émotions qu&apos;ils nous ont permis de vivre.
            </p>
          </div>

        </div>
      </section>

      {/* DATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(22,23,32,0.04)] space-y-8">
          <h2 className="font-bodoni text-3xl font-bold text-[#161720] flex items-center gap-3">
            <Calendar className="w-6 h-6 text-[#FF4F14]" /> PREMIÈRES REPRESENTATIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <span className="badge-pill badge-pill-orange">AUTOMNE 2026</span>
              <h3 className="font-bodoni font-bold text-2xl text-[#161720]">REPRÉSENTATION EN ENTREPRISE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Format exclusif pour séminaires d&apos;entreprise, conventions et événements privés.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <span className="badge-pill badge-pill-teal">JANVIER 2027</span>
              <h3 className="font-bodoni font-bold text-2xl text-[#161720]">PROGRAMMATION PUBLIQUE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cafés-théâtres (Croix-Rousse Lyon), lieux culturels, caves et festivals viticoles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm defaultSubject="Conférence & Intervention" />
      </section>

    </div>
  );
}
