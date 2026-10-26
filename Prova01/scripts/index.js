const perfilCadastrado = "Professor";

const inptEmail = document.getElementById("inptEmail");
const inptPerfil = document.getElementById("inptPerfil");
const btnEntrar = document.getElementById("btnEntrar");
const mensagemErro = document.getElementById("mensagemErro");

btnEntrar.onclick = () => {
    validar(inptEmail.value, inptPerfil.value);
};

function validar(email, perfil){
    mensagemErro.innerHTML = "";

    if (email.trim() == "") {
        mensagemErro.innerHTML = "<p>Insira um email</p>";
    } else if (perfil.trim() == "") {
        mensagemErro.innerHTML = "<p>Insira um perfil</p>";
    } else if (perfil.trim() != perfilCadastrado) {
        mensagemErro.innerHTML = "<p>Perfil incorreto</p>";
    } else {
        window.location.href = "./paginas/listagem.html";
    }
};