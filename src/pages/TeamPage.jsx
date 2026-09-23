import PageHeader from "../components/PageHeader";
import { team } from "../data/team";
import { useTilt } from "../hooks/useTilt";
import Icon from "../components/Icon";

const socialLinks = [
  { icon: "facebook", href: "https://www.facebook.com", label: "Facebook" },
  { icon: "x-twitter", href: "https://www.x.com", label: "X" },
  { icon: "linkedin", href: "https://www.linkedin.com", label: "LinkedIn" },
];

function TeamCard({ member }) {
  const tilt = useTilt(5);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`${tilt.className} overflow-hidden rounded-[10px] border border-[#222] bg-panel p-3 text-center hover:border-gold sm:p-5 hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]`}
    >
      <img
        src={member.img}
        alt={member.name}
        width={200}
        height={200}
        loading="lazy"
        decoding="async"
        className="relative z-[2] mx-auto mb-4 aspect-square w-full max-w-[180px] rounded-[10px] border-2 border-gold object-cover"
      />
      <div className="relative z-[2]">
        <h2 className="text-[15px] leading-tight text-gold sm:text-[20px]">{member.name}</h2>
        <p className="mt-1 text-xs italic tracking-wide text-wheat sm:mt-0 sm:text-sm sm:tracking-widest">{member.role}</p>
        <p className="mt-2 text-xs leading-snug normal-case text-[#aaa] sm:mt-3 sm:text-sm sm:leading-normal">{member.bio}</p>

        <div className="mt-3 flex items-center justify-center gap-2 sm:mt-4 sm:gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on ${s.label}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gold text-xs text-gold sm:h-9 sm:w-9 sm:text-sm no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black"
            >
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        title="Our Team"
        subtitle="Archaeologists, conservators, and technologists working together to bring ancient Egypt to the world."
        crumb="Team"
      />

      <div className="card-grid mx-auto mt-10 w-[90%] max-w-[1200px] pb-20">
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
