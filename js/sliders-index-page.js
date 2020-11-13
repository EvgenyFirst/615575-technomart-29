// Слайдер в секции "Сервисы" start

const changeDeliveryButton = document.querySelector(".name-of-services-delivery");
const changeGuaranteeButton = document.querySelector(".name-of-services-guarantee");
const changeCreditButton = document.querySelector(".name-of-services-credit");

const changeSlidedDelivery = document.querySelector(".services-slide-delivery");
const changeSlidedGuarantee = document.querySelector(".services-slide-guarantee");
const changeSlidedCredit = document.querySelector(".services-slide-credit");

// Открывает и закрывает слайд "Гарантия" start
changeDeliveryButton.addEventListener("click", function () {
  changeDeliveryButton.classList.add("name-of-services-active");
  changeGuaranteeButton.classList.remove("name-of-services-active");
  changeCreditButton.classList.remove("name-of-services-active");

  changeSlidedDelivery.classList.remove("services-slide-one");
  changeSlidedGuarantee.classList.add("services-slide-two");
  changeSlidedCredit.classList.add("services-slide-three");
});
// Открывает и закрывает слайд "Гарантия" end

// Открывает и закрывает слайд "Гарантия" start
changeGuaranteeButton.addEventListener("click", function () {
  changeDeliveryButton.classList.remove("name-of-services-active");
  changeGuaranteeButton.classList.add("name-of-services-active");
  changeCreditButton.classList.remove("name-of-services-active");

  changeSlidedDelivery.classList.add("services-slide-one");
  changeSlidedGuarantee.classList.remove("services-slide-two");
  changeSlidedCredit.classList.add("services-slide-three");
});
// Открывает и закрывает слайд "Гарантия" end

// Открывает и закрывает слайд "Гарантия" start
changeCreditButton.addEventListener("click", function () {
  changeDeliveryButton.classList.remove("name-of-services-active");
  changeGuaranteeButton.classList.remove("name-of-services-active");
  changeCreditButton.classList.add("name-of-services-active");

  changeSlidedDelivery.classList.add("services-slide-one");
  changeSlidedGuarantee.classList.add("services-slide-two");
  changeSlidedCredit.classList.remove("services-slide-three");
});
// Открывает и закрывает слайд "Гарантия" end

// Слайдер в секции "Сервисы" end
// --- //
// --- //
// --- //
// Слайдер в Блоке с товарами и акциями start

const changeSlidedTwoRight = document.querySelector(".slider-button-right-two");
const changeSlidedTwoLeft = document.querySelector(".slider-button-left-two");
const changeSlidedOneRight = document.querySelector(".slider-button-right-one");
const changeSlidedTOneLeft = document.querySelector(".slider-button-left-one");

const changeSlidedOne = document.querySelector(".slider-info-blocks-one");
const changeSlidedTwo = document.querySelector(".slider-info-blocks-two");

// Переключение по стрелкам start
changeSlidedTwoRight.addEventListener("click", function () {
  changeSlidedTwo.classList.add("slider-info-blocks-hidden");
  changeSlidedOne.classList.remove("slider-info-blocks-hidden");
});

changeSlidedTwoLeft.addEventListener("click", function () {
  changeSlidedTwo.classList.add("slider-info-blocks-hidden");
  changeSlidedOne.classList.remove("slider-info-blocks-hidden");
});

changeSlidedOneRight.addEventListener("click", function () {
  changeSlidedTwo.classList.remove("slider-info-blocks-hidden");
  changeSlidedOne.classList.add("slider-info-blocks-hidden");
});

changeSlidedTOneLeft.addEventListener("click", function () {
  changeSlidedTwo.classList.remove("slider-info-blocks-hidden");
  changeSlidedOne.classList.add("slider-info-blocks-hidden");
});
// Переключение по стрелкам end

const changeSlidedTwoButtonLeft = document.querySelector(".bottom-btn-slide-left-two");
const changeSlidedOneButtonRight = document.querySelector(".bottom-btn-slide-right-two");

// Переключение по кнопкам start
changeSlidedTwoButtonLeft.addEventListener("click", function () {
  changeSlidedTwo.classList.add("slider-info-blocks-hidden");
  changeSlidedOne.classList.remove("slider-info-blocks-hidden");
});

changeSlidedOneButtonRight.addEventListener("click", function () {
  changeSlidedTwo.classList.remove("slider-info-blocks-hidden");
  changeSlidedOne.classList.add("slider-info-blocks-hidden");
});
// Переключение по кнопкам end

// Слайдер в Блоке с товарами и акциями  end
