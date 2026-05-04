/* 🌑 ENTRADA DO JOGO */
function entrarSite() {
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");

  // esconde intro
  intro.style.opacity = "0";
  intro.style.transition = "0.8s";

  setTimeout(() => {
    intro.style.display = "none";
    site.style.display = "block";
  }, 800);
}
