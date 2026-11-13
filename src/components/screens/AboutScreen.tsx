import { EducationalOverlay } from '@/components/ui/EducationalOverlay';
import { Card } from '@/components/ui/Card';
import { Cpu, Box, BookOpen, GitCompare, Package, Smartphone } from 'lucide-react';
import { timelineObjects } from '@/data/arObjects';

export function AboutScreen() {
  return (
    <EducationalOverlay title="Tentang M1 GARML" subtitle="Media pembelajaran interaktif berbasis AR">
      <Card className="mb-5 p-5">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
          <Cpu size={22} className="text-accent-400" />
        </div>
        <h3 className="font-display text-base font-semibold text-white">M1 GARML</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Media pembelajaran interaktif untuk mempelajari sejarah dan evolusi komputer, perancangan
          kinerja komputer, serta studi kasus evolusi Pentium dan PowerPC.
        </p>
      </Card>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          { icon: Box, title: 'AR Camera', desc: 'Eksplorasi objek 3D di dunia nyata' },
          { icon: BookOpen, title: 'Timeline', desc: '8 objek evolusi komputer' },
          { icon: Cpu, title: 'Kinerja', desc: 'Faktor, Amdahl, benchmarking' },
          { icon: GitCompare, title: 'Studi Kasus', desc: 'Pentium vs PowerPC' },
        ].map((f) => {
          const Icon = f.icon;
          return (
            <Card key={f.title} className="p-4">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 border border-accent-500/20">
                <Icon size={18} className="text-accent-400" />
              </div>
              <h4 className="text-sm font-semibold text-white">{f.title}</h4>
              <p className="mt-1 text-xs text-slate-400">{f.desc}</p>
            </Card>
          );
        })}
      </div>

      <div className="mt-5">
        <div className="mb-3 flex items-center gap-2">
          <Package size={18} className="text-accent-400" />
          <h3 className="font-display text-sm font-semibold text-white">Status Model 3D</h3>
        </div>
        <Card className="p-4">
          <div className="space-y-2">
            {timelineObjects.map((obj) => (
              <div
                key={obj.id}
                className="flex items-center justify-between rounded-lg bg-ink-900/60 px-3 py-2"
              >
                <div>
                  <span className="text-xs font-medium text-slate-300">{obj.name}</span>
                </div>
                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${
                    obj.modelPath
                      ? 'bg-success-500/15 text-success-400'
                      : 'bg-ink-700 text-slate-500'
                  }`}
                >
                  {obj.modelPath ? 'TERSEDIA' : 'MENUNGGU'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Smartphone size={18} className="text-accent-400" />
            <h4 className="text-sm font-semibold text-white">Platform</h4>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Aplikasi AR edukasi untuk perangkat Android. Kamera sebagai layar utama, timeline
            objek 3D sejarah komputer ditampilkan secara otomatis.
          </p>
        </Card>
      </div>
    </EducationalOverlay>
  );
}
