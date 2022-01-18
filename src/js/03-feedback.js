import { throttle } from "lodash";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

let refs ={
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea"),
}
refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(formInput, 500));

populateTextInput();

function formSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function formInput(event){
    formData[event.target.name] =  event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextInput() {
    const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));
     if(userData && Object.values(userData) !== [ ] ) {
      refs.form.email.value = userData.email;
      refs.form.message.value = userData.message;
      formData.email = userData.email;
      formData.message = userData.message;
     }
  }
