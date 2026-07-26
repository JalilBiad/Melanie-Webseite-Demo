import { useReveal } from '@/hooks/useReveal';
import { ResonanceLine } from '@/components/ResonanceLine';

export function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="philosophie"
      className="py-28 lg:py-36 bg-ink-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative max-w-4xl mx-auto text-center`}
        >
          <p className="text-ocher text-xs tracking-[0.2em] uppercase mb-8">
            Philosophie
          </p>

          <h2 className="font-display text-3xl lg:text-5xl text-bone-100 leading-tight mb-10 tracking-tightest font-medium text-balance">
            Die Stimme als Kompass innerer Stimmigkeit
          </h2>

          <div className="space-y-6 text-muted-300 leading-relaxed text-lg max-w-3xl mx-auto">
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

          {/* Animated larger resonance line — the signature element in context */}
          <div className="mt-14 mb-14">
            <ResonanceLine amplitude={18} animated className="opacity-80" />
          </div>

          <p className="font-display text-2xl lg:text-3xl text-ocher italic tracking-tightest">
            Wer keinen Mut hat zum Träumen, hat keine Kraft zum Kämpfen.
          </p>
        </div>
      </div>
    </section>
  );
}
