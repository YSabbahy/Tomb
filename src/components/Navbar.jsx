import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { artifacts } from "../data/artifacts";
import { discoveries } from "../data/discoveries";
import Icon from "./Icon";

const links = [
  { label: "Home", to: "/" },
  { label: "Artifacts", to: "/artifacts" },
  { label: "Discoveries", to: "/discoveries" },
  { label: "Timeline", to: "/timeline" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
  { label: "Tickets", to: "/tickets" },
];

const searchIndex = [
  ...artifacts.map((a) => ({ type: "Artifact", title: a.title, to: `/artifacts/${a.slug}` })),
  ...discoveries.map((d) => ({ type: "Discovery", title: d.title, to: `/discoveries/${d.slug}` })),
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return searchIndex.filter((item) => item.title.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSubmitSearch(e) {
    e.preventDefault();
    if (results.length > 0) {
      navigate(results[0].to);
    } else if (query.trim()) {
      navigate(`/artifacts?q=${encodeURIComponent(query.trim())}`);
    }
    setSearchOpen(false);
    setQuery("");
    setMobileOpen(false);
  }

  const linkClass = ({ isActive }) =>
    `no-underline transition-colors duration-300 ${isActive ? "text-gold" : "text-wheat hover:text-gold"}`;

  return (
    <div className="fixed inset-x-0 top-0 z-[1000] w-full border-b-2 border-gold bg-[#0d0d0d]">
      <div className="mx-auto flex h-[55px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2 text-gold no-underline" onClick={() => setMobileOpen(false)}>
          <Icon name="monument" className="text-xl" />
          <span className="hidden text-sm font-bold uppercase tracking-widest sm:inline">
            Lost Tomb Explorer
          </span>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          <ul className="flex list-none items-center gap-5 text-base">
            {links.map((link) => (
              <li key={link.to} className="group relative cursor-pointer">
                <NavLink to={link.to} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute bottom-[-6px] left-0 h-[2px] bg-gold transition-all duration-500 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div ref={searchRef} className="relative">
            <form onSubmit={handleSubmitSearch} className="relative inline-block">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search artifacts, news..."
                className="h-[30px] w-[190px] rounded-[10px] border border-[#333] bg-[#1a1a1a] pl-3 pr-8 text-sm text-wheat outline-none focus:border-gold"
              />
              <button type="submit" aria-label="Search" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gold">
                <Icon name="search" className="text-sm" />
              </button>
            </form>

            {searchOpen && query.trim() && (
              <ul className="absolute right-0 top-full z-[10000] mt-2 w-[260px] list-none rounded-[10px] border border-gold bg-[#111] py-2 shadow-lg">
                {results.length > 0 ? (
                  results.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => {
                          setSearchOpen(false);
                          setQuery("");
                        }}
                        className="flex items-center justify-between px-4 py-2 text-sm text-white no-underline transition duration-300 hover:text-gold"
                      >
                        <span>{item.title}</span>
                        <span className="text-xs uppercase text-gold/70">{item.type}</span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-sm text-[#888]">No results found</li>
                )}
              </ul>
            )}
          </div>

          <Link
            to="/tickets"
            className="btn btn-sm"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="text-2xl text-gold xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? "xmark" : "bars"} />
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="w-full border-t border-gold/50 bg-[#0d0d0d] px-6 pb-6 pt-4 xl:hidden">
          <form onSubmit={handleSubmitSearch} className="relative mb-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search artifacts, news..."
              className="h-[36px] w-full rounded-[10px] border border-[#333] bg-[#1a1a1a] pl-3 pr-9 text-sm text-wheat outline-none focus:border-gold"
            />
            <button type="submit" aria-label="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-gold">
              <Icon name="search" className="text-sm" />
            </button>
          </form>

          <ul className="flex list-none flex-col gap-4 text-lg">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClass} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/tickets"
                onClick={() => setMobileOpen(false)}
                className="btn w-full"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
