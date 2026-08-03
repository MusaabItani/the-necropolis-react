import "../css/halloflegends.css";
import { useState, useEffect } from "react";

function HallOfLegends() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);
  return (
    <section className="hall-of-legends">
      <div className="section-title">
        <h2>Hall of Legends</h2>

        <p>Witness the battles that forged history.</p>
      </div>

      <div
        className="carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`slide ${currentSlide === 0 ? "active" : ""}`}>
          <img src="../images/carousel/lol-slide.jpg" alt="League of Legends" />

          <div className="slide-content">
            <span>League of Legends</span>

            <h3>The Shadow King Rises</h3>

            <p>The greatest champions return to claim the Shadow Crown.</p>
          </div>
        </div>

        <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
          <img src="../images/carousel/dota-slide.jpg" alt="Dota 2" />

          <div className="slide-content">
            <span>Dota 2</span>

            <h3>Ancients Reborn</h3>

            <p>Legends gather once again beneath the Ancient.</p>
          </div>
        </div>

        <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
          <img
            src="../images/carousel/abi-slide.jpg"
            alt="Arena Breakout Infinite"
          />

          <div className="slide-content">
            <span>Arena Breakout Infinite</span>

            <h3>Dark Zone Extraction</h3>

            <p>Fortune favors those who survive the Dark Zone.</p>
          </div>
        </div>
        <button className="carousel-btn prev" onClick={previousSlide}>
          &#10094;
        </button>

        <button className="carousel-btn next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="carousel-dots">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HallOfLegends;
