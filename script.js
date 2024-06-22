function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const colorContainers = document.querySelectorAll(".color-container");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach((section) => {
      const boxTop = section.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });

    colorContainers.forEach((container, index) => {
      const boxTop = container.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        setTimeout(() => {
          container.classList.add("visible");
        }, index * 100); // Staggered animation
      } else {
        container.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
