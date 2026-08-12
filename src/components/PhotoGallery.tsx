'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import LayeredTitle from './LayeredTitle';

/**
 * Captions describe what is actually in each frame rather than selling it.
 * These are her own phone photos — the point is that they look like a life,
 * not a campaign — so they stay in full colour, uncropped to varied heights.
 */
const PHOTOS = [
  { src: '/photos/sabrina_photo_35.jpg', caption: 'Fin de service, avec l’équipe', span: 'row-span-2' },
  { src: '/photos/sabrina_photo_05.jpg', caption: 'On trinque, quelque part' },
  { src: '/photos/sabrina_photo_21.jpg', caption: 'Une truffe dans la main' },
  { src: '/photos/sabrina_photo_54.jpg', caption: 'Wine dinner dans une cave voûtée' },
  { src: '/photos/sabrina_photo_41.jpg', caption: 'Un verre de blanc dans les artichauts', span: 'row-span-2' },
  { src: '/photos/sabrina_photo_47.jpg', caption: 'La chronique, juste avant l’antenne' },
  { src: '/photos/sabrina_photo_16.jpg', caption: 'Val d’Isère, pendant que la neige tombait' },
  { src: '/photos/sabrina_photo_43.jpg', caption: 'Des inconnus devenus des amis' },
  { src: '/photos/sabrina_photo_33.jpg', caption: 'Une étiquette qui raconte déjà quelque chose' },
  { src: '/photos/sabrina_photo_50.jpg', caption: 'Une table, et tout le monde autour' },
  { src: '/photos/sabrina_photo_28.jpg', caption: 'Ce qui arrive en salle' },
  { src: '/photos/sabrina_photo_42.jpg', caption: 'Fromages, pain, bouteilles ouvertes' },
];

export default function PhotoGallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((delta: number) => {
    setIndex((current) =>
      current === null ? null : (current + delta + PHOTOS.length) % PHOTOS.length,
    );
  }, []);

  useEffect(() => {
    if (index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, close, step]);

  const active = index === null ? null : PHOTOS[index];

  return (
    <section data-cw="paper" className="relative">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
        <LayeredTitle
          lines={['La vraie vie']}
          script="pas la brochure"
          size="lg"
          scriptX="14%"
          scriptScale={0.4}
          scriptAvailable="min(calc(100vw - 3rem), 34rem)"
        />

        <p className="t-lead measure mt-12">
          Des photos prises au téléphone, entre deux services, sur une terrasse
          ou à 2 500 mètres. Rien de posé — c&apos;est exactement le propos.
        </p>

        <ul className="mt-14 grid auto-rows-[minmax(0,14rem)] grid-cols-2 gap-3 sm:auto-rows-[minmax(0,17rem)] sm:gap-4 lg:grid-cols-4">
          {PHOTOS.map((photo, i) => (
            <li key={photo.src} className={photo.span ?? ''}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block h-full w-full overflow-hidden bg-ink text-left"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-3 pt-10 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <span className="t-ui block text-xs text-paper">{photo.caption}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 p-4 sm:p-8"
          onClick={close}
        >
          <div className="flex items-center justify-between gap-4 pb-4">
            <p className="t-ui text-sm text-paper">{active.caption}</p>
            <button
              type="button"
              onClick={close}
              className="t-label border-2 border-paper px-3 py-2 text-paper"
            >
              Fermer
            </button>
          </div>

          <div
            className="relative flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.caption}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div
            className="flex items-center justify-center gap-3 pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              className="t-label border-2 border-paper px-4 py-2.5 text-paper"
            >
              ← Précédente
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="t-label border-2 border-paper px-4 py-2.5 text-paper"
            >
              Suivante →
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
