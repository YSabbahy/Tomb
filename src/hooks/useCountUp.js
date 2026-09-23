import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value from 0 up to `rawValue` the first time the
 * returned ref scrolls into view. Understands display strings like "500K",
 * "15,000", or "30" — it counts the numeric part and re-attaches the
 * suffix/comma formatting on every frame.
 *
 * Falls back to the final value immediately when IntersectionObserver is
 * unavailable or the user prefers reduced motion.
 */
function parseTarget(raw) {
  const match = String(raw).match(/^([\d,]+)(.*)$/);
  if (!match) return { number: 0, suffix: String(raw), hasComma: false };
  const [, digits, suffix] = match;
  return {
    number: Number(digits.replace(/,/g, "")),
    suffix,
    hasComma: digits.includes(","),
  };
}

export function useCountUp(rawValue, { duration = 1600 } = {}) {
  const ref = useRef(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(() => `0${parseTarget(rawValue).suffix}`);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const { number, suffix, hasComma } = parseTarget(rawValue);

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typeof IntersectionObserver === "undefined" || prefersReduced) {
      setDisplay(rawValue);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3; // ease-out-cubic
          const current = Math.round(number * eased);
          const formatted = hasComma ? current.toLocaleString("en-US") : String(current);
          setDisplay(`${formatted}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rawValue, duration]);

  return [ref, display];
}
