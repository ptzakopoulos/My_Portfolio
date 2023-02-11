export default function (rootStyle) {
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

    const colors = [clr1, clr2, clr3, clr4];

    const merchImage = document.getElementById('merch-img');

    clr3.style.transform = 'scale(1.5, 1.5)';

    // ~~~~~~~~~~~~~~~~ Theme Color Picker ~~~~~~~~~~~~~~~~
    function colorPicker() {
      // Theme Colors
      for (let i = 0; i < colors.length; i++) {
        colors[i].style.transform = 'scale(1,1)';
      }
      this.style.transform = 'scale(1.5,1.5)';

      let pickedColor = window.getComputedStyle(this).backgroundColor;

      rootStyle('--picked-color', pickedColor);

      //T-shirt Color Change
      console.log(merchImage?.attributes[0]);
      merchImage.attributes[0].value = `./Images/Merchandise/${this.id}.png`;
      // ./Images/Merchandise/${this.id}.png`
    }
    //Color Picker Function End

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

    const clrCollection = [clr1, clr2, clr3, clr4];
    return clrCollection;
  };

  const windowWidthCheck = () => {
    if (window.innerWidth >= 1000) {
      colorPickerForPc();
    } else {
      colorPickerForPc().forEach((e) => {
        e.style.transform = 'scale(1)';
      });
    }
  };

  windowWidthCheck();

  window.onresize = () => {
    windowWidthCheck();
  };
}
