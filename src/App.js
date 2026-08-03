import "./css/style.css";
import "./css/responsive.css";
import "./css/footer.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HallOfLegends from "./components/HallOfLegends";
import FeaturedChronicles from "./components/FeaturedChronicles";
import FeaturedTournaments from "./components/FeaturedTournaments";
import FeaturedPatch from "./components/FeaturedPatch";
import FeaturedGames from "./components/FeaturedGames";
import News from "./pages/News";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import Tournaments from "./pages/Tournaments";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Updates />
      <Footer />
    </>
  );
}

export default App;
