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
    <section id="kontakt" className="py-28 lg:py-36 bg-ink-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-ocher text-xs tracking-[0.2em] uppercase mb-4">
            Kontakt
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-bone-100 max-w-2xl mx-auto leading-tight tracking-tightest font-medium">
            Lernen wir uns kennen
          </h2>
          <p className="text-muted-300 mt-4 max-w-xl mx-auto">
            Vereinbaren Sie ein kostenloses Kennenlerngespräch oder schreiben Sie
            mir direkt. Ich freue mich auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Booking widget */}
          <div>
            <h3 className="font-display text-lg text-bone-100 mb-2 tracking-tightest font-medium">
              Terminanfrage
            </h3>
            <p className="text-sm text-muted-400 mb-6">
              Wählen Sie einen freien Slot. Ich bestätige den Termin per E-Mail.
            </p>

            {bookingSent ? (
              <div className="border border-ocher/30 bg-ink-950/60 p-8 text-center">
                <CheckCircle2 className="text-ocher mx-auto mb-4" size={32} />
                <p className="text-bone-100 font-medium">
                  Terminanfrage gesendet!
                </p>
                <p className="text-sm text-muted-300 mt-2">
                  Melanie meldet sich innerhalb von 48 Stunden zur Bestätigung.
                </p>
                <button
                  onClick={() => {
                    setBookingSent(false);
                    setSelectedSlot(null);
                  }}
                  className="mt-6 text-sm text-ocher hover:text-ocher/80 transition-colors"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {slots.map((slot) => (
                  <div
                    key={slot.day + slot.date}
                    className="flex items-center gap-4 p-4 border border-ocher/15 bg-ink-950/50"
                  >
                    <div className="text-center shrink-0 w-14">
                      <div className="text-xs text-muted-400 uppercase tracking-wider">
                        {slot.day}
                      </div>
                      <div className="font-display text-xl text-bone-100 tracking-tightest">
                        {slot.date}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {slot.times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedSlot(`${slot.day} ${slot.date} ${time}`)}
                          className={`px-3 py-1.5 text-sm transition-all rounded-[4px] ${
                            selectedSlot === `${slot.day} ${slot.date} ${time}`
                              ? 'bg-ocher text-ink-950 font-medium'
                              : 'border border-ocher/20 text-muted-300 hover:border-ocher/50 hover:text-bone-100'
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
                  className="w-full mt-4 bg-bone-100 text-ink-950 hover:bg-bone-200 disabled:bg-ink-800 disabled:text-muted-400 py-3.5 rounded-[6px] font-medium transition-colors flex items-center justify-center gap-2"
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
            <h3 className="font-display text-lg text-bone-100 mb-2 tracking-tightest font-medium">
              Nachricht senden
            </h3>
            <p className="text-sm text-muted-400 mb-6">
              Schreiben Sie mir direkt – ich antworte in der Regel innerhalb von
              48 Stunden.
            </p>

            {sent ? (
              <div className="border border-ocher/30 bg-ink-950/60 p-8 text-center">
                <CheckCircle2 className="text-ocher mx-auto mb-4" size={32} />
                <p className="text-bone-100 font-medium">
                  Nachricht gesendet!
                </p>
                <p className="text-sm text-muted-300 mt-2">
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
                  className="mt-6 text-sm text-ocher hover:text-ocher/80 transition-colors"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-300 mb-1.5 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-ink-950/60 border border-ocher/20 focus:border-ocher rounded-[6px] px-4 py-2.5 text-bone-100 text-sm outline-none transition-colors"
                      placeholder="Ihr Name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-muted-300 mb-1.5 block">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-ink-950/60 border border-ocher/20 focus:border-ocher rounded-[6px] px-4 py-2.5 text-bone-100 text-sm outline-none transition-colors"
                      placeholder="ihre@email.de"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-300 mb-1.5 block">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-ink-950/60 border border-ocher/20 focus:border-ocher rounded-[6px] px-4 py-2.5 text-bone-100 text-sm outline-none transition-colors"
                      placeholder="optional"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-300 mb-1.5 block">
                      Organisation
                    </label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full bg-ink-950/60 border border-ocher/20 focus:border-ocher rounded-[6px] px-4 py-2.5 text-bone-100 text-sm outline-none transition-colors"
                      placeholder="optional"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-300 mb-1.5 block">
                    Anliegen
                  </label>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full bg-ink-950/60 border border-ocher/20 focus:border-ocher rounded-[6px] px-4 py-2.5 text-bone-100 text-sm outline-none transition-colors"
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-300 mb-1.5 block">
                    Nachricht *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full bg-ink-950/60 border border-ocher/20 focus:border-ocher rounded-[6px] px-4 py-2.5 text-bone-100 text-sm outline-none transition-colors resize-none"
                    placeholder="Was beschäftigt Sie?"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-bone-100 text-ink-950 hover:bg-bone-200 py-3.5 rounded-[6px] font-medium transition-colors"
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact details */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 pt-8 border-t border-ocher/15">
          <div className="flex items-center gap-3 text-muted-300">
            <MapPin className="text-ocher shrink-0" size={18} />
            <div>
              <p className="text-sm text-bone-100">Köln</p>
              <p className="text-xs text-muted-400">50931 / 50935</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-muted-300">
            <Mail className="text-ocher shrink-0" size={18} />
            <div>
              <p className="text-sm text-bone-100">info@melanie-eberhard.de</p>
              <p className="text-xs text-muted-400">B2B: Training@melanie-eberhard.de</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-muted-300">
            <Linkedin className="text-ocher shrink-0" size={18} />
            <div>
              <p className="text-sm text-bone-100">LinkedIn</p>
              <p className="text-xs text-muted-400">Profil folgt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
