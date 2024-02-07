let links = document.querySelector("#links");
let userInfo = document.querySelector("#user_info");
let userData = document.querySelector("#user");

if (localStorage.getItem("username")) {
  links.remove();
  userInfo.style.display = "flex";
  userData.innerHTML = localStorage.getItem("username");
}

// -----------------------------------------------------------------
let logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1000);
});
// -----------------------------------------------------------------
let allProducts1 = document.querySelector(".second-parent .item-parent1");
let allProducts2 = document.querySelector(".second-parent .item-parent2");
let allProducts3 = document.querySelector(".second-parent .item-parent3");
let allProducts4 = document.querySelector(".first-parent .item-parent1");
let allProducts5 = document.querySelector(".first-parent .item-parent2");

let productsDB = productsDataB;
let products1 = [
  {
    id: 1,
    price: "$280",
    image: "./images/5.jpg",
    title: "frame princes cut diamond",
    stars: `<i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="far fa-star"></i>`,
  },
  {
    id: 2,
    price: "$350",
    image: "./images/6.jpg",
    title: "frame princes diamond",
    stars: `<i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star-half-alt" style="color: #e2b846"></i>`,
  },
  {
    id: 3,
    price: "$240",
    image: "./images/7.jpg",
    title: "princes cut diamond",
    stars: `<i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star-half-alt" style="color: #e2b846"></i>
    <i class="far fa-star"></i>`,
  },
];
let products2 = [
  {
    id: 4,
    price: "$400",
    image: "./images/8.jpeg",
    title: "gold with diamond",
    stars: `<i class="fas fa-star" style="color: #e2b846"></i>
      <i class="fas fa-star" style="color: #e2b846"></i>
      <i class="fas fa-star" style="color: #e2b846"></i>
      <i class="fas fa-star" style="color: #e2b846"></i>
      <i class="fas fa-star-half-alt" style="color: #e2b846"></i>`,
  },
  {
    id: 5,
    price: "$200",
    image: "./images/9.jpg",
    title: "Silver princes cut diamond",
    stars: `<i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star-half-alt" style="color: #e2b846"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>`,
  },
  {
    id: 6,
    price: "$450",
    image: "./images/10.jpg",
    title: "gold princes cut diamond",
    stars: `<i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>`,
  },
];
let products3 = [
  {
    id: 7,
    price: "$230",
    image: "./images/11.jpeg",
    title: "frame princes gold",
    stars: `<i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>`,
  },
  {
    id: 8,
    price: "$264",
    image: "./images/12.jpeg",
    title: "frame princes gold diamond",
    stars: `<i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star-half-alt" style="color: #e2b846"></i>
    <i class="far fa-star"></i>`,
  },
  {
    id: 9,
    price: "$190",
    image: "./images/13.jpeg",
    title: "silver frame diamond",
    stars: `<i class="fas fa-star" style="color: #e2b846"></i>
    <i class="fas fa-star" style="color: #e2b846"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>`,
  },
];
let products4 = [
  {
    id: 10,
    image: "./images/1.jpg",
    title: "freedrica <br/>steling silver",
  },
  {
    id: 11,
    image: "./images/3.jpg",
    title: "freedrica <br/>necklace silver",
  },
];
let products5 = [
  {
    id: 12,
    image: "./images/2.jpg",
    title: "freedrica<br/>necklace silver",
  },
  {
    id: 13,
    image: "./images/4.jpg",
    title: "freedrica<br/>ring gold",
  },
];

let products = [...products1, ...products2, ...products3];

let drawItems;
drawItems = function (productsDB = []) {
  let y1 = productsDB.map((item) => {
    console.log("eee",item);
    return `
    <div class="item bg-white pt-2 px-2 col-12 col-md-4 me-3 mb-3">
    <div class="item-p d-flex justify-content-between">
      <p class="item-price text-secondary h4 fw-bold">${item.price}</p>
      <p class="item-now text-uppercase py-1 px-2 fw-bold">now</p>
    </div>
    <div class="item-img d-flex justify-content-center">
      <img src="${item.image}" alt="ring" class="w-75" />
    </div>

    <div class="product-action">
      <ul class="d-flex justify-content-center">
          <button  class="text-secondary add_to_cart me-1 bg-white" onClick="addToCart1(${item.id})">add to cart</button>
        <li  onclick="addToFavourite(${item.id})" class="heart-fav">
          <a  class="text-secondary">
            <i class="fas fa-heart" style="color:${item.liked==true?"var(--orange-color)":""}"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="item-rating mt-4 mb-2 d-flex justify-content-between">
      <a class="text-secondary text-decoration-none" onclick="saveItemData(${item.id})">
        ${item.title}
      </a>
      <div class="rate-stars">
        ${item.stars}
      </div>
    </div>
  </div>
    `;
  });
  let y4 = products4.map((item) => {
    return `
    <div class="item mb-2 p-3 col-12 col-md-6">
            <p class="item-p text-capitalize">
              ${item.title}
            </p>
            <div class="item-img box">
              <img src="${item.image}" alt="silver" />
            </div>
            <p
            class="masterpiece border border-1 border-secondary ms-3 px-3 py-lg-2 text-white rounded-0 shadow-none add_to_cart d-inline-block"
          >
            <span class="h6 text-capitalize text-secondary">Masterpiece</span>
          </p>
          </div>
    `;
  });
  let y5 = products5.map((item) => {
    return `
    <div class="item mb-2 p-3 col-12 col-md-6">
            <p class="item-p text-capitalize">
              ${item.title}
            </p>
            <div class="item-img box">
              <img src="${item.image}" alt="silver" />
            </div>
            <p
              class="masterpiece border border-1 border-secondary ms-3 px-3 py-lg-2 text-white rounded-0 shadow-none add_to_cart d-inline-block"
            >
              <span class="h6 text-capitalize text-secondary">Masterpiece</span>
            </p>
          </div>
    `;
  });
  allProducts1.innerHTML = y1.join("");
  allProducts4.innerHTML = y4.join("");
  allProducts5.innerHTML = y5.join("");
};
drawItems(JSON.parse(localStorage.getItem("productsDB"))||productsDB);


// Add to cart
function addToCart1(id) {
  if (localStorage.getItem("username")) {
    let product = productsDB.find((item) => item.id === id);
    let isProductInCart = addedItem.some((i) => i.id === product.id);

    if (isProductInCart) {
      addedItem=addedItem.map((p)=>{
        if(p.id === product.id) p.qty += 1;
        return p;
      })
    } else {
      addedItem.push(product);
    }

    cartProductDev.innerHTML="";
    addedItem.forEach((item) => {
      cartProductDev.innerHTML += `<p>${item.title} <span class="item-qty">${item.qty}<span/></p>`;
    });


    // save data
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));

    // Add counter of items
    let cartProductsLength = document.querySelectorAll(".carts_products div p");
    badge.style.display = "flex";
    badge.style.justifyContent = "center";
    badge.style.alignItems = "center";
    badge.innerHTML = cartProductsLength.length;
  } else {
    window.location = "login.html";
  }
}
// -----------------------------------------------------------------------------------------

function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

// -----------------------------------------------------------------------------------------
cartProductDev.style.color = "#444444";
cartProductDev.style.fontFamily = "sans-serif";
cartProductDev.style.textTransform = "capitalize";
cartProductDev.style.fontSize = "14px";

// -----------------------------------------------------------------------------------------
function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartDetails.html";
}
// -----------------------------------------------------------------------------------------

// search function
let input = document.getElementById("search");

input.addEventListener("keyup", function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem("productsDB")));
  if (e.target.value.trim() === "") {
    drawItems(JSON.parse(localStorage.getItem("productsDB")));
  }
});

function search(title, myArray) {
  let arr = myArray.filter((item) => item.title.indexOf(title) !== -1);
  drawItems(arr);
}

// -----------------------------------------------------------------------------------------

//Add to favourite
let favouriteItems = localStorage.getItem("productsFavourite")
  ? JSON.parse(localStorage.getItem("productsFavourite"))
  : [];
function addToFavourite(id) {
  if (localStorage.getItem("username")) {
    let choosenItem = productsDB.find((item) => item.id === id);
    choosenItem.liked = true;
    favouriteItems = [...favouriteItems, choosenItem];

    let uniqueProducts = getUniqueArr(favouriteItems, "id");

    localStorage.setItem("productsFavourite", JSON.stringify(uniqueProducts));

    productsDB.map((item) => {
      if (item.id === choosenItem.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("productsDB", JSON.stringify(productsDB));
    drawItems(productsDB);
  } else {
    window.location = "login.html";
  }
}
