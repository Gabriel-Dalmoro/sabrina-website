import Link from 'next/link';
import Image from 'next/image';
import { Users, Wine, MapPin, Sparkles, Flame, CheckCircle, ArrowRight, Heart } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Ateliers & Dégustations B2B - Bienvenue à ma table | Sabrina Carlier',
  description: 'Expériences et ateliers dégustation sur-mesure pour entreprises et groupes. Événements gastronomiques insolites créés par la sommélière Sabrina Carlier.',
};

export default function WorkshopsPage() {
  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FCFF97] text-[#12131A] p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="sticker-badge bg-[#FF4F14] text-white">
              <Users className="w-4 h-4" /> B2B & ÉVÉNEMENTIEL SUR-MESURE
            </span>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wide text-[#12131A] leading-none">
              BIENVENUE À MA TABLE
            </h1>
            <p className="font-bodoni italic text-xl sm:text-2xl text-[#4747F4] font-bold">
              &quot;Au fond, je n&apos;ai jamais vraiment eu de format. Je n&apos;ai pas de déroulé figé. Pas de recette.&quot;
            </p>
            <p className="text-[#12131A]/80 text-sm sm:text-base leading-relaxed">
              Des ateliers dégustation intimistes aux wine dinners pour 100 convives : créer des expériences vibrantes et authentiques pour vos équipes et vos clients B2B.
            </p>
          </div>
        </div>
      </section>

      {/* VERBATIM TEXT MEMORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow space-y-10">
          
          <div className="space-y-3">
            <span className="sticker-badge bg-[#E6CEFC] text-[#12131A]">
              <Sparkles className="w-4 h-4 text-[#FF4F14]" /> RÉCITS & EXPÉRIENCES PASSÉES
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl text-[#12131A]">
              DES LIEUX, DES CHEFS ET DES MOMENTS SUSPENDUS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Story Card 1 */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-3">
              <div className="w-10 h-10 bg-[#4747F4] text-white rounded-lg flex items-center justify-center font-anton border border-[#12131A]">
                01
              </div>
              <h3 className="font-anton text-xl text-[#12131A]">DES DÎNERS INSOLITES</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Il y a eu des dîners au cœur d&apos;une forêt, dans un potager, dans un loft annécien, dans mon bar à vin, sur la terrasse de l&apos;Antiquaille qui domine Lyon, dans une cave des Halles, ou au caveau de Wine You Want...
              </p>
            </div>

            {/* Story Card 2 */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-3">
              <div className="w-10 h-10 bg-[#FF4F14] text-white rounded-lg flex items-center justify-center font-anton border border-[#12131A]">
                02
              </div>
              <h3 className="font-anton text-xl text-[#12131A]">DES 4 MAINS & DES ALTITUDES</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Des dîners à quatre mains avec des chefs profondément aimés. Ceux du Lyon Street Food Festival sous quarante degrés, et ceux à plus de 2 500 mètres d&apos;altitude à Val d&apos;Isère pendant que dehors la neige tombait.
              </p>
            </div>

            {/* Story Card 3 */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-3">
              <div className="w-10 h-10 bg-[#0AAE98] text-white rounded-lg flex items-center justify-center font-anton border border-[#12131A]">
                03
              </div>
              <h3 className="font-anton text-xl text-[#12131A]">DU COMPACT AU GÉANT</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Des ateliers pour 4 personnes, d&apos;autres pour 60. Des wine dinners réunissant cent convives autour de la même table avec des vignerons invités. Des battles entre sommeliers passionnés.
              </p>
            </div>

            {/* Story Card 4 */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-3">
              <div className="w-10 h-10 bg-[#E6CEFC] text-[#12131A] rounded-lg flex items-center justify-center font-anton border border-[#12131A]">
                04
              </div>
              <h3 className="font-anton text-xl text-[#12131A]">ACCORDS AUDACIEUX</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Chocolats Voisin, Maison Kaviari, cuisine bourgeoise avec Hubert Vergoin, cuisine péruvienne avec Gonzalo, huîtres, street food, fromages, vieux millésimes de La Chapelle de Jaboulet Aîné...
              </p>
            </div>

            {/* Story Card 5 */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-3">
              <div className="w-10 h-10 bg-[#FCFF97] text-[#12131A] rounded-lg flex items-center justify-center font-anton border border-[#12131A]">
                05
              </div>
              <h3 className="font-anton text-xl text-[#12131A]">GRANDS CRUS & HISTOIRES</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Union des Grands Crus de Bordeaux, Plénitude 2 de Dom Pérignon avec Amine Ghanem, 50 vins à goûter avant 50 ans, et un atelier si particulier animé avec sa fille diplômée de Ferrandi Paris.
              </p>
            </div>

            {/* Story Card 6 */}
            <div className="bg-[#4747F4] text-white p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-3 flex flex-col justify-between">
              <div>
                <span className="font-anton text-[#FCFF97] text-lg block">CE QUI COMPTE VRAIMENT</span>
                <p className="text-xs leading-relaxed mt-2">
                  La seule chose que j&apos;aime, c&apos;est réunir des personnes autour d&apos;une table. Goûter, échanger, dire ce que l&apos;on ressent plutôt que ce que l&apos;on croit devoir ressentir.
                </p>
              </div>
              <span className="font-script text-[#FCFF97] text-lg font-bold">Chaque atelier est différent.</span>
            </div>

          </div>

        </div>
      </section>

      {/* B2B OFFER HIGHLIGHTS FOR COMPANIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="sticker-badge bg-[#0AAE98] text-white mb-2">
            <Sparkles className="w-4 h-4" /> OFFRES ENTREPRISES
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl text-[#12131A]">
            POUR VOS ÉQUIPES & VOS CLIENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow space-y-3">
            <h3 className="font-anton text-xl text-[#FF4F14]">TEAM BUILDING DÉGUSTATION</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Désacraliser le vin, encourager la parole spontanée et souder vos collaborateurs autour de cuvées surprises et d&apos;ateliers ludiques.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow space-y-3">
            <h3 className="font-anton text-xl text-[#4747F4]">WINE DINNER CLIENT PRESTIGE</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Un repère de convivialité et d&apos;élégance pour vos clients VIP. Sélection de flacons rares, narration vivante et accords personnalisés.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow space-y-3">
            <h3 className="font-anton text-xl text-[#0AAE98]">CONCEPTION DE CARTE / CONSEIL</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Accompagnement d&apos;établissements, hôtels et lieux d&apos;exception dans la création d&apos;offres vins et l&apos;expérience client sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm defaultSubject="Atelier Dégustation B2B" />
      </section>

    </div>
  );
}
