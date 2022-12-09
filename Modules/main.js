// @ts-check
'use strict';

import projectsModule from './projects.js';
import pagesModule from './page-transition.js';
import colorsModule from './color-picker.js';
import aboutModule from './speciality.js';

// ~~~~~~~~~~~~~~~~~~~~ Global Variables - Library ~~~~~~~~~~~~~~~~~~~~

let win = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.onresize = () => {
  win.width = window.innerWidth;
  win.height = window.innerHeight;
  console.log(`WIndow width = ${win.width} | Window Height = ${win.height}`);
};

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

const buttonList = [
  homeBt,
  aboutBt,
  projectsBt,
  merchBt,
  contactBt,
  aboutAccessBt,
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

switch (true) {
  case win.width >= 1100:
    pagesModule(pageList, buttonList, classStyle);
    break;
  default:
    break;
}

projectsModule(classStyle);
colorsModule(rootStyle);
aboutModule();
