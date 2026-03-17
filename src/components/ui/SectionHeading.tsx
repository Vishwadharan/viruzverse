import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  icon,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-200/50">
        {icon && <div className="text-purple-600">{icon}</div>}
        <span className="text-sm font-medium text-purple-700">
          {subtitle || "Our Story"}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
    </div>
  );
}
