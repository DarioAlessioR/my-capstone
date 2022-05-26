/* FROM HERE ARRAY WITH BANDS FOR PROJECT */

const concerts = [
  {
    band: 'Fugados Band',
    category: 'Pure rock and roll band',
    description: 'Concert of best rock and roll band of Venezuela, to be held at Main Arena at prime time on July 16th. Concert will be curated for future video to be broadcasted via Youtube Live.',
    image: 'images/fugados10.jpeg',
  },
  {
    band: 'Fugados Indie Rock Band',
    category: 'Pure indie rock style band',
    description: 'Concert of best indie rock band of Venezuela, to be held at Main Arena at prime time, on July 15th. Concert will be curated for future video to be broadcasted via Youtube Live.',
    image: 'images/fugados11.jpg',
  },
  {
    band: 'Fugados Soul Rock Band',
    category: 'Pure soul rock and roll band',
    description: 'The concert of the award winning soul rock band of America, to be held at Main Arena at prime time on July 17th. Concert will be curated for future video to be broadcasted via Youtube Live.',
    image: 'images/fugados12.jpg',
  },
  {
    band: 'Fugados Electric Wave Band',
    category: 'Pure Electric Wave rock and roll band',
    description: 'Concert of best Electric Wave rock band of Venezuela, to be held at the Gold Arena in prime time. Concert will be broadcasted alive via Youtube Live and funds will contribute to a humanitarian cause.',
    image: 'images/fugados13.jpg',
  },
  {
    band: 'Arepa y Sushi Band',
    category: 'Venezuelan tipical music band with Japanese artist included',
    description: 'The aclaimed and world famouse Venezuelan music band that has conquered Asia and set the standard for ecnit music in Japan. Concert to be held before Main Arena event on July 15th.',
    image: 'images/arepaysushi2.png',
  },
  {
    band: 'Universidad Gaitera',
    category: 'Tipical gaita band from Venezuela, founded in 1983 in Puerto La Cruz, Anzoategui, Venezuela',
    description: 'Concert of the famouse Universidad Gaitera Band, to be held before main event at Gold Arena on July 17th.',
    image: 'images/universidad.jpeg',
  },
];

/* FROM HERE CODE TO INJECT FEATURED BANDS FOR CAPSTONE PROJECT */

let listBands = '';

for (let i = 0; i < concerts.length; i += 1) {
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

/* FROM HERE CODE TO OPEN AND CLOSE MOBILE MENU FOR CAPSTONE PROJECT */

const mobileMenuButtonOpen = document.querySelector('.mobile-menu-open');
const mobileMenuButtonClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('nav');

mobileMenuButtonOpen.addEventListener('click', () => {
  mobileMenuButtonOpen.style.opacity = 0;
  mobileMenu.classList.remove('nav-initial');
  mobileMenu.classList.add('nav-active');
});

mobileMenuButtonClose.addEventListener('click', () => {
  mobileMenu.classList.remove('nav-active');
  mobileMenu.classList.add('nav-initial');
  mobileMenuButtonOpen.style.opacity = 1;
});
