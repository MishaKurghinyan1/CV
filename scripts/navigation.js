"use strict";

function navigateTo(targetId) {
  const sections = document.querySelectorAll(".page-section");
  sections.forEach((section) => {
    const isTarget = section.id === targetId;
    section.classList.toggle("active", isTarget);
    section.setAttribute("aria-hidden", String(!isTarget));
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
    navigateTo(id);
  }
});

function handleRoute() {
  const id = location.hash.replace("#", "") || "home";
  navigateTo(id);
}

window.addEventListener("popstate", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);
