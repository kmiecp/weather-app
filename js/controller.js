import * as model from "./model.js";
import ErrorView from "./View/ErrorView.js";
import SearchView from "./View/SearchView.js";
import LocationView from "./View/LocationView.js";
import WeatherView from "./View/Weatherview.js";
import WeatherForecastView from "./View/WheatherForcastView.js";

const controlWeather = async function (data) {
  try {
    const weatherData = await model.getWeatherData(data);
    WeatherView.generateWeather(model.weatherData);
    WeatherForecastView.generateWeatherForecast(model.weatherData.days);
  } catch (error) {
    console.log(error);
    ErrorView.generateError(error);
  }
};

const controlSearchResult = async function () {
  try {
    const searchData = SearchView.getData();
    controlWeather(searchData);
  } catch (error) {
    ErrorView.generateError(error.message);
  }
};
const controlShowWeather = async function () {
  try {
    await model.getCurrentPosition();
    await model.getCityName();
    await model.getWeatherData(model.locationData.city);
    WeatherView.generateWeather(model.weatherData);
    WeatherForecastView.generateWeatherForecast(model.weatherData.days);
  } catch (error) {
    ErrorView.generateError(error.message);
  }
};

const init = function () {
  SearchView.addHandlerSearch(controlSearchResult);
  LocationView.addHandlerLocation(controlShowWeather);
};
init();
