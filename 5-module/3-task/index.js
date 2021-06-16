function initCarousel() {
  let currentSliderPosition = 0;
  let moveTo = 0;
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  buttonLeft.style.display = 'none';
  let movePoint = [...document.querySelector('.carousel__inner').children][0].offsetWidth;
  let elemToMove = document.querySelector('.carousel__inner');

  function displayArrow () {
    if (currentSliderPosition === 0) {
      buttonLeft.style.display = 'none';
    } else if (currentSliderPosition === -2964) {
      buttonRight.style.display = 'none';
    } else {
      buttonLeft.style.display = '';
      buttonRight.style.display = '';
    }
  }

  let slideToLeft = () => {
    moveTo = currentSliderPosition + movePoint;
    elemToMove.style.transform = `translateX(${moveTo}px)`;
    currentSliderPosition = currentSliderPosition + movePoint;
    displayArrow();
  };
  let slideToRight = () => {
    moveTo = currentSliderPosition - movePoint;
    elemToMove.style.transform = `translateX(${moveTo}px)`;
    currentSliderPosition = currentSliderPosition - movePoint;
    displayArrow();
  };
  buttonLeft.addEventListener('click', slideToLeft);
  buttonRight.addEventListener('click', slideToRight);
}