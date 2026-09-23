import { useEffect, useRef } from "react";

/**
 * A soft gold glow that trails the pointer like torchlight — reinforcing
 * the "exploring a dark tomb" feel across the whole site. Purely
 * decorative: fixed, pointer-events none, and skipped entirely on touch
 * devices and when the user prefers reduced motion.
 */
export default function TorchGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };
    let raf = null;

    function handleMove(e) {
      target.x = e.clientX;
      target.y = e.clientY;
    }

    function loop() {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      const node = glowRef.current;
      if (node) {
        node.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", handleMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={glowRef} className="torch-glow" aria-hidden="true" />;
}
