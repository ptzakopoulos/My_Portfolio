export default function (pageList, buttonList, classStyle) {
  let id;

  const pcPageTransition = () => {
    // ~~~~~~~~~~ Event Listeners Handler ~~~~~~~~~~
    buttonList.forEach((e) => {
      return e.addEventListener('click', openTab);
    });

    // ~~~~~~~~~~ New / Old Element Declaration ~~~~~~~~~~
    let element = {
      old: document.getElementById('homeCnt'),
      new: undefined,
    };

    // ~~~~~~~~~~ Setting Containers' width to 0 ~~~~~~~~~~
    pageList.forEach((e) => {
      return (e.style.width = '0');
    });

    // ~~~~~~~~~~ Setting Home's Width to 85% | 100% depending on the device ~~~~~~~~~~
    if (window.innerWidth >= 1000) {
      id == undefined
        ? (pageList[0].style.width = '85%')
        : classStyle(`#${id}`, 'width', '85%');
    } else {
      id == undefined
        ? (pageList[0].style.width = '100%')
        : classStyle(`#${id}`, 'width', '100%');
    }

    // ~~~~~~~~~~ Page Transition Handler ~~~~~~~~~~
    function openTab() {
      //Getting the id of clicked Button or Nav Button and split it in order to get the key word
      const clickedElementId = this.id.split('Bt')[0];

      //id is getting its value by the key words that have gotten previousely and creates the is of focused container
      id = `${clickedElementId.toLowerCase()}Cnt`;

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
        window.innerWidth >= 1000
          ? (element.new.style.width = '85%')
          : (element.new.style.width = '100%');
        // element.new.style.width = '85%';
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

  //Mobile devices page transition function
  const mobilePageTransition = () => {
    const pageSwap = (element) => {
      let clickedElementId;

      if (element.target.id != undefined && element.target.id != '') {
        clickedElementId = element.target.id.split('Bt')[0];
      } else {
        clickedElementId = element.target.parentNode.parentNode.id;
      }

      id = `${clickedElementId.toLowerCase()}Cnt`;
      pageList.forEach((e) => {
        classStyle(`#${e.id}`, 'display', 'none');
      });
      id == undefined
        ? classStyle('#homeCnt', 'display', 'block')
        : classStyle(`#${id}`, 'display', 'block');
    };

    buttonList.forEach((e) => {
      return e.addEventListener('click', pageSwap);
    });
  };

  window.innerWidth >= 1000 ? pcPageTransition() : mobilePageTransition();

  const screenWidthCheck = () => {
    if (window.innerWidth >= 1000) {
      pcPageTransition();
    } else {
      mobilePageTransition();
    }
  };

  window.addEventListener('resize', screenWidthCheck);
}
