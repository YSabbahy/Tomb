import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import Icon from "./Icon";

const boxes = [
  {
    icon: "compass",
    title: "Expedition Trips",
    text: "Join our organized tours to the heart of Luxor and Aswan with expert guides.",
    to: "/tickets",
  },
  {
    icon: "microscope",
    title: "Discovery Lab",
    text: "Explore the latest archaeological research and scientific findings inside our labs.",
    to: "/discoveries",
  },
  {
    icon: "hammer",
    title: "Restoration Arts",
    text: "See how we preserve 7,000 years of history using advanced restoration techniques.",
    to: "/team",
  },
];

export default function Welcome() {
  return (
    <div id="welcome" className="scroll-mt-[70px]">
      <SectionTitle title="Welcome to the Age of Pharaohs" tight />

      <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {boxes.map((box) => (
          <div
            key={box.title}
            className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[10px] border border-[#222] bg-panel p-4 text-center transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]"
          >
            <span className="absolute inset-0 z-[1] h-0 w-full bg-gold/10 transition-all duration-500 group-hover:h-full" />
            <div className="relative z-[2] flex flex-1 flex-col items-center justify-center">
              <Icon name={box.icon} className="my-2.5 text-4xl text-gold" />
              <h2 className="mt-2.5 text-[28px] transition-colors duration-500 group-hover:text-gold">
                {box.title}
              </h2>
              <p className="group-hover:text-white">{box.text}</p>
              <Link
                to={box.to}
                className="btn btn-sm my-2.5"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
