import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { discoveries } from "../data/discoveries";
import { useTilt } from "../hooks/useTilt";
import Icon from "../components/Icon";

function DiscoveryCard({ item }) {
  const tilt = useTilt(5);
  return (
    <Link
      to={`/discoveries/${item.slug}`}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`${tilt.className} group block overflow-hidden rounded-[10px] border border-[#222] bg-panel text-left no-underline hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]`}
    >
      <div
        className="h-[120px] w-full bg-cover sm:h-[200px] bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${item.img})` }}
      />
      <div className="relative z-[2] p-2.5 sm:p-4">
        <div className="mb-2 flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-gold sm:gap-3 sm:text-xs">
          <span>
            <Icon name="pen-nib" /> {item.tag}
          </span>
          <span>
            <Icon name="hourglass-start" /> {item.time}
          </span>
          <span>
            <Icon name="eye" /> {item.views}
          </span>
        </div>
        <h2 className="text-[15px] leading-tight normal-case text-wheat transition group-hover:text-gold sm:text-xl">
          {item.title}
        </h2>
        <p className="mt-1.5 text-xs leading-snug normal-case text-[#aaa] sm:mt-2 sm:text-sm sm:leading-normal">{item.excerpt}</p>
      </div>
    </Link>
  );
}

export default function Discoveries() {
  return (
    <div>
      <PageHeader
        title="Discoveries & News"
        subtitle="Field updates, restoration milestones, and stories from our excavation teams."
        crumb="Discoveries"
      />

      <div className="card-grid mx-auto mt-10 w-[90%] max-w-[1200px] pb-20">
        {discoveries.map((item) => (
          <DiscoveryCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
