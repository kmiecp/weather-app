import * as config from "./config.js";

export const locationData = {
  lat: null,
  long: null,
  city: null,
};

export let weatherData = {};

export const getWeatherData = async function (city) {
  try {
    const fetchData = await fetch(
      `${config.API}key=${config.KEY_API}&q=${city}&days=5&aqi=no&alerts=yes`
    );
    if (!fetchData.ok) throw new Error(fetchData.statusText);
    const data = await fetchData.json();
    weatherData = createWeatherState(data);
  } catch (error) {
    throw error;
  }
};
export const getCityName = async function () {
  try {
    const data = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${locationData.lat}&longitude=${locationData.long}}&localityLanguage=en`
    );
    const cityNem = await data.json();
    locationData.city = cityNem.city;
  } catch (err) {
    throw err;
  }
};

export const getCurrentPosition = async function () {
  try {
    const location = await getPosition();
    locationData.lat = location.coords.latitude;
    locationData.long = location.coords.longitude;
  } catch (error) {
    throw error;
  }
};

export const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const createWeatherState = function (data) {
  const { current, location, forecast } = data;

  return {
    temp: current.temp_c,
    cloud: current.cloud,
    feelsTemp: current.feelslike_c,
    rain: current.precip_mm,
    pressure: current.pressure_mb,
    town: location.name,
    country: location.country,
    condition: current.condition.text,
    icon: current.condition.icon,
    wind: current.wind_kph,
    sunrise: forecast.forecastday[0].astro.sunrise,
    sunset: forecast.forecastday[0].astro.sunset,
    days: forecast.forecastday,
  };
};
