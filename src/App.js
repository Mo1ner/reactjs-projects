import { useEffect, useRef, useState } from "react";
import sun from "./img/sun.svg";
import cloud from "./img/cloud.svg";
import rain from "./img/rain.svg";
import cloud_sun from "./img/cloud-sun.svg";
import thunder from "./img/thunderstorm.svg";
import snow from "./img/snow.svg";
import cross from "./img/cross.svg";
import "./style/style.css";

function App() {
  const API_KEY = "280d907cafe3e263b96e3b945a9562cc";

  const [weatherData, setWeatherData] = useState([]);
  const inputRef = useRef();

  const allIcons = {
    "01d": sun,
    "01n": sun,
    "02d": cloud_sun,
    "02n": cloud_sun,
    "03d": cloud,
    "03n": cloud,
    "04d": cloud,
    "04n": cloud,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": thunder,
    "11n": thunder,
    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter name");
      return;
    }

    if (weatherData.length >= 4) {
      alert("Delete some city to add another one");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      const icon = allIcons[data.weather[0].icon] || sun;
      const newWeatherData = {
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      };

      setWeatherData((prevWeatherData) => [...prevWeatherData, newWeatherData]);
    } catch (error) {
      setWeatherData(false);
      console.error("There is some Error");
    }
  };

  const remove = (cityName) => {
    setWeatherData((prevWeatherData) => {
      const index = prevWeatherData.findIndex(
        (data) => data.location === cityName
      );
      if (index !== -1) {
        const updatedWeatherData = [...prevWeatherData];
        updatedWeatherData.splice(index, 1);
        return updatedWeatherData;
      }
    });
  };
  useEffect(() => {
    search("New York");
  }, []);

  return (
    <div className="App">
      <div className="weather-widget">
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search for a city" />
          <button onClick={() => search(inputRef.current.value)}>Submit</button>
        </div>
        {weatherData ? (
          <div className="weather-cards">
            {weatherData.map((data, index) => (
              <>
                <div className="weather-card" key={index}>
                  <img
                    onClick={() => remove(data.location)}
                    src={cross}
                    className="cross-img"
                    alt="cross"
                  />
                  <h2>{data.location}</h2>
                  <p>{data.temperature}°C</p>
                  <div className="weather-icon">
                    <img src={data.icon} alt="weather" />
                  </div>
                </div>
              </>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
