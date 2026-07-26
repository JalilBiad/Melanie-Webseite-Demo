interface ResonanceLineProps {
  amplitude?: number;
  animated?: boolean;
  className?: string;
}

export function ResonanceLine({
  amplitude = 6,
  animated = false,
  className = '',
}: ResonanceLineProps) {
  const width = 1440;
  const height = amplitude * 2 + 2;
  const midY = height / 2;
  const segments = 72;
  const segWidth = width / segments;

  const points: string[] = [];
  for (let i = 0; i <= segments; i++) {
    const x = i * segWidth;
    const phase = (i / segments) * Math.PI * 6;
    const y = midY + Math.sin(phase) * amplitude;
    points.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  const d = points.join(' ');

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className={`w-full ${animated ? 'animate-resonance' : ''}`}
        style={{ height: `${height}px` }}
      >
        <path
          d={d}
          fill="none"
          stroke="#D9A441"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
