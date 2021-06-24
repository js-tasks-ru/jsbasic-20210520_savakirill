function initCarousel() {
  let currentSliderPosition = 0;
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  buttonLeft.style.display = 'none';
  let elemToMove = document.querySelector('.carousel__inner');
  function displayArrow() {
    if (currentSliderPosition === 0) {
      buttonLeft.style.display = 'none';
    } else if (currentSliderPosition === 3) {
      buttonRight.style.display = 'none';
    } else {
      buttonLeft.style.display = '';
      buttonRight.style.display = '';
    }
  }
  let slideToLeft = () => {
    currentSliderPosition--;
    const offset = -elemToMove.offsetWidth * currentSliderPosition;
    elemToMove.style.transform = `translateX(${offset}px)`;
    displayArrow();
  };
  let slideToRight = () => {
    currentSliderPosition++;
    const offset = -elemToMove.offsetWidth * currentSliderPosition;
    elemToMove.style.transform = `translateX(${offset}px)`;
    displayArrow();
  };
  buttonLeft.addEventListener('click', slideToLeft);
  buttonRight.addEventListener('click', slideToRight);
}