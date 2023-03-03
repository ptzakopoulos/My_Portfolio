import projectsModule from './Components/projects.js';
import pagesModule from './Components/page-transition.js';
import colorsModule from './Components/color-picker.js';
import aboutModule from './Components/speciality.js';
import carousel from './Components/carousel.js';

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

pagesModule(pageList, buttonList, classStyle);
carousel(classStyle);
projectsModule(classStyle);
colorsModule(rootStyle);
aboutModule();

// ~~~~~~~~~~~~~~~~~~~~~ Contact Form ~~~~~~~~~~~~~~~~~~~~~

const countries = [];
const dial_code = [];

fetch('./Components/phoneCodes.json')
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

  for (let i = 0; i < countries.length; i++) {
    const optionCreate = document.createElement('option');
    selector.appendChild(optionCreate);
    const option = document.querySelectorAll('#country option')[i];
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
    //Email validation
    case input.target.name == 'emailConfirm':
      if (
        input.target.value != document.getElementById('email').value ||
        input.target.value.length <= 0
      ) {
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

// __________ About Content Toggle on click __________

const aboutContentToggle = () => {
  const aboutContentContainer = document.getElementById('about-content');

  aboutContentContainer.addEventListener('click', () => {
    aboutContentContainer.classList.toggle('closed');
  });
};

aboutContentToggle();

// ~~~~~~~~~~~~~~~~~~~~ Footer Append ~~~~~~~~~~~~~~~~~~~~

const footerContainers = [...document.getElementsByClassName('footer')];
const footerContent = `
<div class="footer-icons">
<i class="fa-brands fa-pinterest-p transition"></i>
<i class="fa-brands fa-instagram transition"></i>
<i class="fa-brands fa-facebook-f transition"></i>
<i class="fa-brands fa-linkedin-in transition"></i>
<i class="fa-regular fa-envelope transition"></i>
<i class="fa-solid fa-phone transition"></i>
</div>
<div class="copyrights">
<i> Copyright © 2023</i>
</div>`;
footerContainers.forEach((e) => {
  e.innerHTML = footerContent;
});
