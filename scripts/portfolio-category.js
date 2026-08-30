"use strict";

function filterCategory(targetCategory) {
  const hr = document.querySelector(".category-hr");
  const items = document.querySelectorAll("section.portfolio-section");

  items.forEach((item) => {
    const matches =
      targetCategory === "all" || item.classList.contains(targetCategory);

    if (matches) {
      item.classList.add("active");
      item.removeAttribute("hidden");
    } else {
      item.classList.remove("active");
      item.setAttribute("hidden", "");
    }
  });
  hr.classList.toggle("active", targetCategory === "all");

  const controllers = document.querySelectorAll(".category");
  controllers.forEach((controller) => {
    const isActive = controller.dataset.categoryName === targetCategory;
    controller.classList.toggle("active", isActive);
    controller.setAttribute("aria-selected", String(isActive));
  });
}

document.addEventListener("click", (event) => {
  const controller = event.target.closest(".category");
  if (!controller) return;

  const category = controller.dataset.categoryName;
  if (category) {
    filterCategory(category);
  }
});

document.addEventListener("keydown", (event) => {
  const currentController = event.target.closest(".category");
  if (!currentController) return;

  const controllersList =
    currentController.closest(".portfolio-category-bar") || document;
  const controller = Array.from(controllersList.querySelectorAll(".category"));
  const index = controller.indexOf(currentController);

  if (index === -1) return;

  let targetIndex = index;

  if (event.key === "ArrowRight") {
    targetIndex = (index + 1) % controller.length;
  } else if (event.key === "ArrowLeft") {
    targetIndex = (index - 1 + controller.length) % controller.length;
  } else {
    return;
  }

  event.preventDefault();
  controller[targetIndex].focus();
});
