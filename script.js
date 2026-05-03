function tocarMusica() {
  let musica = document.getElementById("musica");

  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
function ativarSom() {
  let fog = document.getElementById("fog");
  fog.play();
}
document.addEventListener("click", function () {
  let fog = document.getElementById("fog");
  fog.play();
}, { once: true });

