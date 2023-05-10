const navToggle = document.querySelector('.navigation__toggle');
const primaryNav = document.querySelector('.navigation__primary');
const slideForwardBtn= document.querySelector('.slide--forward')
const slideBackBtn= document.querySelector('.slide--back')
const sliderOne = document.querySelector('.testimonials__container-one')
const sliderTwo = document.querySelector('.testimonials__container-two')
const test = document.querySelector('.testimonials')


navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('nav--visible');
})

slideForwardBtn.addEventListener('click', () => {
    sliderOne.classList.toggle('disappear')
    sliderTwo.classList.toggle('appear')

})

slideBackBtn.addEventListener('click', () => {
    
})

