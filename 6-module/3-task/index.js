import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    const div = document.createElement('div');
    div.classList.add('carousel');

    const rightArrow = document.createElement('div');
    rightArrow.classList.add('carousel__arrow', 'carousel__arrow_right');
    const imgRightArrow = document.createElement('img');
    imgRightArrow.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    imgRightArrow.setAttribute('alt', 'icon');
    rightArrow.append(imgRightArrow);
    div.append(rightArrow);

    const leftArrow = document.createElement('div');
    leftArrow.classList.add('carousel__arrow', 'carousel__arrow_left');
    const imgLeftArrow = document.createElement('img');
    imgLeftArrow.setAttribute('src', '/assets/images/icons/angle-left-icon.svg');
    imgLeftArrow.setAttribute('alt', 'icon');
    leftArrow.append(imgLeftArrow);
    div.append(leftArrow);

    const divInner = document.createElement('div');
    divInner.classList.add('carousel__inner');
    div.append(divInner);

    this.elem = div;

    this.slides.forEach(element => {
      let divSlider = document.createElement('div');
      divSlider.classList.add('carousel__slide');
      divSlider.dataset.id = element.name;

      const imgSlider = document.createElement('img');
      imgSlider.setAttribute('src', `/assets/images/carousel/${element.image}`);
      imgSlider.setAttribute('alt', 'slide');
      divSlider.append(imgSlider);

      let divCaption = document.createElement('div');
      divCaption.classList.add('carousel__caption');
      divSlider.append(divCaption);

      const span = document.createElement('span');
      span.classList.add('carousel__price');
      span.innerHTML = `€${element.price.toFixed(2)}`;
      divCaption.append(span);

      const carouselTitle = document.createElement('div');
      carouselTitle.classList.add('carousel__title');
      carouselTitle.innerHTML = element.name;
      divCaption.append(carouselTitle);

      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add('carousel__button');
      divCaption.append(button);

      let toCart = new CustomEvent("product-add", {
        detail: element.id,
        bubbles: true
      });
      divSlider.addEventListener('click', function (e) {
        if (e.target.classList.contains('carousel__button')) {
          divSlider.dispatchEvent(toCart);
        }
      });

      const imgPlusButton = document.createElement('img');
      imgPlusButton.setAttribute('src', '/assets/images/icons/plus-icon.svg');
      imgPlusButton.setAttribute('alt', 'icon');
      button.append(imgPlusButton);

      divInner.append(divSlider);
    });

    let currentSliderPosition = 0;
    let sliderRightArrow = div.querySelector('.carousel__arrow_right');
    let sliderLeftArrow = div.querySelector('.carousel__arrow_left');
    let elemToMove = div.querySelector('.carousel__inner');
    sliderLeftArrow.style.display = 'none';

    sliderLeftArrow.addEventListener('click', () => {
      currentSliderPosition--;
      const offset = -elemToMove.offsetWidth * currentSliderPosition;
      elemToMove.style.transform = `translateX(${offset}px)`;
      if (currentSliderPosition === 0) {
        sliderLeftArrow.style.display = 'none';
      } else if (currentSliderPosition === (this.slides.length - 1)) {
        sliderRightArrow.style.display = 'none';
      } else {
        sliderLeftArrow.style.display = '';
        sliderRightArrow.style.display = '';
      }
    });

    sliderRightArrow.addEventListener('click', () => {
      console.log(currentSliderPosition);
      currentSliderPosition++;
      const offset = -elemToMove.offsetWidth * currentSliderPosition;
      elemToMove.style.transform = `translateX(${offset}px)`;
      if (currentSliderPosition === 0) {
        sliderLeftArrow.style.display = 'none';
      } else if (currentSliderPosition === (this.slides.length - 1)) {
        sliderRightArrow.style.display = 'none';
      } else {
        sliderLeftArrow.style.display = '';
        sliderRightArrow.style.display = '';
      }
    });
  }
}
