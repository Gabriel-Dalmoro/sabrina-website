import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Radio, Users, GraduationCap, Mic, Sparkles, Heart, Award, FileText } from 'lucide-react';
import PhotoGallery from '@/components/PhotoGallery';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#E6CEFC]/30 via-[#FAF9F6] to-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-pill badge-pill-yellow">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF4F14]" /> SOMMELLERIE • HUMAINE & LIBRE
                </span>
                <span className="badge-pill badge-pill-blue">
                  30 ANS DE TERRAIN
                </span>
              </div>

              <h1 className="font-bodoni text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#161720] leading-[1.02]">
                L&apos;HOSPITALITÉ, LE VIN & <br />
                <span className="italic font-normal text-[#4747F4]">LES ÉMOTIONS.</span>
              </h1>

              <p className="font-script text-2xl sm:text-3xl text-[#FF4F14] font-medium leading-snug">
                &quot;Le vin est bien plus qu&apos;une boisson. Il est un souvenir, une rencontre, une émotion.&quot;
              </p>

              <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(22,23,32,0.04)] space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  J&apos;ai à peu près six ans lorsque je sers ma première tasse de café dans le bar-restaurant de mes grands-parents. Entre les tables de multiplication et les dictées, j&apos;apprends aussi à reconnaître le bruit d&apos;un percolateur...
                </p>
                <p className="font-semibold text-[#161720]">
                  Voilà maintenant trente ans que je vis dans les restaurants. Trente années passées à accueillir, observer, apprendre, transmettre, manager, servir, goûter, recommencer.
                </p>
              </div>

              {/* SINGLE CLEAR PRIMARY CTA */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#FF4F14] text-white font-anton text-sm tracking-widest px-8 py-4 rounded-full hover:bg-[#4747F4] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  DISCUTER D&apos;UN PROJET
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Modern Soft Card Frame */}
                <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(71,71,244,0.12)]">
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
                      <span className="font-bodoni font-bold text-xl text-[#161720] block">SABRINA CARLIER</span>
                      <span className="font-script text-[#FF4F14] text-base font-semibold">Sommelier d&apos;émotions & Consultante</span>
                    </div>
                    <span className="badge-pill badge-pill-lavender text-[10px]">
                      LYON
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RICH BRAND COLOR SECTION (Pastel Lavender & Lemon Yellow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E6CEFC]/40 p-8 sm:p-14 rounded-3xl border border-[#E6CEFC] shadow-sm space-y-10">
          
          <div className="space-y-2">
            <span className="badge-pill badge-pill-blue mb-2">
              <Heart className="w-3.5 h-3.5 text-[#FCFF97]" /> MON PARCOURS
            </span>
            <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-[#161720] tracking-tight">
              30 ANS DE TERRAIN, DE PASSION ET DE RENCONTRES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-800 leading-relaxed text-base">
            <div className="space-y-4">
              <p>
                J&apos;ai eu la chance immense d&apos;être formée par des femmes et des hommes passionnés. Des chefs exigeants, des sommeliers inspirants, des directeurs qui m&apos;ont appris le sens du détail, du collectif et du respect. Chacun d&apos;eux a laissé une empreinte dans la professionnelle que je suis devenue.
              </p>
              <p>
                En trente ans, j&apos;ai fait de la plonge, des chambres, de la réception, du service, de la sommellerie, de la direction. J&apos;ai organisé des mariages, des repas intimistes, des événements de mille personnes. J&apos;ai vendu des bouteilles à dix euros et d&apos;autres à douze mille.
              </p>
            </div>
            
            <div className="space-y-4 bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-bodoni italic text-[#FF4F14] text-lg font-semibold">
                &quot;Parce qu&apos;un restaurant est bien plus qu&apos;un lieu où l&apos;on mange. C&apos;est là que l&apos;on fête une naissance, un anniversaire, une demande en mariage...&quot;
              </p>
              <p className="text-gray-700 text-sm">
                Aujourd&apos;hui, je ressens simplement l&apos;envie d&apos;aller plus loin. Continuer à accueillir, mais autrement. Transmettre ce que le terrain m&apos;a appris. Créer des expériences autour du vin, enseigner, donner des conférences et accompagner des établissements dans leurs moments de transition.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200/60">
            <div className="bg-[#FCFF97] p-5 rounded-2xl text-center shadow-sm">
              <span className="font-anton text-3xl text-[#161720] block">30</span>
              <span className="text-xs font-semibold uppercase text-gray-800">Ans de terrain</span>
            </div>
            <div className="bg-[#4747F4] text-white p-5 rounded-2xl text-center shadow-sm">
              <span className="font-anton text-3xl block">100+</span>
              <span className="text-xs font-semibold uppercase text-blue-100">Ateliers créés</span>
            </div>
            <div className="bg-[#0AAE98] text-white p-5 rounded-2xl text-center shadow-sm">
              <span className="font-anton text-3xl block">Radio</span>
              <span className="text-xs font-semibold uppercase text-teal-100">France Bleu</span>
            </div>
            <div className="bg-white text-[#161720] p-5 rounded-2xl text-center shadow-sm border border-gray-200">
              <span className="font-anton text-3xl text-[#4747F4] block">ISG</span>
              <span className="text-xs font-semibold uppercase text-gray-700">Luxury Mgmt</span>
            </div>
          </div>

        </div>
      </section>

      {/* CORE OFFERS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="badge-pill badge-pill-teal">
            <Award className="w-3.5 h-3.5" /> DOMAINES D&apos;INTERVENTION
          </span>
          <h2 className="font-bodoni text-4xl sm:text-5xl font-bold text-[#161720] tracking-tight">
            UN HUB UNIQUE POUR VOS BESOINS
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Média, ateliers d&apos;entreprise, enseignement supérieur ou conférences participatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Radio Card */}
          <div className="card-modern p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#4747F4] text-white rounded-xl flex items-center justify-center shadow-sm">
                <Radio className="w-6 h-6" />
              </div>
              <span className="text-xs font-anton text-[#4747F4] tracking-widest uppercase block">MÉDIA & RADIO</span>
              <h3 className="font-bodoni font-bold text-2xl text-[#161720]">CHRONIQUES RADIO</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                &quot;Les 400 Coups&quot; sur France Bleu. Des récits de vignerons, des pairings et du vin sans jargon.
              </p>
            </div>
            <Link
              href="/chroniques-radio"
              className="inline-flex items-center gap-2 text-xs font-anton text-[#FF4F14] hover:text-[#4747F4] transition-colors pt-4 border-t border-gray-100"
            >
              DÉCOUVRIR LES CHRONIQUES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Workshops Card */}
          <div className="card-modern p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FCFF97] text-[#161720] rounded-xl flex items-center justify-center shadow-sm font-bold">
                <Users className="w-6 h-6 text-[#FF4F14]" />
              </div>
              <span className="text-xs font-anton text-[#FF4F14] tracking-widest uppercase block">B2B SUR-MESURE</span>
              <h3 className="font-bodoni font-bold text-2xl text-[#161720]">BIENVENUE À MA TABLE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dégustations et événements sur-mesure pour entreprises. Du potager à Val d&apos;Isère.
              </p>
            </div>
            <Link
              href="/ateliers-degustation"
              className="inline-flex items-center gap-2 text-xs font-anton text-[#FF4F14] hover:text-[#4747F4] transition-colors pt-4 border-t border-gray-100"
            >
              RÉSERVER POUR MON ÉQUIPE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Formations Card */}
          <div className="card-modern p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#0AAE98] text-white rounded-xl flex items-center justify-center shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-anton text-[#0AAE98] tracking-widest uppercase block">ENSEIGNEMENT</span>
              <h3 className="font-bodoni font-bold text-2xl text-[#161720]">ÉCOLE & FORMATION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Hospitalité, Sommellerie, Management & Entrepreneuriat. ISG Luxury Management Lyon & Genève.
              </p>
            </div>
            <Link
              href="/formations-ecoles"
              className="inline-flex items-center gap-2 text-xs font-anton text-[#FF4F14] hover:text-[#4747F4] transition-colors pt-4 border-t border-gray-100"
            >
              CONSULTER LES PROGRAMMES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Conferences Card */}
          <div className="card-modern p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#E6CEFC] text-[#161720] rounded-xl flex items-center justify-center shadow-sm font-bold">
                <Mic className="w-6 h-6 text-[#FF4F14]" />
              </div>
              <span className="text-xs font-anton text-[#FF4F14] tracking-widest uppercase block">CONFÉRENCE</span>
              <h3 className="font-bodoni font-bold text-2xl text-[#161720]">LE VIN, VECTEUR D&apos;ÉMOTION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Une prise de parole vivante mêlant récit, dégustation et neuro-émotion. Automne 2026 / Jan 2027.
              </p>
            </div>
            <Link
              href="/conferences"
              className="inline-flex items-center gap-2 text-xs font-anton text-[#FF4F14] hover:text-[#4747F4] transition-colors pt-4 border-t border-gray-100"
            >
              EN SAVOIR PLUS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </section>

      {/* PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PhotoGallery />
      </section>

      {/* BOTTOM CTA BANNER (Electric Blue & Lemon Yellow accents) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4747F4] text-white p-10 sm:p-14 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="badge-pill badge-pill-yellow">
              DISPONIBILITÉS 2026 - 2027
            </span>
            <h2 className="font-bodoni text-3xl sm:text-4xl font-bold tracking-tight text-white">
              SOUHAITEZ-VOUS ORGANISER UNE DÉGUSTATION OU UNE INTERVENTION ?
            </h2>
            <p className="text-blue-100 text-sm max-w-xl">
              Écrivez directement à <span className="font-bold text-[#FCFF97]">hello@sabrinacarlier.fr</span> pour échanger sur vos besoins.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#FF4F14] text-white font-anton text-xs tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-[#161720] transition-colors shadow-lg"
            >
              ME CONTACTER
            </Link>
            <Link
              href="/cv"
              className="bg-white text-[#161720] font-anton text-xs tracking-widest px-6 py-4 rounded-full hover:bg-[#FCFF97] transition-colors shadow-md flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#4747F4]" /> VOIR LE CV
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
