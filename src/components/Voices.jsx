import SectionTitle from "./SectionTitle";
import bgImg from "../assets/images/dmitrii-zhodzishskii-cOihXsrJFRc-unsplash.webp";
import avatar1 from "../assets/images/ssssssss.webp";
import avatar2 from "../assets/images/ffffff.webp";

const voices = [
  {
    name: "Mark Stevenson",
    role: "Digital Traveler",
    avatar: avatar1,
    text: "I've visited many online museums, but this one is by far the most immersive. The navigation is smooth, and the historical descriptions are verified and very detailed. Highly recommended!",
  },
  {
    name: "Emma Richardson",
    role: "Archaeology Student",
    avatar: avatar2,
    text: "The 3D virtual tour is absolutely breathtaking. I could see the fine textures on the ancient statues as if I were standing right there in the temple. It's an incredible resource for my studies!",
  },
];

export default function Voices() {
  return (
    <div>
      <SectionTitle title="Voices from the Past & Present" tight />

      <div
        className="parallax-bg relative w-full bg-cover bg-center bg-no-repeat py-14"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 z-[1] h-full w-full bg-black/70" />

        <div className="relative z-[2] mx-auto grid w-[90%] max-w-[1000px] grid-cols-2 gap-3 sm:gap-6">
          {voices.map((v) => (
            <div
              key={v.name}
              className="flex min-w-0 flex-col items-center gap-3 rounded-[10px] border border-[#333] bg-panel/60 p-3 text-center sm:gap-4 sm:p-5 lg:flex-row lg:items-start lg:p-4 lg:text-left"
            >
              <img
                src={v.avatar}
                alt={v.name}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="h-14 w-14 shrink-0 rounded-full border-2 border-gold sm:h-20 sm:w-20"
              />
              <div className="min-w-0 break-words">
                <h2 className="text-[15px] leading-tight text-white sm:text-base">{v.name}</h2>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-gold sm:text-sm sm:tracking-wider">
                  {v.role}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-[#e0e0e0] sm:text-base sm:leading-normal">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
