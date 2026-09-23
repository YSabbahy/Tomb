import { useEffect, useRef } from "react";

/**
 * Thin gold progress line pinned under the navbar, filling as the reader
 * scrolls through a long-form page (discovery articles). Reads scroll
 * position directly via a ref instead of state, so it doesn't trigger a
 * re-render on every scroll tick.
 */
export default function ReadingProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    function update() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="reading-progress-track" aria-hidden="true">
      <div ref={barRef} className="reading-progress-bar" />
    </div>
  );
}
