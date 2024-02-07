
let allProducts1 = document.querySelector(".second-parent .item-parent1");

let noProducts = document.querySelector(".noProducts");



function drawFavouritesProducts(allproducts = []) {
  if (JSON.parse(localStorage.getItem("productsFavourite")).length === 0) {
    noProducts.innerHTML = "There is no items !";
  }
  let products =
    JSON.parse(localStorage.getItem("productsFavourite")) || allproducts;
  let y1 = products.map((item) => {
    return `
      <div class="item bg-white pt-2 px-2 col-12 col-md-4 mb-3 m-auto  w-75">
      <div class="item-p d-flex justify-content-between">
        <p class="item-price text-secondary h4 fw-bold">${item.price}</p>
        <div class="product-action">
        <ul>
            <button  class="text-secondary add_to_cart me-1 bg-white text-capitalize" onclick="removeFromFavourite(${item.id})">remove from favourite</button>
        </ul>
      </div>
      </div>
      <div class="item-img d-flex ">
        <img src="${item.image}" alt="ring" class="w-0 h-10" />
      </div>
      
      <div class="item-rating mt-4 d-flex justify-content-between">
        <p class="text-capitalize text-secondary">
          ${item.title}
        </p>
        <p class="text-capitalize text-secondary">
          Quantity: ${item.qty}
        </p>
        <div class="rate-stars">
          ${item.stars}
        </div>
      </div>
    </div>
      `;
  });
  allProducts1.innerHTML = y1.join("");
}
drawFavouritesProducts();
// -------------------------------------------------------------------------------------------------------

let removedItem = localStorage.getItem("ProductsInCart");

function removeFromFavourite(id) {
  if (localStorage.getItem("productsFavourite")) {
    let items = JSON.parse(localStorage.getItem("productsFavourite"));
    let filterItems = items.filter((items) => items.id != id);
    localStorage.setItem("productsFavourite", JSON.stringify(filterItems));
    drawFavouritesProducts(filterItems);
  }
}
