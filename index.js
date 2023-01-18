const navToggle = document.querySelector('.navigation__toggle');
const primaryNav = document.querySelector('.navigation__primary');
const navLogo = document.querySelector('.navigation__logo');


navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('nav--visible');
})