class SearchView {
  _parentEl = document.querySelector(".header__input");

  getData() {
    console.log(this._parentEl.value);
    const data = this._parentEl.value;
    this._clear();
    return data;
  }
  _clear() {
    this._parentEl.value = "";
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handler();
      }
    });
  }
}

export default new SearchView();
