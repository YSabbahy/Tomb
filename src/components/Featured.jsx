import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { artifacts } from "../data/artifacts";
import { useTilt } from "../hooks/useTilt";
import Icon from "./Icon";

const featured = artifacts.slice(0, 6);

function FeaturedBox({ slug, title, img }) {
  const tilt = useTilt(7);

  return (
    <Link
      to={`/artifacts/${slug}`}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`${tilt.className} group relative block h-[170px] w-full sm:h-[250px] overflow-hidden rounded-[10px] bg-cover bg-center text-center no-underline`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <span className="absolute inset-0 top-0 left-0 z-[1] box-border h-0 w-full border-2 border-gold bg-black/60 transition-all duration-500 group-hover:h-full" />

      {/* Always-visible title bar so the artifact name is readable on touch devices too */}
      <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black/85 to-transparent px-2 pb-2 pt-8 text-left sm:px-3 sm:pb-3 transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="text-sm leading-tight text-white sm:text-lg">{title}</h2>
      </div>

      {/* Fuller reveal on hover for pointer devices */}
      <div className="absolute left-1/2 top-1/2 z-[3] hidden w-[90%] -translate-x-1/2 -translate-y-1/2 group-hover:block">
        <h2 className="text-white">{title}</h2>
        <Icon name="heart" className="mx-2.5 my-4 cursor-pointer text-[30px] text-white" />
        <Icon name="eye" className="mx-2.5 my-4 cursor-pointer text-[30px] text-white" />
      </div>
    </Link>
  );
}

export default function Featured() {
  return (
    <div>
      <SectionTitle title="Featured Artifacts" tight />

      <div className="card-grid mx-auto w-[90%] max-w-[1200px]">
        {featured.map((b) => (
          <FeaturedBox key={b.slug} {...b} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/artifacts"
          className="btn"
        >
          View All Artifacts
        </Link>
      </div>
    </div>
  );
}
