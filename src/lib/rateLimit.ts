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
