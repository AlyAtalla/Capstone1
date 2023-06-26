const menuMob = document.getElementById('mob-menu');
const menu = document.getElementById('menu');
const close = document.getElementById('close-button');
const liknsMob = document.querySelectorAll('.navigation-list');

function menuOpen() {
  menuMob.style.display = 'flex';
}

function menuClose() {
  menuMob.style.display = 'none';
}

menu.addEventListener('click', menuOpen);
close.addEventListener('click', menuClose);

liknsMob.forEach((link) => {
  link.addEventListener('click', menuClose);
});

const speakerData = [
  {
    img: './images/ali.webp',
    name: 'Aly Atalla',
    profession: 'Violinst',
    description: 'Studied at Conservatory of Alexandria and graduated in 2016 specializing in baroque ',
  },
  {
    img: './images/gamal.webp',
    name: 'Mohammad Jamal',
    profession: 'Recorder Player',
    description: 'Master of a wide  repretoir from a rich variety of barouque and romantic pieces',
  },
  {
    img: './images/adel.jpg',
    name: 'Daniel',
    profession: 'Pianist',
    description: 'Classical and Jazz enthusiast',
  },
  {
    img: './images/halim.webp',
    name: 'Mohammad Halim',
    profession: 'Conductor',
    description: 'Very Talented conductor with years of experience in Musical teaching ',
  },
];

const container = document.getElementById('container');

function data() {
  speakerData.forEach((speaker) => {
    container.innerHTML += `<div class="musician-list">
    <img src="${speaker.img}" alt="" class="musician-img">
    <div class="musician-content">
      <h2 class="musician-header">${speaker.name}</h2>
      <h3 class="musician-profession">${speaker.profession}</h3>
      <hr class="musician-line">
      <p class="musician-description">${speaker.description}</p>
    </div>
  </div>`;
  });
}

data();

const programActivitiesData = [
  {
    icon: 'images/program_icon_01.png',
    title: 'Concerts',
    description: 'Immerse yourself in the mesmerizing melodies of our summer concerts.',
  },
  {
    icon: 'images/program_icon_02.png',
    title: 'Instrumental Workshops',
    description: 'Discover the art of playing the violin, recorder, and keyboard from our talented musicians.',
  },
  {
    icon: 'images/program_icon_03.png',
    title: 'Music Talks',
    description: 'Engage in insightful discussions about the significance of music in our lives.',
  },
  {
    icon: 'images/program_icon_04.png',
    title: 'Interactive Sessions',
    description: 'Participate in hands-on sessions to learn basic tunes on the violin, recorder, and keyboard.',
  },
  {
    icon: 'images/program_icon_05.png',
    title: 'Musical Networking',
    description: 'Connect with fellow music enthusiasts and exchange ideas in a vibrant atmosphere.',
  },
];

const programActivities = document.querySelector('.program-activities');

function createProgramActivity() {
  programActivitiesData.forEach((activity) => {
    programActivities.innerHTML += `
      <div class="program-activities-details flex-container">
        <img src="${activity.icon}" alt="program-ico">
        <span>${activity.title}</span>
        <p>${activity.description}</p>
      </div>
    `;
  });
}

createProgramActivity();


const moreButton = document.querySelector('.more-btn');
const speakers = Array.from(document.querySelectorAll('.musicians-list'));

moreButton.addEventListener('click', () => {
  speakers.slice(-4).forEach((speaker) => {
    speaker.classList.toggle('hidden');
  });

  if (moreButton.textContent === 'More') {
    moreButton.textContent = 'Less';
  } else {
    moreButton.textContent = 'More';
  }
});

function hideSpeakers() {
  if (window.innerWidth < 768) {
    speakers.slice(-4).forEach((speaker) => {
      speaker.classList.add('hidden');
    });
    moreButton.textContent = 'More';
  } else {
    speakers.forEach((speaker) => {
      speaker.classList.remove('hidden');
    });
    moreButton.textContent = 'More';
  }
}

hideSpeakers();

window.addEventListener('resize', () => { // check window on resizing
  hideSpeakers();
});