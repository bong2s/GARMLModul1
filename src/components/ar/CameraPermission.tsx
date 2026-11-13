import { Button } from '@/components/ui/Button';
import { AlertTriangle, MonitorPlay, CameraOff } from 'lucide-react';
import type { ARSessionState } from '@/data/types';

interface CameraPermissionProps {
  state: ARSessionState;
  onDemoMode: () => void;
  onRetry: () => void;
}

export function CameraPermission({ state, onDemoMode, onRetry }: CameraPermissionProps) {
  const isUnsupported = state === 'unsupported';

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-ink-950 p-6">
      <div className="max-w-sm text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-ink-700 bg-ink-850">
          <AlertTriangle size={40} className="text-warning-500" />
        </div>

        <h2 className="font-display text-xl font-bold text-white">AR Tidak Tersedia</h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Perangkat ini tidak mendukung AR penuh atau izin kamera belum diberikan. Anda dapat
          menggunakan mode demo untuk tetap mempelajari materi.
        </p>

        <div className="mt-6 flex flex-col gap-2.5">
          {!isUnsupported && (
            <Button variant="primary" size="md" onClick={onRetry}>
              <CameraOff size={16} />
              COBA LAGI
            </Button>
          )}
          <Button variant="outline" size="md" onClick={onDemoMode}>
            <MonitorPlay size={16} />
            MODE DEMO
          </Button>
        </div>
      </div>
    </div>
  );
}
