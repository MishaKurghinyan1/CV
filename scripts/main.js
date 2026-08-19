"use strict";

const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger-component");
const closeBtn = document.getElementById("close");

window.addEventListener("resize", (e) => {
  e.preventDefault();
  hamburgerMenu.classList.remove("active");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hamburgerMenu.classList.remove("active");
});

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  hamburgerMenu.classList.add("active");
});
