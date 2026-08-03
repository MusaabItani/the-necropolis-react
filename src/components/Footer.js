import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>The Necropolis</h2>

        <p>Where Legends Never Rest.</p>

        <div className="footer-links">
          <Link to="/">Home</Link>

          <Link to="/updates">Updates</Link>

          <Link to="/tournaments">Tournaments</Link>

          <Link to="/news">News</Link>
        </div>

        <div className="footer-bottom">
          © 2026 The Necropolis Esports. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
