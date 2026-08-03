import { useState } from "react";
import "../css/news.css";
function News() {
  const [filter, setFilter] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const chronicles = [
    {
      category: "league",
      image: "./images/Chronicles/lol.jpg",
      title: "The Rise of the Shadow King",
      description:
        "A legendary recap of the fiercest League of Legends championship where only one king remained standing.Fast five-versus-five matches on a map with three lanes.Players pick unique champions with special magic powers and skills.The main goal is to break the enemy team's base.",
    },
    {
      category: "dota",
      image: "./images/Chronicles/dota.jpg",
      title: "Ancients Awaken Once More",
      description:
        "Relive the unforgettable battles inspired by The International, where legends fought beneath the Ancient.Deep and complex five-versus-five battles with a huge hero pool.Players must manage gold, deny creeps, and control the map.Winning requires strong teamwork to destroy the enemy Ancient.",
    },
    {
      category: "abi",
      image: "./images/Chronicles/abi.jpg",
      title: "Into the Dark Zone",
      description:
        "Operators descend into the forbidden zone where every decision means survival... or total loss.Realistic tactical military shooter focused on extraction gameplay.Players loot expensive gear and fight enemies in dangerous zones.Surviving means escaping the map with your loot intact.",
    },
    {
      category: "league",
      image: "./images/Chronicles/lol.jpg",
      title: "The Rise of the Shadow King",
      description:
        "A legendary recap of the fiercest League of Legends championship where only one king remained standing.Fast five-versus-five matches on a map with three lanes.Players pick unique champions with special magic powers and skills.The main goal is to break the enemy team's base.",
    },
    {
      category: "dota",
      image: "./images/Chronicles/dota.jpg",
      title: "Ancients Awaken Once More",
      description:
        "Relive the unforgettable battles inspired by The International, where legends fought beneath the Ancient.Deep and complex five-versus-five battles with a huge hero pool.Players must manage gold, deny creeps, and control the map.Winning requires strong teamwork to destroy the enemy Ancient.",
    },
    {
      category: "abi",
      image: "./images/Chronicles/abi.jpg",
      title: "Into the Dark Zone",
      description:
        "Operators descend into the forbidden zone where every decision means survival... or total loss.Realistic tactical military shooter focused on extraction gameplay.Players loot expensive gear and fight enemies in dangerous zones.Surviving means escaping the map with your loot intact.",
    },
    {
      category: "league",
      image: "./images/Chronicles/lol.jpg",
      title: "The Rise of the Shadow King",
      description:
        "A legendary recap of the fiercest League of Legends championship where only one king remained standing.Fast five-versus-five matches on a map with three lanes.Players pick unique champions with special magic powers and skills.The main goal is to break the enemy team's base.",
    },
    {
      category: "dota",
      image: "./images/Chronicles/dota.jpg",
      title: "Ancients Awaken Once More",
      description:
        "Relive the unforgettable battles inspired by The International, where legends fought beneath the Ancient.Deep and complex five-versus-five battles with a huge hero pool.Players must manage gold, deny creeps, and control the map.Winning requires strong teamwork to destroy the enemy Ancient.",
    },
    {
      category: "abi",
      image: "./images/Chronicles/abi.jpg",
      title: "Into the Dark Zone",
      description:
        "Operators descend into the forbidden zone where every decision means survival... or total loss.Realistic tactical military shooter focused on extraction gameplay.Players loot expensive gear and fight enemies in dangerous zones.Surviving means escaping the map with your loot intact.",
    },
  ];
  return (
    <main>
      <section className="page-hero">
        <h1>Chronicles Archive</h1>

        <p>
          Every battle tells a story. Explore the latest news from League of
          Legends, Dota 2, and Arena Breakout Infinite.
        </p>
      </section>
      <section className="news-filter">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={`filter-btn ${filter === "league" ? "active" : ""}`}
          onClick={() => setFilter("league")}
        >
          League
        </button>

        <button
          className={`filter-btn ${filter === "dota" ? "active" : ""}`}
          onClick={() => setFilter("dota")}
        >
          Dota 2
        </button>

        <button
          className={`filter-btn ${filter === "abi" ? "active" : ""}`}
          onClick={() => setFilter("abi")}
        >
          Arena Breakout
        </button>
      </section>

      <div className="chronicles-container">
        {chronicles
          .filter((card) => filter === "all" || card.category === filter)
          .map((card, index) => (
            <div className="chronicle-card" key={index}>
              <img src={card.image} alt={card.title} />

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <button
                className="read-more-btn"
                onClick={() => setSelectedArticle(card)}
              >
                Read More
              </button>
            </div>
          ))}
      </div>
      {selectedArticle && (
        <div className="article-popup">
          <div className="popup-content">
            <button
              className="close-popup"
              onClick={() => setSelectedArticle(null)}
            >
              ✕
            </button>

            <img src={selectedArticle.image} alt={selectedArticle.title} />

            <h2>{selectedArticle.title}</h2>

            <p>{selectedArticle.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}
export default News;
