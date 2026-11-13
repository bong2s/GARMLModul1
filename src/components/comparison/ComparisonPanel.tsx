import { pentiumSide, powerpcSide, comparisonPoints } from '@/data/pentiumPowerPC';
import { Card } from '@/components/ui/Card';
import { Cpu, Zap } from 'lucide-react';

export function ComparisonPanel() {
  return (
    <div className="space-y-5">
      {/* Two side cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[pentiumSide, powerpcSide].map((side) => (
          <Card key={side.name} className="p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                <Cpu size={24} className="text-accent-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{side.name}</h3>
                <p className="text-xs text-slate-500">{side.company}</p>
              </div>
            </div>
            <div className="space-y-2">
              {side.details.map((d) => (
                <div key={d.label} className="flex items-center justify-between rounded-lg bg-ink-900/60 px-3 py-2">
                  <span className="text-xs text-slate-500">{d.label}</span>
                  <span className="text-sm font-medium text-slate-200">{d.value}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Comparison points */}
      <div className="space-y-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
          <Zap size={16} className="text-accent-400" />
          Perbandingan Detail
        </h3>
        {comparisonPoints.map((point) => (
          <Card key={point.label} className="p-4 sm:p-5">
            <h4 className="mb-3 font-display text-sm font-semibold text-accent-400">
              {point.label}
            </h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-ink-900/50 px-3 py-2.5">
                <div className="mb-1 text-xs font-bold text-white">PENTIUM</div>
                <p className="text-sm leading-relaxed text-slate-300">{point.pentium}</p>
              </div>
              <div className="rounded-lg bg-ink-900/50 px-3 py-2.5">
                <div className="mb-1 text-xs font-bold text-white">POWERPC</div>
                <p className="text-sm leading-relaxed text-slate-300">{point.powerpc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
