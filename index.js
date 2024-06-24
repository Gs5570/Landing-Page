let button = document.getElementById('singUpBtn');

let clickButton = () => {
  alert('feature in progress. It will be available soon!!');
};

let pagesNavigation = () => {
  alert('page yet to be finished. feature will be available soon');
};

/** hamburger nav-bar */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');

console.log(hamburger);
console.log(navMenu);

// hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
