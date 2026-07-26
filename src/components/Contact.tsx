import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  CheckCircle2,
  Calendar,
  Clock,
} from 'lucide-react';

const slots = [
  { day: 'Mo', date: '04.', times: ['10:00', '14:00', '16:30'] },
  { day: 'Di', date: '05.', times: ['09:30', '11:00', '15:00'] },
  { day: 'Mi', date: '06.', times: ['10:00', '13:00'] },
  { day: 'Do', date: '07.', times: ['09:00', '11:30', '14:00', '16:00'] },
  { day: 'Fr', date: '08.', times: ['10:30', '12:00'] },
];

const topics = [
  'Führungskräfte-Coaching',
  'Teamentwicklung',
  'Konfliktmediation',
  'Stimme & Präsenz',
  'Stresskompetenz & Selbststeuerung',
  'Ausbildung & Train-the-Trainer',
  'Sonstiges',
];

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    topic: topics[0],
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Bitte geben Sie Ihren Namen an.';
    if (!form.email.trim()) e.email = 'Bitte geben Sie Ihre E-Mail an.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Bitte geben Sie eine gültige E-Mail an.';
    if (!form.message.trim()) e.message = 'Bitte beschreiben Sie Ihr Anliegen.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSent(true);
  };

  const handleBooking = () => {
    if (selectedSlot) setBookingSent(true);
  };

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-stone-100/60">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-clay-600 text-sm uppercase tracking-wider mb-4">
            Kontakt
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-stone-800 max-w-2xl mx-auto leading-tight">
            Lernen wir uns kennen
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            Vereinbaren Sie ein kostenloses Kennenlerngespräch oder schreiben Sie
            mir direkt. Ich freue mich auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking widget */}
          <div>
            <h3 className="font-serif text-xl text-stone-800 mb-2 flex items-center gap-2">
              <Calendar size={20} className="text-clay-600" />
              Terminanfrage
            </h3>
            <p className="text-sm text-stone-500 mb-6">
              Wählen Sie einen freien Slot. Ich bestätige den Termin per E-Mail.
            </p>

            {bookingSent ? (
              <div className="bg-sage-50 border border-sage-200 rounded-xl p-8 text-center">
                <CheckCircle2 className="text-sage-600 mx-auto mb-4" size={40} />
                <p className="text-stone-800 font-medium">
                  Terminanfrage gesendet!
                </p>
                <p className="text-sm text-stone-500 mt-2">
                  Melanie meldet sich innerhalb von 48 Stunden zur Bestätigung.
                </p>
                <button
                  onClick={() => {
                    setBookingSent(false);
                    setSelectedSlot(null);
                  }}
                  className="mt-6 text-sm text-clay-600 hover:text-clay-500 transition-colors"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {slots.map((slot) => (
                  <div
                    key={slot.day + slot.date}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200"
                  >
                    <div className="text-center shrink-0 w-14">
                      <div className="text-xs text-stone-400 uppercase">
                        {slot.day}
                      </div>
                      <div className="font-serif text-xl text-stone-700">
                        {slot.date}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {slot.times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedSlot(`${slot.day} ${slot.date} ${time}`)}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                            selectedSlot === `${slot.day} ${slot.date} ${time}`
                              ? 'bg-clay-600 text-white'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleBooking}
                  disabled={!selectedSlot}
                  className="w-full mt-4 bg-clay-600 hover:bg-clay-500 disabled:bg-stone-200 disabled:text-stone-400 text-white py-3.5 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Clock size={18} />
                  {selectedSlot
                    ? `Termin anfragen: ${selectedSlot}`
                    : 'Bitte Slot auswählen'}
                </button>
              </div>
            )}
          </div>

          {/* Contact form */}
          <div>
            <h3 className="font-serif text-xl text-stone-800 mb-2 flex items-center gap-2">
              <Mail size={20} className="text-clay-600" />
              Nachricht senden
            </h3>
            <p className="text-sm text-stone-500 mb-6">
              Schreiben Sie mir direkt – ich antworte in der Regel innerhalb von
              48 Stunden.
            </p>

            {sent ? (
              <div className="bg-sage-50 border border-sage-200 rounded-xl p-8 text-center">
                <CheckCircle2 className="text-sage-600 mx-auto mb-4" size={40} />
                <p className="text-stone-800 font-medium">
                  Nachricht gesendet!
                </p>
                <p className="text-sm text-stone-500 mt-2">
                  Vielen Dank. Melanie meldet sich bei Ihnen.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      org: '',
                      topic: topics[0],
                      message: '',
                    });
                  }}
                  className="mt-6 text-sm text-clay-600 hover:text-clay-500 transition-colors"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-stone-500 mb-1.5 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-stone-300 focus:border-clay-400 rounded-lg px-4 py-2.5 text-stone-700 text-sm outline-none transition-colors"
                      placeholder="Ihr Name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-stone-500 mb-1.5 block">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-stone-300 focus:border-clay-400 rounded-lg px-4 py-2.5 text-stone-700 text-sm outline-none transition-colors"
                      placeholder="ihre@email.de"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-stone-500 mb-1.5 block">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white border border-stone-300 focus:border-clay-400 rounded-lg px-4 py-2.5 text-stone-700 text-sm outline-none transition-colors"
                      placeholder="optional"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-stone-500 mb-1.5 block">
                      Organisation
                    </label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full bg-white border border-stone-300 focus:border-clay-400 rounded-lg px-4 py-2.5 text-stone-700 text-sm outline-none transition-colors"
                      placeholder="optional"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-stone-500 mb-1.5 block">
                    Anliegen
                  </label>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full bg-white border border-stone-300 focus:border-clay-400 rounded-lg px-4 py-2.5 text-stone-700 text-sm outline-none transition-colors"
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-stone-500 mb-1.5 block">
                    Nachricht *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white border border-stone-300 focus:border-clay-400 rounded-lg px-4 py-2.5 text-stone-700 text-sm outline-none transition-colors resize-none"
                    placeholder="Was beschäftigt Sie?"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-clay-600 hover:bg-clay-500 text-white py-3.5 rounded-full font-medium transition-colors"
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact details */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-stone-500">
            <MapPin className="text-clay-600 shrink-0" size={20} />
            <div>
              <p className="text-sm text-stone-700">Köln</p>
              <p className="text-xs text-stone-400">50931 / 50935</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-stone-500">
            <Mail className="text-clay-600 shrink-0" size={20} />
            <div>
              <p className="text-sm text-stone-700">info@melanie-eberhard.de</p>
              <p className="text-xs text-stone-400">B2B: Training@melanie-eberhard.de</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-stone-500">
            <Linkedin className="text-clay-600 shrink-0" size={20} />
            <div>
              <p className="text-sm text-stone-700">LinkedIn</p>
              <p className="text-xs text-stone-400">Profil folgt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
