import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

/**
 * Full-screen white splash that counts 0 → 100 over 2s, then fades out.
 * Calls onComplete once it should be removed from the DOM.
 */
export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // 100 steps × 20ms = 2000ms total.
    let current = 0;
    const interval = window.setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        window.clearInterval(interval);
        // Hold at 100 for 200ms, then start the fade.
        window.setTimeout(() => setExiting(true), 200);
        // Remove from DOM 900ms after reaching 100.
        window.setTimeout(onComplete, 900);
      }
    }, 20);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex items-end justify-start transition-opacity duration-700 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <span className="text-7xl md:text-9xl font-bold tabular-nums p-6 md:p-10 leading-none text-black">
        {count}
      </span>
    </div>
  );
}
