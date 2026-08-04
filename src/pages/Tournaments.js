import { useState } from "react";
import "../css/tournaments.css";
function Tournaments() {
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const tournamentData = [
    {
      title: "League Spring Cup",
      game: "League of Legends",
      image: "/images/Tournaments/lol-tournament.jpg",
      date: "August 18, 2026",
      prize: "$25,000",
      teams: "16 Teams",
      format: "Double Elimination",
      description:
        "The League Spring Cup gathers the strongest teams in an intense battle for glory, prestige, and a massive prize pool. Every match pushes competitors to their limits as they fight for the championship.",
    },

    {
      title: "Ancient War Championship",
      game: "Dota 2",
      image: "/images/Tournaments/dota-tournament.jpg",
      date: "September 5, 2026",
      prize: "$50,000",
      teams: "32 Teams",
      format: "Double Elimination",
      description:
        "The greatest Dota warriors collide in a battle of strategy, teamwork, and legendary plays.",
    },

    {
      title: "Tactical Domination",
      game: "Arena Breakout Infinite",
      image: "/images/Tournaments/abi-tournament.jpg",
      date: "September 20, 2026",
      prize: "$15,000",
      teams: "20 Teams",
      format: "Group Stage + Finals",
      description:
        "Elite operators compete in intense tactical battles where precision and teamwork decide the champions.",
    },
  ];
  return (
    <main>
      {" "}
      <section className="page-hero">
        <h1>Tournament Arena</h1>

        <p>
          Enter the battlefield. Compete, conquer, and claim your place among
          legends.
        </p>
      </section>
      <section className="tourn-page">
        <div className="section-title">
          <h2>Featured Tournaments</h2>
        </div>

        <div className="tourn-container">
          <div className="tourn-grid">
            {tournamentData.map((tournament, index) => (
              <div className="tourn-card" key={index}>
                <img src={tournament.image} alt={tournament.title} />

                <div className="tourn-info">
                  <span className="tourn-game">{tournament.game}</span>

                  <h3>{tournament.title}</h3>

                  <p>{tournament.description}</p>

                  <div className="tourn-meta">
                    <span>📅 {tournament.date}</span>
                    <span>👥 {tournament.teams}</span>
                    <span>💰 {tournament.prize}</span>
                  </div>

                  <div className="tourn-buttons">
                    <button
                      className="details-btn"
                      onClick={() => setSelectedTournament(tournament)}
                    >
                      View Details
                    </button>

                    <button
                      className="register-btn"
                      disabled={registered}
                      onClick={() => setShowRegister(true)}
                    >
                      {registered ? "✔ Registered" : "Register"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedTournament && (
        <div
          className="tourn-viewer"
          onClick={(event) => {
            if (event.target.classList.contains("tourn-viewer")) {
              setSelectedTournament(null);
            }
          }}
        >
          <div className="tourn-popup">
            <span
              className="close-tourn"
              onClick={() => setSelectedTournament(null)}
            >
              &times;
            </span>

            <img
              src={selectedTournament.image}
              alt={selectedTournament.title}
            />
            <h2>{selectedTournament.title}</h2>

            <div className="popup-meta">
              <span>📅 {selectedTournament.date}</span>
              <span>💰 {selectedTournament.prize}</span>
              <span>👥 {selectedTournament.teams}</span>
              <span>🎮 {selectedTournament.format}</span>
            </div>

            <p>{selectedTournament.description}</p>
          </div>
        </div>
      )}
      {showRegister && (
        <div className="register-popup">
          <div className="register-box">
            <span
              className="close-register"
              onClick={() => {
                setShowRegister(false);
                setRegistrationSuccess(false);
              }}
            >
              x
            </span>

            {registrationSuccess ? (
              <>
                <h2 style={{ color: "#5bff81" }}>✔ Registration Successful</h2>

                <p>We look forward to seeing your team in the arena.</p>

                <button
                  className="submit-register"
                  onClick={() => {
                    setShowRegister(false);
                    setRegistrationSuccess(false);
                  }}
                >
                  Awesome!
                </button>
              </>
            ) : (
              <>
                <h2>Tournament Registration</h2>

                <form
                  className="register-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRegistrationSuccess(true);
                    setRegistered(true);
                  }}
                >
                  <label>Team Name</label>

                  <input
                    type="text"
                    id="team-name"
                    placeholder="Enter your team name"
                  />

                  <label>Coach Available?</label>

                  <div className="coach-options">
                    <label>
                      <input type="radio" name="coach" value="Yes" />
                      Yes
                    </label>

                    <label>
                      <input type="radio" name="coach" value="No" />
                      No
                    </label>
                  </div>

                  <label>Region</label>

                  <select id="team-region">
                    <option value="">Select Region</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Europe</option>
                    <option>Middle East</option>
                    <option>Asia</option>
                  </select>

                  <button type="submit" className="submit-register">
                    Submit Registration
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
export default Tournaments;
