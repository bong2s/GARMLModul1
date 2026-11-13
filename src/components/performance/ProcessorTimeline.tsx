import { processors } from '@/data/processors';
import { useAppState } from '@/state/AppContext';
import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Cpu } from 'lucide-react';

export function ProcessorTimeline() {
  const [selectedProcessor, setSelectedProcessor] = useState<number | null>(null);
  const proc = selectedProcessor !== null ? processors[selectedProcessor] : null;

  return (
    <div>
      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-accent-500/30 via-ink-700 to-ink-700 hidden sm:block" />

        <div className="grid gap-3 sm:grid-cols-7">
          {processors.map((p, idx) => {
            const isSelected = selectedProcessor === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProcessor(isSelected ? null : p.id)}
                className="group relative text-left"
              >
                {/* Dot */}
                <div
                  className={`mb-3 hidden h-3 w-3 rounded-full border-2 transition-all duration-300 sm:block ${
                    isSelected
                      ? 'border-accent-500 bg-accent-500 shadow-glow'
                      : 'border-ink-600 bg-ink-850 group-hover:border-ink-500'
                  }`}
                  style={{ marginInlineStart: '0.25rem' }}
                />

                <div
                  className={`rounded-xl border p-3 transition-all duration-300 ${
                    isSelected
                      ? 'border-accent-500/50 bg-accent-500/10'
                      : 'border-ink-700 bg-ink-850/60 hover:border-ink-600'
                  }`}
                >
                  <div className={`text-sm font-bold ${isSelected ? 'text-accent-300' : 'text-white'}`}>
                    {p.name}
                  </div>
                  <div className="text-xs text-slate-500">{p.year}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail */}
      {proc && (
        <Card active className="mt-4 animate-fade-up">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
              <Cpu size={20} className="text-accent-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-semibold text-white">{proc.name}</h3>
                <span className="rounded-md bg-accent-500/15 px-2 py-0.5 text-xs font-medium text-accent-400">
                  {proc.year}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{proc.description}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
