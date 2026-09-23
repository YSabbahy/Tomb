import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
      <Icon name="scroll" className="mb-4 text-6xl text-gold" />
      <h1 className="text-[40px] text-gold">404</h1>
      <p className="mt-2 max-w-[400px] text-[#c9c9c9]">
        This chamber has not yet been excavated. The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="btn mt-8"
      >
        Return Home
      </Link>
    </div>
  );
}
