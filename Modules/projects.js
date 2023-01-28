export default function (classStyle) {
  //Filter Buttons selector
  const all = document.getElementById('prj-all');
  const bw = document.getElementById('prj-bw');
  const colored = document.getElementById('prj-colored');
  const face = document.getElementById('prj-face');
  const body = document.getElementById('prj-body');

  const filterBts = [all, bw, colored, face, body];

  //Filter proccess
  const filter = (event) => {
    //Filter-Bt color Handler
    //Class Handler chosen cuz in case of color change directly in the class :hover effects are disabled
    filterBts.forEach((e) => {
      e.classList.remove('active');
    });
    event.target.classList.add('active');

    //clicked Id selector
    const id = event.target.id;

    //Id splitter - Get the Keyword - id
    const selectedClass = id.split('-')[1];

    //Setting Project Items to display : none
    classStyle('.prj-item', 'display', 'none');

    //Setting the Keyword's Classes to block / bw/colored/body/face
    classStyle(`.${selectedClass}`, 'display', 'block');

    //Case of clicking 'all' bt
    if (id == 'prj-all') {
      classStyle('.prj-item', 'display', 'block');
    }
  };

  //Adding click event listeners to all filter buttons
  filterBts.forEach((e) => {
    e?.addEventListener('click', filter);
  });

  // ~~~~~ Overlay ~~~~~
  const prjItem = document.querySelectorAll('.prj-item');
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlay-image');
  const prjTitle = document.getElementById('prj-title');
  const prjDesc = document.getElementById('prj-description');
  const closeBt = document.getElementById('close');

  let src;

  //Function respensible for Overlay
  const openOverlay = (e) => {
    overlay.style.display = 'flex';

    //Getting the image src from clicked project
    src = e.target.attributes[1].value;
    //Render Image to the overlay
    overlayImage.setAttribute('src', src);

    //Getting the name of the clicked project
    const name = e.target.attributes[2].value;
    //Render Image to the overlay
    prjTitle.innerText = name;

    //Getting the content of cklicked project
    const content = e.target.attributes[3].value;
    //Render Image to the overlay
    prjDesc.innerHTML = content;

    //Adding the Eventlistener responsible for the Inspect effect
    document.addEventListener('mousemove', imageInspect);
  };

  //Adding click event listeners for the open overlay effect
  prjItem.forEach((e) => {
    e.addEventListener('click', openOverlay);
  });

  //Close overlay listener
  const closeOverlay = () => {
    overlay.style.display = 'none';
    document.removeEventListener('mousemove', imageInspect);
  };

  closeBt.addEventListener('click', closeOverlay);

  // ~~~~~~~~~~~~~~~~ Project Image Inspect ~~~~~~~~~~~~~~~~
  //Inspect element is the circle displayed on top of the image
  const inspect = document.getElementById('inspect');

  //Getting mouse coordinates while hovering on image
  const imageInspect = (e) => {
    const mouse = {
      x: Number(e.clientX),
      y: Number(e.clientY),
    };

    //Setting inspect elemet's Background image to the image of the clicked project
    inspect.style.backgroundImage = `url('${src}')`;

    //Background image position adjustments for better navigation on image
    if (mouse.x <= overlayImage.offsetWidth) {
      inspect.style.backgroundSize = `${overlayImage.offsetWidth * 1.5}px ${
        overlayImage.offsetHeight * 1.5
      }px`;
      inspect.style.backgroundPositionX = `-${overlayImage.offsetWidth / 4}px`;
      inspect.style.backgroundPositionY = `-${overlayImage.offsetHeight / 4}px`;
      inspect.style.display = 'block';
      inspect.style.top = `${mouse.y - inspect.offsetHeight / 2}px`;
      inspect.style.left = `${mouse.x - inspect.offsetWidth / 2}px`;

      //Background Image Re-align - So the viewer is able to see more details
      if (mouse.y >= window.innerHeight - 50) {
        inspect.style.backgroundPositionY = `-${
          overlayImage.offsetHeight / 4 + 100
        }px`;
      } else if (mouse.x >= overlayImage.offsetWidth - 50) {
        inspect.style.backgroundPositionX = `-${
          overlayImage.offsetWidth / 4 + 50
        }px`;
      } else if (mouse.x <= 50) {
        inspect.style.backgroundPositionX = `-${
          overlayImage.offsetWidth / 4 - 50
        }px`;
      }
    } else {
      inspect.style.display = 'none';
    }
  };
}
