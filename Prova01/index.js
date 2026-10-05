const perfilCadastrado = "Professor";

const inptEmail = document.getElementById("inptEmail");
const inptPerfil = document.getElementById("inptPerfil");
const btnEntrar = document.getElementById("btnEntrar");
const mensagemErro = document.getElementById("mensagemErro");

btnEntrar.onclick = () => {
    validate(inptEmail.value, inptPerfil.value);
};

function validate(email, perfil){
    if (email == "")
        mensagemErro.innerHTML = ("<p>Insira um email</p>");
    else if (perfil == "")
        mensagemErro.innerHTML = ("<p>Insira um perfil</p>");
    else if (perfil != "Professor")
        mensagemErro.innerHTML = ("<p>Perfil incorreto</p>");
    else
        window.location.href = "./paginas/listagem.html";
};