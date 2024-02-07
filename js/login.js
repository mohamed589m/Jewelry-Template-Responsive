let username = document.querySelector("#username");
let password = document.querySelector("#password");

let loginBtn = document.querySelector("#sign_in");

let getUsername = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please fill data");
  } else {
    if (
      getUsername &&
      getUsername.trim() === username.value.trim() &&
      getPassword &&
      getPassword.trim() === password.value.trim()
    ) {
      setTimeout(() => {
        window.location="index.html";
      }, 1000);
    }
    else{
      alert("Invalid username or password!");
    }
  }
});
