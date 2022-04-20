let throttle = require('lodash.throttle');
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onEmailInput, 500));

populateTextarea();

function onEmailInput() {
  const formData = JSON.stringify({ email: form.email.value, message: form.message.value });
    localStorage.setItem(STORAGE_KEY, formData);
  };

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function populateTextarea() {
  const getData = localStorage.getItem(STORAGE_KEY);
  if (JSON.parse(getData)) {
    form.email.value = JSON.parse(getData).email;
    form.message.value = JSON.parse(getData).message;
  }
};










// ===============================================  bad-1
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   email: document.querySelector('.feedback-form email'),
//   textarea: document.querySelector('.feedback-form textarea'),

// };
// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', onEmailInput);
// refs.textarea.addEventListener('input', onTextareaInput);

// function onTextareaInput(e) {
//   const message = e.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// };

// function onEmailInput(e) {
//   const email = e.target.value;
//   localStorage.setItem(STORAGE_KEY, email);
// };

// function onFormSubmit(e) {};
// function populateTextarea() {};
