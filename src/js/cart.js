import { getCartContent, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.js";

loadHeaderFooter();
const element = document.querySelector(".product-list");
const totalFooter = document.querySelector(".cart-footer");
const totalCost = document.querySelector(".cart-total");
const cart = new ShoppingCart(element);

cart.init().then(async (create_total) => {
  if (element.innerHTML.trim() !== "") {
    totalFooter.removeAttribute("hidden");
    const contents = await getCartContent();
    let amount = 0;

    for (let x = 0; x < contents.length; x++) {
      amount += contents[x].FinalPrice;
    }

    totalCost.innerHTML = `Total: $${amount}`;
  }
});
