// @ts-check
'use strict';

const home = document.getElementById('homeCnt');
const about = document.getElementById('aboutCnt');
const prj = document.getElementById('projectsCnt');
const contact = document.getElementById('contactCnt');
const merch = document.getElementById('merchantiseCnt');
const menu = document.getElementById('menu');

const pageList = [home, about, prj, merch, contact];

const homeBt = document.getElementById('home');
const aboutBt = document.getElementById('about');
const projectsBt = document.getElementById('projects');
const merchBt = document.getElementById('merchantise');
const contactBt = document.getElementById('contact');
const aboutAccessBt = document.getElementById('aboutBt');

const buttonList = [
  homeBt,
  aboutBt,
  projectsBt,
  merchBt,
  contactBt,
  aboutAccessBt,
];

// Dom Elements

const lists = {
  ol: document.getElementsByTagName('ol'),
  ul: document.getElementsByTagName('ul'),
  li: document.getElementsByTagName('li'),
};

const a = document.getElementsByTagName('a');
const p = document.getElementsByTagName('p');
const h1 = document.getElementsByTagName('h1');
const h2 = document.getElementsByTagName('h2');
const h3 = document.getElementsByTagName('h3');
const h4 = document.getElementsByTagName('h4');
const h5 = document.getElementsByTagName('h5');
const div = document.getElementsByTagName('div');
const span = document.getElementsByTagName('span');
const section = document.getElementsByTagName('section');
const footer = document.getElementsByTagName('footer');
const header = document.getElementsByTagName('header');
const button = document.getElementsByTagName('button');
const input = document.getElementsByTagName('input');
const label = document.getElementsByTagName('label');
const form = document.getElementsByTagName('form');

const domElements = {
  lists: lists,
  a: a,
  p: p,
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  div: div,
  span: span,
  section: section,
  footer: footer,
  header: header,
  button: button,
  input: input,
  label: label,
  form: form,
};

// Class Picker

const classStyle = (className, attr, value) => {
  const element = document.querySelectorAll(className);

  const elements = [...element];

  elements.forEach((i) => {
    return i.style.setProperty(attr, value);
  });

  return classStyle;
};

//root style editing

const rootStyle = (variable, value) => {
  document.documentElement.style.setProperty(variable, value);
};

const specialityEffects = () => {
  const specialities = ['Tattoo Artist', 'Make Up Artist', 'Piercing Master'];

  const specElem = document.getElementById('speciality');
  specElem.innerHTML = '';

  let letter = 0,
    word = 0,
    write = 1,
    time = 150;

  let newArray;

  const writer = () => {
    if (write == 0 && letter == specialities[word].length) {
      time = 2000;
    } else if (write == 0 && letter < specialities[word].length) {
      time = 50;
    } else {
      time = 150;
    }
    setTimeout(() => {
      if (letter < specialities[word].length && write == 1) {
        specElem.innerHTML += specialities[word].split('')[letter];
        letter++;
        if (letter == specialities[word].length) {
          write = 0;
        }
      } else if (write == 0 && letter >= 0) {
        newArray = [...specElem.innerHTML];
        newArray.splice(letter, 1);
        specElem.innerHTML = newArray.join('');
        letter--;
      } else {
        write = 1;
        word++;
        letter = 0;
        if (word == 3) {
          word = 0;
        }
      }

      writer();
    }, time);
  };

  writer();
};

specialityEffects();

export { pageList, buttonList, menu, domElements, classStyle, rootStyle };
