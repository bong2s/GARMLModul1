import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
  hoverable?: boolean;
}

export function Card({
  children,
  className = '',
  onClick,
  active = false,
  hoverable = false,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border bg-ink-850/80 p-5 transition-all duration-300 ${
        active
          ? 'border-accent-500/60 shadow-glow'
          : 'border-ink-700'
      } ${
        hoverable && !active
          ? 'hover:border-ink-600 hover:shadow-card-hover cursor-pointer'
          : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
