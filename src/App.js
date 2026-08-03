import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/style.css";
import "./css/responsive.css";
import "./css/footer.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import News from "./pages/News";
import Updates from "./pages/Updates";
import Tournaments from "./pages/Tournaments";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/news" element={<News />} />

        <Route path="/updates" element={<Updates />} />

        <Route path="/tournaments" element={<Tournaments />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
