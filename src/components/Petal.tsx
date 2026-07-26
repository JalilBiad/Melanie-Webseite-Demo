type PetalProps = {
  size?: number;
  className?: string;
};

export function Petal({ size = 24, className }: PetalProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C6 6 2 12 2 17a5 5 0 0 0 10 0c0-5 4-11 10-15-3-1-7-1-10 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
