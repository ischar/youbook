import type { PropsWithChildren } from "react";

export interface GlassCardProps {
  title?: string;
  className?: string;
}

export default function GlassCard({
  title,
  className = "",
  children,
}: PropsWithChildren<GlassCardProps>): JSX.Element {
  return (
    <section
      className={`
        rounded-2xl border border-white/30
        bg-white/55 dark:bg-white/10
        backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        ${className}
      `}
    >
      {title ? (
        <header className="px-5 pt-4 pb-2 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </header>
      ) : null}
      <div className={title ? "px-5 pb-5" : ""}>{children}</div>
    </section>
  );
}
