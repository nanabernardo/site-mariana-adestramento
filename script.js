// --- Menu Hamburguer ---
const menuToggler = document.querySelector(".menu-toggler");
const navbar = document.querySelector(".navbar");

menuToggler.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
