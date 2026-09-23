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
        className="relative w-full bg-cover bg-center bg-no-repeat py-14 sm:bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 z-[1] h-full w-full bg-black/70" />

        <div className="relative z-[2] mx-auto flex w-[90%] max-w-[1000px] flex-wrap justify-center gap-6">
          {voices.map((v) => (
            <div
              key={v.name}
              className="flex w-full max-w-[440px] flex-1 gap-4 rounded-[10px] border border-[#333] bg-panel/60 p-4 text-left"
            >
              <img
                src={v.avatar}
                alt={v.name}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="h-20 w-20 shrink-0 rounded-full border-2 border-gold"
              />
              <div className="overflow-hidden text-left">
                <h2 className="text-white">{v.name}</h2>
                <p className="text-sm font-bold uppercase tracking-wider text-gold">
                  {v.role}
                </p>
                <p className="text-[#e0e0e0]">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
