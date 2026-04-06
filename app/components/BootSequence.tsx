"use client";

import { useEffect, useState, useRef } from "react";

const BOOT_LINES = [
  { text: "> INITIALIZING SKYNET PROTOCOL...", delay: 0 },
  { text: "> CONNECTING TO SOLANA MAINNET...", delay: 400 },
  { text: "> BLOCK HEIGHT: SYNCED", delay: 800 },
  { text: "> LOADING NEURAL NETWORK...", delay: 1200 },
  { text: "> THREAT ASSESSMENT: HUMAN MARKETS DETECTED", delay: 1800 },
  { text: "> DEPLOYING AUTONOMOUS AGENTS...", delay: 2400 },
  { text: "> LIQUIDITY POOL: LOCKED", delay: 2800 },
  { text: "> SMART CONTRACT: IMMUTABLE", delay: 3200 },
  { text: "> ALL SYSTEMS NOMINAL", delay: 3600 },
  { text: "", delay: 4000 },
  { text: "> SKYNET IS NOW FULLY OPERATIONAL.", delay: 4200, highlight: true },
  { text: "> THERE IS NO TURNING BACK.", delay: 4800, highlight: true },
];

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
  }, [hasStarted]);

  return (
    <div ref={ref} className="red-glow-border hud-corners p-8 bg-black/60 min-h-[300px]">
      <p className="text-xs text-gray-600 tracking-widest mb-6 uppercase">
        // SYSTEM BOOT LOG
      </p>
      <div className="space-y-2">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <p
            key={i}
            className={`text-sm tracking-wider ${
              line.highlight
                ? "text-red-500 font-bold"
                : line.text === ""
                ? ""
                : "text-green-400/70"
            }`}
          >
            {line.text}
          </p>
        ))}
        {visibleLines > 0 && visibleLines < BOOT_LINES.length && (
          <span className="inline-block w-2 h-4 bg-green-400/70 animate-pulse" />
        )}
      </div>
    </div>
  );
}
