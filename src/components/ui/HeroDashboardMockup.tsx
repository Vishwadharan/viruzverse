<div
  key={i}
  className="flex-1 rounded-t-sm"
  style={{
    height: `${h}%`,
    background: i === 5
      ? "linear-gradient(to top, #7C3AED, #06B6D4)"
      : "linear-gradient(to top, rgba(124,58,237,0.5), rgba(168,85,247,0.8))",
    transformOrigin: "bottom",
    transform: "scaleY(0)",
    animation: `barGrow 0.4s ease-out ${1.0 + i * 0.07}s forwards`,
  }}
/>
