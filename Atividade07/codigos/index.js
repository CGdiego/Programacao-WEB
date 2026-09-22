const inptEmail = document.getElementById("inptEmail");
const inptYear = document.getElementById("inptYear");
const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.onclick = () => {
    validate(inptEmail.value, inptYear.value)
};

function validate(email, ano){
    if (email == "")
        alert("Adicione um e-mail.");
    else if (ano == "")
        alert("Adicione um ano de nascimento.");
    else if (2026 - ano < 18)
        alert("Apenas maiores de 18 anos podem entrar.");
    else
        window.location.href = "./paginas/listagem.html";
};