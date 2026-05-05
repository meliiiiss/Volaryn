// checagem simples de acesso
if (localStorage.getItem("logado") === "true") {
  console.log("Usuário já logado");
} else {
  console.log("Usuário não logado");
}
