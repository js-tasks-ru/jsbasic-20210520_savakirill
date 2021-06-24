import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();
  }
  render() {
    console.log(this.product);
    const div = document.createElement('div');
    div.classList.add('card');
    div.addEventListener('click', this.onClick.bind(this));
    // ------------------------------------------
    const div2 = document.createElement('div');
    div2.classList.add('card__top');
    // ------------------------------------------
    const img = document.createElement('img');
    img.setAttribute('src', this.img())
    img.classList.add('card__image')
    img.setAttribute('alt', 'product')
    div2.append(img);
    // ------------------------------------------
    const span = document.createElement('span');
    span.classList.add('card__price');
    span.innerHTML = this.price();
    div2.append(span);
    // ------------------------------------------
    div.append(div2);
    // ------------------------------------------
    const div3 = document.createElement('div');
    div3.classList.add('card__body');
    // ------------------------------------------
    const div4 = document.createElement('div');
    div4.classList.add('card__title');
    div4.innerHTML = this.title();
    div3.append(div4);
    // ------------------------------------------
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('card__button');
    button.addEventListener('product-add', this.onClick.bind(this));
    // ------------------------------------------
    const img1 = document.createElement('img');
    img1.setAttribute('src', '/assets/images/icons/plus-icon.svg')
    img1.setAttribute('alt', 'icon')
    button.append(img1);
    // ------------------------------------------
    div3.append(button);
    // ------------------------------------------
    div.append(div3);
    // ------------------------------------------
    document.body.append(div);
    return div;
  }
  img() {
    return `/assets/images/products/${this.product.image}`;
  }
  price() {
    return `€${this.product.price.toFixed(2)}`;
  }
  title() {
    return this.product.name;
  }
  onClick(ev) {
    const event = new CustomEvent('product-add', {
      detail: this.product.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true, // это событие всплывает - это понадобится в дальнейшем
    });
    this.elem.dispatchEvent(event);
  }
}
