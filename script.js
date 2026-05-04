function entrarSite() {
  const drop = document.getElementById("bloodDrop");
  const splash = document.getElementById("bloodSplash");
  const circle = document.getElementById("revealCircle");

  // 🔴 gota cai
  drop.classList.add("drop-anim");

  setTimeout(() => {
    // 💥 espalha sangue
    splash.classList.add("splash-anim");
  }, 600);

  setTimeout(() => {
    // 🌀 círculo limpa e revela o jogo
    circle.classList.add("reveal-anim");
  }, 1200);

  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("site").style.display = "block";
  }, 2000);
}
