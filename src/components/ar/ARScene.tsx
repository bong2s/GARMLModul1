import { useEffect, useRef } from 'react';
import { useAppState } from '@/state/AppContext';
import { mountAR } from '@/ar8/mount';
import { ARMenu } from './ARMenu';

/**
 * Layar AR Modul 1. Seluruh tampilan, kamera, model, label, hotspot, dan Info Message
 * dijalankan oleh sistem AR Modul 8 (src/ar8); React hanya memasang dan menyediakan menu navigasi.
 */
export function ARScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { isMenuOpen, setMenuOpen } = useAppState();

  useEffect(() => {
    if (!rootRef.current) return;
    const dispose = mountAR(rootRef.current, { onMenu: () => setMenuOpen(true) });
    return dispose;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-950">
      <div ref={rootRef} className="absolute inset-0" />
      {isMenuOpen && <ARMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}
