/* FROM HERE ARRAY WITH WORKS FOR POPUP PROJECT */

const concerts = [
  {
    band: 'Fugados Band',
    category: 'Pure rock and roll band',
    description: 'Concert of best rock and roll band of Venezuela, to be held at main arena in prime time on July 16th. Concert will be curated for future video to be brodcasted via Youtube Live.',
    image: 'images/fugados10.jpeg',
  },
  {
    band: 'Fugados Indie Rock Band',
    category: 'Pure indie rock style band',
    description: 'Concert of best indie rock band of Venezuela, to be held at main arena in prime time, on July 15th. Concert will be curated for future video to be brodcasted via Youtube Live.',
    image: 'images/fugados11.jpg',
  },
  {
    band: 'Fugados Soul Rock Band',
    category: 'Pure soul rock and roll band',
    description: 'The concert of the award winning soul rock band of America, to be held at main arena in prime time on July 17th. Concert will be curated for future video to be brodcasted via Youtube Live.',
    image: 'images/fugados12.jpg',
  },
  {
    band: 'Fugados Electric Wave Band',
    category: 'Pure Electric Wave rock and roll band',
    description: 'Concert of best Electric Wave rock band of Venezuela, to be held at the Gold Arena in prime time. Concert will be brodcasted alive via Youtube Live and funds will contribute to humanitarian cause.',
    image: 'images/fugados13.jpg',
  },
  {
    band: 'Arepa y Sushi Band',
    category: 'Venezuelan tipical music band with japanese artist included',
    description: 'The aclaimed and world famouse venezuelan misic band tha has conquered Asia and set the standard for etnit music in Japan. Concert to be held before main arena event on July 15th.',
    image: 'images/arepasushi.jpg',
  },
  {
    band: 'Universidad Gaitera',
    category: 'Tipical gaita band from Venezuela, funded in 1983 in Puerto La Cruz, Anzoategui, Venezuela',
    description: 'Concert of the famouse Universidad Gaitera Band, to be held before main event at Gold Arena on July 17th.',
    image: 'images/universidad.jpeg',
  },
];

const modal = document.querySelector('#modalWin');

/* FROM HERE CODE FOR MENU PROJECT */

const ul = document.getElementById('show');
const open = document.getElementById('open');
const links = document.querySelectorAll('.menu-link');

if (ul.classList.contains('show')) {
  ul.classList.remove('show');
}

links.forEach((link) => {
  link.addEventListener('click', () => {
    ul.classList.remove('show');
  });
});

open.addEventListener('click', () => {
  ul.classList.add('show');
});

/* FROM HERE CODE FOR POPUP PROJECT */

const modalClose = (opc = false) => {
  if (opc) {
    modal.classList.remove('modal_show');
    modal.classList.add('modal_hide');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  }
};

const modalOpen = (num = null) => {
  if (num != null) {
    const langs = projects[num].languages;

    let showLangs = '';

    langs.forEach((item) => { showLangs += `<li>${item}</li>`; });

    document.getElementById('modal_title').innerHTML = projects[num].client;
    document.getElementById('modal_image').src = `${projects[num].image}`;
    document.getElementById('modal_description').innerHTML = projects[num].description;
    document.getElementById('modal_lang').innerHTML = showLangs;
    document.getElementById('modal_live').href = projects[num].link;
    document.getElementById('modal_source').href = projects[num].source;

    modal.style.display = 'flex';

    setTimeout(() => {
      modal.classList.remove('modal_hide');
      modal.classList.add('modal_show');
    }, 100);
  }
};

function validate() {
  const email = document.getElementById('mail').value;
  if (email === email.toLowerCase()) {
    return true;
  }
  const message = document.getElementById('errorMessage');
  message.innerText = 'Please, type your email in lowercase';
  return false;
}

modalOpen();
modalClose();
validate();
