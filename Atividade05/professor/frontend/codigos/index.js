console.log("aqui é meu JS rodando!")
const inptNome = document.getElementById("inptNome")
const inptSenha = document.getElementById("inptSenha")
const btnEnviar = document.getElementById("btnEnviar")
const lblId = document.getElementById("lblId")

//funcao anonima
btnEnviar.onclick = function(){
    console.log("Cliquei no botão")

    const data = {
        nome:inptNome.value,
        senha:inptSenha.value
    }

    //adicionar uma chamada para a minha API

     fetch("http://localhost:8000/", {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data) 
    }).then(response => response.json()) 
    .then(data => {
        console.log('Success from PHP:', data);
    })




};
