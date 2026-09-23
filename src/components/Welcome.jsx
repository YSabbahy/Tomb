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

      <div className="card-grid mx-auto w-[90%] max-w-[1200px]">
        {boxes.map((box) => (
          <div
            key={box.title}
            className="group relative flex min-h-0 flex-col overflow-hidden rounded-[10px] border border-[#222] bg-panel p-3 sm:min-h-[280px] sm:p-4 text-center transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]"
          >
            <span className="absolute inset-0 z-[1] h-0 w-full bg-gold/10 transition-all duration-500 group-hover:h-full" />
            <div className="relative z-[2] flex flex-1 flex-col items-center justify-center">
              <Icon name={box.icon} className="my-2 text-3xl text-gold sm:my-2.5 sm:text-4xl" />
              <h2 className="mt-2 text-lg leading-tight transition-colors duration-500 group-hover:text-gold sm:mt-2.5 sm:text-[28px]">
                {box.title}
              </h2>
              <p className="mt-1 text-[13px] leading-snug group-hover:text-white sm:mt-0 sm:text-base sm:leading-normal">{box.text}</p>
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
