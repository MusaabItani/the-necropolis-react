import "../css/featuredgames.css";
function FeaturedGames() {
    return (
         <section className="featured-games">
      <div className="section-title">
        <span className="section-label">LEGENDS OF THE ARENA</span>
        <h2>Featured Games</h2>

        <p>Enter the worlds where legends are forged.</p>
      </div>

    

      <div className="game-showcase">
        <div className="game-image">
          <img src="images/games/lol.jpg" alt="League of Legends" />
        </div>

        <div className="game-info">
          <span className="game-tag">MOBA</span>

          <h3>League of Legends</h3>

          <p>
            Enter the Rift and battle alongside champions in one of the world's
            most iconic esports titles.
          </p>

          <ul>
            <li><strong>Developer:</strong> Riot Games</li>

            <li><strong>Players:</strong> 130M+</li>

            <li><strong>Esports:</strong> World Championship</li>
          </ul>
        </div>
      </div>

      

      <div className="game-showcase reverse">
        <div className="game-image">
          <img src="images/games/dota.jpg" alt="Dota 2" />
        </div>

        <div className="game-info">
          <span className="game-tag">MOBA</span>

          <h3>Dota 2</h3>

          <p>
            Command heroes, defend the Ancient, and compete in battles where
            strategy shapes destiny.
          </p>

          <ul>
            <li><strong>Developer:</strong> Valve</li>

            <li><strong>Esports:</strong> The International</li>

            <li><strong>Genre:</strong> Strategy MOBA</li>
          </ul>
        </div>
      </div>


      <div className="game-showcase">
        <div className="game-image">
          <img src="images/games/abi.jpg" alt="Arena Breakout Infinite" />
        </div>

        <div className="game-info">
          <span className="game-tag">Extraction Shooter</span>

          <h3>Arena Breakout Infinite</h3>

          <p>
            Enter the Dark Zone, gather valuable loot, and survive tactical
            battles where every decision matters.
          </p>

          <ul>
            <li><strong>Developer:</strong> MoreFun Studios</li>

            <li><strong>Genre:</strong> Tactical FPS</li>

            <li><strong>Focus:</strong> Extraction Gameplay</li>
          </ul>
        </div>
      </div>
    </section>
    )
}
export default FeaturedGames;
