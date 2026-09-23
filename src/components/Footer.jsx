import { Link } from "react-router-dom";
import fotImg from "../assets/images/fot.webp";
import Icon from "./Icon";

const socials = [
  { icon: "facebook", href: "https://www.facebook.com", label: "Facebook" },
  { icon: "instagram", href: "https://www.instagram.com", label: "Instagram" },
  { icon: "youtube", href: "https://www.youtube.com", label: "YouTube" },
  { icon: "tiktok", href: "https://www.tiktok.com", label: "TikTok" },
];

const quickLinks = [
  { label: "Artifacts", to: "/artifacts" },
  { label: "Discoveries", to: "/discoveries" },
  { label: "Timeline", to: "/timeline" },
  { label: "Tickets", to: "/tickets" },
];

const about = [
  { label: "Our Team", to: "/team" },
  { label: "Contact Us", to: "/contact" },
  { label: "FAQs", to: "/tickets#faq" },
];

export default function Footer() {
  return (
    <div className="mt-[90px] w-full border-t-2 border-gold bg-[#110f0faa] pb-8 pt-16">
      <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <img
            src={fotImg}
            alt="Grand Egyptian Museum"
            width={250}
            height={200}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-[280px] rounded-2xl border border-gold sm:mx-0"
          />
        </div>

        <div>
          <h2 className="mb-4 text-lg text-gold">Explore</h2>
          <ul className="list-none space-y-2 p-0">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[#e0e0e0] no-underline transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg text-gold">About</h2>
          <ul className="list-none space-y-2 p-0">
            {about.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[#e0e0e0] no-underline transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg text-gold">Visit Us</h2>
          <p className="text-sm text-[#e0e0e0]">Giza Plateau, Cairo, Egypt</p>
          <p className="text-sm text-[#e0e0e0]">Open Daily, 9:00 AM &ndash; 6:00 PM</p>
          <p className="text-sm text-[#e0e0e0]">
            <a href="mailto:info@losttombexplorer.com" className="text-gold no-underline hover:underline">
              info@losttombexplorer.com
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="mx-2 my-4 inline-flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border border-gold text-gold no-underline transition duration-500 hover:-translate-y-0.5 hover:bg-gold hover:text-black"
          >
            <Icon name={s.icon} className="text-xl" />
          </a>
        ))}
      </div>

      <div className="mt-6 text-center text-sm uppercase tracking-widest text-[#888]">
        <p className="font-bold text-gold">
          © {new Date().getFullYear()}. All Rights Reserved by the Grand Egyptian Museum
        </p>
      </div>
    </div>
  );
}
