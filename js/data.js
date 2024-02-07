let productsDB1 = [
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
    qty: 1,
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
    qty: 1,
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
    qty: 1,
  },
];
let productsDB2 = [
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
    qty: 1,
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
    qty: 1,
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
    qty: 1,
  },
];
let productsDB3 = [
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
    qty: 1,
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
    qty: 1,
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
    qty: 1,
  },
];

let productsDataB = [...productsDB1, ...productsDB2, ...productsDB3];

localStorage.setItem("productsDB", JSON.stringify(productsDataB));

