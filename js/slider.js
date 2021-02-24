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
