import Link from 'next/link';
import { Mic, Sparkles, Wine, Brain, Users, Theater, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Conférence - Le Vin, Vecteur d\'Émotion | Sabrina Carlier',
  description: 'Une conférence-expérience unique par Sabrina Carlier. Redécouvrir le vin à travers la mémoire, les sens et l\'émotion. Représentations entreprises (Automne 2026) & public (Janvier 2027).',
};

export default function ConferencesPage() {
  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E6CEFC] text-[#12131A] p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="sticker-badge bg-[#FF4F14] text-white">
                <Mic className="w-4 h-4" /> CONFÉRENCE-EXPÉRIENCE
              </span>
              <span className="sticker-badge bg-[#FCFF97] text-[#12131A]">
                ✨ PROJET EN CRÉATION
              </span>
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wide text-[#12131A] leading-none">
              LE VIN, VECTEUR D&apos;ÉMOTION
            </h1>
            <p className="font-bodoni italic text-xl sm:text-2xl text-[#4747F4] font-bold">
              &quot;Au fond, ce ne sont pas les grands vins que nous retenons. Ce sont les émotions qu&apos;ils nous ont permis de vivre.&quot;
            </p>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              Une conférence vivante mêlant récit, dégustation, éclairages neuro-sensoriels et échanges avec le public.
            </p>
          </div>
        </div>
      </section>

      {/* VERBATIM ESSAY & CORE QUESTIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-8">
          
          <h2 className="font-anton text-3xl sm:text-4xl text-[#12131A]">
            POURQUOI CERTAINS VINS NOUS BOULEVERSENT-ILS ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-2">
              <Brain className="w-8 h-8 text-[#FF4F14]" />
              <p className="text-sm font-bold text-[#12131A]">
                &quot;Pourquoi certains vins nous bouleversent-ils alors que nous sommes incapables de nous souvenir de leur cépage ?&quot;
              </p>
            </div>
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-2">
              <Sparkles className="w-8 h-8 text-[#4747F4]" />
              <p className="text-sm font-bold text-[#12131A]">
                &quot;Pourquoi une simple odeur peut-elle nous ramener vingt ans en arrière ?&quot;
              </p>
            </div>
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-2">
              <Wine className="w-8 h-8 text-[#0AAE98]" />
              <p className="text-sm font-bold text-[#12131A]">
                &quot;Pourquoi gardons-nous en mémoire un repas, une personne ou un instant bien plus qu&apos;une note de dégustation ?&quot;
              </p>
            </div>
          </div>

          <div className="bg-[#FCFF97] p-6 sm:p-8 rounded-2xl border-2 border-[#12131A] space-y-3">
            <h3 className="font-anton text-xl text-[#12131A]">UNE AUTRE FAÇON DE PARLER DU VIN</h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              Pas avec des fiches techniques ou des notes sur vingt. Mais avec des souvenirs, des récits, des expériences sensorielles et des échanges avec le public. Parce qu&apos;au fond, ce ne sont pas les grands vins que nous retenons. Ce sont les émotions qu&apos;ils nous ont permis de vivre.
            </p>
          </div>

        </div>
      </section>

      {/* INTERACTIVE FORMAT COMPONENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="sticker-badge bg-[#0AAE98] text-white mb-2">
            <Sparkles className="w-4 h-4" /> FORMAT PARTICIPATIF
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl text-[#12131A]">
            CE QUE CONTIENT LA CONFÉRENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow flex items-start gap-4">
            <div className="text-3xl">🍷</div>
            <div>
              <h3 className="font-anton text-xl text-[#12131A]">UNE DÉGUSTATION</h3>
              <p className="text-xs text-gray-600 mt-1">Expérience sensorielle guidée en direct avec le public.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow flex items-start gap-4">
            <div className="text-3xl">🎙️</div>
            <div>
              <h3 className="font-anton text-xl text-[#12131A]">DES INVITÉS DE MARQUE</h3>
              <p className="text-xs text-gray-600 mt-1">Vignerons, chefs, artisans, scientifiques et écrivains.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow flex items-start gap-4">
            <div className="text-3xl">🎭</div>
            <div>
              <h3 className="font-anton text-xl text-[#12131A]">INTERACTION PUBLIQUE</h3>
              <p className="text-xs text-gray-600 mt-1">Échanges vivants et improvisations sensorielles.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow flex items-start gap-4">
            <div className="text-3xl">🧠</div>
            <div>
              <h3 className="font-anton text-xl text-[#12131A]">ÉCLAIRAGES MÉMOIRE</h3>
              <p className="text-xs text-gray-600 mt-1">Comprendre comment les sens gravent les souvenirs.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow flex items-start gap-4">
            <div className="text-3xl">✨</div>
            <div>
              <h3 className="font-anton text-xl text-[#12131A]">HISTOIRES DE TERRAIN</h3>
              <p className="text-xs text-gray-600 mt-1">30 ans d&apos;anecdotes captivantes en restauration.</p>
            </div>
          </div>

          <div className="bg-[#4747F4] text-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow flex items-start gap-4">
            <div className="text-3xl">📍</div>
            <div>
              <h3 className="font-anton text-xl text-[#FCFF97]">SUR-MESURE</h3>
              <p className="text-xs text-blue-100 mt-1">Chaque représentation est unique et adaptée au lieu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DATES & CALENDAR ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-8">
          <h2 className="font-anton text-3xl text-[#12131A] flex items-center gap-2">
            <Calendar className="w-7 h-7 text-[#FF4F14]" /> PREMIÈRES REPRESENTATIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-2">
              <span className="text-xs font-anton px-2.5 py-1 bg-[#FF4F14] text-white rounded">
                AUTOMNE 2026
              </span>
              <h3 className="font-anton text-2xl text-[#12131A]">REPRÉSENTATION EN ENTREPRISE</h3>
              <p className="text-xs text-gray-600">
                Format exclusif pour séminaires d&apos;entreprise, conventions et événements privés.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-2">
              <span className="text-xs font-anton px-2.5 py-1 bg-[#0AAE98] text-white rounded">
                JANVIER 2027
              </span>
              <h3 className="font-anton text-2xl text-[#12131A]">PROGRAMMATION PUBLIQUE</h3>
              <p className="text-xs text-gray-600">
                Cafés-théâtres (notamment Croix-Rousse Lyon), lieux culturels, caves et festivals viticoles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm defaultSubject="Conférence & Intervention" />
      </section>

    </div>
  );
}
