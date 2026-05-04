function entrarSite() {
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");

  const portalSound = document.getElementById("portalSound");
  const musica = document.getElementById("musica");

  // 🎵 SOM
  if (portalSound) portalSound.play();

  if (musica) {
    musica.volume = 0;
    musica.play();

    let vol = 0;
    let fade = setInterval(() => {
      if (vol < 0.6) {
        vol += 0.02;
        musica.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 100);
  }

  // 🌌 PORTAL
  const portal = document.createElement("div");
  portal.className = "portal";
  document.body.appendChild(portal);

  // 📷 EFEITO DE ENTRAR
  intro.classList.add("camera-enter");

  // TROCA
  setTimeout(() => {
    intro.style.display = "none";
    site.style.display = "block";
    portal.remove();
  }, 2000);
}
