import { useAppState } from '@/state/AppContext';
import { X, Camera, BookOpen, Cpu, GitCompare, Info, ArrowLeft } from 'lucide-react';
import type { ScreenId } from '@/data/types';

export function ARMenu({ onClose }: { onClose: () => void }) {
  const { setScreen } = useAppState();

  const items: { id: ScreenId; label: string; icon: typeof Camera; desc: string }[] = [
    { id: 'ar', label: 'AR CAMERA', icon: Camera, desc: 'Kembali ke kamera AR' },
    { id: 'timeline', label: 'SEJARAH', icon: BookOpen, desc: 'Timeline evolusi komputer' },
    { id: 'performance', label: 'KINERJA', icon: Cpu, desc: 'Perancangan kinerja komputer' },
    { id: 'comparison', label: 'PENTIUM vs POWERPC', icon: GitCompare, desc: 'Studi kasus arsitektur' },
    { id: 'about', label: 'TENTANG', icon: Info, desc: 'Tentang M1 GARML' },
  ];

  const handleNavigate = (screen: ScreenId) => {
    setScreen(screen);
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 animate-fade-in">
      <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-md" />
      <div className="relative z-10 flex h-full flex-col p-5">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-white">MENU</h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-700 bg-ink-850 text-slate-300 transition-colors hover:text-accent-400"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-2.5">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="flex w-full items-center gap-3.5 rounded-2xl border border-ink-700 bg-ink-850/60 p-4 text-left transition-all duration-200 hover:border-accent-500/40 hover:bg-ink-850"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
                    <Icon size={22} className="text-accent-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                  <ArrowLeft size={18} className="text-slate-600" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 text-center">
          <p className="text-[10px] text-slate-600">M1 GARML · Sejarah &amp; Evolusi Komputer</p>
        </div>
      </div>
    </div>
  );
}
