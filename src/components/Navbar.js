import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/images/logo/logo.png" alt="The Necropolis Esports Logo" />

          <div className="logo-text">
            <h1>The Necropolis</h1>
            <p>Esports</p>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/news">Chronicles</Link>
          </li>

          <li>
            <Link to="/updates">Updates</Link>
          </li>

          <li>
            <Link to="/tournaments">Tournaments</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
