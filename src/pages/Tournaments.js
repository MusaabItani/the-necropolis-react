import "../css/tournaments.css";

function Tournaments() {
  return (
    <main>
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

      <div className="tourn-container"/>
       

       <div className="tourn-card">

    <img src="../images/Tournaments/lol-tournament.jpg" alt="League Spring Cup"/>

    <div className="tourn-info">

        <span className="tourn-game">League of Legends</span>

        <h3>League Spring Cup</h3>

        <p>
            The strongest teams battle through the Rift in a prestigious
            tournament with glory and a massive prize pool on the line.
        </p>

        <div className="tourn-meta">

            <span>📅 Aug 18</span>

            <span>👥 16 Teams</span>

            <span>💰 $25,000</span>

        </div>

        <div className="tourn-buttons">

            <button className="details-btn">View Details</button>

            <button className="register-btn">Register</button>

        </div>

    </div>

</div>
    </section>
 
<div className="tourn-viewer">

    <div className="tourn-popup">

        <span className="close-tourn">&times;</span>

        <img id="tourn-image" src="" alt="Tournament"/>

        

        <div className="popup-meta">

            <p><strong>Date:</strong> <span id="popup-date"></span></p>

            <p><strong>Prize Pool:</strong> <span id="popup-prize"></span></p>

            <p><strong>Teams:</strong> <span id="popup-teams"></span></p>

            <p><strong>Format:</strong> <span id="popup-format"></span></p>

        </div>

        <p id="popup-description"></p>

    </div>

</div>


<div className="register-popup">

    <div className="register-box">

        <h2>Tournament Registration</h2>

        <form id="register-form">

            <label>Team Name</label>

            <input
                type="text"
                id="team-name"
                placeholder="Enter your team name"
            />

            <label>Coach Available?</label>

            <div className="coach-options">

                <label>
                    <input type="radio" name="coach" value="Yes"/>
                    Yes
                </label>

                <label>
                    <input type="radio" name="coach" value="No"/>
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

            <button
                type="submit"
                className="submit-register"
            >

                Submit Registration

            </button>

        </form>

    </div>

</div>
</main>

    );
}
export default Tournaments;