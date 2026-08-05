import { Link } from "react-router-dom";
import "../css/featuredchronicles.css";
function FeaturedChronicles() {
  return (
    <section className="chronicles">
      <div className="section-title">
        <h2>Featured Chronicles</h2>

        <p>Tales from the world's greatest battlefields.</p>
      </div>

      <div className="chronicles-container">
        <div className="chronicle-card">
          <img src="../images/Chronicles/lol.jpg" alt="League of Legends" />

          <h3>The Rise of the Shadow King</h3>

          <p>
            A legendary recap of the fiercest League of Legends championship
            where only one king remained standing.
          </p>

          <Link to="/news">Enter the Chronicle</Link>
        </div>

        <div className="chronicle-card">
          <img src="../images/Chronicles/dota.jpg" alt="Dota 2" />

          <h3>Ancients Awaken Once More</h3>

          <p>
            Relive the unforgettable battles inspired by The International,
            where legends fought beneath the Ancient.
          </p>

          <Link to="/news">Enter the Chronicle</Link>
        </div>

        <div className="chronicle-card">
          <img
            src="../images/Chronicles/abi.jpg"
            alt="Arena Breakout Infinite"
          />

          <h3>Into the Dark Zone</h3>

          <p>
            Operators descend into the forbidden zone where every decision means
            survival... or total loss.
          </p>

          <Link to="/news">Enter the Chronicle</Link>
        </div>
      </div>
    </section>
  );
}
export default FeaturedChronicles;
