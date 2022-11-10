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

const domElements = {
  lists: lists,
  a: a,
};

export { pageList, buttonList, menu, domElements };
