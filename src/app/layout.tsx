import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sabrina Carlier | Sommelerie, Chroniques Radio & Dégustations sur-mesure',
  description: 'Site officiel de Sabrina Carlier. Sommelier d\'émotion, chroniqueuse radio ("Les 400 Coups" sur France Bleu), créatrice d\'ateliers dégustation B2B, conférencière et intervenante en écoles d\'hospitalité.',
  keywords: [
    'Sabrina Carlier',
    'Sommelier Lyon',
    'Chroniques Radio Vin',
    'Les 400 Coups France Bleu',
    'Ateliers Dégustation B2B',
    'Conférence Vin Émotion',
    'Formation Hospitalité',
    'ISG Luxury Management',
  ],
  openGraph: {
    title: 'Sabrina Carlier | Sommelerie, Chroniques Radio & Émotions',
    description: 'Sommelier humaine, authentique & vibrante. Découvrez les chroniques Les 400 Coups, les dégustations B2B et les conférences.',
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
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
