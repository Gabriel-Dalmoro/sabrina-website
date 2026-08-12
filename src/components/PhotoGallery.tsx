'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, Sparkles } from 'lucide-react';

// Selected key photos with captions from the 59 photo pool
const galleryPhotos = [
  { id: 1, src: '/photos/sabrina_photo_01.jpg', caption: 'Instants partagés & sourires complices', tag: 'Dégustation' },
  { id: 3, src: '/photos/sabrina_photo_03.jpg', caption: 'Moments en cuisine & sur le terrain', tag: 'Équipe' },
  { id: 4, src: '/photos/sabrina_photo_04.jpg', caption: 'Rencontres vignerons & cuvées d\'exception', tag: 'Terroir' },
  { id: 5, src: '/photos/sabrina_photo_05.jpg', caption: 'Dîners suspendus & partage autour du vin', tag: 'Événements' },
  { id: 8, src: '/photos/sabrina_photo_08.jpg', caption: 'Transmettre la passion avec énergie', tag: 'Formation' },
  { id: 12, src: '/photos/sabrina_photo_12.jpg', caption: 'Émotions gourmandes & conviviales', tag: 'Lifestyle' },
  { id: 15, src: '/photos/sabrina_photo_15.jpg', caption: 'Grandes tables & petites histoires', tag: 'Terroir' },
  { id: 18, src: '/photos/sabrina_photo_18.jpg', caption: 'Service & authenticité en direct', tag: 'Équipe' },

];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filters = ['Tous', 'Dégustation', 'Équipe', 'Terroir', 'Lifestyle', 'Événements'];

  const filteredPhotos = activeFilter === 'Tous' 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.tag === activeFilter);

  return (
    <section className="py-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="sticker-badge bg-[#FCFF97] text-[#12131A] mb-2">
            <Camera className="w-4 h-4 text-[#FF4F14]" /> GALERIE CANDIDE
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl text-[#12131A] tracking-wide">
            LA VRAIE VIE EN SÉQUENCES
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Pas de clichés studio impersonnels : des vrais souvenirs, des rires et du terrain.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border-2 transition-all ${
                activeFilter === filter
                  ? 'bg-[#FF4F14] text-white border-[#12131A] pop-shadow'
                  : 'bg-white text-[#12131A] border-[#12131A]/30 hover:border-[#12131A]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo.src)}
            className="group relative bg-white p-3 rounded-xl border-2 border-[#12131A] pop-shadow cursor-pointer overflow-hidden transform hover:-translate-y-1 transition-transform"
          >
            <div className="relative h-64 w-full rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-[#FCFF97] text-[#12131A] text-[10px] font-anton px-2 py-0.5 rounded border border-[#12131A]">
                {photo.tag}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs font-bold text-[#12131A] line-clamp-1">{photo.caption}</p>
              <Sparkles className="w-3.5 h-3.5 text-[#FF4F14] group-hover:rotate-45 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white p-4 rounded-2xl border-4 border-[#12131A] pop-shadow-lg">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 bg-[#FF4F14] text-white p-2 rounded-full border-2 border-[#12131A] pop-shadow hover:rotate-90 transition-transform"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[70vh] w-full rounded-xl overflow-hidden">
              <Image
                src={selectedPhoto}
                alt="Photographie Sabrina Carlier"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
