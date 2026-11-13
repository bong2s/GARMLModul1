import { EducationalOverlay } from '@/components/ui/EducationalOverlay';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PerformanceCardList } from '@/components/performance/PerformanceCard';
import { AmdahlCalculator } from '@/components/performance/AmdahlCalculator';
import { ProcessorTimeline } from '@/components/performance/ProcessorTimeline';
import { Clock, Activity, Timer, Gauge } from 'lucide-react';

export function PerformanceScreen() {
  return (
    <EducationalOverlay title="Perancangan Kinerja Komputer" subtitle="Faktor, hukum Amdahl, dan benchmarking">
      {/* What is performance */}
      <SectionTitle title="Apa Itu Kinerja?" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { icon: Clock, label: 'Execution Time', desc: 'Total waktu untuk menyelesaikan sebuah tugas komputasi.' },
          { icon: Activity, label: 'Throughput', desc: 'Jumlah tugas yang diselesaikan per satuan waktu.' },
          { icon: Timer, label: 'Latency / Response Time', desc: 'Waktu tunggu dari permintaan dikirim hingga respons diterima.' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="p-4">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 border border-accent-500/20">
                <Icon size={18} className="text-accent-400" />
              </div>
              <h3 className="text-sm font-semibold text-white">{item.label}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{item.desc}</p>
            </Card>
          );
        })}
      </div>

      {/* Factors */}
      <div className="mt-8">
        <SectionTitle title="Faktor yang Mempengaruhi Kinerja" />
        <PerformanceCardList />
      </div>

      {/* Amdahl */}
      <div className="mt-8">
        <SectionTitle
          title="Amdahl's Law"
          subtitle="Speedup keseluruhan sistem dibatasi oleh bagian program yang tidak mengalami peningkatan."
        />
        <AmdahlCalculator />
      </div>

      {/* Benchmarking */}
      <div className="mt-8">
        <SectionTitle title="Benchmarking" />
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 border border-accent-500/20">
              <Gauge size={18} className="text-accent-400" />
            </div>
            <div>
              <p className="text-sm leading-relaxed text-slate-300">
                Benchmark digunakan untuk mengukur kinerja komputer menggunakan program atau
                workload tertentu.
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                  <span><strong className="text-slate-200">Benchmark programs</strong> — program khusus untuk mengukur aspek kinerja tertentu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                  <span><strong className="text-slate-200">SPEC</strong> — suite benchmark standar industri oleh SPEC Corporation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                  <span><strong className="text-slate-200">Real workloads</strong> — aplikasi nyata yang mencerminkan penggunaan sebenarnya.</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Processor timeline */}
      <div className="mt-8">
        <SectionTitle title="Timeline Prosesor" subtitle="Perkembangan prosesor Intel 1978–2000." />
        <ProcessorTimeline />
      </div>
    </EducationalOverlay>
  );
}
