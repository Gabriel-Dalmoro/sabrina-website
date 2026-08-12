'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Sparkles, Mail, Building, User, Calendar, MessageSquare, Tag } from 'lucide-react';

interface ContactFormProps {
  defaultSubject?: string;
}

export default function ContactForm({ defaultSubject = 'Général' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: defaultSubject,
    date: '',
    groupSize: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border-3 border-[#12131A] pop-shadow-lg relative overflow-hidden">
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FCFF97] rounded-full border-2 border-[#12131A] -z-0 opacity-50" />
      
      <div className="relative z-10">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-[#0AAE98] text-white rounded-full flex items-center justify-center mx-auto border-2 border-[#12131A] pop-shadow">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-anton text-3xl text-[#12131A]">MESSAGE BIEN REÇU !</h3>
            <p className="text-gray-700 max-w-md mx-auto text-sm">
              Merci <span className="font-bold text-[#FF4F14]">{formData.name}</span>. Sabrina prendra connaissance de votre demande d&apos;intervention ({formData.subject}) sous 24 à 48 heures.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', company: '', email: '', subject: defaultSubject, date: '', groupSize: '', message: '' });
              }}
              className="mt-4 inline-flex items-center gap-2 bg-[#4747F4] text-white font-anton px-6 py-2.5 rounded-lg border-2 border-[#12131A] pop-shadow hover:bg-[#FF4F14] transition-colors"
            >
              <Sparkles className="w-4 h-4" /> Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b-2 border-gray-100 pb-4">
              <h3 className="font-anton text-2xl text-[#12131A] tracking-wide flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#FF4F14]" /> PARLEZ-MOI DE VOTRE PROJET
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Une question, un événement d&apos;entreprise, une formation ou un projet média ? Remplissez ce formulaire ou écrivez directement à{' '}
                <a href="mailto:hello@sabrinacarlier.fr" className="font-bold text-[#4747F4] underline">
                  hello@sabrinacarlier.fr
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#12131A] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#4747F4]" /> Votre Nom & Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Marie Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-[#12131A] focus:outline-none focus:ring-2 focus:ring-[#4747F4] bg-[#FAF9F5] text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#12131A] mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#4747F4]" /> Email Professionnel *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ex: m.dupont@entreprise.fr"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-[#12131A] focus:outline-none focus:ring-2 focus:ring-[#4747F4] bg-[#FAF9F5] text-sm"
                />
              </div>

              {/* Company / Institution */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#12131A] mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#0AAE98]" /> Entreprise / Établissement / Média
                </label>
                <input
                  type="text"
                  placeholder="ex: Radio France, ISG, Domaine XYZ..."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-[#12131A] focus:outline-none focus:ring-2 focus:ring-[#4747F4] bg-[#FAF9F5] text-sm"
                />
              </div>

              {/* Type of Request */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#12131A] mb-1.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#FF4F14]" /> Type de demande *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-[#12131A] focus:outline-none focus:ring-2 focus:ring-[#4747F4] bg-[#FAF9F5] text-sm font-bold text-[#12131A]"
                >
                  <option value="Atelier Dégustation B2B">🍷 Atelier Dégustation B2B / Entreprise</option>
                  <option value="Chroniques Radio">🎙️ Chronique Radio / Collaboration Média</option>
                  <option value="Formation & Enseignement">🎓 Interventions Écoles & Formations</option>
                  <option value="Conférence & Intervention">🎭 Conférence &quot;Le vin, vecteur d&apos;émotion&quot;</option>
                  <option value="Conseil & Direction">💼 Conseil / Direction / Transition</option>
                  <option value="Autre">✨ Autre projet</option>
                </select>
              </div>

              {/* Target Date */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#12131A] mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#4747F4]" /> Date souhaitée (Optionnel)
                </label>
                <input
                  type="text"
                  placeholder="ex: Automne 2026 / Janvier 2027"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-[#12131A] focus:outline-none focus:ring-2 focus:ring-[#4747F4] bg-[#FAF9F5] text-sm"
                />
              </div>

              {/* Audience / Group Size */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#12131A] mb-1.5 flex items-center gap-1.5">
                  Taille du groupe / Format
                </label>
                <input
                  type="text"
                  placeholder="ex: 15 personnes / Promotion 30 élèves"
                  value={formData.groupSize}
                  onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-[#12131A] focus:outline-none focus:ring-2 focus:ring-[#4747F4] bg-[#FAF9F5] text-sm"
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#12131A] mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#FF4F14]" /> Votre Message / Détails de l&apos;événement *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Décrivez votre projet, vos attentes, le contexte ou vos questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#12131A] focus:outline-none focus:ring-2 focus:ring-[#4747F4] bg-[#FAF9F5] text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF4F14] text-white font-anton text-lg tracking-wider py-3.5 rounded-xl border-2 border-[#12131A] pop-shadow-lg hover:bg-[#4747F4] transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> ENVOYER MA DEMANDE
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
