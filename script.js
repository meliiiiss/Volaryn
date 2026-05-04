function entrarSite() {
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");

  const musica = document.getElementById("musica");
  const fog = document.getElementById("fog");
  const portalSound = document.getElementById("portalSound");

  // 🎵 sons
  if (portalSound) portalSound.play();
  if (fog) fog.play();

  // 🎶 música com fade
  if (musica) {
    musica.volume = 0;
    musica.play();

    let vol = 0;
    let fade = setInterval(() => {
      if (vol < 0.5) {
        vol += 0.02;
        musica.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 100);
  }

  // 🌌 criar portal
  const portal = document.createElement("div");
  portal.className = "portal";

  const core = document.createElement("div");
  core.className = "portal-core";

  const ring1 = document.createElement("div");
  ring1.className = "portal-ring ring1";

  const ring2 = document.createElement("div");
  ring2.className = "portal-ring ring2";

  const texture = document.createElement("div");
  texture.className = "portal-texture";

  portal.appendChild(texture);
  portal.appendChild(ring1);
  portal.appendChild(ring2);
  portal.appendChild(core);
  document.body.appendChild(portal);

  // partículas
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const x = (Math.random() - 0.5) * 600 + "px";
    const y = (Math.random() - 0.5) * 600 + "px";

    p.style.setProperty("--x", x);
    p.style.setProperty("--y", y);

    portal.appendChild(p);
  }

  // transição
  setTimeout(() => {
    intro.style.display = "none";
    site.style.display = "block";
    portal.remove();
  }, 1400);
}
