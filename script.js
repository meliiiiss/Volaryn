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
  const musica = document.getElementById("musica");
  const fog = document.getElementById("fog");

  if (!intro) return;

  // Fade suave
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
  }, 1000);

  // Ativar sons
  if (musica) {
    musica.volume = 0.5;
    musica.play();
  }

  if (fog) {
    fog.volume = 0.3;
    fog.play();
  }
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
