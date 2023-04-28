const navToggle = document.querySelector('.navigation__toggle');
const primaryNav = document.querySelector('.navigation__primary');


navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('nav--visible');
})