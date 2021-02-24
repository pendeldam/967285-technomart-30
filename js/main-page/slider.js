/* promo-slider */

const promoSlider = document.querySelector(`.promo-slider`);
const promoSliderNav = promoSlider.querySelector(`.promo-slider__nav`);
const promoSliderNavBtns = promoSliderNav.querySelectorAll(`button`);
const promoSliderControls = promoSlider.querySelector(`.promo-slider__controls`);

let currentSlide = 1;

[...promoSliderNavBtns].forEach((btn) => {
  btn.addEventListener(`click`, () => {
    if (currentSlide > 1) {
      promoSlider.classList.remove(`promo-slider__slide-${currentSlide}`);

      promoSlider
        .querySelector(`.promo-slider__list-item:nth-child(${currentSlide})`)
        .classList.remove(`promo-slider__list-item--active`);

      promoSliderControls
        .querySelector(`button:nth-child(${currentSlide})`)
        .classList.remove(`promo-slider__controls--active`);

      currentSlide--;

      promoSlider.classList.add(`promo-slider__slide-${currentSlide}`);

      promoSlider
        .querySelector(`.promo-slider__list-item:nth-child(${currentSlide})`)
        .classList.add(`promo-slider__list-item--active`);

      promoSliderControls
        .querySelector(`button:nth-child(${currentSlide})`)
        .classList.add(`promo-slider__controls--active`);

    } else {
      promoSlider.classList.remove(`promo-slider__slide-${currentSlide}`);
      promoSlider
        .querySelector(`.promo-slider__list-item:nth-child(${currentSlide})`)
        .classList.remove(`promo-slider__list-item--active`);

      promoSliderControls
        .querySelector(`button:nth-child(${currentSlide})`)
        .classList.remove(`promo-slider__controls--active`);

      currentSlide = 2;

      promoSlider.classList.add(`promo-slider__slide-${currentSlide}`);
      promoSlider
        .querySelector(`.promo-slider__list-item:nth-child(${currentSlide})`)
        .classList.add(`promo-slider__list-item--active`);

      promoSliderControls
        .querySelector(`button:nth-child(${currentSlide})`)
        .classList.add(`promo-slider__controls--active`);
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
