const productCard = document.querySelectorAll(`.catalog-product-card`);
const productBuyBtns = document.querySelectorAll(`.catalog-product-card__buy-btn`);
const modalWindow = document.querySelector(`.modal-in-cart`);
const modalCloseBtns = modalWindow.querySelector(`.modal-close-btn`);

[...productCard].forEach((card) => {
  card.addEventListener(`mouseover`, () => {
    card.querySelector(`img`).style.display = `none`;
    card.querySelector(`.catalog-product-card__popup`).style.display = `block`;
  });

  card.addEventListener(`mouseout`, () => {
    card.querySelector(`img`).style.display = `block`;
    card.querySelector(`.catalog-product-card__popup`).style.display = `none`;
  });
});

[...productBuyBtns].forEach((it) => {
  it.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalWindow.classList.add(`modal--active`);
  });
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
