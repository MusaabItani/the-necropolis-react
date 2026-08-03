import "../css/featuredtournament.css";
function FeaturedTournaments() {
  return (
    <section className="tournaments">
      <div className="section-title">
        <h2>Upcoming Tournaments</h2>

        <p>Enter the arena. Claim your legacy.</p>
      </div>

      <div className="tournament-container">
        <div className="tournament-card">
          <img
            src="images/tournaments/lol-tournament.jpg"
            alt="League of Legends Tournament"
          />

          <div className="tournament-info">
            <h3>The Shadow Crown Championship</h3>

            <p>League of Legends</p>

            <span> 📅 October 15, 2026 </span>

            <span> ⚔ 16 Teams </span>
            <span>🌍 Global Region</span>

            <span>🏆 Prize Pool: $25,000</span>

            <a href="#"> Enter the Rift </a>
          </div>
        </div>

        <div className="tournament-card">
          <img
            src="images/tournaments/dota-tournament.jpg"
            alt="Dota 2 Tournament"
          />

          <div className="tournament-info">
            <h3>Ancients Reborn Invitational</h3>

            <p>Dota 2</p>

            <span> 📅 November 8, 2026 </span>

            <span> ⚔ 20 Teams </span>
            <span>🌍 Global Region</span>

            <span>🏆 Prize Pool: $50,000</span>

            <a href="#"> Defend the Ancients </a>
          </div>
        </div>

        <div className="tournament-card">
          <img
            src="images/tournaments/abi-tournament.jpg"
            alt="Arena Breakout Tournament"
          />

          <div className="tournament-info">
            <h3>Dark Zone Extraction Series</h3>

            <p>Arena Breakout Infinite</p>

            <span> 📅 December 3, 2026 </span>

            <span> ⚔ 32 Squads </span>
            <span>🌍 Global Region</span>

            <span>🏆 Prize Pool: $15,000</span>

            <a href="#"> Deploy in the Dark Zone </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeaturedTournaments;
