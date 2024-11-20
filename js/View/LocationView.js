class LocationView {
  #parentEl = document.querySelector(".search__icon-loaction");

  addHandlerLocation(handler) {
    this.#parentEl.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new LocationView();
