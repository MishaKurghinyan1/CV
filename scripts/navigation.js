"use strict";

const mobileMedia = window.matchMedia("(max-width: 860px)");

function navigateTo(targetId) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const sections = document.querySelectorAll(".page-section");
  sections.forEach((section) => {
    const isTarget = section.id === targetId;
    section.classList.toggle("active", isTarget);
  });

  const navLinks = document.querySelectorAll("[data-link]");
  navLinks.forEach((link) => {
    const linkTarget = link.getAttribute("href").replace("#", "");
    const isTarget = linkTarget === targetId;

    link.classList.toggle("active", isTarget);

    if (isTarget) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (location.hash !== `#${targetId}`) {
    history.pushState({ id: targetId }, "", `#${targetId}`);
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");

  if (link) {
    event.preventDefault();
    const id = link.getAttribute("href").replace("#", "");
    const hamburgerMenu = document.querySelector(".hamburger-component");
    if (hamburgerMenu) {
      hamburgerMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
    navigateTo(id);
  }
});

function handleRoute() {
  const id = location.hash.replace("#", "") || "home";
  navigateTo(id);
}

document.addEventListener("keydown", (e) => {
  const currentNav = e.target.closest("[data-link]");
  if (!currentNav) return;

  const container = currentNav.closest("nav") || currentNav.parentElement;
  console.log(container);
  const links = Array.from(container.querySelectorAll("[data-link]"));
  const index = links.indexOf(currentNav);
  const isMobile = mobileMedia.matches;

  if (index === -1) return;

  let targetIndex = index;

  if (e.key === (isMobile ? "ArrowDown" : "ArrowRight")) {
    targetIndex = (index + 1) % links.length;
  } else if (e.key === (isMobile ? "ArrowUp" : "ArrowLeft")) {
    targetIndex = (index - 1 + links.length) % links.length;
  } else {
    return;
  }

  e.preventDefault();
  links[targetIndex].focus();
});

window.addEventListener("popstate", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);
