const menu = document.querySelector(".menu__img");
const menuCloser = document.querySelector(".menu-closer__img");
const topNav = document.querySelector(".top-nav");

menu.addEventListener("click", function () {
  topNav.style.display = "block";
  menu.style.display = "none";
});

menuCloser.addEventListener("click", function () {
  topNav.style.display = "none";
  menu.style.display = "flex";
});

let showNav = matchMedia("( min-width: 800px)");

showNav.addEventListener("change", function () {
  if (!showNav.matches) {
    topNav.style.display = "none";
    menu.style.display = "flex";
  }
  if (showNav.matches) {
    topNav.style.display = "block";
  }
});
