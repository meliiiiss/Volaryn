/* 🌑 ENTRADA DO JOGO */
function entrarSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("site").style.display = "block";

  // 🎵 música ao clicar em entrar
  const musica = new Audio("assets/audio/theme.mp3");
  musica.loop = true;
  musica.play();
}
