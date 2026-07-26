import { useReveal } from '@/hooks/useReveal';
import { Aura } from '@/components/Aura';
import { Petal } from '@/components/Petal';

export function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="philosophie"
      className="py-28 lg:py-36 bg-sage-50 relative overflow-hidden"
    >
      <Aura variant="warm" />

      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative z-10 max-w-4xl mx-auto px-6 text-center`}
      >
        <div className="inline-flex items-center gap-3 text-leaf-500 mb-8">
          <Petal size={20} className="text-blossom-400" />
          <span className="text-sm uppercase tracking-[0.2em] text-muted">
            Philosophie
          </span>
        </div>

        <h2 className="font-display text-3xl lg:text-5xl text-moss-800 font-light leading-[1.15] mb-10 text-balance">
          Die Stimme als Kompass innerer Stimmigkeit
        </h2>

        <div className="space-y-6 text-muted leading-relaxed text-lg max-w-3xl mx-auto font-light">
          <p>
            Zunächst lag der Schwerpunkt in der Stimmearbeit auf dem musikalischen
            Gestalten im Circle Singing und der Vokalimprovisation. Zunehmend rückt
            das Potenzial der Stimme in den Mittelpunkt: Ressource und Kompass
            innerer Stimmigkeit zu sein.
          </p>
          <p>
            Ich mache erfahrbar, wie im Zusammenklang mit anderen Stimmen
            Verbindung und ein tragender Gemeinschaftsraum entsteht. Ich
            ermutige Menschen mit unbedingter Wertschätzung und sensibler
            Konfrontation, klar und bewusst in Selbstklärung und dann in Führung
            zu gehen.
          </p>
        </div>

        <div className="mt-14 p-8 rounded-2xl bg-paper-50 border border-sage-200">
          <Petal size={22} className="text-blossom-400 mx-auto mb-4" />
          <p className="font-display text-2xl lg:text-3xl text-moss-800 italic font-light">
            „Wer keinen Mut hat zum Träumen, hat keine Kraft zum Kämpfen."
          </p>
        </div>
      </div>
    </section>
  );
}
