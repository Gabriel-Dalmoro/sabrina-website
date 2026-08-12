import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackWidget from '@/components/FeedbackWidget';

export const metadata: Metadata = {
  metadataBase: new URL('https://sabrinacarlier.fr'),
  title: {
    default: "Sabrina Carlier — Sommellerie, chroniques radio & expériences autour du vin",
    template: '%s — Sabrina Carlier',
  },
  description:
    "Trente ans d'hospitalité. Chroniqueuse des « 400 Coups » sur France Bleu, créatrice d'ateliers et de dîners autour du vin, intervenante en écoles supérieures et conférencière.",
  keywords: [
    'Sabrina Carlier',
    'sommelière Lyon',
    'Les 400 Coups France Bleu',
    'atelier dégustation entreprise',
    'conférence vin',
    'formation hospitalité',
    'ISG Luxury Management',
  ],
  openGraph: {
    title: 'Sabrina Carlier — Sommellerie, radio & expériences autour du vin',
    description:
      "L'hospitalité n'est pas un métier, c'est une manière de vivre. Trente ans de terrain, de rencontres et d'émotions partagées autour d'une table.",
    url: 'https://sabrinacarlier.fr',
    siteName: 'Sabrina Carlier',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={fontVariables}>
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <a
          href="#contenu"
          className="t-label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu" className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* Review tool for Sabrina — remove this line before the site goes
            public. See components/FeedbackWidget.tsx. */}
        <FeedbackWidget />
      </body>
    </html>
  );
}
