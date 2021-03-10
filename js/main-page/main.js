const modalWindows = document.querySelectorAll(`.modal`);
const modalCloseBtns = document.querySelectorAll(`.modal-close-btn`);

[...modalCloseBtns].forEach((btn) => {
  btn.addEventListener(`click`, (evt) => {
    evt.target.parentNode.classList.remove(`modal--active`);
    evt.target.parentNode.classList.remove(`modal--error`);
  });
});

[...modalWindows].forEach((it) => {
  document.addEventListener(`keydown`, (evt) => {
    if (it.classList.contains(`modal--active`) &&
        (evt.key === `Esc` || evt.key === `Escape`)) {
          it.classList.remove(`modal--active`);
          it.classList.remove(`modal--error`);
        }
  });
});

/* feedback modal */

const modalFeedback = document.querySelector(`.modal-feedback`);
const feedbackLink = document.querySelector(`.contacts .site-link`);
const feedbackUserName = modalFeedback.querySelector(`#modal-feedback__user-name`);
const feedbackUserMail = modalFeedback.querySelector(`#modal-feedback__user-mail`);
const feedbackMessage = modalFeedback.querySelector(`#modal-feedback__message`);

let isLocalStorageExist = true;
let storedUserName = ``;
let storedUserMail = ``;

try {
  storedUserName = localStorage.getItem(`userName`);
  storedUserMail = localStorage.getItem(`userMail`);
} catch(error) {
  isLocalStorageExist = false;
  throw new Error(error);
}

feedbackLink.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalFeedback.classList.add(`modal--active`);

  if (storedUserName) {
    feedbackUserName.value = storedUserName;
    feedbackUserMail.value = storedUserMail;
    feedbackMessage.focus();
  } else {
    feedbackUserName.focus();
  }
});

modalFeedback.querySelector(`form`).addEventListener(`submit`, (evt) => {
  if (!feedbackUserName.value || !feedbackUserMail.value) {
    evt.preventDefault();
    modalFeedback.classList.remove(`modal--error`);
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add(`modal--error`);
  } else {
    if (isLocalStorageExist) {
      localStorage.setItem(`userName`, feedbackUserName.value);
      localStorage.setItem(`userMail`, feedbackUserMail.value);
    }
  }
});

/* map modal */

const modalMap = document.querySelector(`.modal-map`);
const mapLink = document.querySelector(`.contacts__map-link`);

mapLink.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalMap.classList.add(`modal--active`);
});

/* in-cart modal */

const modalInCart = document.querySelector(`.modal-in-cart`);
const productCard = document.querySelectorAll(`.catalog-product-card`);
const productBuyBtns = document.querySelectorAll(`.catalog-product-card__buy-btn`);

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
    modalInCart.classList.add(`modal--active`);
  });
});

/* promo-slider */

const promoSlider = document.querySelector(`.promo-slider`);
const promoSliderNav = promoSlider.querySelector(`.promo-slider__nav`);
const promoSliderNavBtns = promoSliderNav.querySelectorAll(`button`);
const promoSliderControls = promoSlider.querySelector(`.promo-slider__controls`);
const promoSliderControlsBtns = promoSliderControls.querySelectorAll(`button`);
const slideCount = promoSlider.querySelectorAll(`.promo-slider__list-item`).length;

const disableSlide = (number) => {
  promoSlider.classList.remove(`promo-slider__slide-${number}`);

  promoSlider
    .querySelector(`.promo-slider__list-item:nth-child(${number})`)
    .classList.remove(`promo-slider__list-item--active`);

  promoSliderControls
    .querySelector(`button:nth-child(${number})`)
    .classList.remove(`promo-slider__controls--active`);
};

const enableSlide = (number) => {
  promoSlider.classList.add(`promo-slider__slide-${number}`);

  promoSlider
    .querySelector(`.promo-slider__list-item:nth-child(${number})`)
    .classList.add(`promo-slider__list-item--active`);

  promoSliderControls
    .querySelector(`button:nth-child(${number})`)
    .classList.add(`promo-slider__controls--active`);
};

const changeSlide = (evt) => {
  if (currentSlide === 1) {
    disableSlide(currentSlide);

    currentSlide = evt.target.dataset.id === `prev`
      ? currentSlide = slideCount
      : currentSlide = currentSlide + 1;

    enableSlide(currentSlide);

  } else if (currentSlide === slideCount) {
    disableSlide(currentSlide);

    currentSlide = evt.target.dataset.id === `prev`
    ? currentSlide = currentSlide - 1
      : currentSlide = 1;

    enableSlide(currentSlide);

  } else {
    disableSlide(currentSlide);

    currentSlide = evt.target.dataset.id === `prev`
      ? currentSlide = currentSlide - 1
      : currentSlide = currentSlide + 1;

    enableSlide(currentSlide);
  }
};

let currentSlide = 1;

[...promoSliderNavBtns].forEach((btn) => {
  btn.addEventListener(`click`, changeSlide);
});

[...promoSliderControlsBtns].forEach((btn) => {
  btn.addEventListener(`click`, (evt) => {
    const number = +evt.target.dataset.id;

    if (currentSlide === number) {
      return;
    } else {
      disableSlide(currentSlide);
      currentSlide = number;
      enableSlide(currentSlide);
    }
  });
});

/* services slider */

const services = document.querySelector(`.services`);
const servicesTabs = services.querySelectorAll(`button`);

servicesTabs.forEach((tab) => {
  tab.addEventListener(`click`, (evt) => {
    const id = evt.target.dataset.id;
    const currentTab = services.querySelector(`.services-list__item--active`);
    const currentDesc = services.querySelector(`.services-desc-list__item--active`);

  if (evt.target.parentElement.classList.contains(`services-list__item--active`)) {
    return;
  } else {
    currentTab.classList.remove(`services-list__item--active`);
    currentDesc.classList.remove(`services-desc-list__item--active`);

    evt.target.parentElement.classList.add(`services-list__item--active`);
    services
      .querySelector(`.services-desc-list__item[data-id=${id}]`)
      .classList.add(`services-desc-list__item--active`);
  }
  });
});

