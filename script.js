function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const content = document.querySelector(".content"); // Select the content to apply blur effect

  menu.classList.toggle("open");
  icon.classList.toggle("open");
  if (content.classList.contains("blurred")) {
    content.classList.remove("blurred");
  } else {
    setTimeout(() => {
      content.classList.add("blurred");
    }, 300);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const colorContainers = document.querySelectorAll(".color-container");
  const menuLinks = document.querySelectorAll(".menu-links a");

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

  menuLinks.forEach(link => {
    link.addEventListener("click", function() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      const content = document.querySelector(".content");

      menu.classList.remove("open");
      icon.classList.remove("open");
      content.classList.remove("blurred");
    });
  });

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
