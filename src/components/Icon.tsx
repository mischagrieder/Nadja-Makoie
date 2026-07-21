const PATHS: Record<string, string> = {
  sparkle: 'M12 4l1.8 4.6L18.5 10l-4.7 1.4L12 16l-1.8-4.6L5.5 10l4.7-1.4z',
  star: 'M12 3l2.5 6.3L21 10l-5 4.2L17.5 21 12 17.3 6.5 21 8 14.2 3 10l6.5-.7z',
  veneer: 'M12 3l8 4.5-8 4.5-8-4.5zM4 12l8 4.5 8-4.5M4 16.5l8 4.5 8-4.5',
  implant:
    'M8.5 3.6C6.6 3.6 5 5 5 7.4c0 3 1.2 5 1.8 8.4.3 1.8.4 4 1.6 4s1-2 2.6-2 1.4 2 2.6 2 1.3-2.2 1.6-4C16.8 12.4 19 10.4 19 7.4 19 5 17.4 3.6 15.5 3.6c-1.6 0-2.4 1-3.5 1s-1.9-1-3.5-1z',
  crown: 'M4 8l3.6 3.2L12 5l4.4 6.2L20 8l-1.4 9H5.4L4 8z',
  heart:
    'M20.8 6.6a5 5 0 0 0-7.1 0L12 8.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 22l8.8-8.3a5 5 0 0 0 0-7.1z',
  spark: 'M12 3l2 7 7 2-7 2-2 7-2-7-7-2 7-2z',
  person: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 21c0-4.1 3.4-6.8 7.5-6.8s7.5 2.7 7.5 6.8',
  pin: 'M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10zM12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  phone:
    'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 6L2 7',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  arrow: 'M5 12h14M13 6l6 6-6 6',
};

export function Icon({
  name,
  className = '',
  strokeWidth = 1.5,
}: {
  name: keyof typeof PATHS | string;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name] ?? PATHS.star} />
    </svg>
  );
}

/** Official-style multicolour Google "G". */
export function GoogleG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

export function Stars({ className = '', size = 16 }: { className?: string; size?: number }) {
  return (
    <span className={`inline-flex gap-0.5 text-[#E0A73E] ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.26 6.86.6-5.2 4.51 1.56 6.72L12 17.27 5.88 20.6l1.56-6.72-5.2-4.51 6.86-.6z" />
        </svg>
      ))}
    </span>
  );
}
