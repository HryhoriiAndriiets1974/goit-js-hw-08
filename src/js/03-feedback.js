let throttle = require('lodash.throttle');
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onEmailInput, 500));

populateTextarea();

function onEmailInput() {
  const formData = JSON.stringify({
    email: form.email.value,
    message: form.message.value });
    localStorage.setItem(STORAGE_KEY, formData);
  };

function onFormSubmit(e) {
  e.preventDefault();
  const emailData = e.target.email.value;
  const messageData = e.target.message.value;
  if (emailData === '' || messageData === '') {
       alert('Please enter your email or message');
       return; };
  console.log('e-mail: ', emailData);
  console.log('message: ', messageData);
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
