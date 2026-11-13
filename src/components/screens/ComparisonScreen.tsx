import { EducationalOverlay } from '@/components/ui/EducationalOverlay';
import { Card } from '@/components/ui/Card';
import { ComparisonPanel } from '@/components/comparison/ComparisonPanel';
import { AlertCircle } from 'lucide-react';

export function ComparisonScreen() {
  return (
    <EducationalOverlay title="Pentium vs PowerPC" subtitle="Studi kasus arsitektur prosesor">
      <Card className="mb-5 border-ink-700 bg-ink-850/60 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-warning-500" />
          <p className="text-sm leading-relaxed text-slate-300">
            Performa teknis, compatibility, ecosystem, dan market outcome merupakan dimensi yang
            berbeda. Perbandingan ini tidak menyederhanakan menjadi "Pentium buruk" atau "PowerPC
            selalu lebih baik".
          </p>
        </div>
      </Card>

      <ComparisonPanel />
    </EducationalOverlay>
  );
}
