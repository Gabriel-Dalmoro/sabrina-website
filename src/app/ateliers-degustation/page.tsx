import Link from 'next/link';
import { Users, Sparkles, Heart } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Ateliers & Dégustations B2B - Bienvenue à ma table | Sabrina Carlier',
  description: 'Expériences et ateliers dégustation sur-mesure pour entreprises et groupes. Événements gastronomiques insolites créés par la sommélière Sabrina Carlier.',
};

export default function WorkshopsPage() {
  return (
    <div className="space-y-20 py-12 pb-24">
      
      {/* HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FCFF97] text-[#161720] p-10 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-pill badge-pill-orange">
              <Users className="w-3.5 h-3.5" /> B2B & ÉVÉNEMENTIEL SUR-MESURE
            </span>
            <h1 className="font-bodoni text-4xl sm:text-6xl font-bold tracking-tight text-[#161720] leading-none">
              BIENVENUE À MA TABLE
            </h1>
            <p className="font-script text-2xl text-[#4747F4] font-semibold">
              &quot;Au fond, je n&apos;ai jamais vraiment eu de format. Je n&apos;ai pas de déroulé figé. Pas de recette.&quot;
            </p>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              Des ateliers dégustation intimistes aux wine dinners pour 100 convives : créer des expériences vibrantes et authentiques pour vos équipes et vos clients B2B.
            </p>
          </div>
        </div>
      </section>

      {/* VERBATIM STORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(22,23,32,0.04)] space-y-10">
          
          <div className="space-y-2">
            <span className="badge-pill badge-pill-lavender">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4F14]" /> RÉCITS & EXPÉRIENCES PASSÉES
            </span>
            <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-[#161720] tracking-tight">
              DES LIEUX, DES CHEFS ET DES MOMENTS SUSPENDUS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Story Card 1 */}
            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <span className="text-xs font-anton text-[#4747F4] tracking-widest block">01 / INSOLITE</span>
              <h3 className="font-bodoni font-bold text-xl text-[#161720]">DÎNERS FORÊT & TERRASSES</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Il y a eu des dîners au cœur d&apos;une forêt, dans un potager, dans un loft annécien, dans mon bar à vin, sur la terrasse de l&apos;Antiquaille qui domine Lyon, dans une cave des Halles, ou au caveau de Wine You Want...
              </p>
            </div>

            {/* Story Card 2 */}
            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <span className="text-xs font-anton text-[#FF4F14] tracking-widest block">02 / GOURMAND</span>
              <h3 className="font-bodoni font-bold text-xl text-[#161720]">4 MAINS & ALTITUDE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Des dîners à quatre mains avec des chefs profondément aimés. Ceux du Lyon Street Food Festival sous quarante degrés, et ceux à plus de 2 500 mètres d&apos;altitude à Val d&apos;Isère pendant que dehors la neige tombait.
              </p>
            </div>

            {/* Story Card 3 */}
            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <span className="text-xs font-anton text-[#0AAE98] tracking-widest block">03 / CONVIVIAL</span>
              <h3 className="font-bodoni font-bold text-xl text-[#161720]">BATTLES & WINE DINNERS</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Des ateliers pour 4 personnes, d&apos;autres pour 60. Des wine dinners réunissant cent convives autour de la même table avec des vignerons invités. Des battles entre sommeliers passionnés.
              </p>
            </div>

            {/* Story Card 4 */}
            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <span className="text-xs font-anton text-[#4747F4] tracking-widest block">04 / AUDACIEUX</span>
              <h3 className="font-bodoni font-bold text-xl text-[#161720]">ACCORDS SUR-MESURE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Chocolats Voisin, Maison Kaviari, cuisine bourgeoise avec Hubert Vergoin, cuisine péruvienne avec Gonzalo, huîtres, street food, fromages, vieux millésimes de La Chapelle de Jaboulet Aîné...
              </p>
            </div>

            {/* Story Card 5 */}
            <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-gray-100 space-y-3">
              <span className="text-xs font-anton text-[#FF4F14] tracking-widest block">05 / PRESTIGE</span>
              <h3 className="font-bodoni font-bold text-xl text-[#161720]">GRANDS CRUS & TRANSMISSION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Union des Grands Crus de Bordeaux, Plénitude 2 de Dom Pérignon avec Amine Ghanem, 50 vins à goûter avant 50 ans, et un atelier si particulier animé avec sa fille diplômée de Ferrandi Paris.
              </p>
            </div>

            {/* Story Card 6 */}
            <div className="bg-[#4747F4] text-white p-7 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
              <div>
                <span className="font-anton text-[#FCFF97] text-xs tracking-widest uppercase block">PHILOSOPHIE</span>
                <p className="text-xs leading-relaxed mt-2">
                  La seule chose que j&apos;aime, c&apos;est réunir des personnes autour d&apos;une table. Goûter, échanger, dire ce que l&apos;on ressent plutôt que ce que l&apos;on croit devoir ressentir.
                </p>
              </div>
              <span className="font-script text-[#FCFF97] text-lg font-semibold">Chaque atelier est différent.</span>
            </div>

          </div>

        </div>
      </section>

      {/* OFFERS FOR COMPANIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="badge-pill badge-pill-teal mb-2">
            OFFRES ENTREPRISES
          </span>
          <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-[#161720] tracking-tight">
            POUR VOS ÉQUIPES & VOS CLIENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-modern p-7 space-y-3">
            <h3 className="font-bodoni font-bold text-xl text-[#FF4F14]">TEAM BUILDING DÉGUSTATION</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Désacraliser le vin, encourager la parole spontanée et souder vos collaborateurs autour de cuvées surprises.
            </p>
          </div>

          <div className="card-modern p-7 space-y-3">
            <h3 className="font-bodoni font-bold text-xl text-[#4747F4]">WINE DINNER CLIENT PRESTIGE</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Un repère de convivialité et d&apos;élégance pour vos clients VIP. Flacons rares, narration vivante et accords d&apos;exception.
            </p>
          </div>

          <div className="card-modern p-7 space-y-3">
            <h3 className="font-bodoni font-bold text-xl text-[#0AAE98]">CONSEIL & INVENTAIRE</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Accompagnement d&apos;établissements, hôtels et lieux d&apos;exception dans la création d&apos;offres vins sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm defaultSubject="Ateliers Dégustation B2B" />
      </section>

    </div>
  );
}
