"use strict";

const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger-component");
const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hamburgerMenu.classList.remove("active");
});

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  hamburgerMenu.classList.add("active");
});
