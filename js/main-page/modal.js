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
