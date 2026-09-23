import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TorchGlow from "./components/TorchGlow";
import BackToTopButton from "./components/BackToTopButton";
import Home from "./pages/Home";
import Artifacts from "./pages/Artifacts";
import ArtifactDetail from "./pages/ArtifactDetail";
import Discoveries from "./pages/Discoveries";
import DiscoveryDetail from "./pages/DiscoveryDetail";
import Timeline from "./pages/Timeline";
import Tickets from "./pages/Tickets";
import TeamPage from "./pages/TeamPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Remounts its children on every path change, replaying the `.page-transition`
// entrance animation (defined in index.css) so navigation feels like moving
// between chambers instead of an instant swap.
function PageTransition({ children }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="overflow-x-clip bg-ink text-wheat">
      <a
        href="#main-content"
        className="sr-only z-[2000] rounded bg-gold px-4 py-2 font-bold text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <TorchGlow />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artifacts" element={<Artifacts />} />
            <Route path="/artifacts/:slug" element={<ArtifactDetail />} />
            <Route path="/discoveries" element={<Discoveries />} />
            <Route path="/discoveries/:slug" element={<DiscoveryDetail />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
