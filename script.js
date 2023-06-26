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
  programActivitiesData.forEach((category) => {
    programActivities.innerHTML += `
      <div class="program-activities-details flex-container">
        <img src="${category.icon}" alt="program-ico">
        <span>${category.title}</span>
        <p>${category.description}</p>
      </div>
    `;
  });
}

createProgramActivity();
