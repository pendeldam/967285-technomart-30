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
