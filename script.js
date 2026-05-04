window.addEventListener("load", () => {
  const musica = document.getElementById("musica");

  musica.volume = 0.5;

  const playPromise = musica.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      console.log("Autoplay bloqueado pelo navegador");
    });
  }
});
