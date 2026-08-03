import "../css/about.css";

function About() {
  return (
    <main>
        <section className="page-hero">
      <h1>About The Necropolis</h1>

      <p>
        Forging champions, building communities, and celebrating competitive
        gaming.
      </p>
    </section>

    <section className="about-container">
      <div className="about-section">
        <h2>Who We Are</h2>

        <p>
          The Necropolis Esports is a fictional esports organization created to
          unite players, celebrate competition, and provide the latest gaming
          news, tournaments, and updates from the world's biggest esports
          titles.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>

        <p>
          To create an engaging esports platform where players can stay
          informed, compete, and become part of an ever-growing gaming
          community.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>

        <p>
          To become a recognized destination for competitive gaming content,
          tournaments, and community-driven experiences.
        </p>
      </div>
    </section>
    
    <section className="team-container">
      <div className="team-card">
        <div className="team-inner">
          <div className="team-front">
            <img src="images/team/founder.jpg" alt="Founder" />

            <h3>Musaab Itani</h3>

            <p>Founder</p>
          </div>

          <div className="team-back">
            <h3>Lead Strategist</h3>

            <p>"We build champions, not just teams."</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}

export default About;