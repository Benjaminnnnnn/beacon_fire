(function () {
  window.addEventListener("load", init);

  function init() {
    let buttons = document.querySelectorAll("button");
    for (const button of buttons) {
      button.addEventListener("click", toggleSelect);
    }
  }

  function toggleSelect(e) {
    document.querySelector(".tab-selected").classList.remove("tab-selected");
    document.querySelector(".selected").classList.remove("selected");

    let button = e.target;
    button.classList.add("tab-selected");
    let div = document.querySelector(`.${button.textContent.toLowerCase()}`);
    div.classList.add("selected");
  }
})();
