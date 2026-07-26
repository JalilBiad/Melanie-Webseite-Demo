import { useReveal } from '@/hooks/useReveal';
import { qualifications } from '@/data/content';
import { Quote } from 'lucide-react';

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="ueber-mich" className="py-24 lg:py-32 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-16 items-center`}
        >
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl shadow-sand-300/50 ring-1 ring-sand-200/60">
              <img
                src="https://images.pexels.com/photos/5905474/pexels-photo-5905474.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Melanie Eberhard – Coach und Mediatorin in Köln"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sand-900/25 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-sage-700 text-cream-50 px-6 py-4 rounded-xl shadow-lg shadow-sage-800/20 hidden sm:block">
              <p className="font-serif text-2xl">Köln</p>
              <p className="text-sm text-sage-100">seit 2006</p>
            </div>
          </div>

          <div>
            <p className="text-sage-600 text-sm uppercase tracking-wider mb-4">
              Über mich
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-sage-900 mb-8 leading-tight">
              Mehr als das methodische Was zählt für mich das menschliche Wie.
            </h2>
            <div className="space-y-4 text-sand-700 leading-relaxed">
              <p>
                Als Junggründerin und Geschäftsführerin der Zebraway
                Consulting-Gesellschaft zur Geschäftsanbahnung zwischen Nigeria
                und Europa betätigte ich mich zum ersten Mal als
                Verständigungshelferin. Handfeste und tiefgründige
                Führungsthemen wurden seit 2004 mein Arbeitsfeld:
                Konfliktmediation, Beratung, Teambegleitung, Einzelcoaching und
                Leadership-Trainings.
              </p>
              <p>
                Ebenso vertiefe ich meine stetige Meditationspraxis und eigene
                Stimmearbeit mit zahlreichen internationalen Lehrern. Ich schaffe
                Räume für Begegnung und Entwicklung, in denen wirklich Neues
                ganzheitlich und kreativ entstehen kann.
              </p>
              <p>
                Ich ermutige Menschen mit unbedingter Wertschätzung und
                sensibler Konfrontation, klar und bewusst in Selbstklärung und
                dann in Führung zu gehen.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-sage-50 border border-sage-200/70">
              <Quote className="text-gold-500 mb-3" size={24} />
              <p className="font-serif text-lg text-sage-800 italic">
                „Wer keinen Mut hat zum Träumen, hat keine Kraft zum Kämpfen."
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sand-600 text-sm uppercase tracking-wider mb-4">
                Qualifikationen
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {qualifications.map((q) => (
                  <li
                    key={q}
                    className="text-sm text-sand-700 flex items-start gap-2"
                  >
                    <span className="text-sage-500 mt-1.5 shrink-0">•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
