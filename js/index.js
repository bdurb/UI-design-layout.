
const showNav = () => {
  nav.style.position = "fixed";
  nav.style.top = 0;
  nav.style.backgroundColor = "#9DA7B1";
  nav.style.opacity = 0.95;
};
const nav = document.querySelector(".navigation");
window.addEventListener("scroll", showNav);