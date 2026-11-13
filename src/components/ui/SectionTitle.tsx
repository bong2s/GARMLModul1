interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={`mb-6 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className={`mb-2 text-xs font-medium uppercase tracking-wider text-accent-400 ${center ? '' : ''}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className={`mt-2 text-sm text-slate-400 sm:text-base ${center ? 'mx-auto max-w-2xl' : 'max-w-3xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
