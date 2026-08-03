import "../css/featuredpatch.css";
function FeaturedPatch() {
  return (
    <section className="patch-notes">
      <div className="section-title">
        <h2>Latest Patch Notes</h2>

        <p>
          Stay informed with the latest balance changes and content updates.
        </p>
      </div>

      <div className="patch-container">
        <div className="patch-card">
          <div className="patch-header">
            <h3>League of Legends</h3>

            <span>Patch 14.16 - Jul 28</span>
          </div>

          <ul>
            <li className="buff">🟢 Shadow Assassin damage increased.</li>

            <li className="nerf">🔴 Mage cooldown increased.</li>

            <li className="feature">🟡 Ranked Arena mode added.</li>
          </ul>
        </div>

        <div className="patch-card">
          <div className="patch-header">
            <h3>Dota 2</h3>

            <span>Patch 7.39c - Apr 17</span>
          </div>

          <ul>
            <li className="buff">🟢 Phantom Assassin critical strike buff.</li>

            <li className="nerf">🔴 Roshan armor reduced.</li>

            <li className="feature">🟡 New seasonal treasures released.</li>
          </ul>
        </div>

        <div className="patch-card">
          <div className="patch-header">
            <h3>Arena Breakout Infinite</h3>

            <span>Patch 13.1 - Sep 7</span>
          </div>

          <ul>
            <li className="feature">🔵 MK14 rifle introduced.</li>

            <li className="buff">🟢 Improved loot quality.</li>

            <li className="nerf">🟠 Helmet durability adjusted.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default FeaturedPatch;
