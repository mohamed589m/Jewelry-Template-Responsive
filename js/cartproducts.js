// let ProductsInCart = localStorage.getItem("ProductsInCart");

let allProducts1 = document.querySelector(".second-parent .item-parent1");

let noProducts = document.querySelector(".noProducts");


// if (ProductsInCart) {
//   let item = JSON.parse(ProductsInCart);
//   drawCartProducts(item);
// }

function drawCartProducts(allproducts = []) {
  if (JSON.parse(localStorage.getItem("ProductsInCart")).length === 0) {
    noProducts.innerHTML = "There is no items !";
  }
  let products =
    JSON.parse(localStorage.getItem("ProductsInCart")) || allproducts;
  let y1 = products.map((item) => {
    return `
      <div class="item bg-white pt-2 px-2 col-12 col-md-4 mb-3 m-auto  w-75">
      <div class="item-p d-flex justify-content-between">
        <p class="item-price text-secondary h4 fw-bold">${item.price}</p>
        <div class="product-action">
        <ul>
            <button  class="text-secondary add_to_cart me-1 bg-white text-capitalize" onClick="removeFromCart(${item.id})">remove from cart</button>
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
drawCartProducts();
// -------------------------------------------------------------------------------------------------------

let removedItem = localStorage.getItem("ProductsInCart");



function removeFromCart(id) {
  if (localStorage.getItem("ProductsInCart")) {
    let items = JSON.parse(localStorage.getItem("ProductsInCart"));
    let filterItems = items.filter((items) => items.id != id);
    // let filteredItem = items.find((item) => item.id === id);
    localStorage.setItem("ProductsInCart", JSON.stringify(filterItems));
    // localStorage.removeItem(filteredItem);
    drawCartProducts(filterItems);
  }
}