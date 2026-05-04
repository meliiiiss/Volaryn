import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyABZ0LjpdOqoN-fcSRkKUWOz8UngASJBC4",
  authDomain: "volaryon-7af24.firebaseapp.com",
  projectId: "volaryon-7af24"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.registrar = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => alert("Conta criada!"))
    .catch(e => alert(e.message));
}

window.login = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(e => alert(e.message));
}
