import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/ReactWeatherApp/icons/sunny.svg",
  "01n": "/ReactWeatherApp/icons/night.svg",
  "02d": "/ReactWeatherApp/icons/day.svg",
  "02n": "/ReactWeatherApp/icons/cloudy-night.svg",
  "03d": "/ReactWeatherApp/icons/cloudy.svg",
  "03n": "/ReactWeatherApp/icons/cloudy.svg",
  "04d": "/ReactWeatherApp/icons/perfect-day.svg",
  "04n": "/ReactWeatherApp/icons/cloudy-night.svg",
  "09d": "/ReactWeatherApp/icons/rain.svg",
  "09n": "/ReactWeatherApp/icons/rain-night.svg",
  "10d": "/ReactWeatherApp/icons/rain.svg",
  "10n": "/ReactWeatherApp/icons/rain-night.svg",
  "11d": "/ReactWeatherApp/icons/storm.svg",
  "11n": "/ReactWeatherApp/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
