import Image from "next/image";

interface ViruzverseLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textColor?: string;
  textSize?: string;
  fontFamily?: string;
  text?: string;
}

export default function ViruzverseLogo({
  size = 48,
  showText = true,
  className = "",
  textColor = "#ffffff",
  textSize,
  fontFamily = "'Mokoto', sans-serif",
  text = "Viruzverse",
}: ViruzverseLogoProps) {
  // Responsive font size matched to logo size if not explicitly provided
  const computedTextSize =
    textSize ||
    (size >= 48
      ? "text-[26px] sm:text-[31px]"
      : size >= 42
      ? "text-[24px] sm:text-[28px]"
      : "text-[21px] sm:text-[24px]");

  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 ease-out group-hover:scale-105"
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
          className={`font-mokoto ${computedTextSize} font-bold tracking-[0.05em] leading-none transition-colors duration-200 group-hover:text-[#7c3aed] antialiased`}
          style={{
            color: textColor,
            fontFamily: "'Mokoto', sans-serif",
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
}
