let contactBox = document.querySelector(".box");
let animateBox = "animate__bounceInUp";

contactBox.addEventListener("mouseover", function (e) {
  contactBox.classList.add("animate__bounceInUp");
});

contactBox.addEventListener("mouseout", function (e) {
  contactBox.classList.remove("animate__bounceInUp");
  contactBox.classList.add("animate__bounceOutDown");
});
