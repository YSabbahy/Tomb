import { useEffect, useState } from "react";
import Icon from "./Icon";

/**
 * Circular gold "back to top" button, styled to match the social icons in
 * the Footer. Hidden until the reader has scrolled past the hero, then
 * fades/slides in — a small payoff for reaching the bottom of a long page
 * (artifact list, article, timeline).
 */
export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-[45px] w-[45px] items-center justify-center rounded-full border border-gold bg-panel text-gold shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold hover:text-black ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="arrow-up" className="text-lg" />
    </button>
  );
}
