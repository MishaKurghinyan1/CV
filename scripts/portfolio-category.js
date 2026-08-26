"use strict";

function filterCategory(targetCategory) {
  const hr = document.querySelector(".category-hr");
  const items = document.querySelectorAll(".portfolio-section");

  items.forEach((item) => {
    const matches =
      targetCategory === "all" || item.classList.contains(targetCategory);
    item.classList.toggle("active", matches);
  });
  hr.classList.toggle("active", targetCategory === "all");

  const tabs = document.querySelectorAll('.category[role="tab"]');
  tabs.forEach((tab) => {
    const isActive = tab.dataset.categoryName === targetCategory;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.setAttribute("tabindex", isActive ? "0" : "-1");
  });
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest('[role="tab"]');
  if (!tab) return;

  const category = tab.dataset.categoryName;
  if (category) {
    filterCategory(category);
  }
});

document.addEventListener("keydown", (event) => {
  const currentTab = event.target.closest('[role="tab"]');
  if (!currentTab) return;

  const tabList = currentTab.closest('[role="tablist"]') || document;
  const tabs = Array.from(tabList.querySelectorAll('.category[role="tab"]'));
  const index = tabs.indexOf(currentTab);

  if (index === -1) return;

  let targetIndex = index;

  if (event.key === "ArrowRight") {
    targetIndex = (index + 1) % tabs.length;
  } else if (event.key === "ArrowLeft") {
    targetIndex = (index - 1 + tabs.length) % tabs.length;
  } else {
    return;
  }

  event.preventDefault();
  tabs[targetIndex].focus();
});
