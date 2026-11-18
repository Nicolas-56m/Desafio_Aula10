const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim().normalize("NFC");
    const senha = document.getElementById("senha").value.normalize("NFC").trim();

    // Dados de acesso
    const usuarioCorreto = "usuario";
    const senhaCorreta = "senhadicifil";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        window.location.href = "erro.html";
    } else {
        window.location.href = "sucesso.html";
    }

});
