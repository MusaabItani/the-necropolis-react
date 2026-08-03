import "../css/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>The Necropolis</h1>

        <h2>Esports</h2>

        <p>Death Is Only The Beginning.</p>
        <a href="/tournaments" className="hero-button">
          Claim Your Legacy
        </a>
      </div>
    </section>
  );
}

export default Hero;
