"use client";

import { useState } from "react";

export default function CopyCA({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = address;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-3 px-4 py-3 bg-black/60 border border-gray-800 hover:border-red-500/50 transition-all cursor-pointer"
    >
      <code className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors tracking-wider">
        {address}
      </code>
      <span className="text-xs text-gray-600 group-hover:text-red-500 transition-colors shrink-0">
        {copied ? "[ COPIED ]" : "[ COPY ]"}
      </span>
    </button>
  );
}
