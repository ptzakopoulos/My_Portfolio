// @ts-check
'use strict';

export default function (pageList, buttonList, classStyle) {
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
  let clickedBt;

  // ~~~~~~~~~~ Setting Containers' width to 0 ~~~~~~~~~~
  pageList.forEach((e) => {
    return (e.style.width = '0');
  });

  // ~~~~~~~~~~ Setting Home's Width to 85% ~~~~~~~~~~
  pageList[0].style.width = '85%';

  // ~~~~~~~~~~ Page Transition Handler ~~~~~~~~~~
  function openTab() {
    //text = clicked button's textContent
    let text = this.textContent;
    //words = array that holds clicked button's content splitted by ' ' space
    let words = text.split(' ');
    let result = '';

    /* 
    All buttons' content containes the key words (Home, About, etc.) + words like 'My' etc.
    The next proccess gets the key words by checking if the length of each word is >= 4
    because all the key words shave length >= 4 and the rest words < 4
    */
    words.forEach((e) => {
      if (e.length >= 4) {
        return (result = e);
      }
    });

    //id is getting its value by the key words that have gotten previousely and creates the is of focused container
    id = `${result.toLowerCase()}Cnt`;

    element.new = document.getElementById(id);

    // element.new.scrollTo(0, 0); // *****************

    if (element.new == element.old) {
    } else {
      buttonList.forEach((e) => {
        //Removing the eventListeners so the user will not be able to click the nav buttons untill the transition is done
        //This is to prevent animation or visual glitches which can happen in case of multiple requests while using animation
        return e.removeEventListener('click', openTab);
      });

      //Setting animation Name of containers to none to prevent innactivity due to equality of the old and the new animation Name
      classStyle('.container', 'animation-name', 'none');
      classStyle('.container', 'overflow', 'hidden');

      //Setting the focused container's width and animation Name / Setting old container's animationName
      element.new.style.width = '85%';
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
}
