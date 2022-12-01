// @ts-check
'use strict';

import {
  pageList,
  buttonList,
  menu,
  domElements,
  classStyle,
  rootStyle,
} from './main.js';

window.onload = () => {
  // ~~~~~~~~~~ Root Colors ~~~~~~~~~~
  const rootColors = {
    light: {
      body: 'var(--pages-light-mode)',
      nav: 'var(--side-menu-light-mode)',
      text: 'var(--nav-text-light-mode)',
    },
    dark: {
      body: 'var(--pages-dark-mode)',
      nav: 'var(--side-menu-dark-mode)',
      text: 'var(--nav-text-dark-mode)',
    },
    toggle: {
      body: '--toggle-body',
      nav: '--toggle-nav',
      text: '--toggle-text',
    },
  };

  // ~~~~~~~~~~ Colors ~~~~~~~~~~
  const red = document.getElementById('red');
  const green = document.getElementById('green');
  const blue = document.getElementById('blue');
  const yellow = document.getElementById('yellow');

  const colors = [red, green, blue, yellow];

  // ~~~~~~~~~~~~~~~~ Theme Color Picker ~~~~~~~~~~~~~~~~
  function colorPicker() {
    // Theme Colors
    for (let i = 0; i < colors.length; i++) {
      colors[i].style.width = '30px';
      colors[i].style.height = '30px';
      colors[i].style.margin = '0 10px';
    }
    this.style.width = '40px';
    this.style.height = '40px';
    this.style.margin = '-5px 5px';

    let pickedColor = window.getComputedStyle(this).backgroundColor;

    rootStyle('--picked-color', pickedColor);
  }

  colors.forEach(function (e) {
    return e.addEventListener('click', colorPicker);
  });

  // Dark / Light Mode toggle

  const themeMode = document.getElementById('theme');
  const toggleBt = document.getElementById('toggle');

  let modeValue = 0;

  // ~~~~~~~~~~~~~~~~ Dark / Light Mode ~~~~~~~~~~~~~~~~
  function toggleMode() {
    if (modeValue == 0) {
      toggleBt.style.animationName = 'toLight';

      rootStyle(rootColors.toggle.body, rootColors.light.body);
      rootStyle(rootColors.toggle.nav, rootColors.light.nav);
      rootStyle(rootColors.toggle.text, rootColors.light.text);

      modeValue = 1;
    } else {
      // ~~~~~~~~~~ Elements Color Change ~~~~~~~~~~
      toggleBt.style.animationName = 'toDark';

      rootStyle(rootColors.toggle.body, rootColors.dark.body);
      rootStyle(rootColors.toggle.nav, rootColors.dark.nav);
      rootStyle(rootColors.toggle.text, rootColors.dark.text);

      modeValue = 0;
    }
  }

  themeMode.addEventListener('click', toggleMode);
};
