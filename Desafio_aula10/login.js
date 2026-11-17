const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event){
    event.preventDefault(); //resentando as funções padrões do navegador

    const usuario = document.getElementById("usuario").value.trim()
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    if( usuario === "nicolas101010" && senha === "nicolas202020" ) {
        window.location.href = "sucesso.html";
    } else {
        window.location.href = "erro.html";
}})