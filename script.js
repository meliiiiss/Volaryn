function entrarSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("site").style.display = "block";

  const musica = document.getElementById("musica");

  musica.volume = 0.5;

  // força reset antes de tocar
  musica.pause();
  musica.currentTime = 0;

  musica.play().catch((e) => {
    console.log("Áudio bloqueado:", e);
  });
}
