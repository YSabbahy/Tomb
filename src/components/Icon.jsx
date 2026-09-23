import {
  ArrowUp,
  Award,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  Eye,
  Gem,
  Hammer,
  Headphones,
  Heart,
  Hourglass,
  LoaderCircle,
  Landmark,
  Mail,
  Map,
  MapPin,
  Menu,
  Microscope,
  Minus,
  PenLine,
  Phone,
  Plus,
  ScrollText,
  Search,
  Send,
  ShoppingBag,
  Ticket,
  Users,
  Vault,
  X,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

// Single lookup table: every icon the site uses, in one place. Swapping an
// icon later means changing one line here instead of hunting through pages.
const ICONS = {
  "arrow-up": ArrowUp,
  award: Award,
  "bag-shopping": ShoppingBag,
  bars: Menu,
  check: Check,
  "circle-check": CheckCircle2,
  "circle-notch": LoaderCircle,
  clock: Clock,
  compass: Compass,
  envelope: Mail,
  eye: Eye,
  gem: Gem,
  hammer: Hammer,
  headset: Headphones,
  heart: Heart,
  "hourglass-start": Hourglass,
  "location-dot": MapPin,
  "map-marked-alt": Map,
  microscope: Microscope,
  minus: Minus,
  monument: Landmark,
  "paper-plane": Send,
  "pen-nib": PenLine,
  phone: Phone,
  plus: Plus,
  scroll: ScrollText,
  search: Search,
  ticket: Ticket,
  "users-line": Users,
  vault: Vault,
  xmark: X,
  // Brand marks (not part of lucide) come from react-icons' Font Awesome 6
  // set so they still read as the familiar logos.
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  tiktok: FaTiktok,
  "x-twitter": FaXTwitter,
  youtube: FaYoutube,
};

/**
 * Drop-in replacement for the old `<i className="fa-solid fa-x" />` icons.
 * `size="1em"` keeps it scaling with the surrounding text-size utility
 * (text-xl, text-4xl, ...) exactly like the Font Awesome font glyphs did.
 */
export default function Icon({ name, className = "", spin = false, ...props }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;

  return (
    <Cmp
      aria-hidden="true"
      focusable="false"
      size="1em"
      className={`inline-block align-[-0.125em] shrink-0${spin ? " animate-spin" : ""}${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}
