// @ts-check
'use strict';

import { pageList, buttonList, classStyle } from './elements.js';

const pageTransition = (...args) => {
  // ~~~~~~~~~~ Event Listeners Handler ~~~~~~~~~~

  buttonList.forEach((e) => {
    return e.addEventListener('click', openTab);
  });

  // ~~~~~~~~~~ New / Old Element Declaration ~~~~~~~~~~
  let element = {
    old: document.getElementById('homeCnt'),
    new: undefined,
  };

  let id;

  // ~~~~~~~~~~ Setting Containers' width to 0 ~~~~~~~~~~
  pageList.forEach((e) => {
    return (e.style.width = '0');
  });

  // ~~~~~~~~~~ Setting Home's Width to 90% ~~~~~~~~~~
  pageList[0].style.width = '90%';

  // ~~~~~~~~~~ Page Transition Handler ~~~~~~~~~~
  function openTab() {
    let text = this.textContent;
    let words = text.split(' ');
    let result = '';

    //Ελέγχει τα Key Words απο τα κουμπιά που πατάει ο Χρήστης. Τα Key Words (Home, About, Projects κλτ) έχουν γράμματα > 4, οπότε παρακάτω ελέγχεται αν η κάθε λέξη του κάθε κουμπιού που πατάει ο χρήστης έχει γράμματα >= 4 για να ξέρει ποια λέξη θα πάρει ως ID
    words.forEach((e) => {
      if (e.length >= 4) {
        return (result = e);
      }
    });

    id = `${result.toLowerCase()}Cnt`;

    element.new = document.getElementById(id);

    element.new.scrollTo(0, 0); // *****************

    if (element.new == element.old) {
      console.error('sks');
    } else {
      buttonList.forEach((e) => {
        return e.removeEventListener('click', openTab);
      });

      classStyle('.container', 'animation-name', 'none');
      classStyle('.container', 'overflow', 'hidden');

      element.new.style.width = '90%';
      element.old.style.animationName = 'slideOut';
      element.new.style.animationName = 'slideIn';

      setTimeout(function () {
        element.old.style.width = '0';
        element.old = element.new;
        classStyle(`#${id}`, 'overflow', 'auto');

        buttonList.forEach((e) => {
          return e.addEventListener('click', openTab);
        });
      }, 1000);
    }
    //If end
  }
  //openTab() end
};

pageTransition();
