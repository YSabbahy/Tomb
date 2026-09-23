import { Link } from "react-router-dom";

export default function PageHeader({ title, subtitle, crumb }) {
  return (
    <div className="w-full border-b border-[#222] bg-[#0d0d0d] pb-10 pt-[110px] text-center">
      <h1 className="px-4 text-[32px] text-gold sm:text-[40px]">{title}</h1>
      {subtitle && <p className="mx-auto mt-3 max-w-[600px] px-4 text-[#c9c9c9]">{subtitle}</p>}
      <div className="mt-4 text-sm text-[#888]">
        <Link to="/" className="text-gold no-underline hover:underline">
          Home
        </Link>
        {crumb && <span> / {crumb}</span>}
      </div>
    </div>
  );
}
