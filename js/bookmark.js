// Добавление выбранных товаров в закладки start
const InBookmarkBtns = document.querySelectorAll(`.product-button-boomarks`);
const changeBookmark = document.querySelector(`.bookmark-inner`);
const bookmarkNumber = document.querySelector(`.bookmarks-numder-dynamic`);
const bookmarkIco = document.querySelector(".bookmark-ico");
const getBoomarkIcoActive = bookmarkIco.querySelector(`.bookmark-ico-path`);
let bookmarkCount = bookmarkNumber.innerHTML;

for (let i = 0; i < InBookmarkBtns.length; i++) {
  const InBookmarkBtn = InBookmarkBtns[i];
  InBookmarkBtn.addEventListener("click", function () {
    bookmarkCount++;
    bookmarkNumber.innerHTML = bookmarkCount;
    if (bookmarkCount > 0) {
      changeBookmark.classList.add(`add-background-color`);
      getBoomarkIcoActive.classList.add(`bookmark-ico-path-active`);
    };
  });
};
// Добавление выбранных товаров в закладки end
