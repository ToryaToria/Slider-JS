const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const controlButtons = slider.querySelectorAll('.button-radio');
const prevButton = slider.querySelector('.button-prev');
const nextButton = slider.querySelector('.button-next');

let currentSlide = 0;
const slideCount = slides.length;

const activeSlides = 'slide--active';
const activeButton = 'button-active';

const updateSlider = () => {
  controlButtons.forEach((button, index) => {
    if (index === currentSlide) {
      button.classList.add(activeButton);
      slides[index].classList.add(activeSlides)
    } else {
      button.classList.remove(activeButton)
      slides[index].classList.remove(activeSlides)
    }
  })
}

controlButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index < slideCount) {
      currentSlide = index;
      updateSlider();
    }
  })
})


prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
})

nextButton.addEventListener('click', () => {
  if (currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
  }
})

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft' && currentSlide > 0) {
    currentSlide--;
    updateSlider();
  } else if (event.key === 'ArrowRight' && currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
  }
})
