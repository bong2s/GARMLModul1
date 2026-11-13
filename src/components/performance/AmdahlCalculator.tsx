import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Calculator } from 'lucide-react';

export function AmdahlCalculator() {
  const [parallelFraction, setParallelFraction] = useState(0.5);
  const [speedup, setSpeedup] = useState(4);

  // Amdahl's Law: S = 1 / ((1 - p) + p / s)
  const denominator = (1 - parallelFraction) + parallelFraction / speedup;
  const totalSpeedup = 1 / denominator;

  const parallelPct = Math.round(parallelFraction * 100);
  const speedupDisplay = totalSpeedup.toFixed(2);

  // For visual bar
  const maxSpeedup = 1 / (1 - parallelFraction);
  const barWidth = Math.min((totalSpeedup / Math.max(maxSpeedup, 1)) * 100, 100);

  return (
    <Card className="p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <Calculator size={20} className="text-accent-400" />
        <h3 className="font-display text-base font-semibold text-white">Kalkulator Amdahl's Law</h3>
      </div>

      {/* Explanation */}
      <div className="mb-5 rounded-xl bg-ink-900/60 px-4 py-3">
        <p className="text-sm leading-relaxed text-slate-300">
          Speedup keseluruhan sistem dibatasi oleh bagian program yang tidak mengalami peningkatan.
        </p>
        <p className="mt-2 font-mono text-xs text-accent-400">
          S = 1 / ((1 - p) + p / s)
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-5">
        {/* Parallel fraction */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-300">
              Bagian yang ditingkatkan (p)
            </label>
            <span className="font-mono text-sm font-bold text-accent-400">{parallelPct}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={parallelFraction}
            onChange={(e) => setParallelFraction(parseFloat(e.target.value))}
            className="w-full accent-accent-500"
          />
        </div>

        {/* Speedup of the enhanced part */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-300">
              Speedup bagian tersebut (s)
            </label>
            <span className="font-mono text-sm font-bold text-accent-400">{speedup}x</span>
          </div>
          <input
            type="range"
            min={1}
            max={100}
            step={1}
            value={speedup}
            onChange={(e) => setSpeedup(parseInt(e.target.value))}
            className="w-full accent-accent-500"
          />
        </div>
      </div>

      {/* Result */}
      <div className="mt-6 rounded-xl border border-accent-500/20 bg-accent-500/5 px-4 py-4">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-accent-400" />
          <span className="text-sm text-slate-300">Speedup Total Sistem</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-3xl font-bold text-white">{speedupDisplay}</span>
          <span className="text-lg text-accent-400">x</span>
        </div>
        {/* Visual bar */}
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-900">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-600 to-accent-400 transition-all duration-300"
            style={{ width: `${barWidth}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Speedup maksimum teoritis: {maxSpeedup.toFixed(2)}x (jika s → ∞)
        </p>
      </div>
    </Card>
  );
}
