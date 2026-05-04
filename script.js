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

  // cria portal
  const portal = document.createElement("div");
  portal.classList.add("portal");
  document.body.appendChild(portal);

  // ativa música
  if (musica) musica.play();
  if (fog) fog.play();

  // depois do efeito
  setTimeout(() => {
    intro.style.display = "none";
    site.style.display = "block";
    portal.remove();
  }, 1000);
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
