import { useState } from "react";
import "../css/updates.css";

function Updates() {
  const [openPatch, setOpenPatch] = useState(null);
  return (
    <main>
      <section className="page-hero">
        <h1>Patch Notes</h1>

        <p>
          Stay informed with the latest game updates, balance changes, new
          features and bug fixes.
        </p>
      </section>

      <section className="patch-container">
        <div className="patch-card">
          <button
            className="patch-header"
            onClick={() => setOpenPatch(openPatch === 1 ? null : 1)}
          >
            <span>{openPatch === 1 ? "▲" : "▼"} New Features</span>
          </button>

          <div className={`patch-content ${openPatch === 1 ? "active" : ""}`}>
            <ul>
              <li>New Arena Breakout Infinite map: Black Harbor.</li>

              <li>League of Legends champion balance adjustments.</li>

              <li>Dota 2 hero ability tuning.</li>

              <li>Tournament reward system updated.</li>
            </ul>
          </div>
        </div>
        <div className="patch-card">
          <button
            className="patch-header"
            onClick={() => setOpenPatch(openPatch === 2 ? null : 2)}
          >
            <span>{openPatch === 2 ? "▲" : "▼"} weapon balance</span>
          </button>

          <div className={`patch-content ${openPatch === 2 ? "active" : ""}`}>
            <ul>
              <li>
                Decreased the base recoil value of the FAL assault rifle to
                balance high-tier weapon handling.
              </li>

              <li>
                {" "}
                Buffed traditional marksmen items and stats while adjusting
                supports to curb mage dominance in the bot lane
              </li>

              <li>
                Reduced Zeus's overall output by making Divine Rapier magic
                amplification non-stackable in Patch 7.41e.
              </li>

              <li>Tournament reward system updated.</li>
            </ul>
          </div>
        </div>
        <div className="patch-card">
          <button
            className="patch-header"
            onClick={() => setOpenPatch(openPatch === 3 ? null : 3)}
          >
            <span>{openPatch === 3 ? "▲" : "▼"} bug fixes</span>
          </button>

          <div className={`patch-content ${openPatch === 3 ? "active" : ""}`}>
            <ul>
              <li>
                {" "}
                Fixed an issue where the Legacy Knife had no switch animation
                while sprinting.
              </li>

              <li>
                Fixed a bug where Divine Domain could grant infinite Attack
                Range
              </li>

              <li>
                Fixed a Meepo exploit that allowed the duplication of combinable
                items.
              </li>

              <li>Tournament reward system updated.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Updates;
