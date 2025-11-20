import "./Home.css";
import ShipImg from "../../assets/ship-m.webp";
import { Spotlight } from "../ui/Spotlight ";
export default function HomeHeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-inner max-container">
        <div className="hero-content">
          <h1 className="leading-[1.8]">
            Delivering End-to-End Logistics For a World That Never Stops Moving
          </h1>
          <button className="quote-btn font-new">Get a Quote Today</button>
          <div className="stats-grid">
            <div className="stat-item">
              <strong className="stat-number">500+</strong>
              <span className="stat-label">
                Successful Shipments
                <br />
                Monthly
              </span>
            </div>

            <div className="stat-divider" aria-hidden="true"></div>

            <div className="stat-item">
              <strong className="stat-number">100+</strong>
              <span className="stat-label">Fleet Vehicles</span>
            </div>

            <div className="stat-divider" aria-hidden="true"></div>

            <div className="stat-item">
              <strong className="stat-number">200+</strong>
              <span className="stat-label">Global Partners</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="circle small-circle"></div>
          <div className="circle mid-circle"></div>
          <Spotlight />
          <img src={ShipImg} alt="ship" className="ship-img" />
        </div>
      </div>
    </div>
  );
}
