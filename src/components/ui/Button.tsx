import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent-500 text-ink-950 font-semibold hover:bg-accent-400 active:bg-accent-600 shadow-glow',
  secondary:
    'bg-ink-800 text-slate-100 font-medium hover:bg-ink-750 active:bg-ink-700 border border-ink-700',
  ghost:
    'bg-transparent text-slate-300 font-medium hover:bg-ink-800 active:bg-ink-750',
  outline:
    'bg-transparent text-accent-300 font-medium hover:bg-accent-500/10 active:bg-accent-500/20 border border-accent-500/40',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-7 py-3.5 text-base rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 transition-all duration-200 select-none disabled:opacity-40 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
