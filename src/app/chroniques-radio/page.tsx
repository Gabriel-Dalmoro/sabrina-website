import Link from 'next/link';
import Image from 'next/image';
import { Radio, Play, ExternalLink, Sparkles, Volume2, ArrowRight, Mail, Mic } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Chroniques Radio - Les 400 Coups | Sabrina Carlier',
  description: 'Découvrez "Les 400 Coups" par Sabrina Carlier sur France Bleu. Chroniques radio sans clichés, histoires de vignerons, pairings et émotions.',
};

export default function RadioPage() {
  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4747F4] text-white p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow-lg relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-[#FCFF97] text-[#12131A] font-anton text-xs px-3 py-1 rounded-full border border-[#12131A] rotate-3 hidden sm:block">
            🎙️ CHRONIQUE FRANCE BLEU
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="sticker-badge bg-[#FCFF97] text-[#12131A]">
              <Radio className="w-4 h-4 text-[#FF4F14]" /> MÉDIA & PODCAST
            </span>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wide text-white leading-none">
              LES 400 COUPS
            </h1>
            <p className="font-bodoni italic text-xl sm:text-2xl text-[#FCFF97] font-medium">
              &quot;Goûter un vin, ce n&apos;est pas seulement poser son verre au-dessus d&apos;une nappe blanche...&quot;
            </p>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Une invitation à découvrir le vin autrement : avec curiosité, liberté et émotion. Raconter les histoires d&apos;hommes, de femmes et de terroirs sans jargon ni préjugés.
            </p>
          </div>
        </div>
      </section>

      {/* VERBATIM TEXT CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Verbatim Story Block */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-6 text-gray-800 leading-relaxed">
            
            <h2 className="font-anton text-2xl sm:text-3xl text-[#12131A]">
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

            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-3">
              <span className="font-anton text-lg text-[#4747F4] block">L&apos;ESPRIT DES 400 COUPS</span>
              <p className="text-sm italic">
                &quot;Les 400 Coups, ce sont toutes ces histoires. Des histoires de vignerons, de bouteilles et de territoires. Des histoires de pairings, cet art d’associer deux éléments pour qu’ensemble ils racontent quelque chose de plus grand.&quot;
              </p>
            </div>

            <p>
              Goûter un vin, ce n’est pas seulement poser son verre au-dessus d’une nappe blanche, observer sa couleur et tenter d’en deviner le cépage, la région, voire le domaine. Ce n’est pas non plus le faire tourner pendant dix minutes en cherchant désespérément des arômes que l’on ne sent pas.
            </p>

            <p className="font-bold text-[#12131A] text-lg">
              Car ce ne sont pas toujours les vins que nous dégustons qui restent dans nos mémoires, mais les personnes avec lesquelles nous les partageons.
            </p>

            <p>
              Les discussions, les rires, les rencontres, les silences parfois : voilà ce qui rend les goûts inoubliables. À travers ces chroniques, je vous invite à découvrir le vin autrement : avec curiosité, liberté et émotion.
            </p>

            <div className="pt-4 border-t-2 border-gray-100 flex items-center justify-between">
              <span className="font-script text-[#FF4F14] text-xl font-bold">Bienvenue dans l’univers des 400 Coups.</span>
            </div>

          </div>

          {/* Player & Radio Pitch Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* France Bleu Player Embed Card */}
            <div className="bg-[#FCFF97] p-6 sm:p-8 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FF4F14] text-white rounded-full flex items-center justify-center border-2 border-[#12131A] pop-shadow">
                  <Volume2 className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-anton text-xl text-[#12131A]">FRANCE BLEU PODCAST</h3>
                  <span className="text-xs font-bold text-gray-700">Écoutez les épisodes en ligne</span>
                </div>
              </div>

              <p className="text-xs text-[#12131A] leading-relaxed">
                Retrouvez toutes les éditions diffusées de la chronique &quot;Les 400 Coups&quot; sur le site officiel de Radio France.
              </p>

              <a
                href="https://www.radiofrance.fr/francebleu/podcasts/les-400-coups-4969189"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#4747F4] text-white font-anton text-center py-3.5 px-4 rounded-xl border-2 border-[#12131A] pop-shadow hover:bg-[#FF4F14] transition-colors flex items-center justify-center gap-2 text-base"
              >
                <Play className="w-5 h-5 fill-white" /> ÉCOUTER SUR FRANCE BLEU
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Pitch for Radio Stations */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-4">
              <span className="sticker-badge bg-[#E6CEFC] text-[#12131A]">
                <Mic className="w-4 h-4 text-[#4747F4]" /> POUR LES STATIONS RADIO
              </span>
              <h3 className="font-anton text-2xl text-[#12131A]">PROPOSER UNE CHRONIQUE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Vous recherchez une intervenante captivante, authentique et expérimentée pour des chroniques quotidiennes ou hebdomadaires ?
              </p>

              <ul className="text-xs space-y-2 font-bold text-[#12131A]">
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

              <a
                href="#contact-radio"
                className="inline-flex items-center gap-2 text-xs font-anton text-[#4747F4] hover:text-[#FF4F14] transition-colors pt-2"
              >
                DISCUTER D&apos;UNE COLLABORATION <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact-radio" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm defaultSubject="Chroniques Radio" />
      </section>

    </div>
  );
}
