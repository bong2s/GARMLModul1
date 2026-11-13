import type { TimelineObject } from '@/data/types';
import {
  X,
  Info,
  Calendar,
  Cpu,
} from 'lucide-react';

interface ARObjectInfoPanelProps {
  object: TimelineObject;
  onClose: () => void;
}

export function ARObjectInfoPanel({
  object,
  onClose,
}: ARObjectInfoPanelProps) {
  const info = object.educationalInfo;

  return (
    <div
      className="
        pointer-events-none
        absolute inset-x-0 bottom-0 z-40
        px-2.5 pb-2.5
        animate-fade-up
      "
    >
      <div
        className="
          ar-info-card
          pointer-events-auto
          mx-auto
          max-h-[55vh]
          max-w-lg
          overflow-y-auto
          overscroll-contain
        "
      >
        {/* ─────────────────────────────
            Header
        ────────────────────────────── */}
        <div className="ar-info-header">
          <div className="min-w-0 flex-1">
            <div className="ar-info-kicker">
              <Info size={11} />
              <span>DETAIL KOMPONEN</span>
            </div>

            <h3 className="ar-info-title">
              {object.name}
            </h3>

            <p className="ar-info-subtitle">
              {object.shortDescription}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup informasi"
            className="ar-info-close"
          >
            <X size={18} />
          </button>
        </div>

        {/* ─────────────────────────────
            Metadata
        ────────────────────────────── */}
        <div className="ar-info-meta">
          <span>
            <Cpu size={11} />
            {object.technology}
          </span>

          <span>
            <Calendar size={11} />
            {object.year}
          </span>

          <span className="ar-info-gen">
            {object.generation}
          </span>
        </div>

        {/* ─────────────────────────────
            Main educational summary
        ────────────────────────────── */}
        <p className="ar-info-summary">
          {info.summary}
        </p>

        {/* ─────────────────────────────
            Educational details
        ────────────────────────────── */}
        {info.details.length > 0 && (
          <ul className="ar-info-details">
            {info.details.map(
              (detail, index) => (
                <li key={index}>
                  <span
                    className="ar-info-bullet"
                    aria-hidden="true"
                  />

                  <span>
                    {detail}
                  </span>
                </li>
              ),
            )}
          </ul>
        )}

        {/* ─────────────────────────────
            Source / material context
        ────────────────────────────── */}
        {info.sourceNote && (
          <div className="ar-info-source">
            {info.sourceNote}
          </div>
        )}
      </div>
    </div>
  );
}