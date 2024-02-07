// let productsDB = JSON.parse(localStorage.getItem("productsDB"));
let productsDB = productsDataB;

let productId = localStorage.getItem("productId");

let itemDom = document.querySelector(".item-details");

let productDetails = productsDB.find((item) => item.id == productId);

itemDom.innerHTML = `
<div class="item-p d-flex justify-content-between">
<p class="item-price text-secondary h4 fw-bold">${productDetails.price}</p>
<div class="product-action"></div>
</div>
<div class="item-img d-md-flex">
<img src="${productDetails.image}" alt="ring" class="w-0 h-10 mb-4 ms-3" />
<p class="about-item mt-5 text-secondary pe-3">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
  ut ipsum repellat veniam magnam eligendi quidem!
</p>
</div>

<div class="item-rating mt-4 d-flex justify-content-between">
<p class="text-capitalize text-secondary">${productDetails.title}</p>
<div class="rate-stars">${productDetails.stars}</div>
</div>
`;
