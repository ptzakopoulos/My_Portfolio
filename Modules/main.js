// @ts-check
'use strict';

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

// ~~~~~~~~~~~~~~~~ About Page - Writing Deleting Effect ~~~~~~~~~~~~~~~~
const specialityEffects = () => {
  //Specialities text
  const specialities = ['Tattoo Artist', 'Make Up Artist', 'Piercing Master'];

  //Getting the span element / Where the speciality is going to be displayed
  const specElem = document.getElementById('speciality');

  //Setting Speciality(span) content to '' empty string
  specElem.innerHTML = '';

  /* Paremeteres 
    letter  - Counts the length of the arrays that hold the letters of each word. Example : 'Tatto Artist'.length = 12
    word    - Counts the length of specialities array that holds the words that are going to be displayed - length = 3
    write   - When Write = 1 function Writer() writes and when write = 0 function Writer() erases
    time    - setTimeout's time handler so write is medium speed, erase is fast speed and hold is slower speed
  */
  let letter = 0,
    word = 0,
    write = 1,
    time = 150;

  let newArray;

  const writer = () => {
    if (write == 0 && letter == specialities[word].length) {
      //When the function completes the writing proccess, sets the time of next call to 2s so the user will have time to read the word
      time = 2000;
    } else if (write == 0 && letter < specialities[word].length) {
      //When the 2s period is over, time to erase the word gets shorter
      time = 50;
    } else {
      //Setting the time back to 150 and starts writing the next word
      time = 150;
    }

    setTimeout(() => {
      if (letter < specialities[word].length && write == 1) {
        /* While the letter counter < word's length and write == 1, each word of specialities array is splitted 
        to an array that holds each letter as an array element and the span element get's the next value of it every time 
        the function is called
        */
        specElem.innerHTML += specialities[word].split('')[letter];

        //Increasing letter counter -> getting the next letter of the word
        letter++;
        if (letter == specialities[word].length) {
          //if the letter counter gets to the word's length, write = 0 -> the erasing proccess begins
          write = 0;
        }
      } else if (write == 0 && letter >= 0) {
        //Erasing proccess - newArray gets the letters of span element
        newArray = [...specElem.innerHTML];

        //Since letter counter is at the maximum value (word's length), by using splice, each time the funcion is called
        //it get's and deletes the last element of the array on every callBack
        newArray.splice(letter, 1);

        //Setting the value of span equals to the newArray by character - as string (not array)
        specElem.innerHTML = newArray.join('');

        //Decreasing the letter counter in order to get the previues letter on every callback
        letter--;
      } else {
        //If all of the above is cimpleted write = 1 - Back to writing | word++ - getting the next word | letter = 0 - start from first letter
        write = 1;
        word++;
        letter = 0;
        if (word == specialities.length) {
          //Setting the word counter to 0 when it gets to the length value
          word = 0;
        }
      }

      //writer() function callBack
      writer();
    }, time);
  };

  //Writer() Function first Call
  writer();
};

specialityEffects();

// ~~~~~~~~~~~~~~~~ Project Filter ~~~~~~~~~~~~~~~~
const projectFilter = () => {
  //Filter Buttons selector
  const all = document.getElementById('prj-all');
  const bw = document.getElementById('prj-bw');
  const colored = document.getElementById('prj-colored');
  const face = document.getElementById('prj-face');
  const body = document.getElementById('prj-body');

  const filterBts = [all, bw, colored, face, body];

  //Filter proccess
  const filter = (event) => {
    //Filter-Bt color Handler
    classStyle('.filter-item', 'color', 'var(--toggle-text)');
    classStyle(`#${event.target.id}`, 'color', 'var(--picked-color)');

    //clicked Id selector
    const id = event.target.id;

    //Id splitter - Get the Keyword - id
    const selectedClass = id.split('-')[1];

    //Setting Project Items to display : none
    classStyle('.prj-item', 'display', 'none');

    //Setting the Keyword's Classes to block / bw/colored/body/face
    classStyle(`.${selectedClass}`, 'display', 'block');

    //Case of clicking 'all' bt
    if (id == 'prj-all') {
      classStyle('.prj-item', 'display', 'block');
    }
  };

  //Adding click event listeners to all filter buttons
  filterBts.forEach((e) => {
    e?.addEventListener('click', filter);
  });

  // ~~~~~ Overlay ~~~~~
  const prjItem = document.querySelectorAll('.prj-item');
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlay-image');
  const prjTitle = document.getElementById('prj-title');
  const prjDesc = document.getElementById('prj-description');
  const closeBt = document.getElementById('close');

  const openOverlay = (e) => {
    overlay.style.display = 'flex';

    const src = e.target.attributes[1].value;
    overlayImage.setAttribute('src', src);

    const name = e.target.attributes[2].value;
    prjTitle.innerText = name;

    const content = e.target.attributes[3].value;
    prjDesc.innerHTML = content;
  };

  prjItem.forEach((e) => {
    e.addEventListener('click', openOverlay);
  });

  const closeOverlay = () => {
    overlay.style.display = 'none';
  };

  closeBt.addEventListener('click', closeOverlay);
};

//Calling projectFilter Function
projectFilter();

// ~~~~~~~~~~~~~~~~ Project Image Inspect ~~~~~~~~~~~~~~~~
const imageInspect = () => {};

export { pageList, buttonList, menu, domElements, classStyle, rootStyle };
