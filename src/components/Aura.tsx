type AuraProps = {
  variant?: 'hero' | 'soft' | 'warm';
  className?: string;
};

export function Aura({ variant = 'soft', className = '' }: AuraProps) {
  const veils =
    variant === 'hero'
      ? [
          'top-[-10%] left-[5%] w-[55vw] h-[55vw] bg-pollen-400/30 animate-breathe-1',
          'top-[20%] right-[0%] w-[45vw] h-[45vw] bg-blossom-400/25 animate-breathe-2',
          'bottom-[-15%] left-[20%] w-[50vw] h-[50vw] bg-leaf-400/20 animate-breathe-3',
        ]
      : variant === 'warm'
      ? [
          'top-[10%] left-[10%] w-[40vw] h-[40vw] bg-blossom-400/20 animate-breathe-1',
          'bottom-[5%] right-[15%] w-[42vw] h-[42vw] bg-pollen-400/20 animate-breathe-2',
        ]
      : [
          'top-[5%] right-[10%] w-[38vw] h-[38vw] bg-leaf-400/18 animate-breathe-1',
          'bottom-[10%] left-[5%] w-[40vw] h-[40vw] bg-pollen-400/15 animate-breathe-2',
        ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {veils.map((v, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[100px] md:blur-[140px] ${v}`}
        />
      ))}
    </div>
  );
}
