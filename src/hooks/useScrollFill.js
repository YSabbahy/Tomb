import { useEffect, useState } from "react";

/**
 * Tracks how far the reader has scrolled through the element `ref` points
 * to, as a 0–100 percentage. Progress starts once the element's top
 * reaches the vertical center of the viewport and finishes once its
 * bottom does — used to fill the Timeline's spine line as you read down
 * through history.
 */
export function useScrollFill(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const viewportMid = window.innerHeight * 0.5;
      const total = rect.height;
      const covered = viewportMid - rect.top;
      const pct = total > 0 ? Math.min(100, Math.max(0, (covered / total) * 100)) : 0;
      setProgress(pct);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return progress;
}
