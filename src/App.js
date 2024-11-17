import sun from "./img/sun.svg";
import cloud from "./img/cloud.svg";
import rain from "./img/rain.svg";
import cloud_sun from "./img/cloud-sun.svg";
import thunder from "./img/thunderstorm.svg";
import snow from "./img/snow.svg";
import cross from "./img/cross.svg";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <div className="weather-widget">
        <div className="search-bar">
          <input type="text" placeholder="Search for a city" />
          <button>Submit</button>
        </div>
        <div className="weather-cards">
          <div className="weather-card">
            <h2>Paris</h2>
            <p>9°C</p>
            <div className="weather-icon">🌧️</div>
          </div>
          <div className="weather-card">
            <h2>Katowice</h2>
            <p>5°C</p>
            <div className="weather-icon">☀️</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
