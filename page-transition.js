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
    return (e.style.width = 0);
  });

  // ~~~~~~~~~~ Setting Home's Width to 90% ~~~~~~~~~~
  pageList[0].style.width = '90%';

  // ~~~~~~~~~~ Page Transition Handler ~~~~~~~~~~
  function openTab() {
    id = `${this.textContent.toLowerCase()}Cnt`; //Analoga me to koumpi pou patietai kai to keimeno pou exei, kataskevasei to ID pou tha dialextei argotera
    element.new = document.getElementById(id);

    if (element.new == element.old) {
      console.error('sks');
    } else {
      buttonList.forEach((e) => {
        return e.removeEventListener('click', openTab);
      });

      classStyle('container', 'animationName', 'none');

      element.new.style.width = '90%';
      element.old.style.animationName = 'slideOut';
      element.new.style.animationName = 'slideIn';

      setTimeout(function () {
        element.old.style.width = 0;
        element.old = element.new;

        buttonList.forEach((e) => {
          return e.addEventListener('click', openTab);
        });
      }, 1000);
    }
    //If end
  }
  //openTab() end
};

window.onload = pageTransition(pageList, buttonList);
