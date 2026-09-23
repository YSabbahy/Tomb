import SectionTitle from "./SectionTitle";
import Icon from "./Icon";

const offers = [
  {
    icon: "eye",
    title: "Virtual Exploration",
    text: "Journey through ancient tombs with immersive 3D digital tours",
  },
  {
    icon: "scroll",
    title: "Royal Archives",
    text: "Explore verified historical records and lineages of the great Pharaohs",
  },
  {
    icon: "gem",
    title: "Ancient Artifacts",
    text: "Discover the secrets and craftsmanship of our exclusive golden collection",
  },
  {
    icon: "ticket",
    title: "Online Ticketing",
    text: "Skip the lines and book your museum entry tickets easily",
  },
  {
    icon: "bag-shopping",
    title: "Museum Shop",
    text: "Purchase high-quality replicas and authentic Egyptian-themed souvenirs online",
  },
  {
    icon: "headset",
    title: "Expert Guidance",
    text: "Connect with professional Egyptologists for private live Q&A sessions.",
  },
];

function OfferBox({ icon, title, text }) {
  return (
    <div className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-[10px] border border-[#252525] bg-panel-2 p-5 text-center transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]">
      <span className="absolute inset-0 z-[1] h-0 w-0 bg-gold/10 transition-all duration-500 group-hover:h-full group-hover:w-full" />
      <Icon name={icon} className="relative z-[2] mb-4 text-left text-4xl text-gold" />
      <div className="relative z-[2] text-left">
        <h2 className="transition-colors duration-500 group-hover:text-gold">{title}</h2>
        <p className="mt-1 transition-colors duration-500 group-hover:text-white">{text}</p>
      </div>
    </div>
  );
}

export default function Offer() {
  return (
    <div>
      <SectionTitle title="What We Offer" />

      <div className="mx-auto mt-8 grid w-[90%] max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((b) => (
          <OfferBox key={b.title} {...b} />
        ))}
      </div>
    </div>
  );
}
