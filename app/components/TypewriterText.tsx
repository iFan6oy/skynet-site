"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="tracking-wider">
      {displayed}
      {!done && <span className="text-red-500 animate-pulse">|</span>}
      {done && <span className="cursor-blink" />}
    </span>
  );
}
