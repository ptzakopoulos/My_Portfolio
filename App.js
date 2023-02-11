import projectsModule from './Modules/projects.js';
import pagesModule from './Modules/page-transition.js';
import colorsModule from './Modules/color-picker.js';
import aboutModule from './Modules/speciality.js';
import carousel from './Modules/carousel.js';
// import countries from './Modules/phoneCodes.json' assert { type: 'json' };

// ~~~~~~~~~~~~~~~~~~~~ Global Variables - Library ~~~~~~~~~~~~~~~~~~~~

const home = document.getElementById('homeCnt');
const about = document.getElementById('aboutCnt');
const prj = document.getElementById('projectsCnt');
const contact = document.getElementById('contactCnt');
const merch = document.getElementById('merchandiseCnt');
const menu = document.getElementById('menu');

const pageList = [home, about, prj, merch, contact];

const homeBt = document.getElementById('home');
const aboutBt = document.getElementById('about');
const projectsBt = document.getElementById('projects');
const merchBt = document.getElementById('merchandise');
const contactBt = document.getElementById('contact');
const aboutAccessBt = document.getElementById('aboutBt');
const projectsAccessBt = document.getElementById('projectsBt');
const merchAccessBt = document.getElementById('merchandiseBt');

const buttonList = [
  homeBt,
  aboutBt,
  projectsBt,
  merchBt,
  contactBt,
  aboutAccessBt,
  projectsAccessBt,
  merchAccessBt,
];

// Class Picker
const classStyle = (className, attr, value) => {
  const element = document.querySelectorAll(className);

  const elements = [...element];

  elements.forEach((i) => {
    return i.style.setProperty(attr, value);
  });
};

//root style editing
const rootStyle = (variable, value) => {
  document.documentElement.style.setProperty(variable, value);
};

// ~~~~~~~~~~~~~~~~~~~~~ Calling Modules ~~~~~~~~~~~~~~~~~~~~~

// fetch('./Modules/phoneCodes.json')
//   .then((response) => response.json())
//   .then((json) => console.log(json[0]));

let win = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const screenCheck = () => {
  switch (true) {
    case win.width >= 1000:
      // pagesModule(pageList, buttonList, classStyle);
      break;
    default:
      classStyle('.container', 'width', '100%');
      classStyle('.container', 'overflow', 'auto');
      break;
  }
};
//Checking the screen width on load
screenCheck();

window.addEventListener('resize', () => {
  win.width = window.innerWidth;
  win.height = window.innerHeight;
  screenCheck();
});
pagesModule(pageList, buttonList, classStyle);
carousel();
projectsModule(classStyle);
colorsModule(rootStyle);
aboutModule();

// ~~~~~~~~~~~~~~~~~~~~~ Contact Form ~~~~~~~~~~~~~~~~~~~~~

const countries = [];
const dial_code = [];

fetch('./Modules/phoneCodes.json')
  .then((response) => response.json())
  .then((data) => {
    let counter = 0;
    for (const object of data) {
      countries[counter] = object.name;
      dial_code[counter] = object.dial_code;
      counter++;
    }
    passingDataToHtml();
  });

const passingDataToHtml = () => {
  const selector = document.getElementById('country');
  const phoneCode = document.getElementById('phone_code');

  console.log(countries.length);

  for (let i = 0; i < countries.length; i++) {
    const optionCreate = document.createElement('option');
    selector.appendChild(optionCreate);
    const option = document.querySelectorAll('option')[i];
    option.setAttribute('value', countries[i]);
    option.innerHTML = countries[i];
  }

  const autoFill = (e) => {
    const countrySelected = e.target.value;
    // console.log(countrySelected);
    for (let i = 0; i < countries.length; i++) {
      if (countries[i] == countrySelected) {
        phoneCode.value = dial_code[i];
      }
    }
  };

  selector?.addEventListener('change', autoFill);
};

// __________ Input Check with regular Expressions __________

const sendButton = document.getElementById('submit');
const inputs = document.querySelectorAll('input');

const regs = {
  email: [/@gmail.com$/, /@gmail.gr$/, /@hotmail.com$/, /@hotmail.com$/],
  phone: /^\d{10}$/,
  name: /^[a-zA-Z]{2,16}$/,
};

const inputValidation = () => {
  let array = [...document.getElementsByClassName('input')];

  if (array.every((e) => e.attributes[0].value == 'correct')) {
    sendButton.removeAttribute('disabled');
    sendButton.classList.remove('disabled');
    return true;
  } else {
    return false;
  }
};

const formValidation = (input) => {
  switch (true) {
    //Email validation
    case input.target.name == 'email':
      if (regs.email.every((e) => e.test(input.target.value) == false)) {
        input.target.style.border = '2px solid red';
        input.target.attributes[0].value = 'incorrect';
        sendButton.setAttribute('disabled', 'disabled');
        sendButton.classList.add('disabled');
      } else {
        input.target.style.border = 'none';
        input.target.attributes[0].value = 'correct';
      }
      break;
    //Phone Validation
    case input.target.name == 'phone':
      if (regs.phone.test(input.target.value)) {
        input.target.style.border = 'none';
        input.target.attributes[0].value = 'correct';
      } else {
        input.target.attributes[0].value = 'incorrect';
        input.target.style.border = '2px solid red';
        sendButton.setAttribute('disabled', 'disabled');
        sendButton.classList.add('disabled');
      }
      break;
    //First / Last Name validation
    case input.target.name == 'firstName' || input.target.name == 'lastName':
      if (regs.name.test(input.target.value)) {
        input.target.style.border = 'none';
        input.target.attributes[0].value = 'correct';
      } else {
        input.target.attributes[0].value = 'incorrect';
        input.target.style.border = '2px solid red';
        sendButton.setAttribute('disabled', 'disabled');
        sendButton.classList.add('disabled');
      }
      break;
  }
  inputValidation();
};

inputs.forEach((e) => {
  e.addEventListener('blur', formValidation);
});

sendButton.addEventListener('click', (e) => {
  if (inputValidation() == true) {
  } else {
    e.preventDefault;
  }
});
