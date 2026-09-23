import Reveal from "./Reveal";

export default function SectionTitle({ title, kicker, tight }) {
  return (
    <Reveal
      className={`mx-auto w-[90%] max-w-[560px] p-2.5 text-center ${
        tight ? "mt-20 mb-5" : "mt-20"
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold/70">
        {kicker || "Grand Egyptian Museum"}
      </span>
      <h2 className="mt-2 text-[32px] font-semibold normal-case text-wheat sm:text-[38px]">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-px w-[120px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </Reveal>
  );
}
