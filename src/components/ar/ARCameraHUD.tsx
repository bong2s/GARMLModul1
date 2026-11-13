import { Cpu, Menu, RotateCcw } from 'lucide-react';
import type { ARSessionState, ObjectInstanceId } from '@/data/types';
import type { InteractionMode } from '@/three/ARInteractionController';

export type CategoryId =
  | 'all'
  | 'generasi1'
  | 'generasi2'
  | 'generasi3'
  | 'generasi4'
  | 'mikroprosesor'
  | 'storage'
  | 'studi_kasus';

interface CategoryDef {
  id: CategoryId;
  label: string;
  count: number;
  ids: ObjectInstanceId[] | null;
  color: string;
}

interface ARCameraHUDProps {
  instruction: string;
  sessionState: ARSessionState;
  interactionMode: InteractionMode;
  hasSelection: boolean;
  objectCount: number;
  activeCategory: CategoryId;
  onOpenMenu: () => void;
  onSetMode: (mode: InteractionMode) => void;
  onReturnToTimeline: () => void;
  onCategoryChange: (
    cat: CategoryId,
    ids: ObjectInstanceId[] | null
  ) => void;
  onResetView: () => void;
}

export function ARCameraHUD({
  sessionState,
  hasSelection,
  objectCount,
  activeCategory,
  onOpenMenu,
  onSetMode,
  onCategoryChange,
  onResetView,
}: ARCameraHUDProps) {
  const isLoading = sessionState === 'loading';

  const isDetecting =
    sessionState === 'searching' ||
    sessionState === 'starting';

  const isReady =
    sessionState === 'placed' ||
    sessionState === 'demo';

  const isInspect =
    sessionState !== 'idle' &&
    hasSelection;

  const categories: CategoryDef[] = [
    {
      id: 'all',
      label: 'SEMUA',
      count: objectCount,
      ids: null,
      color: '#2f6fed',
    },
    {
      id: 'generasi1',
      label: 'GENERASI I',
      count: 1,
      ids: ['vacuum_tube'],
      color: '#ef6b4a',
    },
    {
      id: 'generasi2',
      label: 'GENERASI II',
      count: 0,
      ids: [],
      color: '#18a999',
    },
    {
      id: 'generasi3',
      label: 'GENERASI III',
      count: 0,
      ids: [],
      color: '#f3a712',
    },
    {
      id: 'generasi4',
      label: 'GENERASI IV',
      count: 7,
      ids: [
        'intel_4004',
        'semiconductors',
        'floppy_disk',
        'intel_8086',
        'ibm_pc_xt_5150',
        'macintosh_classic',
        'power_mac_g3',
      ],
      color: '#8452d6',
    },
    {
      id: 'mikroprosesor',
      label: 'MIKROPROSESOR',
      count: 2,
      ids: ['intel_4004', 'intel_8086'],
      color: '#2563eb',
    },
    {
      id: 'storage',
      label: 'STORAGE',
      count: 1,
      ids: ['floppy_disk'],
      color: '#0e7490',
    },
    {
      id: 'studi_kasus',
      label: 'STUDI KASUS',
      count: 2,
      ids: ['macintosh_classic', 'power_mac_g3'],
      color: '#d63960',
    },
  ];

  const handleCategory = (cat: CategoryDef) => {
    onCategoryChange(cat.id, cat.ids);

    /*
     * Saat memilih SEMUA dan tidak sedang menginspeksi objek,
     * kembalikan scene ke mode group.
     *
     * Jangan mengubah mode saat objek sedang dipilih karena
     * selection harus tetap dapat dimanipulasi.
     */
    if (cat.id === 'all' && !isInspect) {
      onSetMode('group');
    }
  };

  return (
    <>
      {/* =========================================================
          TOP BAR
          ========================================================= */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 p-2.5">
        <div className="pointer-events-auto mx-auto flex max-w-[420px] items-center justify-between">
          <div className="ar-plain-brand">
            <span className="ar-brand-icon">
              <Cpu size={13} />
            </span>

            <span>
              <strong>M1 GARML</strong>
              <small>AR LEARNING</small>
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Buka menu"
            className="ar-plain-menu"
          >
            <Menu size={17} />
          </button>
        </div>
      </div>

      {/* =========================================================
          CATEGORY BAR
          ========================================================= */}
      {isReady && (
        <div className="pointer-events-none absolute inset-x-0 top-[3.3rem] z-30 px-2">
          <div className="pointer-events-auto mx-auto flex max-w-[440px] flex-wrap items-center justify-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategory(cat)}
                disabled={cat.count === 0}
                className={`ar-cat-btn ${
                  activeCategory === cat.id ? 'is-active' : ''
                }`}
                style={{
                  background:
                    activeCategory === cat.id
                      ? cat.color
                      : 'rgba(15, 23, 42, 0.78)',
                  borderColor:
                    activeCategory === cat.id
                      ? cat.color
                      : 'rgba(255,255,255,0.12)',
                  opacity: cat.count === 0 ? 0.4 : 1,
                }}
              >
                {cat.label}

                {cat.count > 0 && (
                  <span className="ar-cat-badge">
                    ({cat.count})
                  </span>
                )}
              </button>
            ))}

            <button
              type="button"
              onClick={onResetView}
              className="ar-cat-btn ar-cat-reset"
              aria-label="Reset view"
            >
              <RotateCcw size={11} />
              RESET VIEW
            </button>
          </div>
        </div>
      )}

      {/* =========================================================
          BOTTOM STATUS / INSTRUCTION
          ========================================================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-30 px-3">
        <div className="mx-auto max-w-[390px] text-center">
          {(isDetecting || isLoading) && (
            <div className="ar-plain-status">
              <span className="ar-status-dot" />

              {isLoading
                ? 'Memuat timeline'
                : 'Mengaktifkan kamera'}
            </div>
          )}

          {isReady && (
            <div className="ar-plain-instruction">
              <span>
                {isInspect
                  ? 'Geser • Putar • Cubit untuk inspeksi objek'
                  : 'Ketuk objek untuk mempelajari sejarahnya'}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}