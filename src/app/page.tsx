import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Radio, Users, GraduationCap, Mic, Sparkles, Heart, CheckCircle2, Award, FileText } from 'lucide-react';
import PhotoGallery from '@/components/PhotoGallery';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E6CEFC]/40 via-[#FAF9F5] to-[#FAF9F5] pt-12 pb-20 border-b-2 border-[#12131A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text Col */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="sticker-badge bg-[#FCFF97] text-[#12131A]">
                  <Sparkles className="w-4 h-4 text-[#FF4F14]" /> SOMMELLERIE • HUMAINE & LIBRE
                </span>
                <span className="sticker-badge bg-[#0AAE98] text-white">
                  30 ANS DE TERRAIN
                </span>
              </div>

              <h1 className="font-anton text-5xl sm:text-6xl xl:text-7xl tracking-wide text-[#12131A] leading-[0.95]">
                BIENVENUE DANS <br />
                <span className="text-[#4747F4]">MON UNIVERS</span>
              </h1>

              <p className="font-bodoni italic text-xl sm:text-2xl text-[#FF4F14] font-medium leading-snug">
                &quot;Le vin est bien plus qu&apos;une boisson. Il est un souvenir. Une rencontre. Une émotion. Une histoire.&quot;
              </p>

              <div className="bg-white p-6 rounded-2xl border-2 border-[#12131A] pop-shadow space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
                <p>
                  J&apos;ai à peu près six ans lorsque je sers ma première tasse de café dans le bar-restaurant de mes grands-parents. Entre les tables de multiplication et les dictées, j&apos;apprends aussi à reconnaître le bruit d&apos;un percolateur...
                </p>
                <p className="font-semibold text-[#12131A]">
                  Voilà maintenant trente ans que je vis dans les restaurants. Trente années passées à accueillir, observer, apprendre, transmettre, manager, servir, goûter, recommencer.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-[#FF4F14] text-white font-anton text-lg px-7 py-3.5 rounded-xl border-2 border-[#12131A] pop-shadow hover:bg-[#4747F4] transition-all flex items-center gap-2"
                >
                  DISCUTER D&apos;UN PROJET <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/chroniques-radio"
                  className="bg-[#FCFF97] text-[#12131A] font-anton text-lg px-7 py-3.5 rounded-xl border-2 border-[#12131A] pop-shadow hover:bg-[#0AAE98] hover:text-white transition-all flex items-center gap-2"
                >
                  <Radio className="w-5 h-5 text-[#4747F4]" /> ÉCOUTER LES 400 COUPS
                </Link>
              </div>

            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* 80s Backdrop Card */}
                <div className="absolute inset-0 bg-[#4747F4] rounded-3xl transform rotate-3 border-3 border-[#12131A]" />
                
                <div className="relative bg-white p-4 rounded-3xl border-3 border-[#12131A] pop-shadow-lg transform -rotate-2">
                  <div className="relative h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-[#12131A]">
                    <Image
                      src="/photos/sabrina_photo_01.jpg"
                      alt="Sabrina Carlier Sommelier"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between px-2">
                    <div>
                      <span className="font-anton text-xl text-[#12131A] block">SABRINA CARLIER</span>
                      <span className="font-script text-[#FF4F14] text-base font-bold">Sommelier d&apos;émotions & Consultante</span>
                    </div>
                    <span className="bg-[#E6CEFC] text-[#12131A] font-anton text-xs px-3 py-1 rounded-full border border-[#12131A]">
                      LYON
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VERBATIM STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow-lg space-y-8">
          
          <div className="flex items-center gap-3">
            <span className="sticker-badge bg-[#E6CEFC] text-[#12131A]">
              <Heart className="w-4 h-4 text-[#FF4F14]" /> MON HISTOIRE & PARCOURS
            </span>
          </div>

          <h2 className="font-anton text-3xl sm:text-4xl text-[#12131A] tracking-wide">
            30 ANS D&apos;HOSPITALITÉ, DE FLAMME ET DE RENCONTRES
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-800 leading-relaxed text-base">
            <div className="space-y-4">
              <p>
                J&apos;ai eu la chance immense d&apos;être formée par des femmes et des hommes passionnés. Des chefs exigeants, des sommeliers inspirants, des directeurs qui m&apos;ont appris le sens du détail, du collectif et du respect. Chacun d&apos;eux a laissé une empreinte dans la professionnelle que je suis devenue.
              </p>
              <p>
                En trente ans, j&apos;ai fait de la plonge, des chambres, de la réception, du service, de la sommellerie, de la direction. J&apos;ai organisé des mariages, des repas intimistes, des événements de mille personnes. J&apos;ai vendu des bouteilles à dix euros et d&apos;autres à douze mille. J&apos;ai travaillé dans des restaurants de quartier comme dans des maisons étoilées.
              </p>
            </div>
            
            <div className="space-y-4 bg-[#FAF9F5] p-6 rounded-2xl border-2 border-[#12131A]/30">
              <p className="font-bold text-[#FF4F14]">
                &quot;Parce qu&apos;un restaurant est bien plus qu&apos;un lieu où l&apos;on mange. C&apos;est là que l&apos;on fête une naissance, un anniversaire, une demande en mariage...&quot;
              </p>
              <p>
                Aujourd&apos;hui, je ressens simplement l&apos;envie d&apos;aller plus loin. Continuer à accueillir, mais autrement. Transmettre ce que le terrain m&apos;a appris. Créer des expériences autour du vin, enseigner, donner des conférences et accompagner des établissements dans leurs transitions.
              </p>
            </div>
          </div>

          {/* Quick Stats Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t-2 border-gray-100">
            <div className="bg-[#FCFF97] p-4 rounded-xl border-2 border-[#12131A] pop-shadow text-center">
              <span className="font-anton text-3xl text-[#12131A] block">30</span>
              <span className="text-xs font-bold uppercase text-[#12131A]">Ans de terrain</span>
            </div>
            <div className="bg-[#4747F4] text-white p-4 rounded-xl border-2 border-[#12131A] pop-shadow text-center">
              <span className="font-anton text-3xl block">100+</span>
              <span className="text-xs font-bold uppercase">Ateliers créés</span>
            </div>
            <div className="bg-[#0AAE98] text-white p-4 rounded-xl border-2 border-[#12131A] pop-shadow text-center">
              <span className="font-anton text-3xl block">Radio</span>
              <span className="text-xs font-bold uppercase">France Bleu</span>
            </div>
            <div className="bg-[#E6CEFC] p-4 rounded-xl border-2 border-[#12131A] pop-shadow text-center">
              <span className="font-anton text-3xl text-[#12131A] block">École</span>
              <span className="text-xs font-bold uppercase text-[#12131A]">ISG Luxury</span>
            </div>
          </div>

        </div>
      </section>

      {/* CORE OFFERS GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="sticker-badge bg-[#0AAE98] text-white">
            <Award className="w-4 h-4" /> CE QUE JE PROPOSE
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl text-[#12131A] tracking-wide">
            UN HUB UNIQUE POUR TOUS VOS BESOINS
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Que vous soyez une station radio, une entreprise, une école ou un festival, chaque offre est conçue avec authenticité et passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Radio */}
          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow hover:-translate-y-1.5 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#4747F4] text-white rounded-xl flex items-center justify-center border-2 border-[#12131A] pop-shadow">
                <Radio className="w-6 h-6" />
              </div>
              <span className="text-xs font-anton text-[#4747F4] tracking-wider uppercase block">PITCH MÉDIA</span>
              <h3 className="font-anton text-2xl text-[#12131A]">CHRONIQUES RADIO</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                &quot;Les 400 Coups&quot; sur France Bleu. Des récits de vignerons, des pairings et du vin sans snobisme ni jargon.
              </p>
            </div>
            <Link
              href="/chroniques-radio"
              className="inline-flex items-center gap-2 text-xs font-anton text-[#FF4F14] hover:text-[#4747F4] transition-colors pt-2 border-t border-gray-100"
            >
              DÉCOUVRIR LES CHRONIQUES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Workshops */}
          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow hover:-translate-y-1.5 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#FCFF97] text-[#12131A] rounded-xl flex items-center justify-center border-2 border-[#12131A] pop-shadow">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-anton text-[#FF4F14] tracking-wider uppercase block">B2B & SUR-MESURE</span>
              <h3 className="font-anton text-2xl text-[#12131A]">BIENVENUE À MA TABLE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dégustations et événements sur-mesure pour entreprises. Du potager aux 2500m d&apos;altitude à Val d&apos;Isère.
              </p>
            </div>
            <Link
              href="/ateliers-degustation"
              className="inline-flex items-center gap-2 text-xs font-anton text-[#FF4F14] hover:text-[#4747F4] transition-colors pt-2 border-t border-gray-100"
            >
              RÉSERVER POUR MON ÉQUIPE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3: Formations */}
          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow hover:-translate-y-1.5 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#0AAE98] text-white rounded-xl flex items-center justify-center border-2 border-[#12131A] pop-shadow">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-anton text-[#0AAE98] tracking-wider uppercase block">ENSEIGNEMENT</span>
              <h3 className="font-anton text-2xl text-[#12131A]">ÉCOLE & FORMATION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Hospitalité, Sommellerie, Management & Entrepreneuriat. Intervenante à l&apos;ISG Luxury Management Lyon & Genève.
              </p>
            </div>
            <Link
              href="/formations-ecoles"
              className="inline-flex items-center gap-2 text-xs font-anton text-[#FF4F14] hover:text-[#4747F4] transition-colors pt-2 border-t border-gray-100"
            >
              CONSULTER LES PROGRAMMES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 4: Conferences */}
          <div className="bg-white p-6 rounded-2xl border-3 border-[#12131A] pop-shadow hover:-translate-y-1.5 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#E6CEFC] text-[#12131A] rounded-xl flex items-center justify-center border-2 border-[#12131A] pop-shadow">
                <Mic className="w-6 h-6 text-[#FF4F14]" />
              </div>
              <span className="text-xs font-anton text-[#FF4F14] tracking-wider uppercase block">CONFÉRENCE-EXPÉRIENCE</span>
              <h3 className="font-anton text-2xl text-[#12131A]">LE VIN, VECTEUR D&apos;ÉMOTION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Une prise de parole vivante mêlant récit, dégustation et neuro-émotion. Entreprise (Automne 2026) & Public (Jan 2027).
              </p>
            </div>
            <Link
              href="/conferences"
              className="inline-flex items-center gap-2 text-xs font-anton text-[#FF4F14] hover:text-[#4747F4] transition-colors pt-2 border-t border-gray-100"
            >
              EN SAVOIR PLUS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </section>

      {/* PHOTO GALLERY COMPONENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PhotoGallery />
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4747F4] text-white p-8 sm:p-12 rounded-3xl border-3 border-[#12131A] pop-shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="sticker-badge bg-[#FCFF97] text-[#12131A]">
              <Sparkles className="w-4 h-4 text-[#FF4F14]" /> DISPONIBILITÉS 2026 - 2027
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl text-white tracking-wide">
              VOUS SOUHAITEZ ACCUEILLIR UNE DÉGUSTATION OU UNE INTERVENTION ?
            </h2>
            <p className="text-blue-100 text-sm max-w-xl">
              Discutons de vos besoins spécifiques par email à <span className="font-bold text-[#FCFF97]">hello@sabrinacarlier.fr</span> ou via le formulaire direct.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#FF4F14] text-white font-anton text-lg px-8 py-4 rounded-xl border-2 border-white pop-shadow hover:bg-[#FCFF97] hover:text-[#12131A] transition-colors"
            >
              ME CONTACTER
            </Link>
            <Link
              href="/cv"
              className="bg-white text-[#12131A] font-anton text-lg px-6 py-4 rounded-xl border-2 border-[#12131A] pop-shadow hover:bg-[#E6CEFC] transition-colors flex items-center gap-2"
            >
              <FileText className="w-5 h-5 text-[#4747F4]" /> VOIR LE CV
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
