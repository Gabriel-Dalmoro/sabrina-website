import Link from 'next/link';
import { NAV_LINKS, CONTACT_EMAIL, PODCAST_URL } from '@/lib/nav';
import LayeredTitle from './LayeredTitle';
import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <footer data-cw="ink" className="relative">
      <span aria-hidden="true" className="grain-layer" />

      <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-16 sm:px-8 sm:py-24">
        <LayeredTitle
          as="p"
          lines={['Faisons', 'connaissance']}
          script="autour d'un verre"
          size="lg"
          scriptX="18%"
          scriptRotate={-5}
          className="mb-14"
        />

        <div className="grid gap-12 border-t pt-12 md:grid-cols-12" style={{ borderColor: 'var(--rule)' }}>
          <div className="md:col-span-5">
            <Wordmark size="text-2xl" />
            <p className="t-lead measure mt-6" style={{ color: 'var(--quiet)' }}>
              Trente ans d&apos;hospitalité, de sommellerie et de terrain. Continuer
              à accueillir, mais autrement — par les rencontres, le partage et les
              émotions.
            </p>
            <p className="t-label mt-6" style={{ color: 'var(--quiet)' }}>
              Lyon · Genève · et partout où il y a une table
            </p>
          </div>

          <nav aria-label="Pied de page" className="md:col-span-3">
            <h2 className="t-label mb-5" style={{ color: 'var(--display)' }}>
              Le site
            </h2>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="t-label mb-5" style={{ color: 'var(--display)' }}>
              Écouter & écrire
            </h2>

            <a
              href={PODCAST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              « Les 400 Coups » sur France Bleu
              <span className="t-label ml-2 align-middle" style={{ color: 'var(--quiet)' }}>
                ↗
              </span>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 block hover:underline"
              style={{ color: 'var(--script)' }}
            >
              {CONTACT_EMAIL}
            </a>

            <Link href="/contact" className="btn btn--ghost mt-8">
              Proposer un projet
            </Link>
          </div>
        </div>

        <div
          className="t-ui mt-14 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:justify-between"
          style={{ borderColor: 'var(--rule)', color: 'var(--quiet)' }}
        >
          <p>© {new Date().getFullYear()} Sabrina Carlier</p>
          <p>
            Site créé par{' '}
            <a
              href="https://www.gabrieldalmoro.com/fr/chef"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-paper"
            >
              Gabriel Dalmoro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
