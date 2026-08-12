import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Radio, Users, GraduationCap, Mic, Sparkles, Heart, Award, FileText, Smile, CheckCircle2, Coffee, Flame } from 'lucide-react';
import PhotoGallery from '@/components/PhotoGallery';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION: WOW EFFECT + WARMTH + CLARITY */}
      <section className="relative pt-12 pb-20 overflow-hidden gradient-funky-hero border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Funky Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-pill badge-pill-yellow shadow-sm">
                  <Smile className="w-3.5 h-3.5 text-[#FF4F14]" /> FUNK, JOIE & SOMMELLERIE
                </span>
                <span className="badge-pill badge-pill-blue shadow-sm">
                  30 ANS DE PASSION & DE TERRAIN
                </span>
              </div>

              {/* Bold Bodoni Headline */}
              <h1 className="font-bodoni text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#12131A] leading-[1.02]">
                LE VIN SANS SNOBISME, <br />
                <span className="italic font-normal text-[#4747F4]">DES ÉMOTIONS AVEC DU STYLE.</span>
              </h1>

              {/* Handwritten Script Personal Quote */}
              <p className="font-script text-2xl sm:text-3xl text-[#FF4F14] font-bold leading-snug">
                &quot;Le vin est bien plus qu&apos;une boisson. Il est un souvenir, une rencontre, une émotion.&quot;
              </p>

              {/* Warm Personal Story Intro */}
              <div className="bg-white/90 backdrop-blur-md p-7 rounded-3xl border border-gray-200/80 shadow-[0_15px_40px_rgba(71,71,244,0.06)] space-y-3 text-gray-700 text-base leading-relaxed">
                <p className="font-bodoni text-lg text-[#12131A] font-semibold">
                  Bienvenue dans mon univers !
                </p>
                <p>
                  J&apos;ai à peu près six ans lorsque je sers ma première tasse de café dans le restaurant de mes grands-parents. Trente ans plus tard, ma passion pour le vin et l&apos;hospitalité est restée intacte : vivante, libre et joyeuse.
                </p>
              </div>

              {/* Primary Single Call to Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#FF4F14] text-white font-anton text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[#4747F4] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  ME CONTACTER / PROPOSER UN PROJET
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Photo Frame: Mix of Authentic & Professional */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                <div className="bg-white p-4 rounded-3xl border border-gray-200/70 shadow-[0_25px_60px_rgba(71,71,244,0.14)] relative">
                  
                  {/* Funky Corner Sticker */}
                  <div className="absolute -top-3 -right-3 bg-[#FCFF97] text-[#12131A] font-anton text-[11px] px-3.5 py-1.5 rounded-full border border-gray-300 shadow-md rotate-3 z-10">
                    ✨ LYON & EN DÉPLACEMENT
                  </div>

                  <div className="relative h-[460px] sm:h-[520px] w-full rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src="/photos/sabrina_photo_01.jpg"
                      alt="Sabrina Carlier Sommelier"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between px-3 py-1">
                    <div>
                      <span className="font-bodoni font-bold text-xl text-[#12131A] block">SABRINA CARLIER</span>
                      <span className="font-script text-[#FF4F14] text-base font-bold">Sommelier d&apos;Émotions & Consultante</span>
                    </div>
                    <span className="badge-pill badge-pill-lavender text-[10px]">
                      30 ANS D&apos;EXPÉRIENCE
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* CLEAR SERVICES QUICK-HUB (Solves "I don't get what she does") */}
          <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-[0_20px_50px_rgba(18,19,26,0.05)]">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="badge-pill badge-pill-teal">
                CE QUE JE FAIS
              </span>
              <h2 className="font-bodoni text-2xl sm:text-3xl font-bold text-[#12131A]">
                4 FAÇONS DE COLLABORER ENSEMBLE
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Link href="/chroniques-radio" className="group p-5 rounded-2xl bg-[#FAF8F5] hover:bg-[#4747F4] hover:text-white transition-all border border-gray-100 space-y-3">
                <div className="w-10 h-10 bg-[#4747F4] group-hover:bg-white text-white group-hover:text-[#4747F4] rounded-xl flex items-center justify-center font-bold">
                  🎙️
                </div>
                <span className="text-[11px] font-anton tracking-widest text-[#4747F4] group-hover:text-[#FCFF97] uppercase block">01 / STATIONS RADIO</span>
                <h3 className="font-bodoni font-bold text-xl">CHRONIQUES RADIO</h3>
                <p className="text-xs text-gray-600 group-hover:text-blue-100 leading-relaxed">
                  &quot;Les 400 Coups&quot; sur France Bleu. Chroniques sur-mesure & histoires vignerons.
                </p>
              </Link>

              <Link href="/ateliers-degustation" className="group p-5 rounded-2xl bg-[#FAF8F5] hover:bg-[#FF4F14] hover:text-white transition-all border border-gray-100 space-y-3">
                <div className="w-10 h-10 bg-[#FF4F14] group-hover:bg-white text-white group-hover:text-[#FF4F14] rounded-xl flex items-center justify-center font-bold">
                  🍷
                </div>
                <span className="text-[11px] font-anton tracking-widest text-[#FF4F14] group-hover:text-[#FCFF97] uppercase block">02 / ENTREPRISES B2B</span>
                <h3 className="font-bodoni font-bold text-xl">ATELIERS DÉGUSTATION</h3>
                <p className="text-xs text-gray-600 group-hover:text-orange-100 leading-relaxed">
                  &quot;Bienvenue à ma table&quot;. Événements B2B insolites (Val d&apos;Isère, lofts, potagers).
                </p>
              </Link>

              <Link href="/formations-ecoles" className="group p-5 rounded-2xl bg-[#FAF8F5] hover:bg-[#0AAE98] hover:text-white transition-all border border-gray-100 space-y-3">
                <div className="w-10 h-10 bg-[#0AAE98] group-hover:bg-white text-white group-hover:text-[#0AAE98] rounded-xl flex items-center justify-center font-bold">
                  🎓
                </div>
                <span className="text-[11px] font-anton tracking-widest text-[#0AAE98] group-hover:text-[#FCFF97] uppercase block">03 / ÉCOLES SUPÉRIEURES</span>
                <h3 className="font-bodoni font-bold text-xl">ÉCOLE & FORMATION</h3>
                <p className="text-xs text-gray-600 group-hover:text-teal-100 leading-relaxed">
                  Intervenante ISG Luxury Management Lyon & Genève (Hospitalité, Wine & Mgmt).
                </p>
              </Link>

              <Link href="/conferences" className="group p-5 rounded-2xl bg-[#FAF8F5] hover:bg-[#E6CEFC] hover:text-[#12131A] transition-all border border-gray-100 space-y-3">
                <div className="w-10 h-10 bg-[#E6CEFC] text-[#12131A] rounded-xl flex items-center justify-center font-bold">
                  🎭
                </div>
                <span className="text-[11px] font-anton tracking-widest text-[#FF4F14] uppercase block">04 / SCÈNE & THÉÂTRE</span>
                <h3 className="font-bodoni font-bold text-xl text-[#12131A]">CONFÉRENCE</h3>
                <p className="text-xs text-gray-600 group-hover:text-[#12131A] leading-relaxed">
                  &quot;Le vin, vecteur d&apos;émotion&quot;. Prise de parole participative avec dégustation.
                </p>
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* DETAILED NARRATIVE STORY ("Raconte mon histoire") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-14 rounded-3xl border border-gray-200/80 shadow-[0_20px_50px_rgba(18,19,26,0.04)] space-y-12">
          
          <div className="space-y-3">
            <span className="badge-pill badge-pill-lavender">
              <Heart className="w-3.5 h-3.5 text-[#FF4F14]" /> PARCOURS & RÉCIT SINCÈRE
            </span>
            <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#12131A] tracking-tight">
              30 ANS D&apos;HOSPITALITÉ : MON HISTOIRE
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl">
              De mes 6 ans dans le restaurant familial aux grands établissements et aux cours en école supérieure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Story Timeline Column */}
            <div className="lg:col-span-8 space-y-6 text-gray-800 text-base leading-relaxed">
              
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-gray-200/70 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FCFF97] text-[#12131A] rounded-full flex items-center justify-center font-bold text-sm">
                    <Coffee className="w-4 h-4 text-[#FF4F14]" />
                  </div>
                  <h3 className="font-bodoni font-bold text-xl text-[#12131A]">L&apos;ENFANCE DANS LE RESTAURANT DE MES GRANDS-PARENTS</h3>
                </div>
                <p className="text-sm text-gray-700">
                  J&apos;ai à peu près six ans lorsque je sers ma première tasse de café dans le bar-restaurant de mes grands-parents. Entre les tables de multiplication et les dictées, j&apos;apprends aussi à reconnaître le bruit d&apos;un percolateur, j&apos;entends le chef parler de beurre clarifié pour sa sauce hollandaise et je regarde mon grand-père rentrer de ses parcs à huîtres pour garnir les buffets de fruits de mer.
                </p>
                <p className="font-script text-xl text-[#FF4F14] font-bold">
                  Très tôt, je comprends que l&apos;hospitalité n&apos;est pas un métier. C&apos;est une manière de vivre.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-gray-200/70 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4747F4] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    🍷
                  </div>
                  <h3 className="font-bodoni font-bold text-xl text-[#12131A]">PILOTE DE CHASSE ? ET LE PREMIER AMOUR</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Bien sûr, il y a bien eu cette courte période où je voulais devenir pilote de chasse. Mais j&apos;en veux surtout à Tom Cruise et à son Mirage… La restauration, elle, ne m&apos;a jamais quittée. Le vin est arrivé un peu plus tard. Il a bouleversé mon cœur. Il est devenu mon premier grand amour… enfin, presque. (Pardon Sébastien.)
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-gray-200/70 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0AAE98] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    ✨
                  </div>
                  <h3 className="font-bodoni font-bold text-xl text-[#12131A]">30 ANS DE TERRAIN, DE PLONGE À LA DIRECTION</h3>
                </div>
                <p className="text-sm text-gray-700">
                  En trente ans, j&apos;ai fait de la plonge, des chambres, de la réception, du service, de la sommellerie, de la direction. J&apos;ai organisé des mariages, des repas intimistes, des événements de mille personnes. J&apos;ai vendu des bouteilles à dix euros et d&apos;autres à douze mille. J&apos;ai connu les coups de feu, les coups de gueule, les coups de foudre aussi.
                </p>
              </div>

              <div className="bg-[#4747F4] text-white p-7 rounded-2xl shadow-md space-y-3">
                <h3 className="font-bodoni font-bold text-2xl text-[#FCFF97]">AUJOURD&apos;HUI : ACCUEILLIR AUTREMENT</h3>
                <p className="text-sm leading-relaxed text-blue-100">
                  Aujourd&apos;hui, je ressens simplement l&apos;envie d&apos;aller plus loin. Continuer à accueillir, mais autrement. Transmettre ce que le terrain m&apos;a appris. Créer des expériences autour du vin, enseigner, donner des conférences et accompagner des établissements. Et surtout remettre ce qui m&apos;a toujours guidée au cœur de mon métier : les rencontres, le partage et les émotions.
                </p>
              </div>

            </div>

            {/* Right Accent Image Grid */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-[#FAF8F5] p-4 rounded-3xl border border-gray-200 shadow-sm">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/photos/sabrina_photo_03.jpg"
                    alt="Sabrina Carlier en cuisine et service"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-center text-gray-600 mt-3 font-medium">
                  Moments spontanés sur le terrain avec les équipes.
                </p>
              </div>

              <div className="bg-[#FCFF97] p-6 rounded-3xl shadow-sm text-[#12131A] space-y-3">
                <span className="font-anton text-xs tracking-widest text-[#FF4F14] uppercase block">EXPÉRIENCE EN CHIFFRES</span>
                <ul className="space-y-2 text-sm font-semibold">
                  <li className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#FF4F14]" /> 30 Ans d&apos;Hospitalité
                  </li>
                  <li className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#FF4F14]" /> 100+ Ateliers & Dîners Insolites
                  </li>
                  <li className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#FF4F14]" /> France Bleu & ISG Mgmt
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PhotoGallery />
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FF4F14] text-white p-10 sm:p-14 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="badge-pill badge-pill-yellow">
              DISPONIBILITÉS 2026 - 2027
            </span>
            <h2 className="font-bodoni text-3xl sm:text-4xl font-bold tracking-tight text-white">
              SOUHAITEZ-VOUS ÉCHANGER SUR UN PROJET SUR-MESURE ?
            </h2>
            <p className="text-orange-100 text-sm max-w-xl">
              Écrivez directement à <span className="font-bold text-[#FCFF97]">hello@sabrinacarlier.fr</span> pour échanger avec Sabrina.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#4747F4] text-white font-anton text-xs tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-[#12131A] transition-colors shadow-lg"
            >
              ME CONTACTER
            </Link>
            <Link
              href="/cv"
              className="bg-white text-[#12131A] font-anton text-xs tracking-widest px-6 py-4 rounded-full hover:bg-[#FCFF97] transition-colors shadow-md flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#4747F4]" /> VOIR LE CV
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
