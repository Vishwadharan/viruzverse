export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex items-center gap-3">
        <span
          className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: "#7C3AED", borderTopColor: "transparent" }}
          aria-hidden="true"
        />
        <span className="text-sm font-mono text-text-secondary animate-pulse">
          Loading…
        </span>
      </div>
    </div>
  );
}
