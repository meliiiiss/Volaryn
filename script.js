/* 🌑 ENTRADA DO JOGO */
function entrarSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("site").style.display = "block";

  const musica = document.getElementById("musica");
  musica.play();
}
