const home = document.getElementById('homeCnt');
const about = document.getElementById('aboutCnt');
const prj = document.getElementById('projectsCnt');
const contact = document.getElementById('contactCnt');
const menu = document.getElementById('menu');

const pageList = [home, about, prj, contact];

const homeBt = document.getElementById('home');
const aboutBt = document.getElementById('about');
const projectsBt = document.getElementById('projects');
const contactBt = document.getElementById('contact');

const buttonList = [homeBt, aboutBt, projectsBt, contactBt];

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

export { pageList, buttonList, menu, domElements, classStyle, rootStyle };
