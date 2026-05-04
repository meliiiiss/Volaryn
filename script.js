// 🎵 CONTROLE DE MÚSICA
function tocarMusica() {
  const musica = document.getElementById("musica");

  if (!musica) return;

  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

// 🌫️ SOM DE AMBIENTE (fog)
function ativarSomAmbiente() {
  const fog = document.getElementById("fog");

  if (!fog) return;

  fog.volume = 0.3;
  fog.play();
}

// 🎬 ENTRADA CINEMATOGRÁFICA
function entrarSite() {
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");
  const musica = document.getElementById("musica");
  const fog = document.getElementById("fog");

  // 🎵 som
  if (musica) musica.play();
  if (fog) fog.play();

  // 🌌 criar portal
  const portal = document.createElement("div");
  portal.classList.add("portal");

  const core = document.createElement("div");
  core.classList.add("portal-core");

  const ring = document.createElement("div");
  ring.classList.add("portal-ring");

  portal.appendChild(core);
  portal.appendChild(ring);
  document.body.appendChild(portal);

  // 💥 partículas
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");

    const x = (Math.random() - 0.5) * 400 + "px";
    const y = (Math.random() - 0.5) * 400 + "px";

    p.style.setProperty("--x", x);
    p.style.setProperty("--y", y);

    portal.appendChild(p);
  }

  // 🔥 expansão final
  setTimeout(() => {
    core.classList.add("portal-expand");
  }, 500);

  // 🎬 troca de tela
  setTimeout(() => {
    intro.style.display = "none";
    site.style.display = "block";
    portal.remove();
  }, 1200);
}

// 🔊 LIBERA SOM AUTOMÁTICO (necessário em celular)
document.addEventListener("click", function () {
  const fog = document.getElementById("fog");

  if (fog) {
    fog.play();
  }
}, { once: true });


// 🎮 FUTURO: espaço para funções do RPG
// exemplo:
// function iniciarJogo() {}
// function carregarPersonagem() {}
