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
        className="h-[200px] w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${item.img})` }}
      />
      <div className="relative z-[2] p-4">
        <div className="mb-2 flex flex-wrap gap-3 text-xs text-gold">
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
        <h2 className="text-xl normal-case text-wheat transition group-hover:text-gold">
          {item.title}
        </h2>
        <p className="mt-2 text-sm normal-case text-[#aaa]">{item.excerpt}</p>
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

      <div className="mx-auto mt-10 grid w-[90%] max-w-[1200px] grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {discoveries.map((item) => (
          <DiscoveryCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
