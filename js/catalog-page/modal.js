const productBuyBtn = document.querySelector(`.catalog-product-card__buy-btn`);
const modalWindow = document.querySelector(`.modal-in-cart`);
const modalCloseBtns = modalWindow.querySelector(`.modal-close-btn`);

productBuyBtn.addEventListener(`click`, () => {
  modalWindow.classList.add(`modal--active`);
});

modalCloseBtns.addEventListener(`click`, () => {
  modalWindow.classList.remove(`modal--active`);
});

document.addEventListener(`keydown`, (evt) => {
  if (modalWindow.classList.contains(`modal--active`) &&
    (evt.key === `Esc` || evt.key === `Escape`)) {
      modalWindow.classList.remove(`modal--active`);
    }
});
