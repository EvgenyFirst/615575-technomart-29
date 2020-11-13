// Оживление карты start

const buttonThatOpensTheMap = document.querySelector(".map-link");
const mapPopup = document.querySelector(".map-popup");
const closeMapPopup = document.querySelector(".map-popup-close-btn");

buttonThatOpensTheMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-popup-opened");
});

closeMapPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-popup-opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("map-popup-opened")) {
      evt.preventDefault();
      mapPopup.classList.remove("map-popup-opened");
    }
  }
});

// Оживление карты end
