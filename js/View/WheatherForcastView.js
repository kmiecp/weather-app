class WeatherForecastView {
  _parentEl = document.querySelector(".forecast__list");

  generateWeatherForecast(data) {
    this.#clear();
    console.log(data);
    for (let i = 1; i < data.length; i++) {
      const markup = `
        <li class="forecast__item">
          <span class="forecast__day">${this.#getDay(data[i].date)}</span>
          <img class="forecast__img" src='${data[i].day.condition.icon}'>
          <span class="forecast__data">${data[i].day.maxtemp_c} &#176 C / ${
        data[i].hour[23].temp_c
      } &#176 C</span>
        </li>
      `;

      this._parentEl.insertAdjacentHTML("beforeend", markup);
    }
  }
  #getDay(date) {
    const days = [
      "Sunday",
      "Monday",
      "Thuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const newDate = new Date(date);
    const day = newDate.getDay();
    return days[day];
  }
  #clear() {
    this._parentEl.innerHTML = "";
  }
}

export default new WeatherForecastView();
