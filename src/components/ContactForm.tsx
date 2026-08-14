'use client';

import { useState, type FormEvent } from 'react';
import LayeredTitle from './LayeredTitle';
import { CONTACT_EMAIL } from '@/lib/nav';

interface ContactFormProps {
  defaultSubject?: string;
}

const SUBJECTS = [
  'Atelier ou dîner en entreprise',
  'Chronique radio / média',
  'Intervention en école ou formation',
  'Conférence « Le vin, vecteur d’émotion »',
  'Conseil, direction, mission de transition',
  'Autre projet',
];

const FIELD =
  't-ui w-full border-2 border-ink bg-transparent px-4 py-3.5 t-small text-ink placeholder:text-ink/40 focus:border-flame focus:outline-none';

const LABEL = 't-label mb-2 block';

/**
 * There is no backend yet, so the form composes a pre-filled mail draft and
 * hands it to the visitor's mail client. That is deliberate: a form that
 * silently swallows enquiries is worse than no form at all, and this way a
 * message can never be lost between the browser and an inbox that does not
 * exist. Swap `handleSubmit` for a POST once an endpoint is available.
 */
export default function ContactForm({
  defaultSubject = SUBJECTS[0],
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    subject: defaultSubject,
    date: '',
    size: '',
    message: '',
  });
  const [handedOff, setHandedOff] = useState(false);

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const body = [
      `Nom : ${form.name}`,
      form.company && `Structure : ${form.company}`,
      `Email : ${form.email}`,
      `Type de demande : ${form.subject}`,
      form.date && `Date envisagée : ${form.date}`,
      form.size && `Format / nombre de personnes : ${form.size}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[Site] ${form.subject} — ${form.name}`,
    )}&body=${encodeURIComponent(body)}`;

    setHandedOff(true);
  };

  return (
    <section data-cw="lemon" className="relative">
      <span aria-hidden="true" className="grain-layer" />

      <div className="relative z-10 mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {/* Sabrina asked for « Faisons connaissance » in place of both this
                heading and the footer's. The footer sits directly under this
                block on every page that carries the form, so the two cannot
                share a phrase: the footer keeps hers — it was the element she
                annotated — and this one becomes an invitation to write. */}
            <LayeredTitle
              lines={['Écrivez-moi']}
              script="je réponds à tout"
              size="md"
              scriptX="6%"
              scriptScale={0.46}
              scriptAvailable="min(calc(100vw - 3rem), 26rem)"
            />

            <p className="t-lead mt-10">
              Faire grandir un établissement, transmettre à une équipe ou à des
              étudiants, réunir des collaborateurs autour d&apos;une
              dégustation, imaginer un atelier, une conférence ou une
              expérience qui n&apos;existe pas encore…
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 block underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="lg:col-span-7">
            {handedOff ? (
              <div className="border-2 border-ink p-8">
                <h3 className="t-display text-[length:var(--text-display-sm)]">
                  Votre messagerie devrait s&apos;ouvrir
                </h3>
                <p className="mt-4">
                  Un brouillon pré-rempli vous attend — il ne reste qu&apos;à
                  l&apos;envoyer. Si rien ne s&apos;est ouvert, écrivez
                  directement à{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="underline underline-offset-4"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setHandedOff(false)}
                  className="btn btn--ghost mt-8"
                >
                  Revenir au formulaire
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className={LABEL} htmlFor="cf-name">
                      Votre nom *
                    </label>
                    <input
                      id="cf-name"
                      className={FIELD}
                      required
                      value={form.name}
                      onChange={(e) => set('name')(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={LABEL} htmlFor="cf-email">
                      Email *
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      className={FIELD}
                      required
                      value={form.email}
                      onChange={(e) => set('email')(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={LABEL} htmlFor="cf-company">
                      Entreprise, école ou média
                    </label>
                    <input
                      id="cf-company"
                      className={FIELD}
                      value={form.company}
                      onChange={(e) => set('company')(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={LABEL} htmlFor="cf-subject">
                      Type de demande *
                    </label>
                    <select
                      id="cf-subject"
                      className={FIELD}
                      value={form.subject}
                      onChange={(e) => set('subject')(e.target.value)}
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={LABEL} htmlFor="cf-date">
                      Date envisagée
                    </label>
                    <input
                      id="cf-date"
                      className={FIELD}
                      placeholder="automne 2026, un jeudi de mars…"
                      value={form.date}
                      onChange={(e) => set('date')(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={LABEL} htmlFor="cf-size">
                      Format / nombre de personnes
                    </label>
                    <input
                      id="cf-size"
                      className={FIELD}
                      placeholder="15 personnes, une promo de 30…"
                      value={form.size}
                      onChange={(e) => set('size')(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className={LABEL} htmlFor="cf-message">
                    Votre message *
                  </label>
                  <textarea
                    id="cf-message"
                    rows={5}
                    className={FIELD}
                    required
                    placeholder="Racontez-moi le contexte, l'envie, le lieu…"
                    value={form.message}
                    onChange={(e) => set('message')(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn--solid w-full justify-center">
                  Envoyer ma demande
                </button>

                <p className="t-ui text-xs" style={{ color: 'var(--quiet)' }}>
                  Le formulaire prépare un email dans votre messagerie — vous
                  gardez la main avant l&apos;envoi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
