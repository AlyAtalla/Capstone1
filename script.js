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

const musicianData = [
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
  musicianData.forEach((musician) => {
    container.innerHTML += `<div class="musician-list">
    <img src="${musician.img}" alt="" class="musician-img">
    <div class="musician-content">
      <h2 class="musician-header">${musician.name}</h2>
      <h3 class="musician-profession">${musician.profession}</h3>
      <hr class="musician-line">
      <p class="musician-description">${musician.description}</p>
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