import Hero from "../components/Hero";
import HallOfLegends from "../components/HallOfLegends";
import FeaturedGames from "../components/FeaturedGames";
import FeaturedChronicles from "../components/FeaturedChronicles";
import FeaturedTournaments from "../components/FeaturedTournaments";
import FeaturedPatch from "../components/FeaturedPatch";

function Home() {
  return (
    <>
      <Hero />
      <HallOfLegends />
      <FeaturedChronicles />
      <FeaturedTournaments />
      <FeaturedGames />
      <FeaturedPatch />
    </>
  );
}

export default Home;
