import { performanceFactors } from '@/data/performanceFactors';
import { Card } from '@/components/ui/Card';
import {
  Gauge, ListOrdered, Repeat, Layers, GitBranch, Split, HardDrive,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Gauge,
  ListOrdered,
  Repeat,
  Layers,
  GitBranch,
  Split,
  HardDrive,
};

export function PerformanceCardList() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {performanceFactors.map((factor) => {
        const Icon = iconMap[factor.icon] ?? Gauge;
        return (
          <Card key={factor.id} hoverable className="p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
              <Icon size={22} className="text-accent-400" />
            </div>
            <h3 className="font-display text-sm font-semibold text-white">{factor.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{factor.description}</p>
          </Card>
        );
      })}
    </div>
  );
}
