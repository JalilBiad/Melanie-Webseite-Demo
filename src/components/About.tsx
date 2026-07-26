import { useReveal } from '@/hooks/useReveal';
import { qualifications } from '@/data/content';
import { Petal } from '@/components/Petal';

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="ueber-mich" className="py-28 lg:py-36 bg-paper-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-16 items-center`}
        >
          <div className="relative">
            <div className="relative arch-top overflow-hidden aspect-[4/5] border border-sage-200">
              <img
                src="https://images.pexels.com/photos/5905474/pexels-photo-5905474.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Melanie Eberhard – Coach und Mediatorin in Köln"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-paper-50 border border-sage-200 px-6 py-4 rounded-2xl hidden sm:block">
              <p className="font-display text-2xl text-moss-800 font-light">Köln</p>
              <p className="text-sm text-muted">seit 2006</p>
            </div>
          </div>

          <div>
            <p className="text-leaf-500 text-sm uppercase tracking-[0.2em] mb-5">
              Über mich
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-moss-800 font-light leading-[1.15] mb-8 text-balance">
              Mehr als das methodische Was zählt für mich das menschliche Wie.
            </h2>
            <div className="space-y-5 text-muted leading-relaxed font-light">
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

            <div className="mt-8 p-7 rounded-2xl bg-sage-50 border border-sage-200">
              <Petal size={22} className="text-blossom-400 mb-3" />
              <p className="font-display text-xl text-moss-800 italic font-light leading-relaxed">
                „Wer keinen Mut hat zum Träumen, hat keine Kraft zum Kämpfen."
              </p>
            </div>

            <div className="mt-10">
              <p className="text-muted text-sm uppercase tracking-[0.2em] mb-5">
                Qualifikationen
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {qualifications.map((q) => (
                  <li
                    key={q}
                    className="text-sm text-muted flex items-start gap-2.5 font-light"
                  >
                    <Petal size={12} className="text-leaf-400 mt-1.5 shrink-0" />
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
