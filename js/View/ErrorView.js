class ErrorView {
  #parentEl = document.querySelector(".message__wrapper");
  #msgWrapper = document.querySelector(".message__wrapper-section");
  #closeIcon = document.querySelector(".icon__close-message");
  constructor() {
    this.#toggleWindow();
  }

  generateError(error) {
    this.#clear();
    const markup = `
        <p class="message__txt">${error}</p>
    `;
    this.#showWindow();
    this.#msgWrapper.insertAdjacentHTML("beforeend", markup);
  }
  #toggleWindow() {
    this.#closeIcon.addEventListener("click", () => this.#showWindow());
  }
  #showWindow() {
    console.log("klik window");
    this.#parentEl.classList.toggle("message__wrapper-hidden");
  }
  #clear() {
    this.#msgWrapper.innerHTML = "";
  }
}

export default new ErrorView();
