import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { plans } from "../data/plans";

export default function Pricing() {
  return (
    <div>
      <SectionTitle title="Pricing Table" />

      <div className="mx-auto my-8 grid w-[90%] max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="group relative overflow-hidden rounded-[10px] border border-[#333] bg-panel p-5 text-center transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.45)]"
          >
            <span className="absolute inset-0 -z-10 h-0 w-full bg-gold/10 transition-all duration-500 group-hover:h-full" />
            <h2 className="mb-2.5 text-xl text-gold">{plan.name}</h2>
            <div className="mx-auto flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border-2 border-gold p-2">
              <h2 className="text-2xl text-white">{plan.price}</h2>
              <p className="text-gold">/Per Visit</p>
            </div>
            {plan.features.map((f) => (
              <p key={f} className="border-b border-[#333] py-2.5 text-[#e0e0e0]">
                {f}
              </p>
            ))}
            <Link
              to={`/tickets?plan=${plan.id}`}
              className="btn btn-sm mt-5"
            >
              Purchase Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
