//ts-check
'use strict';
import {
  pageList,
  buttonList,
  menu,
  domElements,
  classStyle,
  rootStyle,
} from './elements.js';

window.onload = () => {
  // ~~~~~~~~~~ Colors ~~~~~~~~~~
  const red = document.getElementById('red');
  const green = document.getElementById('green');
  const blue = document.getElementById('blue');
  const yellow = document.getElementById('yellow');

  const colors = [red, green, blue, yellow];

  function colorPicker() {
    for (let i = 0; i < colors.length; i++) {
      colors[i].style.width = '30px';
      colors[i].style.height = '30px';
      colors[i].style.marginLeft = '-15px';
    }
    this.style.width = '40px';
    this.style.height = '40px';
    this.style.marginLeft = '-20px';

    let pickedColor = window.getComputedStyle(this).backgroundColor;

    rootStyle('--color-1', pickedColor);
  }

  colors.forEach(function (e) {
    return e.addEventListener('click', colorPicker);
  });

  // Dark / Light Mode toggle

  const mode = {
    container: {
      dark: 'var(--pages-dark-mode)',
      light: 'var(--pages-light-mode)',
    },
    sideMenu: {
      background: {
        dark: 'var(--side-menu-dark-mode)',
        light: 'var(--side-menu-light-mode)',
      },
      text: {
        dark: 'var(--nav-text-dark-mode)',
        light: 'var(--nav-text-light-mode)',
      },
    },
  };

  const themeMode = document.getElementById('theme');
  const toggleBt = document.getElementById('toggle');

  let modeValue = 0;

  function toggleMode() {
    if (modeValue == 0) {
      // ~~~~~~~~~~ Elements Color Change ~~~~~~~~~~

      classStyle('.container', 'background', mode.container.dark);
      classStyle('.container', 'color', mode.sideMenu.text.dark);
      classStyle('.side-menu', 'background', mode.sideMenu.background.dark);
      classStyle('.side-menu *', 'color', mode.sideMenu.text.dark);

      // for (let i = 0; i < pageList.length; i++) {
      //   pageList[i].style.background = mode.container.dark;
      //   pageList[i].style.color = mode.sideMenu.text.dark;
      // }
      // menu.style.background = mode.sideMenu.background.dark;
      // menu.style.color = mode.sideMenu.text.dark;

      // for (let i = 0; i < domElements.a.length; i++) {
      //   domElements.a[i].style.color = mode.sideMenu.text.dark;
      // }
      // ~~~~~~~~~~ Button Animation Handler ~~~~~~~~~~
      modeValue = 1;
    } else {
      // ~~~~~~~~~~ Elements Color Change ~~~~~~~~~~
      classStyle('.container', 'background', mode.container.light);
      classStyle('.container', 'color', mode.sideMenu.text.light);
      classStyle('.side-menu', 'background', mode.sideMenu.background.light);
      classStyle('.side-menu *', 'color', mode.sideMenu.text.light);
      // for (let i = 0; i < pageList.length; i++) {
      //   pageList[i].style.background = mode.container.light;
      //   pageList[i].style.color = mode.sideMenu.text.light;
      // }
      // menu.style.background = mode.sideMenu.background.light;
      // menu.style.color = mode.sideMenu.text.light;

      // for (let i = 0; i < domElements.a.length; i++) {
      //   domElements.a[i].style.color = mode.sideMenu.text.light;
      // }
      // ~~~~~~~~~~ Button Animation Handler ~~~~~~~~~~
      modeValue = 0;
    }
  }

  themeMode.addEventListener('click', toggleMode);
};
