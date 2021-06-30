import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    let ribbonMenuSlide = document.createElement('div');
    this.elem = ribbonMenuSlide;
    ribbonMenuSlide.className = 'ribbon';
    ribbonMenuSlide.insertAdjacentHTML('afterbegin', 
      `<button class='ribbon__arrow ribbon__arrow_left ribbon__arrow_visible'>
      <img src='/assets/images/icons/angle-icon.svg' alt='icon'>
      </button>
      <nav class='ribbon__inner'></nav>
      <button class='ribbon__arrow ribbon__arrow_right'><img src='/assets/images/icons/angle-icon.svg' alt='icon'>
      </button>`);
    let ribbonInner = ribbonMenuSlide.querySelector('.ribbon__inner');
    categories.forEach((key) =>
      ribbonInner.insertAdjacentHTML(
        'beforeend',
        `<a href='#' class='ribbon__item' data-id=${key.id}>${key.name}</a>`
      )
    );
    
    //Стрелка вправо
    ribbonMenuSlide.querySelector('.ribbon__arrow_right').addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    });

    //Стрелка влево
    ribbonMenuSlide.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
    ribbonMenuSlide.querySelector('.ribbon__arrow_left').addEventListener('click', () => {
      console.log('left');
      ribbonInner.scrollBy(-350, 0);
    });

    //Скрываем левую стрелку
    ribbonInner.addEventListener('scroll', function () {
      if (ribbonInner.scrollLeft != 0) {
        ribbonMenuSlide.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
      }
      else {
        ribbonMenuSlide.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
      }
    });

    //Скрываем правую стрелку
    ribbonInner.addEventListener('scroll', function () {
      let visible = ribbonInner.clientWidth;
      let hidden = ribbonInner.scrollLeft;
      let holeScroll = ribbonInner.scrollWidth;
      let scrollRight = holeScroll - hidden - visible;
      console.log(scrollRight);
      if (scrollRight == 0) {
        ribbonMenuSlide.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
      }
      else {
        ribbonMenuSlide.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
      }

    });

    ribbonInner.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelectorAll('.ribbon__item_active').forEach((item) => {
        item.classList.remove('ribbon__item_active');
      });
      event.target.classList.add('ribbon__item_active');
      event.target.dispatchEvent(
        new CustomEvent('ribbon-select', {
          detail: event.target.dataset.id,
          bubbles: true,
        })
      );
    });
    document.addEventListener('ribbon-select', function (event) {
      console.log(event.detail);
    });
  }
}