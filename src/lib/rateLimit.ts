const hits = new Map<string, number[]>();

/**
 * Simple in-memory sliding-window rate limiter per IP.
 * Limits each IP to `maxRequests` within `windowMs`.
 */
export function checkRateLimit(
  ip: string,
  maxRequests = 5,
  windowMs = 10 * 60 * 1000
): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < windowMs);

  if (timestamps.length >= maxRequests) {
    hits.set(ip, timestamps);
    return false;
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  return true;
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/**
 * Verifies the request Origin/Referer matches our own site, Vercel previews, or localhost.
 */
export function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin") || req.headers.get("referer");
  if (!origin) return false;

  try {
    const { hostname } = new URL(origin);
    return (
      hostname === "viruzverse.in" ||
      hostname === "www.viruzverse.in" ||
      hostname.endsWith(".vercel.app") ||
      hostname === "localhost" ||
      hostname === "127.0.0.1"
    );
  } catch {
    return false;
  }
}

/**
 * Detects automated instant form submissions (< 1.2s after page render).
 */
export function isTooFastSubmission(loadedAt: unknown): boolean {
  const ts = Number(loadedAt);
  if (!Number.isFinite(ts) || ts <= 0) return false;
  return Date.now() - ts < 1200;
}
