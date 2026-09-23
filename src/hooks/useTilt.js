import { useRef } from "react";

/**
 * Pointer-driven 3D tilt with a soft gold sheen that tracks the cursor,
 * evoking light glancing across carved stone. Spread the returned props
 * onto any element (works with react-router's <Link>, which forwards its
 * ref to the underlying <a>).
 *
 * No-ops on touch/coarse pointers and when the user prefers reduced motion —
 * in both cases the element just keeps its normal hover/focus styles.
 */
export function useTilt(max = 8) {
  const ref = useRef(null);

  function skip() {
    if (typeof window === "undefined") return true;
    return (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    );
  }

  function onMouseMove(e) {
    const node = ref.current;
    if (!node || skip()) return;

    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;

    node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    node.style.setProperty("--glow-x", `${px * 100}%`);
    node.style.setProperty("--glow-y", `${py * 100}%`);
  }

  function onMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "";
  }

  return { ref, onMouseMove, onMouseLeave, className: "tilt-card" };
}
