function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const colorContainers = document.querySelectorAll(".color-container");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    colorContainers.forEach((container) => {
      const boxTop = container.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        container.classList.add("visible");
      } else {
        container.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

