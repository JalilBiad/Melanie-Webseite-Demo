import { useReveal } from '@/hooks/useReveal';
import { qualifications } from '@/data/content';

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="ueber-mich" className="py-28 lg:py-36 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-16 items-center`}
        >
          <div className="relative">
            <div className="relative overflow-hidden aspect-[4/5] border border-ocher/15">
              <img
                src="https://images.pexels.com/photos/5905474/pexels-photo-5905474.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Melanie Eberhard – Coach und Mediatorin in Köln"
                className="w-full h-full object-cover grayscale-[20%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-ink-800 border border-ocher/20 px-6 py-4 hidden sm:block">
              <p className="font-display text-2xl text-bone-100 tracking-tightest">Köln</p>
              <p className="text-sm text-muted-300">seit 2006</p>
            </div>
          </div>

          <div>
            <p className="text-ocher text-xs tracking-[0.2em] uppercase mb-4">
              Über mich
            </p>
            <h2 className="font-display text-3xl lg:text-4xl text-bone-100 mb-8 leading-tight tracking-tightest font-medium">
              Mehr als das methodische Was zählt für mich das menschliche Wie.
            </h2>
            <div className="space-y-4 text-muted-300 leading-relaxed">
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

            <div className="mt-8 p-6 border-l-2 border-ocher bg-ink-900/50">
              <p className="font-display text-lg text-bone-100 italic tracking-tightest">
                Wer keinen Mut hat zum Träumen, hat keine Kraft zum Kämpfen.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-muted-400 text-xs tracking-[0.2em] uppercase mb-4">
                Qualifikationen
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {qualifications.map((q) => (
                  <li
                    key={q}
                    className="text-sm text-muted-300 flex items-start gap-2"
                  >
                    <span className="text-ocher mt-1.5 shrink-0 text-[8px]">■</span>
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
