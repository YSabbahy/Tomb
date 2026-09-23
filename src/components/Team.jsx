import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { team } from "../data/team";
import Icon from "./Icon";

const preview = team.slice(0, 3);

const socialLinks = [
  { icon: "facebook", href: "https://www.facebook.com", label: "Facebook" },
  { icon: "x-twitter", href: "https://www.x.com", label: "X" },
  { icon: "linkedin", href: "https://www.linkedin.com", label: "LinkedIn" },
];

export default function Team() {
  return (
    <div>
      <SectionTitle title="Our Team" tight />

      <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((member) => (
          <div
            key={member.name}
            className="group overflow-hidden rounded-[10px] border border-[#222] bg-panel p-5 text-center transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]"
          >
            <img
              src={member.img}
              alt={member.name}
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
              className="mx-auto mb-4 aspect-square w-full max-w-[200px] rounded-[10px] border-2 border-gold object-cover"
            />
            <h2 className="mt-4 text-[22px] text-gold">{member.name}</h2>
            <p className="text-base italic tracking-widest text-wheat">
              {member.role}
            </p>

            <div className="mt-4 flex items-center justify-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} on ${s.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-sm text-gold no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black"
                >
                  <Icon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/team" className="btn">
          Meet The Full Team
        </Link>
      </div>
    </div>
  );
}
