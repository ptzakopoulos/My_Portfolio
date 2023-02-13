export default function (rootStyle) {
  let modeValue = 0;
  let open = false;
  let pickedColor;

  const colorPickerForPc = () => {
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
    const clr1 = document.getElementById('red');
    const clr2 = document.getElementById('blue');
    const clr3 = document.getElementById('yellow');
    const clr4 = document.getElementById('green');
    const currentColor = document.getElementById('picked-color');

    const colors = [clr1, clr2, clr3, clr4, currentColor];

    window.innerWidth >= 1000
      ? (clr3.style.transform = 'scale(1.5)')
      : (clr3.style.transform = 'scale(1)');

    // ~~~~~~~~~~~~~~~~ Theme Color Picker ~~~~~~~~~~~~~~~~
    const colorPicker = (e) => {
      // Theme Colors
      if (window.innerWidth >= 1000) {
        for (let i = 0; i < colors.length; i++) {
          colors[i].style.transform = 'scale(1)';
        }
        e.target.style.transform = 'scale(1.5)';

        pickedColor = window.getComputedStyle(e.target).backgroundColor;

        rootStyle('--picked-color', pickedColor);
      } else {
        if (open) {
          pickedColor = window.getComputedStyle(e.target).backgroundColor;
          rootStyle('--picked-color', pickedColor);
          colors.forEach((colorElement) => {
            colorElement.classList.remove(`${colorElement.id}-open`);
          });
          open = false;
        } else {
          colors.forEach((colorElement) => {
            colorElement.style.transform = 'scale(1)';
            colorElement.classList.add(`${colorElement.id}-open`);
          });
          open = true;
        }
      }
    };
    //Color Picker Function End

    colors.forEach((e) => {
      e.addEventListener('click', colorPicker);
    });

    // Dark / Light Mode toggle

    const themeMode = document.getElementById('theme');
    const toggleBt = document.getElementById('toggle');

    // ~~~~~~~~~~~~~~~~ Dark / Light Mode ~~~~~~~~~~~~~~~~
    const toggleMode = () => {
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
    };

    themeMode.addEventListener('click', toggleMode);

    return colors;
  };

  colorPickerForPc();
}
