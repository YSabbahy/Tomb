import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { artifacts, getArtifactBySlug } from "../data/artifacts";
import { useTilt } from "../hooks/useTilt";

function RelatedCard({ r }) {
  const tilt = useTilt(5);
  return (
    <Link
      to={`/artifacts/${r.slug}`}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`${tilt.className} group block overflow-hidden rounded-[10px] border border-[#222] bg-panel no-underline hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]`}
    >
      <div
        className="h-[150px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${r.img})` }}
        role="img"
        aria-label={r.title}
      />
      <div className="relative z-[2] p-3">
        <h3 className="text-base text-wheat transition group-hover:text-gold">{r.title}</h3>
      </div>
    </Link>
  );
}

export default function ArtifactDetail() {
  const { slug } = useParams();
  const artifact = getArtifactBySlug(slug);

  if (!artifact) {
    return (
      <div>
        <PageHeader title="Artifact Not Found" crumb="Artifacts" />
        <div className="py-20 text-center">
          <Link to="/artifacts" className="text-gold no-underline hover:underline">
            Back to Artifacts Collection
          </Link>
        </div>
      </div>
    );
  }

  const related = artifacts.filter((a) => a.slug !== slug && a.category === artifact.category).slice(0, 3);

  return (
    <div>
      <div
        className="relative flex h-[45vh] min-h-[280px] w-full items-end bg-cover bg-center pt-[70px]"
        style={{ backgroundImage: `url(${artifact.img})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-[2] mx-auto w-[90%] max-w-[900px] pb-8 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold">
            {artifact.category}
          </span>
          <h1 className="mt-2 text-[28px] text-white sm:text-[38px]">{artifact.title}</h1>
        </div>
      </div>

      <div className="mx-auto w-[90%] max-w-[900px] py-10">
        <div className="mb-6 text-sm text-[#888]">
          <Link to="/" className="text-gold no-underline hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/artifacts" className="text-gold no-underline hover:underline">
            Artifacts
          </Link>{" "}
          / {artifact.title}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-[10px] border border-[#222] bg-panel p-5 lg:col-span-1">
            <h2 className="mb-3 text-lg text-gold">Details</h2>
            <p className="mb-2 text-sm text-[#aaa]">Period</p>
            <p className="mb-3 text-wheat">{artifact.period}</p>
            <p className="mb-2 text-sm text-[#aaa]">Discovery Location</p>
            <p className="mb-3 text-wheat">{artifact.location}</p>
            <p className="mb-2 text-sm text-[#aaa]">Category</p>
            <p className="text-wheat">{artifact.category}</p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-3 text-xl text-gold">About This Piece</h2>
            <p className="leading-relaxed text-[#e0e0e0]">{artifact.description}</p>

            <Link
              to="/tickets"
              className="btn mt-6"
            >
              See It In Person &mdash; Book a Visit
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-5 text-xl text-gold">Related Artifacts</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <RelatedCard key={r.slug} r={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
