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
import { Petal } from '@/components/Petal';

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
    <section id="kontakt" className="py-28 lg:py-36 bg-paper-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="text-leaf-500 text-sm uppercase tracking-[0.2em] mb-5">
            Kontakt
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-moss-800 font-light max-w-2xl mx-auto leading-[1.15] text-balance">
            Lernen wir uns kennen
          </h2>
          <p className="text-muted mt-5 max-w-xl mx-auto font-light">
            Vereinbaren Sie ein kostenloses Kennenlerngespräch oder schreiben
            Sie mir direkt. Ich freue mich auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking widget */}
          <div>
            <h3 className="font-display text-2xl text-moss-800 font-light mb-2 flex items-center gap-2">
              <Calendar size={20} className="text-leaf-500" />
              Terminanfrage
            </h3>
            <p className="text-sm text-muted mb-6 font-light">
              Wählen Sie einen freien Slot. Ich bestätige den Termin per E-Mail.
            </p>

            {bookingSent ? (
              <div className="bg-sage-50 border border-sage-200 rounded-2xl p-8 text-center">
                <CheckCircle2 className="text-leaf-500 mx-auto mb-4" size={40} />
                <p className="text-moss-800 font-medium">
                  Terminanfrage gesendet!
                </p>
                <p className="text-sm text-muted mt-2 font-light">
                  Melanie meldet sich innerhalb von 48 Stunden zur Bestätigung.
                </p>
                <button
                  onClick={() => {
                    setBookingSent(false);
                    setSelectedSlot(null);
                  }}
                  className="mt-6 text-sm text-leaf-500 hover:text-leaf-400 transition-colors"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {slots.map((slot) => (
                  <div
                    key={slot.day + slot.date}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-paper-50 border border-sage-200"
                  >
                    <div className="text-center shrink-0 w-14">
                      <div className="text-xs text-muted uppercase">
                        {slot.day}
                      </div>
                      <div className="font-display text-xl text-moss-800 font-light">
                        {slot.date}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {slot.times.map((time) => (
                        <button
                          key={time}
                          onClick={() =>
                            setSelectedSlot(`${slot.day} ${slot.date} ${time}`)
                          }
                          className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                            selectedSlot === `${slot.day} ${slot.date} ${time}`
                              ? 'bg-leaf-500 text-paper-50'
                              : 'bg-sage-100 text-moss-800 hover:bg-sage-200'
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
                  className="w-full mt-4 bg-leaf-500 hover:bg-leaf-400 disabled:bg-sage-200 disabled:text-muted text-paper-50 py-3.5 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2"
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
            <h3 className="font-display text-2xl text-moss-800 font-light mb-2 flex items-center gap-2">
              <Mail size={20} className="text-leaf-500" />
              Nachricht senden
            </h3>
            <p className="text-sm text-muted mb-6 font-light">
              Schreiben Sie mir direkt – ich antworte in der Regel innerhalb von
              48 Stunden.
            </p>

            {sent ? (
              <div className="bg-sage-50 border border-sage-200 rounded-2xl p-8 text-center">
                <CheckCircle2 className="text-leaf-500 mx-auto mb-4" size={40} />
                <p className="text-moss-800 font-medium">Nachricht gesendet!</p>
                <p className="text-sm text-muted mt-2 font-light">
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
                  className="mt-6 text-sm text-leaf-500 hover:text-leaf-400 transition-colors"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted mb-1.5 block font-light">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-paper-50 border border-sage-200 focus:border-leaf-400 rounded-xl px-4 py-2.5 text-moss-800 text-sm outline-none transition-colors duration-300"
                      placeholder="Ihr Name"
                    />
                    {errors.name && (
                      <p className="text-xs text-blossom-500 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-muted mb-1.5 block font-light">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full bg-paper-50 border border-sage-200 focus:border-leaf-400 rounded-xl px-4 py-2.5 text-moss-800 text-sm outline-none transition-colors duration-300"
                      placeholder="ihre@email.de"
                    />
                    {errors.email && (
                      <p className="text-xs text-blossom-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted mb-1.5 block font-light">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-paper-50 border border-sage-200 focus:border-leaf-400 rounded-xl px-4 py-2.5 text-moss-800 text-sm outline-none transition-colors duration-300"
                      placeholder="optional"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted mb-1.5 block font-light">
                      Organisation
                    </label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full bg-paper-50 border border-sage-200 focus:border-leaf-400 rounded-xl px-4 py-2.5 text-moss-800 text-sm outline-none transition-colors duration-300"
                      placeholder="optional"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted mb-1.5 block font-light">
                    Anliegen
                  </label>
                  <select
                    value={form.topic}
                    onChange={(e) =>
                      setForm({ ...form, topic: e.target.value })
                    }
                    className="w-full bg-paper-50 border border-sage-200 focus:border-leaf-400 rounded-xl px-4 py-2.5 text-moss-800 text-sm outline-none transition-colors duration-300"
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted mb-1.5 block font-light">
                    Nachricht *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={4}
                    className="w-full bg-paper-50 border border-sage-200 focus:border-leaf-400 rounded-xl px-4 py-2.5 text-moss-800 text-sm outline-none transition-colors duration-300 resize-none"
                    placeholder="Was beschäftigt Sie?"
                  />
                  {errors.message && (
                    <p className="text-xs text-blossom-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-leaf-500 hover:bg-leaf-400 text-paper-50 py-3.5 rounded-full font-medium transition-colors duration-300"
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact details */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-muted">
            <MapPin className="text-leaf-500 shrink-0" size={20} />
            <div>
              <p className="text-sm text-moss-800 font-light">Köln</p>
              <p className="text-xs text-muted">50931 / 50935</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-muted">
            <Mail className="text-leaf-500 shrink-0" size={20} />
            <div>
              <p className="text-sm text-moss-800 font-light">
                info@melanie-eberhard.de
              </p>
              <p className="text-xs text-muted">
                B2B: Training@melanie-eberhard.de
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-muted">
            <Linkedin className="text-leaf-500 shrink-0" size={20} />
            <div>
              <p className="text-sm text-moss-800 font-light">LinkedIn</p>
              <p className="text-xs text-muted">Profil folgt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
