function scrollUp() {
  const scrollY = window.pageYOffset;
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (scrollY >= 460) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

function scrollHeader() {
  const scrollY = window.pageYOffset;
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (scrollY >= 50) header.classList.add("scroll-header-nav");
  else header.classList.remove("scroll-header-nav");
}
window.addEventListener("scroll", scrollHeader);
