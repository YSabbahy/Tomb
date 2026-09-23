import { Link } from "react-router-dom";

// Served from /public (not imported) so the filename is stable across builds
// and index.html can preload the exact same URL the browser will request.
const heroImg = `${import.meta.env.BASE_URL}hero-bg.webp`;

// A handful of fixed positions/sizes/delays for the ambient dust so the
// animation is deterministic (no layout shift, no per-render randomness).
const dust = [
  { left: "8%", size: 3, delay: 0, duration: 14 },
  { left: "18%", size: 2, delay: 3, duration: 18 },
  { left: "32%", size: 4, delay: 6, duration: 16 },
  { left: "47%", size: 2, delay: 1.5, duration: 20 },
  { left: "61%", size: 3, delay: 8, duration: 15 },
  { left: "74%", size: 2, delay: 4.5, duration: 19 },
  { left: "85%", size: 3, delay: 10, duration: 17 },
  { left: "93%", size: 2, delay: 2, duration: 21 },
];

export default function Hero() {
  return (
    <div
      className="parallax-bg full-screen relative flex w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 z-[1] h-full w-full bg-black/70" />

      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
        {dust.map((d, i) => (
          <span
            key={i}
            className="dust"
            style={{
              left: d.left,
              width: d.size,
              height: d.size,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-[100] w-[90%] max-w-[600px] text-center">
        <h2
          className="hero-in text-[34px] text-gold sm:text-[44px]"
          style={{ animationDelay: "0.1s" }}
        >
          Lost Tomb Explorer
        </h2>
        <p
          className="hero-in my-4 text-[#e0e0e0]"
          style={{ animationDelay: "0.35s" }}
        >
          Discover the Secrets of the Pharaohs
        </p>
        <div
          className="hero-in flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.6s" }}
        >
          <Link to="/artifacts" className="btn btn-solid">
            Enter the Tomb
          </Link>
          <a href="#welcome" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
