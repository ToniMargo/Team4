import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
// first create an instance of our ProductData class.
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector(".product-list");
const title = document.querySelector(".title");
if (category === "tents") {
  title.textContent = "Top Products: Tents";
}
if (category === "sleeping-bags") {
  title.textContent = "Top Products: Sleeping Bags";
}
if (category === "backpacks") {
  title.textContent = "Top Products: Backpacks";
}
if (category === "hammocks") {
  title.textContent = "Top Products: Hammocks";
}
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();
