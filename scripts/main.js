"use strict";

const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger-component");
const closeBtn = document.getElementById("close");
const desktopQuery = window.matchMedia("(min-width: 860px)");

function openMenu() {
  hamburgerMenu.classList.add("active");
  hamburger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  hamburgerMenu.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  openMenu();
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeMenu();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && hamburgerMenu.classList.contains("active")) {
    closeMenu();
  }
});

desktopQuery.addEventListener("change", (e) => {
  if (e.matches) {
    closeMenu();
  }
});
