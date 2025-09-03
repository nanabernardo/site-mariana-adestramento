// --- Menu Hamburguer ---
const menuToggler = document.querySelector(".menu-toggler");
const navbar = document.querySelector(".navbar");

menuToggler.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// --- Lightbox galeria Adestramento ---

const miniaturas = document.querySelectorAll(".miniatura");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxTitulo = document.querySelector(".lightbox-caption h3");
const lightboxLegenda = document.querySelector(".lightbox-caption p");
const fechar = document.querySelector(".lightbox .fechar");

miniaturas.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxTitulo.textContent = img.dataset.titulo;
    lightboxLegenda.textContent = img.dataset.legenda;
  });
});

fechar.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxImg.src = "";
  lightboxTitulo.textContent = "";
  lightboxLegenda.textContent = "";
});

// Fechar clicando fora da imagem
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    lightboxTitulo.textContent = "";
    lightboxLegenda.textContent = "";
  }
});
