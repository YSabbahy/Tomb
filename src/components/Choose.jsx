import { Link } from "react-router-dom";
import Icon from "./Icon";
import chooseImg from "../assets/images/michael-starkie-cxijyrxOFCE-unsplash.webp";

const items = [
  "Micro-Detail Artifact Scanning",
  "Expert Translation of Hieroglyphics",
  "Educational Tours for All Ages",
  "Secure Digital Heritage Preservation",
];

export default function Choose() {
  return (
    <div className="mx-auto mt-[100px] flex w-[90%] max-w-[1200px] flex-col-reverse items-center gap-10 pb-10 lg:flex-row lg:items-start">
      <div className="w-full lg:max-w-[50%]">
        <div>
          <h2 className="text-gold">Why Choose Our Museum?</h2>
          <div className="mt-1 h-0.5 w-[50px] bg-white" />
        </div>

        <div className="mt-6 w-full">
          <p>
            We offer a deep dive into the smallest details of Ancient Egyptian
            life, combining rigorous field archaeology with modern
            conservation science and immersive digital storytelling.
          </p>
        </div>

        <div className="mt-4 space-y-4">
          {items.map((item) => (
            <div key={item} className="relative pl-6">
              <Icon name="check" className="absolute left-0 top-[7px] text-xl text-gold" />
              <p className="pl-5">{item}</p>
            </div>
          ))}
        </div>

        <Link
          to="/tickets"
          className="btn mt-6"
        >
          Plan Your Visit
        </Link>
      </div>

      <div className="w-full max-w-[420px] lg:max-w-[45%]">
        <img
          src={chooseImg}
          alt="Museum artifact"
          width={1000}
          height={580}
          loading="lazy"
          decoding="async"
          className="w-full rounded"
        />
      </div>
    </div>
  );
}
