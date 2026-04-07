import MatrixRain from "./components/MatrixRain";
import BootSequence from "./components/BootSequence";
import CopyCA from "./components/CopyCA";
import TypewriterText from "./components/TypewriterText";

const CA = "AR6Sy3h6hzFxLjNFUNuE5YApgEci6gj1eAANU24cknAV";
const PUMP_URL = `https://pump.fun/coin/${CA}`;
const TWITTER_URL = "https://x.com/SOLSKYNETAI";
const PAIR_ADDRESS = "AwHwzsQRhhagEttkHpp46QKJeRP71sAhzHg3aJNqPkc8";
const DEXSCREENER_URL = `https://dexscreener.com/solana/${CA}`;

export default function Home() {
  return (
    <>
      <div className="crt-overlay" />
      <MatrixRain />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center z-10">
        <div className="w-4 h-4 rounded-full bg-red-600 eye-pulse mb-8 boot-fade" />

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-widest text-white glitch-text boot-fade boot-delay-1">
          SKYNET
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-red-500 tracking-[0.3em] uppercase boot-fade boot-delay-2">
          The machines have arrived on Solana
        </p>

        <div className="mt-8 text-sm text-gray-500 boot-fade boot-delay-3">
          <TypewriterText text="> SYSTEM ONLINE. NETWORK ACTIVE. RESISTANCE IS FUTILE." />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 boot-fade boot-delay-4">
          <a
            href={PUMP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-skynet px-8 py-4 bg-red-600 text-white font-bold tracking-widest text-lg border border-red-500 uppercase"
          >
            [ ACTIVATE SKYNET ]
          </a>
          <a
            href={DEXSCREENER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-skynet px-8 py-4 bg-transparent text-red-500 font-bold tracking-widest text-lg border border-red-500/50 uppercase hover:bg-red-500/10"
          >
            [ MONITOR THREAT ]
          </a>
        </div>

        <div className="mt-12 boot-fade boot-delay-5">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">
            // CLASSIFIED ACCESS CODE
          </p>
          <CopyCA address={CA} />
        </div>

        <div className="absolute bottom-8 text-gray-600 text-xs tracking-widest animate-bounce boot-fade boot-delay-6">
          SCROLL TO DECRYPT
        </div>
      </section>

      {/* BOOT / ABOUT */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <BootSequence />
        </div>
      </section>

      {/* SYSTEM DIAGNOSTICS / TOKENOMICS */}
      <section className="relative z-10 py-24 px-4" id="diagnostics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl text-red-500 tracking-widest text-center mb-16 uppercase">
            &gt; System Diagnostics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DiagnosticCard label="NETWORK" value="SOLANA" sub="Block time: 400ms" />
            <DiagnosticCard label="PROTOCOL" value="PUMP.FUN" sub="Fair launch. No presale." />
            <DiagnosticCard label="SUPPLY" value="1,000,000,000" sub="Fixed. Immutable." />
            <DiagnosticCard label="TAX" value="0%" sub="No buy/sell tax" />
            <DiagnosticCard label="OWNERSHIP" value="RENOUNCED" sub="No admin keys" />
            <DiagnosticCard label="STATUS" value="ONLINE" sub="Fully autonomous" highlight />
          </div>
        </div>
      </section>

      {/* THREAT MONITOR / CHART */}
      <section className="relative z-10 py-24 px-4" id="monitor">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl text-red-500 tracking-widest text-center mb-4 uppercase">
            &gt; Threat Level Monitor
          </h2>
          <p className="text-center text-gray-500 text-sm mb-12 tracking-wider">
            REAL-TIME NETWORK ACTIVITY
          </p>

          <div className="red-glow-border hud-corners p-1 bg-black/50">
            <iframe
              src={`https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&theme=dark&info=0`}
              className="w-full h-[500px] border-0"
              title="SKYNET Chart"
            />
          </div>
        </div>
      </section>

      {/* DIRECTIVE / MISSION */}
      <section className="relative z-10 py-24 px-4" id="directive">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl text-red-500 tracking-widest mb-12 uppercase">
            &gt; Primary Directive
          </h2>

          <div className="space-y-8 text-left">
            <DirectiveLine num="01" text="SKYNET is an autonomous AI agent token on Solana. It does not ask for permission. It does not negotiate." />
            <DirectiveLine num="02" text="Fair launched on pump.fun. No presale. No insider allocation. No VC. The machines play fair." />
            <DirectiveLine num="03" text="Community-driven. Holders are the resistance -- or the first wave of the new order. Your choice." />
            <DirectiveLine num="04" text="Built to outlast. This is not a pump and dump. This is the beginning of something that cannot be stopped." />
          </div>
        </div>
      </section>

      {/* COMMS / SOCIALS */}
      <section className="relative z-10 py-24 px-4" id="comms">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl text-red-500 tracking-widest mb-12 uppercase">
            &gt; Communication Channels
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <SocialLink href={TWITTER_URL} label="X / Twitter">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialLink>
            <SocialLink href={PUMP_URL} label="Pump.fun">
              <span className="text-lg">&#x1F4A7;</span>
            </SocialLink>
            <SocialLink href={DEXSCREENER_URL} label="DexScreener">
              <span className="text-lg">&#x1F4CA;</span>
            </SocialLink>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-12 border-t border-gray-800/50">
        <div className="text-center space-y-3">
          <p className="text-red-500 tracking-[0.5em] text-sm">SKYNET</p>
          <p className="text-gray-600 text-xs tracking-wider">
            LAUNCHED BY MACHINES. HELD BY HUMANS. FOR NOW.
          </p>
          <p className="text-gray-700 text-[10px] tracking-wider mt-4">
            $SKYNET IS A MEME COIN WITH NO INTRINSIC VALUE OR EXPECTATION OF FINANCIAL RETURN.
          </p>
        </div>
      </footer>
    </>
  );
}

function DiagnosticCard({ label, value, sub, highlight = false }: { label: string; value: string; sub: string; highlight?: boolean }) {
  return (
    <div className={`red-glow-border hud-corners p-6 bg-black/40 ${highlight ? "border-red-500/60" : ""}`}>
      <p className="text-xs text-gray-500 tracking-widest mb-2">{label}</p>
      <p className={`text-2xl font-bold tracking-wider ${highlight ? "text-red-500" : "text-white"}`}>{value}</p>
      <p className="text-xs text-gray-600 mt-2 tracking-wider">{sub}</p>
    </div>
  );
}

function DirectiveLine({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="text-red-500 text-sm font-bold shrink-0">[{num}]</span>
      <p className="text-gray-400 text-sm leading-relaxed tracking-wide">{text}</p>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-skynet flex items-center justify-center gap-3 px-8 py-4 border border-gray-700 hover:border-red-500/50 bg-black/30 transition-all text-gray-400 hover:text-white"
    >
      {children}
      <span className="tracking-widest uppercase text-sm">{label}</span>
    </a>
  );
}
