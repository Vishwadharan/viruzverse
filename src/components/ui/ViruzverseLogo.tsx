import Image from "next/image";

interface ViruzverseLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textColor?: string;
  textSize?: string;
  text?: string;
}

export default function ViruzverseLogo({
  size = 36,
  showText = true,
  className = "",
  textColor,
  textSize,
  text = "Viruzverse",
}: ViruzverseLogoProps) {
  const computedFontSize = Math.round(size * 0.72);

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-200 ease-out group-hover:scale-105"
        style={{
          width: size,
          height: size,
        }}
      >
        <Image
          src="/logo.png"
          alt="Viruzverse Logo"
          width={size * 2}
          height={size * 2}
          sizes={`${size * 2}px`}
          unoptimized
          className="object-contain w-full h-full"
          priority
        />
      </div>
      {showText && (
        <span
          className={`${textSize || ""} font-mokoto tracking-[0.04em] leading-none translate-y-[1px] transition-colors duration-200 group-hover:text-[var(--accent)] antialiased`}
          style={{
            color: textColor || "var(--text-primary)",
            ...(textSize ? {} : { fontSize: `${computedFontSize}px` }),
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
}
