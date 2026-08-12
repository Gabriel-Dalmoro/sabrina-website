import Link from 'next/link';
import { Mail, Radio, MapPin, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#161720] text-white pt-20 pb-12 relative overflow-hidden">
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4747F4] via-[#FCFF97] via-[#FF4F14] via-[#0AAE98] to-[#E6CEFC]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FCFF97] text-[#161720] font-anton text-xl flex items-center justify-center rounded-xl font-bold">
                SC
              </div>
              <div>
                <span className="font-bodoni text-2xl font-bold tracking-tight text-white block leading-none">
                  SABRINA CARLIER
                </span>
                <span className="font-script text-[#FCFF97] text-base">
                  Sommelerie & Émotions
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              30 ans de terrain, de sommellerie et d&apos;hospitalité. Transmettre le vin avec liberté, curiosité et sincérité.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#0AAE98]" />
              Basée à Lyon, France & Mobile
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-anton text-sm tracking-widest text-[#FCFF97] mb-5 uppercase">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil & Story
                </Link>
              </li>
              <li>
                <Link href="/chroniques-radio" className="hover:text-white transition-colors">
                  Chroniques Radio (Les 400 Coups)
                </Link>
              </li>
              <li>
                <Link href="/ateliers-degustation" className="hover:text-white transition-colors">
                  Ateliers Dégustation B2B
                </Link>
              </li>
              <li>
                <Link href="/formations-ecoles" className="hover:text-white transition-colors">
                  Écoles & Formations
                </Link>
              </li>
              <li>
                <Link href="/conferences" className="hover:text-white transition-colors">
                  Conférence (&quot;Le vin, vecteur d&apos;émotion&quot;)
                </Link>
              </li>
              <li>
                <Link href="/cv" className="hover:text-white transition-colors">
                  Parcours & CV Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Media & France Bleu */}
          <div>
            <h3 className="font-anton text-sm tracking-widest text-[#E6CEFC] mb-5 uppercase">
              Médias & Podcast
            </h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Retrouvez la chronique radio &quot;Les 400 Coups&quot; diffusée sur France Bleu.
            </p>
            <a
              href="https://www.radiofrance.fr/francebleu/podcasts/les-400-coups-4969189"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4747F4] text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-[#FF4F14] transition-colors"
            >
              Écouter sur France Bleu
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="font-anton text-sm tracking-widest text-[#FF4F14] mb-5 uppercase">
              Contact Direct
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Pour toute intervention en entreprise, école ou média :
            </p>
            <a
              href="mailto:hello@sabrinacarlier.fr"
              className="inline-block bg-[#FCFF97] text-[#161720] font-anton text-sm tracking-wider px-5 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              hello@sabrinacarlier.fr
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Sabrina Carlier. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Créé pour une sommellerie libre, humaine & élégante.
          </p>
        </div>
      </div>
    </footer>
  );
}
