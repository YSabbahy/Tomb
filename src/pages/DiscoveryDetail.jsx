import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ReadingProgress from "../components/ReadingProgress";
import { discoveries, getDiscoveryBySlug } from "../data/discoveries";
import { useTilt } from "../hooks/useTilt";
import Icon from "../components/Icon";

function MoreCard({ d }) {
  const tilt = useTilt(5);
  return (
    <Link
      to={`/discoveries/${d.slug}`}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`${tilt.className} group block overflow-hidden rounded-[10px] border border-[#222] bg-panel no-underline hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]`}
    >
      <div
        className="h-[100px] w-full bg-cover bg-center sm:h-[130px]"
        style={{ backgroundImage: `url(${d.img})` }}
        role="img"
        aria-label={d.title}
      />
      <div className="relative z-[2] p-2.5 sm:p-3">
        <h3 className="text-sm leading-tight text-wheat sm:text-base transition group-hover:text-gold">{d.title}</h3>
      </div>
    </Link>
  );
}

export default function DiscoveryDetail() {
  const { slug } = useParams();
  const item = getDiscoveryBySlug(slug);

  if (!item) {
    return (
      <div>
        <PageHeader title="Article Not Found" crumb="Discoveries" />
        <div className="py-20 text-center">
          <Link to="/discoveries" className="text-gold no-underline hover:underline">
            Back to Discoveries
          </Link>
        </div>
      </div>
    );
  }

  const more = discoveries.filter((d) => d.slug !== slug).slice(0, 3);

  return (
    <div>
      <ReadingProgress />
      <div
        className="relative flex h-[40vh] min-h-[260px] w-full items-end bg-cover bg-center pt-[70px]"
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-[2] mx-auto w-[90%] max-w-[800px] pb-8 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold">{item.tag}</span>
          <h1 className="mt-2 text-[26px] text-white sm:text-[34px]">{item.title}</h1>
        </div>
      </div>

      <div className="mx-auto w-[90%] max-w-[800px] py-10">
        <div className="mb-6 flex flex-wrap gap-4 text-sm text-[#888]">
          <Link to="/discoveries" className="text-gold no-underline hover:underline">
            &larr; All Discoveries
          </Link>
          <span>
            <Icon name="hourglass-start" className="text-gold" /> {item.time}
          </span>
          <span>
            <Icon name="eye" className="text-gold" /> {item.views} views
          </span>
        </div>

        <p className="text-lg leading-relaxed text-[#e0e0e0]">{item.body}</p>

        {more.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-5 text-xl text-gold">More Stories</h2>
            <div className="card-grid">
              {more.map((d) => (
                <MoreCard key={d.slug} d={d} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
