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
  const computedTextSize =
    textSize ||
    (size >= 44
      ? "text-[22px] sm:text-[24px]"
      : size >= 36
      ? "text-[18px] sm:text-[20px]"
      : "text-[16px]");

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
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
          className={`${computedTextSize} font-extrabold tracking-[-0.035em] leading-none transition-colors duration-200 group-hover:text-[var(--accent)] antialiased`}
          style={{
            color: textColor || "var(--text-primary)",
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
}
