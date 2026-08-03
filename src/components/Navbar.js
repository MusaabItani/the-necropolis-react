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
            <a href="index.html">Home</a>
          </li>

          <li>
            <a href="news.html">Chronicles</a>
          </li>

          <li>
            <a href="updates.html">Updates</a>
          </li>

          <li>
            <a href="tournaments.html">Tournaments</a>
          </li>

          <li>
            <a href="about.html">About</a>
          </li>

          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
