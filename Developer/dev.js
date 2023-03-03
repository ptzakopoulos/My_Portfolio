const showcaseContainer = document.getElementById('showcase');
let data;
let clicks = 0;
let subFile;

const jsonData = () => {
  fetch('./siteStracture.json')
    .then((response) => response.json())
    .then((jsonData) => {
      const loading = document.getElementById('loadingScreen');
      if (loading) {
        loading.remove();
      }
      data = jsonData;
    });
};

jsonData();

const filter = [...document.getElementsByTagName('h3')];

const display = (filterButton) => {
  if (showcaseContainer.children.length > 0) {
    const children = [...showcaseContainer.children];
    children.forEach((child) => {
      child.remove();
    });
  }
  const ul = document.createElement('ul');
  showcaseContainer.appendChild(ul);
  const property = filterButton.target.id;
  let result = data[property].all;

  switch (true) {
    case property == 'classes':
      clicks = 0;
      result.forEach((e) => {
        const li = document.createElement('li');
        li.textContent = e;
        li.classList.add('isClass');
        ul.appendChild(li);
      });
      break;
    case property == 'ids':
      clicks = 0;
      result.forEach((e) => {
        const li = document.createElement('li');
        li.textContent = e;
        li.classList.add('isId');
        ul.appendChild(li);
      });
      break;
    case property == 'stracture':
      const ul2 = document.createElement('ul');
      ul2.setAttribute('id', 'ul2');
      const ul3 = document.createElement('ul');
      ul3.setAttribute('id', 'ul3');

      const filesAppend = (arg) => {
        if (
          document.getElementById('ul2') &&
          document.getElementById('ul2').children.length > 0
        ) {
          const ul2Children = [...document.getElementById('ul2').children];
          ul2Children.forEach((child) => {
            child.remove();
          });
        }

        if (arg != undefined) result = [...arg];
        result.forEach((e) => {
          const li = document.createElement('li');
          li.textContent = e;
          li.setAttribute('clicked', false);
          const file = e.split('.');

          if (file.length > 1) {
            li.classList.add(file[1]);
          } else {
            li.classList.add('folder');
            li.setAttribute('id', e);
            li.addEventListener('click', (event) => {
              event.target.attributes[0].value = true;
              const wasClicked = event.target.attributes[0].value;
              clicks++;
              console.log(clicks);
              if (wasClicked && data.stracture[event.target.id] != undefined) {
                filesAppend(data.stracture[event.target.id].all);
                clicks--;
                subFile = data.stracture[event.target.id];
              } else {
                console.log(subFile);
                console.log(event.target.id);
                console.log(subFile[event.target.id]);
                clicks++;
                filesAppend(subFile[event.target.id]);
              }
            });
          }
          if (clicks == 0) {
            ul.appendChild(li);
          } else if (clicks == 1) {
            ul2.appendChild(li);
            showcaseContainer.appendChild(ul2);
          } else {
            ul3.appendChild(li);
            showcaseContainer.appendChild(ul3);
          }
        });
      };
      filesAppend();
      break;
  }
};

filter.forEach((e) => {
  e.addEventListener('click', display);
});
