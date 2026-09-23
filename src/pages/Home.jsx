import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Featured from "../components/Featured";
import Offer from "../components/Offer";
import Choose from "../components/Choose";
import Statistics from "../components/Statistics";
import Pricing from "../components/Pricing";
import Voices from "../components/Voices";
import Team from "../components/Team";
import News from "../components/News";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Featured />
      <Offer />
      <Choose />
      <Statistics />
      <Pricing />
      <Voices />
      <Team />
      <News />
    </>
  );
}
