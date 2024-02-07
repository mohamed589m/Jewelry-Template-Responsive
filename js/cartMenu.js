let cartProductDev = document.querySelector(".carts_products div");
let badge = document.querySelector(".badge");

//Check if there is items in localStorage
let addedItem = localStorage.getItem("ProductsInCart")
  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];

if (addedItem) {
  addedItem.map((item) => {
    cartProductDev.innerHTML += `<p>${item.title} <span class="item-qty">${item.qty}<span/></p>`;
  });
  badge.style.display = "flex";
  badge.style.justifyContent = "center";
  badge.style.alignItems = "center";
  badge.innerHTML = addedItem.length;
}

let shoppingCartIcon = document.querySelector(".shopping_cart i");
let cartsProducts = document.querySelector(".carts_products");

shoppingCartIcon.addEventListener("click", opencart);

// Open cart menu
function opencart() {
  if (cartProductDev.innerHTML !== "") {
    if (cartsProducts.style.display === "block") {
      cartsProducts.style.display = "none";
    } else {
      cartsProducts.style.display = "block";
    }
  }
}
