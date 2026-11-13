import { EducationalOverlay } from '@/components/ui/EducationalOverlay';
import { Card } from '@/components/ui/Card';
import { generations } from '@/data/generations';
import { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

export function TimelineScreen() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <EducationalOverlay title="Sejarah & Evolusi Komputer" subtitle="Timeline interaktif 5 generasi">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-ink-700 to-ink-700" />

        <div className="space-y-3">
          {generations.map((gen) => {
            const isOpen = expanded === gen.id;
            return (
              <div key={gen.id} className="relative pl-12">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-accent-500 bg-accent-500/20 shadow-glow'
                      : 'border-ink-600 bg-ink-850'
                  }`}
                >
                  <span className={`text-xs font-bold ${isOpen ? 'text-accent-300' : 'text-slate-500'}`}>
                    {gen.id}
                  </span>
                </div>

                <Card active={isOpen} hoverable onClick={() => setExpanded(isOpen ? null : gen.id)}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-sm font-semibold text-white">{gen.name}</h3>
                      <p className="text-xs font-medium text-accent-400">{gen.period}</p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Teknologi: {gen.technology}</p>

                  {isOpen && (
                    <div className="mt-3 animate-fade-up">
                      <p className="text-sm leading-relaxed text-slate-300">{gen.fullDescription}</p>
                      <ul className="mt-3 space-y-1.5">
                        {gen.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </EducationalOverlay>
  );
}
