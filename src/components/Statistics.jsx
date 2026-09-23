import statsImg from "../assets/images/mamdouh-abdallah-GkePRhwFIHY-unsplash.webp";
import { useCountUp } from "../hooks/useCountUp";
import Icon from "./Icon";

const stats = [
  { icon: "users-line", value: "500K", label: "Global Visitors" },
  { icon: "vault", value: "15,000", label: "Saved Artifacts" },
  { icon: "map-marked-alt", value: "120", label: "Expeditions" },
  { icon: "award", value: "30", label: "Honors & Awards" },
];

function StatItem({ icon, value, label }) {
  const [ref, display] = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <Icon name={icon} className="p-2.5 text-4xl text-gold" />
      <h2 className="p-1 font-mono text-2xl tabular-nums text-white sm:text-3xl">{display}</h2>
      <h2 className="p-1 text-sm text-white sm:text-base">{label}</h2>
    </div>
  );
}

export default function Statistics() {
  return (
    <div
      className="relative mt-[100px] w-full bg-cover bg-center bg-no-repeat py-16 sm:bg-fixed"
      style={{ backgroundImage: `url(${statsImg})` }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/75" />

      <div className="relative z-[2] mx-auto grid w-[90%] max-w-[1000px] grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}
