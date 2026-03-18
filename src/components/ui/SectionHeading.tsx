import { ReactNode } from "react";

interface SectionHeadingProps {
  title:      string;
  highlight?: string;       // word(s) appended to title with gradient color
  subtitle?:  string;
  badge?:     string;       // small label above the title
  icon?:      ReactNode;
  align?:     "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  badge,
  icon,
  align     = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "left"  ? "items-start text-left"  :
    align === "right" ? "items-end   text-right"  :
                        "items-center text-center";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>

      {/* Badge / icon pill */}
      {(badge || icon) && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         text-xs font-mono font-medium tracking-widest uppercase
                         bg-gradient-to-r from-purple-500/10 to-blue-500/10
                         border border-purple-400/20 text-purple-400`}>
          {icon && <span className="text-purple-400">{icon}</span>}
          {badge}
        </div>
      )}

      {/* Title + optional gradient highlight */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight
                     text-white leading-[1.05]">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400
                             bg-clip-text text-transparent">
              {highlight}
            </span>
          </>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
