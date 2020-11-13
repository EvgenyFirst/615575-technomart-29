// Добавление выбранных товаров в корзину start
const productBtns = document.querySelectorAll(`.product-button-hover`);
const changePrice = document.querySelector(`.basket-add`);
const priceNumber = document.querySelector(`.price-numder-dynamic`);
const basketIco = document.querySelector(".basket-ico");
const getBasketIcoIcoActive = basketIco.querySelector(`.basket-ico-path`);
let priceCount = priceNumber.innerHTML;

const succesfulPricePopup = document.querySelector(".ok-basket-add");

for (let i = 0; i < productBtns.length; i++) {
  const InPricekBtn = productBtns[i];
  InPricekBtn.addEventListener("click", function () {
    priceCount++;
    priceNumber.innerHTML = priceCount;
    if (priceCount > 0) {
      succesfulPricePopup.classList.remove(`ok-basket-add-btn-hidden`);
      changePrice.classList.add(`add-background-color`);
      getBasketIcoIcoActive.classList.add(`basket-ico-path-active`);
    };
  });
};

const closePopupPriceBtnX = document.querySelector(".ok-basket-add-close-btn");
const closePopupPriceBtnNext = document.querySelector(".ok-basket-add-btn-next");

closePopupPriceBtnX.addEventListener("click", function () {
  succesfulPricePopup.classList.add("ok-basket-add-btn-hidden");
});

closePopupPriceBtnNext.addEventListener("click", function () {
  succesfulPricePopup.classList.add("ok-basket-add-btn-hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    succesfulPricePopup.classList.add("ok-basket-add-btn-hidden");
  }
});
// Добавление выбранных товаров в корзину end
