import Link from 'next/link';
import { Radio, Play, ExternalLink, Volume2, ArrowRight, Mic, Sparkles } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Chroniques Radio - Les 400 Coups | Sabrina Carlier',
  description: 'Découvrez "Les 400 Coups" par Sabrina Carlier sur France Bleu. Chroniques radio sans clichés, histoires de vignerons, pairings et émotions.',
};

export default function RadioPage() {
  return (
    <div className="space-y-20 py-12 pb-24">
      
      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4747F4] text-white p-10 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill badge-pill-yellow">
              <Radio className="w-3.5 h-3.5 text-[#FF4F14]" /> FRANCE BLEU • CHRONIQUE RADIO
            </span>
            <h1 className="font-bodoni text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none">
              LES 400 COUPS
            </h1>
            <p className="font-script text-2xl text-[#FCFF97] font-medium">
              &quot;Goûter un vin, ce n&apos;est pas seulement poser son verre au-dessus d&apos;une nappe blanche...&quot;
            </p>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Une invitation à découvrir le vin autrement : avec curiosité, liberté et émotion. Raconter les histoires d&apos;hommes, de femmes et de terroirs sans jargon ni préjugés.
            </p>
          </div>
        </div>
      </section>

      {/* STORY & PLAYER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(22,23,32,0.04)] space-y-6 text-gray-800 leading-relaxed">
            
            <span className="badge-pill badge-pill-lavender">
              L&apos;ESPRIT DE LA CHRONIQUE
            </span>

            <h2 className="font-bodoni text-3xl font-bold text-[#161720]">
              PLUS DE CERTITUDES, PLUS D&apos;IDÉES TOUTES FAITES
            </h2>

            <p className="text-base font-semibold text-[#FF4F14]">
              J’ai acquis une certitude : celle de ne plus jamais en avoir.
            </p>

            <p>
              Plus de certitudes, plus d’idées toutes faites, plus de « cépage préféré », de « vin préféré » ou d’« accord préféré ». Bien sûr, mon cœur bat plus fort pour certains vins. Mais rien ne dure, rien n’est figé. Les goûts évoluent avec les saisons, les rencontres, les lieux et les moments de vie.
            </p>

            <p>
              Je les aime tous, chacun à leur manière, avec leur histoire, leurs racines et les femmes et les hommes qui les façonnent.
            </p>

            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200 space-y-3">
              <span className="font-anton text-xs text-[#4747F4] tracking-widest block">CHRONIQUE RADIO</span>
              <p className="text-sm italic text-gray-700">
                &quot;Les 400 Coups, ce sont toutes ces histoires. Des histoires de vignerons, de bouteilles et de territoires. Des histoires de pairings, cet art d’associer deux éléments pour qu’ensemble ils racontent quelque chose de plus grand.&quot;
              </p>
            </div>

            <p>
              Goûter un vin, ce n’est pas seulement poser son verre au-dessus d’une nappe blanche, observer sa couleur et tenter d’en deviner le cépage, la région, voire le domaine. Ce n’est pas non plus le faire tourner pendant dix minutes en cherchant désespérément des arômes que l’on ne sent pas.
            </p>

            <p className="font-bold text-[#161720] text-lg">
              Car ce ne sont pas toujours les vins que nous dégustons qui restent dans nos mémoires, mais les personnes avec lesquelles nous les partageons.
            </p>

            <p>
              Les discussions, les rires, les rencontres, les silences parfois : voilà ce qui rend les goûts inoubliables. À travers ces chroniques, je vous invite à découvrir le vin autrement : avec curiosité, liberté et émotion.
            </p>

            <div className="pt-4 border-t border-gray-100">
              <span className="font-script text-[#FF4F14] text-xl font-bold">Bienvenue dans l’univers des 400 Coups.</span>
            </div>

          </div>

          {/* Player Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* France Bleu Player */}
            <div className="bg-[#FCFF97] p-8 rounded-3xl shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FF4F14] text-white rounded-full flex items-center justify-center shadow-sm">
                  <Volume2 className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bodoni font-bold text-xl text-[#161720]">FRANCE BLEU PODCAST</h3>
                  <span className="text-xs text-gray-700">Écoutez les épisodes en replay</span>
                </div>
              </div>

              <p className="text-xs text-gray-800 leading-relaxed">
                Retrouvez toutes les éditions diffusées de la chronique &quot;Les 400 Coups&quot; sur le site officiel de Radio France.
              </p>

              <a
                href="https://www.radiofrance.fr/francebleu/podcasts/les-400-coups-4969189"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#4747F4] text-white font-anton text-xs tracking-widest text-center py-4 px-4 rounded-full hover:bg-[#FF4F14] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Play className="w-4 h-4 fill-white" /> ÉCOUTER SUR FRANCE BLEU
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pitch for Stations */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(22,23,32,0.04)] space-y-4">
              <span className="badge-pill badge-pill-teal">
                <Mic className="w-3.5 h-3.5" /> POUR LES STATIONS RADIO
              </span>
              <h3 className="font-bodoni font-bold text-2xl text-[#161720]">PROPOSER UNE CHRONIQUE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Vous recherchez une chroniqueuse passionnée, authentique et expérimentée pour des chroniques quotidiennes ou hebdomadaires ?
              </p>

              <ul className="text-xs space-y-2.5 font-semibold text-gray-800">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF4F14]" /> Formats courts (2 à 5 min)
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF4F14]" /> Thématiques de saison & pairings
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF4F14]" /> Portraits de vignerons & émotions
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm defaultSubject="Chroniques Radio" />
      </section>

    </div>
  );
}
