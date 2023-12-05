// Seu código original
const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");

let currSlide = 0;
let maxSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - number) * 100}%)`;
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.button == "next" ? ++currSlide : --currSlide;

    if (currSlide > maxSlide) {
      currSlide = 0;
    } else if (currSlide < 0) {
      currSlide = maxSlide;
    }

    updateCarousel(currSlide);
  });
});

updateCarousel();

// Código adicionado
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});

window.onscroll = function() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var dropdowns = document.querySelectorAll('.dropdown-content');
    
    dropdowns.forEach(function(dropdown) {
      if (window.pageYOffset > navbarHeight * 0.5) {
        dropdown.style.backgroundColor = 'rgba(0, 0, 0, 1)';
      } else {
        dropdown.style.backgroundColor = '#00000033';
      }
    });
  };