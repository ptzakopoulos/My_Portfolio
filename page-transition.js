import { pageList, buttonList } from './elements.js';

const pageTransition = (pageList, buttonList) => {
  console.log(pageList[1]);

  for (let k = 0; k <= 5; k++) {}

  for (let k = 0; k < buttonList.length; k++) {
    buttonList[k].addEventListener('click', openTab);
    console.log('success');
  }
  let element = {
    old: document.getElementById('homeCnt'),
    new: undefined,
  };
  let id;

  function openTab() {
    console.log('bike');

    id = `${this.textContent.toLowerCase()}Cnt`; //Analoga me to koumpi pou patietai kai to keimeno pou exei, kataskevasei to ID pou tha dialextei argotera

    if (id.indexOf('home') == 0 && element.new == undefined) {
      console.log('sks');
    } else {
      for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].removeEventListener('click', openTab);
      }

      for (let i = 0; i < pageList.length; i++) {
        pageList[i].style.width = 0;
        pageList[i].animationName = 'none';
      }

      element.new = document.getElementById(id);
      element.old.style.animationName = 'slideOut';
      element.new.style.animationName = 'slideIn';

      setTimeout(function () {
        element.old = element.new;

        for (let i = 0; i < buttonList.length; i++) {
          buttonList[i].addEventListener('click', openTab);
        }
      }, 1000);
    }
  }
};

window.onload = pageTransition(pageList, buttonList);
