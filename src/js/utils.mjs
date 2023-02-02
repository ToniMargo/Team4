// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// Generates a random combination of characters for each localStorage item's key
// All credits of this function go to Corylus: https://stackoverflow.com/questions/59530970/how-to-get-a-random-number-letter-combination-in-javascript
export function generateKey() {
  var characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    key = "";
  for (var i = 0, n = characters.length; i < 62; ++i) {
    key += characters.charAt(Math.floor(Math.random() * n));
  }
  return key;
}

export function getCartContent() {
  const cartItems = [];
  let itemKey = "";
  for (let i = 0; i < localStorage.length; i++) {
    itemKey = localStorage.key(i);
    cartItems.push(getLocalStorage(itemKey));
  }
  // const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  // document.querySelector(".product-list").innerHTML = htmlItems.join("");
  return cartItems;
}

export function limitNumberoFItems(list, value) {
  let limited = list.slice(value);
  return limited;
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get("product");

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  //if there is a callback...call it and pass data
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerCode = await loadTemplate("../partials/header.html");
  const footerCode = await loadTemplate("../partials/footer.html");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  renderWithTemplate(headerCode, header);
  renderWithTemplate(footerCode, footer);
}
