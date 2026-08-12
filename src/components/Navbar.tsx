'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Radio', href: '/chroniques-radio' },
  { name: 'Ateliers B2B', href: '/ateliers-degustation' },
  { name: 'Formations', href: '/formations-ecoles' },
  { name: 'Conférence', href: '/conferences' },
  { name: 'Parcours / CV', href: '/cv' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 header-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Editorial Brand Mark */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-[#4747F4] text-white flex items-center justify-center font-anton text-lg rounded-xl shadow-sm group-hover:scale-105 transition-transform">
              SC
            </div>
            <div className="flex flex-col">
              <span className="font-bodoni text-xl font-bold tracking-tight text-[#161720] group-hover:text-[#4747F4] transition-colors leading-none">
                SABRINA CARLIER
              </span>
              <span className="font-script text-sm text-[#FF4F14] font-medium leading-tight">
                Sommelerie & Émotions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#161720] text-white font-semibold shadow-sm'
                      : 'text-gray-700 hover:text-[#161720] hover:bg-black/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF4F14] rounded-full translate-y-1" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Single Contact CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-[#FF4F14] text-white font-anton text-xs tracking-widest px-5 py-2.5 rounded-full hover:bg-[#4747F4] transition-colors flex items-center gap-1.5 shadow-md hover:shadow-lg"
            >
              ME CONTACTER
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-gray-200 text-[#161720] focus:outline-none shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-gray-200 px-6 pt-4 pb-8 space-y-3 shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-[#161720] text-white font-semibold'
                    : 'bg-white text-gray-800 border border-gray-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#FF4F14] text-white font-anton text-center tracking-widest py-3.5 rounded-xl block text-sm shadow-md"
            >
              ME CONTACTER
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
