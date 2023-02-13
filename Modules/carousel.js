export default function (classStyle) {
  const items = document.querySelectorAll('.carousel-item');

  const playBt = document.getElementById('play');

  const playIcon = document.createElement('i');
  playIcon.classList.add('fa-solid', 'fa-play');
  const pauseIcon = document.createElement('i');
  pauseIcon.classList.add('fa-solid', 'fa-pause');

  let playing = true;

  const classes = [
    'carousel-item item0',
    'carousel-item item1',
    'carousel-item item2',
    'carousel-item item3',
    'carousel-item item4',
    'carousel-item item5',
    'carousel-item item6',
    'carousel-item item7',
    'carousel-item item8',
    'carousel-item item9',
  ];

  let direction = 'left';

  const carousel = () => {
    if (direction == 'left') {
      const popedItem = classes.pop();
      classes.unshift(popedItem);
    } else {
      const shiftedItem = classes.shift();
      classes.push(shiftedItem);
    }
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('class', classes[i]);
    }
    direction = 'left';
  };

  let autoPlay = setInterval(carousel, 4000);

  playBt.addEventListener('click', () => {
    if (playing == false) {
      direction = 'left';
      autoPlay = setInterval(carousel, 4000);
      playBt.children[0].remove();
      playBt.appendChild(pauseIcon);
      playing = true;
    } else {
      clearInterval(autoPlay);
      playBt.children[0].remove();
      playBt.appendChild(playIcon);
      playing = false;
    }
  });

  const leftBt = document.getElementById('leftButton');
  const rightBt = document.getElementById('rightButton');

  leftBt.addEventListener('click', () => {
    direction = 'left';
    carousel();
  });
  rightBt.addEventListener('click', () => {
    direction = 'right';
    carousel();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1000) {
      clearInterval(autoPlay);
      playing = false;
      if (playBt.children[0] !== undefined) {
        playBt.children[0].remove();
        playBt.appendChild(playIcon);
      }
    }
  });
}
