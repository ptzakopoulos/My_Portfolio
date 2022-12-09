export default function projectFilter(classStyle) {
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
    classStyle('.filter-item', 'color', 'var(--toggle-text)');
    classStyle(`#${event.target.id}`, 'color', 'var(--picked-color)');

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

  const openOverlay = (e) => {
    overlay.style.display = 'flex';

    const src = e.target.attributes[1].value;
    overlayImage.setAttribute('src', src);

    const name = e.target.attributes[2].value;
    prjTitle.innerText = name;

    const content = e.target.attributes[3].value;
    prjDesc.innerHTML = content;
  };

  prjItem.forEach((e) => {
    e.addEventListener('click', openOverlay);
  });

  const closeOverlay = () => {
    overlay.style.display = 'none';
  };

  closeBt.addEventListener('click', closeOverlay);

  // ~~~~~~~~~~~~~~~~ Project Image Inspect ~~~~~~~~~~~~~~~~
  const imageInspect = () => {};
}
