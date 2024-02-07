//get data form localStorage
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");
let products =JSON.parse(localStorage.getItem("ProductsInCart"))


// variables
let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");
let productsLength = document.getElementById("productsLength");

userDom2.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
productsLength.innerHTML+=products.length;
