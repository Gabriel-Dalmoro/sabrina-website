'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/nav';
import Wordmark from './Wordmark';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-[100rem] items-center justify-between gap-6 px-5 sm:h-20 sm:px-8">
        <Link href="/" className="shrink-0 pb-1" aria-label="Sabrina Carlier — accueil">
          <Wordmark size="text-lg sm:text-xl" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`t-label px-3 py-2 transition-colors ${
                  active
                    ? 'bg-ink text-paper'
                    : 'text-ink hover:bg-lemon'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn btn--solid hidden !px-5 !py-3 lg:inline-flex"
          >
            Me contacter
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="t-label flex items-center gap-2 border-2 border-ink px-3 py-2.5 lg:hidden"
          >
            {open ? 'Fermer' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Full-bleed poster menu — the mobile view gets the same display type
          as the pages themselves rather than a list of small links. */}
      {open ? (
        <div
          id="menu-mobile"
          data-cw="ink"
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto sm:top-20 lg:hidden"
        >
          <span aria-hidden="true" className="grain-layer fixed inset-0" />
          <nav
            aria-label="Navigation principale"
            className="relative z-10 flex flex-col px-5 py-8 sm:px-8"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className="t-display border-b py-4 text-[2rem] leading-none"
                  style={{
                    borderColor: 'var(--rule)',
                    color: active ? 'var(--display)' : 'var(--body)',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn mt-8 justify-center border-lemon bg-lemon text-ink"
            >
              Me contacter
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
