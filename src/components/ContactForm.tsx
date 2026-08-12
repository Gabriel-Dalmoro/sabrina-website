'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Mail, Building, User, Calendar, MessageSquare, Tag } from 'lucide-react';

interface ContactFormProps {
  defaultSubject?: string;
}

export default function ContactForm({ defaultSubject = 'Ateliers Dégustation B2B' }: ContactFormProps) {
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
    <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(22,23,32,0.06)] relative overflow-hidden">
      
      {/* Top Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4747F4] via-[#FF4F14] to-[#0AAE98]" />

      {submitted ? (
        <div className="text-center py-16 space-y-5">
          <div className="w-16 h-16 bg-[#0AAE98] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="font-bodoni text-3xl font-bold text-[#161720]">MESSAGE TRANSMIS AVEC SUCCÈS</h3>
          <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
            Merci <span className="font-bold text-[#FF4F14]">{formData.name}</span>. Sabrina prendra connaissance de votre demande d&apos;intervention ({formData.subject}) sous 24 à 48 heures.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', company: '', email: '', subject: defaultSubject, date: '', groupSize: '', message: '' });
            }}
            className="mt-4 inline-flex items-center gap-2 bg-[#4747F4] text-white font-anton text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[#FF4F14] transition-colors"
          >
            NOUVEAU MESSAGE
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="border-b border-gray-100 pb-6">
            <span className="badge-pill badge-pill-orange mb-3">
              <Mail className="w-3.5 h-3.5" /> FORMULAIRE DE CONTACT
            </span>
            <h3 className="font-bodoni text-3xl font-bold text-[#161720] tracking-tight">
              PARLEZ-MOI DE VOTRE PROJET
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Une question, un événement d&apos;entreprise, une formation ou une émission ? Écrivez directement à{' '}
              <a href="mailto:hello@sabrinacarlier.fr" className="font-semibold text-[#4747F4] hover:underline">
                hello@sabrinacarlier.fr
              </a>{' '}
              ou complétez ce formulaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-[#4747F4]" /> Votre Nom & Prénom *
              </label>
              <input
                type="text"
                required
                placeholder="ex: Marie Dupont"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4747F4] focus:ring-2 focus:ring-[#4747F4]/10 bg-[#FAF9F6] text-sm text-[#161720] transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#4747F4]" /> Email Professionnel *
              </label>
              <input
                type="email"
                required
                placeholder="ex: m.dupont@entreprise.fr"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4747F4] focus:ring-2 focus:ring-[#4747F4]/10 bg-[#FAF9F6] text-sm text-[#161720] transition-all"
              />
            </div>

            {/* Company / Institution */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#0AAE98]" /> Entreprise / Établissement / Média
              </label>
              <input
                type="text"
                placeholder="ex: Radio France, ISG, Domaine XYZ..."
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4747F4] focus:ring-2 focus:ring-[#4747F4]/10 bg-[#FAF9F6] text-sm text-[#161720] transition-all"
              />
            </div>

            {/* Type of Request */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#FF4F14]" /> Type de demande *
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4747F4] focus:ring-2 focus:ring-[#4747F4]/10 bg-[#FAF9F6] text-sm font-semibold text-[#161720] transition-all"
              >
                <option value="Ateliers Dégustation B2B">🍷 Atelier Dégustation B2B / Entreprise</option>
                <option value="Chroniques Radio">🎙️ Chronique Radio / Collaboration Média</option>
                <option value="Formation & Enseignement">🎓 Interventions Écoles & Formations</option>
                <option value="Conférence & Intervention">🎭 Conférence &quot;Le vin, vecteur d&apos;émotion&quot;</option>
                <option value="Conseil & Direction">💼 Conseil / Direction / Transition</option>
                <option value="Autre">✨ Autre projet</option>
              </select>
            </div>

            {/* Target Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#4747F4]" /> Date souhaitée (Optionnel)
              </label>
              <input
                type="text"
                placeholder="ex: Automne 2026 / Janvier 2027"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4747F4] focus:ring-2 focus:ring-[#4747F4]/10 bg-[#FAF9F6] text-sm text-[#161720] transition-all"
              />
            </div>

            {/* Group Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Taille du groupe / Format
              </label>
              <input
                type="text"
                placeholder="ex: 15 personnes / Promotion 30 élèves"
                value={formData.groupSize}
                onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4747F4] focus:ring-2 focus:ring-[#4747F4]/10 bg-[#FAF9F6] text-sm text-[#161720] transition-all"
              />
            </div>

          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#FF4F14]" /> Votre Message / Détails du projet *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Décrivez vos besoins, votre contexte ou vos attentes..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4747F4] focus:ring-2 focus:ring-[#4747F4]/10 bg-[#FAF9F6] text-sm text-[#161720] transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF4F14] text-white font-anton text-sm tracking-widest py-4 rounded-xl hover:bg-[#4747F4] transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Send className="w-4 h-4" /> ENVOYER MA DEMANDE
          </button>
        </form>
      )}
    </div>
  );
}
