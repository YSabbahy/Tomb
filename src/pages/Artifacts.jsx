import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { artifacts } from "../data/artifacts";
import { useTilt } from "../hooks/useTilt";

const categories = ["All", ...new Set(artifacts.map((a) => a.category))];

function ArtifactCard({ a }) {
  const tilt = useTilt(5);
  return (
    <Link
      to={`/artifacts/${a.slug}`}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`${tilt.className} group block overflow-hidden rounded-[10px] border border-[#222] bg-panel text-left no-underline hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]`}
    >
      <div
        className="h-[220px] w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${a.img})` }}
      />
      <div className="relative z-[2] p-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gold">
          {a.category}
        </span>
        <h2 className="mt-1 text-xl normal-case text-wheat transition group-hover:text-gold">
          {a.title}
        </h2>
        <p className="mt-2 text-sm normal-case text-[#aaa]">{a.excerpt}</p>
      </div>
    </Link>
  );
}

export default function Artifacts() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return artifacts.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const matchesQuery =
        !query.trim() || a.title.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <PageHeader
        title="Artifacts Collection"
        subtitle="Browse verified pieces recovered from our excavation sites across the Nile Valley."
        crumb="Artifacts"
      />

      <div className="mx-auto mt-10 w-[90%] max-w-[1200px]">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search artifacts..."
            className="h-[42px] w-full rounded-[10px] border border-[#333] bg-[#1a1a1a] px-4 text-wheat outline-none focus:border-gold sm:max-w-[280px]"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-bold transition duration-300 ${
                  category === c
                    ? "border-gold bg-gold text-black"
                    : "border-[#333] text-wheat hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-[#888]" aria-live="polite">
            No artifacts match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            {filtered.map((a) => (
              <ArtifactCard key={a.slug} a={a} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
