const navToggle = document.querySelector('.navigation__toggle');
const primaryNav = document.querySelector('.navigation__primary');
const slideForwardBtn = document.querySelector('.slide--forward')
const slideBackBtn = document.querySelector('.slide--back')
const testimonialContainer = [...document.querySelectorAll('.testimonials__container')]


navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('nav--visible');
})

testimonialContainer.forEach((item, i) => {

    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    slideForwardBtn.addEventListener('click', () => {
        console.log(containerWidth)
        item.scrollLeft += containerWidth;
    })
    
    slideBackBtn.addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

})



