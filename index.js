document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("mostrarMensagem");
    const mensagem = document.getElementById("mensagem");

    button.addEventListener("click", function () {
        mensagem.style.display = "block";
        mensagem.textContent = "Olá, mundo!";
    });
});
