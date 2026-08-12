'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Wine, Radio, Users, GraduationCap, Mic, FileText, Mail, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '/', icon: Wine },
  { name: 'Radio', href: '/chroniques-radio', icon: Radio, badge: 'Les 400 Coups' },
  { name: 'Ateliers B2B', href: '/ateliers-degustation', icon: Users, badge: 'Sur-mesure' },
  { name: 'Formations', href: '/formations-ecoles', icon: GraduationCap },
  { name: 'Conférence', href: '/conferences', icon: Mic, badge: 'Nouveau' },
  { name: 'CV / Parcours', href: '/cv', icon: FileText },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Title */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-11 h-11 bg-[#4747F4] text-white flex items-center justify-center font-anton text-xl rounded-lg pop-border pop-shadow group-hover:rotate-6 transition-transform">
              SC
            </div>
            <div className="flex flex-col">
              <span className="font-anton text-2xl tracking-wide text-[#12131A] group-hover:text-[#4747F4] transition-colors leading-none">
                SABRINA CARLIER
              </span>
              <span className="font-script text-base text-[#FF4F14] font-bold leading-tight flex items-center gap-1">
                Sommelerie & Émotions <Sparkles className="w-3.5 h-3.5 inline" />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-1.5 border-2 ${
                    isActive
                      ? 'bg-[#FCFF97] text-[#12131A] border-[#12131A] pop-shadow'
                      : 'border-transparent text-[#12131A]/80 hover:text-[#12131A] hover:bg-[#E6CEFC]/50 hover:border-[#12131A]/20'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF4F14]' : 'text-[#4747F4]'}`} />
                  <span>{link.name}</span>
                  {link.badge && !isActive && (
                    <span className="hidden xl:inline-block text-[10px] uppercase font-anton tracking-wider px-1.5 py-0.5 bg-[#0AAE98] text-white rounded pop-border">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Primary Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#FF4F14] text-white font-anton tracking-wider px-5 py-2.5 rounded-lg border-2 border-[#12131A] pop-shadow hover:bg-[#4747F4] transition-colors text-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              ME CONTACTER
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#FCFF97] border-2 border-[#12131A] pop-shadow text-[#12131A] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b-4 border-[#12131A] px-4 pt-2 pb-6 space-y-2 pop-shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-bold border-2 transition-all ${
                  isActive
                    ? 'bg-[#FCFF97] text-[#12131A] border-[#12131A] pop-shadow'
                    : 'bg-white border-[#12131A]/20 text-[#12131A]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#4747F4]" />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="text-xs font-anton tracking-wider px-2 py-0.5 bg-[#FF4F14] text-white rounded">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#FF4F14] text-white font-anton text-center tracking-wider py-3.5 rounded-lg border-2 border-[#12131A] pop-shadow block text-base"
            >
              ME CONTACTER
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
