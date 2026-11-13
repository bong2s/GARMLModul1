import { useAppState } from '@/state/AppContext';
import { Cpu, Box, ArrowRight, Sparkles } from 'lucide-react';

export function IntroScreen() {
  const { setScreen } = useAppState();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink-950 p-6">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 radial-glow" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo mark */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-accent-500/30 bg-accent-500/10 shadow-glow-lg animate-scale-in">
          <Cpu size={40} className="text-accent-400" />
        </div>

        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1.5 animate-fade-up">
          <Sparkles size={12} className="text-accent-400" />
          <span className="text-[10px] font-medium uppercase tracking-wider text-accent-300">
            Augmented Reality Education
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl animate-fade-up">
          M1 <span className="gradient-text">GARML</span>
        </h1>
        <p className="mt-2 font-display text-base font-medium text-slate-300 sm:text-lg animate-fade-up">
          Sejarah &amp; Evolusi Komputer
        </p>

        {/* Description */}
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400 animate-fade-up">
          Pembelajaran interaktif berbasis Augmented Reality.
        </p>

        {/* CTA */}
        <button
          onClick={() => setScreen('ar')}
          className="mt-10 flex items-center gap-3 rounded-2xl bg-accent-500 px-8 py-4 font-display text-base font-bold text-ink-950 shadow-glow-lg transition-all duration-300 hover:bg-accent-400 hover:scale-105 active:scale-100 animate-fade-up"
        >
          <Box size={22} />
          MULAI AR
          <ArrowRight size={20} />
        </button>

        {/* Secondary links */}
        <div className="mt-6 flex gap-4 text-xs text-slate-500 animate-fade-up">
          <button
            onClick={() => setScreen('timeline')}
            className="transition-colors hover:text-accent-400"
          >
            Sejarah
          </button>
          <span className="text-ink-600">·</span>
          <button
            onClick={() => setScreen('performance')}
            className="transition-colors hover:text-accent-400"
          >
            Kinerja
          </button>
          <span className="text-ink-600">·</span>
          <button
            onClick={() => setScreen('comparison')}
            className="transition-colors hover:text-accent-400"
          >
            Pentium vs PowerPC
          </button>
        </div>
      </div>

      {/* Bottom version */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-[10px] text-slate-700">M1 GARML · Foundation Build</p>
      </div>
    </div>
  );
}
