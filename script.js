function entrarSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("site").style.display = "block";

  const musica = document.getElementById("musica");

  musica.volume = 0.5;

  // 🔥 garante carregamento correto
  musica.pause();
  musica.currentTime = 0;
  musica.load();

  // 🎧 tenta tocar no gesto do clique
  const playPromise = musica.play();

  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      console.log("Áudio bloqueado pelo navegador:", err);
    });
  }
}
