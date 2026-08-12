import Link from 'next/link';
import { Mail, Radio, MapPin, Heart, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#12131A] text-white border-t-4 border-[#12131A] pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#4747F4] via-[#FCFF97] via-[#FF4F14] via-[#0AAE98] to-[#E6CEFC]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FCFF97] text-[#12131A] font-anton text-2xl flex items-center justify-center rounded-lg border-2 border-white pop-shadow-orange">
                SC
              </div>
              <div>
                <span className="font-anton text-2xl tracking-wider text-white block leading-none">
                  SABRINA CARLIER
                </span>
                <span className="font-script text-[#FCFF97] text-lg font-bold">
                  Sommelerie & Émotions
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              30 ans de terrain, de sommellerie et d&apos;hospitalité. Transmettre le vin avec liberté, curiosité et sincérité.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0AAE98]/20 border border-[#0AAE98] text-[#0AAE98] rounded-full text-xs font-bold">
              <MapPin className="w-3.5 h-3.5" />
              Basée à Lyon, France & Mobile
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-anton text-lg tracking-wider text-[#FCFF97] mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF4F14]" /> NAVIGUER
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#FCFF97] transition-colors flex items-center gap-1.5">
                  • Accueil & Story
                </Link>
              </li>
              <li>
                <Link href="/chroniques-radio" className="hover:text-[#FCFF97] transition-colors flex items-center gap-1.5">
                  • Chroniques Radio (Les 400 Coups)
                </Link>
              </li>
              <li>
                <Link href="/ateliers-degustation" className="hover:text-[#FCFF97] transition-colors flex items-center gap-1.5">
                  • Ateliers Dégustation B2B
                </Link>
              </li>
              <li>
                <Link href="/formations-ecoles" className="hover:text-[#FCFF97] transition-colors flex items-center gap-1.5">
                  • Écoles & Formations
                </Link>
              </li>
              <li>
                <Link href="/conferences" className="hover:text-[#FCFF97] transition-colors flex items-center gap-1.5">
                  • Conférence (&quot;Le vin, vecteur d&apos;émotion&quot;)
                </Link>
              </li>
              <li>
                <Link href="/cv" className="hover:text-[#FCFF97] transition-colors flex items-center gap-1.5">
                  • Parcours & CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Radio & Media */}
          <div>
            <h3 className="font-anton text-lg tracking-wider text-[#E6CEFC] mb-4 flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#0AAE98]" /> MÉDIAS & PODCAST
            </h3>
            <p className="text-xs text-gray-300 mb-3 leading-relaxed">
              Retrouvez la chronique radio &quot;Les 400 Coups&quot; sur France Bleu.
            </p>
            <a
              href="https://www.radiofrance.fr/francebleu/podcasts/les-400-coups-4969189"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4747F4] text-white text-xs font-bold px-3.5 py-2 rounded-lg border border-white hover:bg-[#FF4F14] transition-colors"
            >
              Écouter sur France Bleu
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="font-anton text-lg tracking-wider text-[#FF4F14] mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FCFF97]" /> CONTACT DIRECT
            </h3>
            <p className="text-xs text-gray-300 mb-3">
              Pour une collaboration, une intervention en école, une conférence ou un atelier entreprise :
            </p>
            <a
              href="mailto:hello@sabrinacarlier.fr"
              className="inline-block bg-[#FCFF97] text-[#12131A] font-anton text-sm px-4 py-2.5 rounded-lg border-2 border-[#12131A] hover:bg-[#FF4F14] hover:text-white transition-colors"
            >
              hello@sabrinacarlier.fr
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Sabrina Carlier. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Créé avec <Heart className="w-3.5 h-3.5 text-[#FF4F14] fill-[#FF4F14]" /> pour une sommellerie humaine & vibrante.
          </p>
        </div>
      </div>
    </footer>
  );
}
