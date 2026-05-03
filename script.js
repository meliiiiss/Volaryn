// Manipulação do formulário de login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = loginForm.querySelectorAll('input');
            const usuario = inputs[0].value;
            const senha = inputs[1].value;
            
            if (usuario && senha) {
                console.log('Login realizado com sucesso');
                // Aqui você adicionaria a lógica de autenticação real
            } else {
                alert('Preencha todos os campos');
            }
        });
    }
});
