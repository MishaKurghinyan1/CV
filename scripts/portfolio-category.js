"use strict";

function filterCategory(targetCategory) {
  const hr = document.querySelector(".category-hr");
  const items = document.querySelectorAll(".portfolio-section");

  items.forEach((item) => {
    const matches =
      targetCategory === "all" || item.classList.contains(targetCategory);
    item.classList.toggle("active", matches);
    item.setAttribute("aria-hidden", String(!matches));
    hr.classList.toggle("active", targetCategory === "all");
  });

  const tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach((tab) => {
    const isActive = tab.dataset.categoryName === targetCategory;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest('button[role="tab"]');
  if (tab) {
    event.preventDefault();
    const category = tab.dataset.categoryName;
    if (category) {
      filterCategory(category);
    }
  }
});
