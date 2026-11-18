
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    // Dados de acesso
    const usuarioCorreto = "nGHjwrjfers#%4@!*&Ä>..usuario";
    const senhaCorreta = "niGNhhj&%4#29*¨¨5$++senhadicifil";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        window.location.href = "sucesso.html";
    } else {
        window.location.href = "erro.html";
    }

});
