/* FROM HERE ARRAY WITH BANDS FOR PROJECT */

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

/* FROM HERE CODE TO INJECT FEATURED BANDS FOR CAPSTONE PROJECT */

let listBands = '';

for (let i = 0; i <= concerts.length; i += 1) {
  // eslint-disable-next-line no-unused-vars
  listBands += `<div class="band-box">
  <div class="band-image">
    <div class="band-image-background"></div>
    <img src="${concerts[i].image}" title="${concerts[i].band}" alt="${concerts[i].band}" />
  </div>
    <div class="band-info">
      <div class="band-head">
        <h4>${concerts[i].band}</h4>
        <p class="category">${concerts[i].category}</p>
        <p class="description">${concerts[i].description}</p>
      </div>
    </div>
  </div>`;

  document.getElementById('list-bands').innerHTML = listBands;
  
}



/* fffffffffffffffffffffffffffffff */



/*
const img = document.createElement('img');

img.src = concerts[0].image;
img.alt = 'Logo Javascript';

document.body.appendChild(img);

var targetDiv = document.getElementById('list-bands');
targetDiv.innerHTML += 'data that you want to add';




/* xxxxxxxxxxxxxcodigo de mauricio xxxxxxxxxxxxxxxxxxxxxxxxx */
/*

const body = document.querySelector('body');
const FeaturedSection = document.querySelector('.featured-guests');
for (let i = 0; i < featuredGuest.length; i += 1) {
    const guestContent = document.createElement('div');
   guestContent.classList.add('guest-content');
    guestContent.innerHTML = `
    <div class="guest-content--img">
    <img src=${featuredGuest[i].image} alt="">
</div>
<div class="guest-content--description">
    <h2 class="guest-name">${featuredGuest[i].name}</h2>
    <p class="guest-content--description1">${featuredGuest[i].description}</p>
    <div class="guest-content--border"></div>
    <p class="guest-content--description2">${featuredGuest[i].description2}</p>
</div>
    `;
    body.appendChild(guestContent);
  };










/*

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

/*

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

*/