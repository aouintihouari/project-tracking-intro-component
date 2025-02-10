document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");

  menu.addEventListener("click", () => {
    if (menu.src.endsWith("images/icon-hamburger.svg")) {
      nav.style.display = "flex";
      menu.src = "images/icon-close.svg";
    } else {
      nav.style.display = "none";
      menu.src = "images/icon-hamburger.svg";
    }
  });
});
