import { getCartContent, renderListWithTemplate } from "./utils.mjs";

function cartItemTemplate(item) {
  return `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />  
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
}

export default class ShoppingCart {
  constructor(listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.listElement = listElement;
  }

  renderCart(object) {
    renderListWithTemplate(cartItemTemplate, this.listElement, object);
  }

  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const objectList = await getCartContent();
    // render the objectList
    this.renderCart(objectList);
  }
}
