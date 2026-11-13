import { useAppState } from '@/state/AppContext';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface EducationalOverlayProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function EducationalOverlay({ title, subtitle, children }: EducationalOverlayProps) {
  const { setScreen } = useAppState();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink-900 animate-fade-in">
      {/* Top bar */}
      <div className="sticky top-0 z-10 glass border-b border-ink-700/50">
        <div className="mx-auto flex h-14 max-w-3xl items-center gap-3 px-4">
          <button
            onClick={() => setScreen('ar')}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-slate-300 transition-colors hover:text-accent-400"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate font-display text-base font-bold text-white">{title}</h1>
            {subtitle && <p className="truncate text-xs text-slate-500">{subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-6 pb-20">{children}</div>
    </div>
  );
}
