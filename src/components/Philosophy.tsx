import { useReveal } from '@/hooks/useReveal';
import { AudioLines } from 'lucide-react';

export function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="philosophie"
      className="py-24 lg:py-32 bg-gradient-to-b from-clay-50 via-stone-50 to-stone-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-clay-200 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-sage-200 blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative max-w-4xl mx-auto px-6 text-center`}
      >
        <div className="inline-flex items-center gap-3 text-clay-600 mb-8">
          <AudioLines size={28} />
          <span className="text-sm uppercase tracking-wider">Philosophie</span>
        </div>

        <h2 className="font-serif text-3xl lg:text-5xl text-stone-800 leading-tight mb-10 text-balance">
          Die Stimme als Kompass innerer Stimmigkeit
        </h2>

        <div className="space-y-6 text-stone-600 leading-relaxed text-lg max-w-3xl mx-auto">
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

        <div className="mt-14 p-8 rounded-2xl bg-white/70 border border-clay-200">
          <p className="font-serif text-2xl lg:text-3xl text-clay-700 italic">
            „Wer keinen Mut hat zum Träumen, hat keine Kraft zum Kämpfen."
          </p>
        </div>
      </div>
    </section>
  );
}
