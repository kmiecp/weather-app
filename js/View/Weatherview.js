class WeatherView {
  #parentEl = document.querySelector(".weather__wrapper");
  generateWeather(data) {
    this.#clear();
    const markup = `

    <div class="weather__section weather__section-left">
    <p class="weather__city"> ${data.town}</p>
    <div class="weather__temps">
      <p class="main__temp"> ${data.temp}&#176  </p>
      <p class="feels__temp">Feels like: ${data.feelsTemp} &#176 C </p>
    </div>
      <div class="weather__icon">
      <img src="${data.icon}" class="weather__icon-main">
      <span class="weather__condition">${data.condition} </span>
      </div>
      
  </div>
  <div class="weather__section weather__section-right">
    <ul class="weather__list">
      <li class="weather__item"><span class="weather__data-title">Rain</span>
      <span class="weather__data weather__data-rain">${data.rain} mm</span></li>
      <li class="weather__item"><span class="weather__data-title">Pressure</span>
      <span class="weather__data weather__data-pressure">${data.pressure} hPa</span></li>
      <li class="weather__item"><span class="weather__data-title">Cloudy</span>
      <span class="weather__data weather__data-cloud">${data.cloud} %</span></li>
      <li class="weather__item"><span class="weather__data-title">Wind</span>
      <span class="weather__data weather__data-wind">${data.wind} kph</span></li>
         <li class="weather__item"><span class="weather__data-title">Sunrise</span>
      <span class="weather__data weather__data-sunrise">${data.sunrise}</span></li>
      <li class="weather__item"><span class="weather__data-title">Sunset</span>
      <span class="weather__data weather__data-sunset">${data.sunset}</span></li>
    </ul>
  </div>
        `;
    this.#parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentEl.innerHTML = "";
  }
}

export default new WeatherView();
