import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.js";

loadHeaderFooter();
const element = document.querySelector(".product-list");
const cart = new ShoppingCart(element);

cart.init();
