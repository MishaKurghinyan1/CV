"use strict";

const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger-component");
const closeBtn = document.getElementById("close");
const desktopQuery = window.matchMedia("(min-width: 860px)");

function openMenu() {
  hamburger.setAttribute("tabindex", "-1");
  hamburgerMenu.classList.add("active");
  hamburger.setAttribute("aria-expanded", "true");
  closeBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  hamburger.removeAttribute("tabindex");
  hamburgerMenu.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  closeBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
  openMenu();
});

closeBtn.addEventListener("click", () => {
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
