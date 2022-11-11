import { pageList, buttonList, classStyle } from './elements.js';

const pageTransition = (...args) => {
  // ~~~~~~~~~~ Event Listeners Handler ~~~~~~~~~~
  for (let k = 0; k < buttonList.length; k++) {
    buttonList[k].addEventListener('click', openTab);
  }

  // ~~~~~~~~~~ New / Old Element Declaration ~~~~~~~~~~
  let element = {
    old: document.getElementById('homeCnt'),
    new: undefined,
  };

  let id;

  // ~~~~~~~~~~ Setting Containers' width to 0 ~~~~~~~~~~
  pageList.forEach((e) => {
    return (e.style.width = 0);
  });

  // ~~~~~~~~~~ Setting Home's Width to 90% ~~~~~~~~~~
  pageList[0].style.width = '90%';

  // ~~~~~~~~~~ Page Transition Handler ~~~~~~~~~~
  function openTab() {
    id = `${this.textContent.toLowerCase()}Cnt`; //Analoga me to koumpi pou patietai kai to keimeno pou exei, kataskevasei to ID pou tha dialextei argotera

    if (id.indexOf('home') == 0 && element.new == undefined) {
    } else {
      for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].removeEventListener('click', openTab);
      }

      for (let i = 0; i < pageList.length; i++) {
        // pageList[i].style.width = 0;
        pageList[i].animationName = 'none';
      }

      element.new = document.getElementById(id);
      element.new.style.width = '90%';
      element.old.style.animationName = 'slideOut';
      element.new.style.animationName = 'slideIn';

      setTimeout(function () {
        element.old.style.width = 0;
        element.old = element.new;

        for (let i = 0; i < buttonList.length; i++) {
          buttonList[i].addEventListener('click', openTab);
        }
      }, 1000);
    }
  }
};

window.onload = pageTransition(pageList, buttonList);
