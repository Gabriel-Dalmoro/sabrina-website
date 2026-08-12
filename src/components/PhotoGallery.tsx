'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, Sparkles } from 'lucide-react';

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
    <section className="py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="badge-pill badge-pill-yellow mb-3">
            <Camera className="w-3.5 h-3.5 text-[#FF4F14]" /> GALERIE CANDIDE
          </span>
          <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-[#161720] tracking-tight">
            LA VRAIE VIE EN SÉQUENCES
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Pas de clichés studio impersonnels : des souvenirs authentiques et du terrain.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-[#161720] text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo.src)}
            className="group relative bg-white p-3 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] cursor-pointer overflow-hidden transform hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="relative h-64 w-full rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#161720] text-[10px] font-anton tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                {photo.tag}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <p className="text-xs font-medium text-gray-800 line-clamp-1">{photo.caption}</p>
              <Sparkles className="w-3.5 h-3.5 text-[#FF4F14] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white p-4 rounded-3xl shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 bg-[#FF4F14] text-white p-2.5 rounded-full shadow-lg hover:bg-[#4747F4] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-[70vh] w-full rounded-2xl overflow-hidden">
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
