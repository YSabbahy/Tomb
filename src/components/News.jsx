import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { discoveries } from "../data/discoveries";
import Icon from "./Icon";

const preview = discoveries.slice(0, 3);

export default function News() {
  return (
    <div>
      <SectionTitle title="Recent News" tight />

      <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((item) => (
          <div
            key={item.slug}
            className="group relative overflow-hidden rounded-[10px] border border-[#222] bg-panel p-2.5 text-center transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]"
          >
            <span className="absolute inset-0 z-[1] h-0 w-full bg-gold/20 transition-all duration-500 group-hover:h-full" />

            <div className="relative z-[2]">
              <img
                src={item.img}
                alt={item.title}
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                className="mx-auto my-2 aspect-square w-full max-w-[200px] rounded object-cover p-2.5"
              />
              <div className="mb-2 flex flex-wrap justify-center gap-2.5 text-sm">
                <span>
                  <Icon name="pen-nib" className="text-gold" /> {item.tag}
                </span>
                <span>
                  <Icon name="hourglass-start" className="text-gold" />{" "}
                  {item.time}
                </span>
                <span>
                  <Icon name="eye" className="text-gold" /> {item.views}
                </span>
              </div>
              <h2 className="p-2.5 text-gold transition-colors duration-500 group-hover:text-white">
                {item.title}
              </h2>
              <p className="p-2.5 transition-colors duration-500 group-hover:text-white/60">
                {item.excerpt}
              </p>
              <Link
                to={`/discoveries/${item.slug}`}
                className="btn btn-sm mt-4"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/discoveries" className="btn">
          View All Discoveries
        </Link>
      </div>
    </div>
  );
}
