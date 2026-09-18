console.log("JS RODANDO!")

const inptNome = document.getElementById("inptNome")
const inptIdade = document.getElementById("inptIdade")
const btnEnviar = document.getElementById("btnEnviar")
const tabelaDadosCorpo = document.getElementById("tabela-dados-corpo")

btnEnviar.onclick = () => {
    console.log("Cliquei no botão")
    let dados = {
        "nome": inptNome.value,
        "idade": inptIdade.value
    }
    sendData(dados);
}

function sendData(data){
    fetch("http://localhost:8000/cadastro-dados.php",{
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => getData())
}

function getData(){
    console.log("getData")
    fetch("http://localhost:8000/get-dados.php")
    .then(response => response.json())
    .then(data => populateTable(data))
}

function populateTable(dados){
    let resultado = dados.map(item => `
            <tr class="linhas2">
                <td>${item.nome}</td>
                <td>${item.idade}</td>
                <td>${item.timestamp}</td>
            </tr>
        `).join("")

    tabelaDadosCorpo.innerHTML = resultado
}

getData()

/* console.log("Página inicial rodando!")
const tabelaCorpo = document.getElementById("tabela-corpo")
const containerCard = document.getElementById("container-card")

let dados = [
    {id_aplicativo: "544007664", img: "youtube", nome: "YouTube", descricao: "O aplicativo oficial da maior plataforma de vídeos do mundo. Assista a clipes, tutoriais, Shorts e transmissões ao vivo, inscreva-se em canais e compartilhe suas próprias criações."},
    {id_aplicativo: "479516143", img: "minecraft", nome: "Minecraft", descricao: "O jogo definitivo de blocos e aventura. Explore mundos infinitos, construa desde casas simples até castelos e sobreviva contra criaturas no modo sobrevivência ou crie livremente no modo criativo."},
    {id_aplicativo: "431946152", img: "roblox", nome: "Roblox", descricao: "Plataforma global onde você pode jogar milhões de mundos 3D criados pela comunidade. É um universo virtual para criar, compartilhar e ser qualquer coisa que imaginar com amigos."},
    {id_aplicativo: "1438091392", img: "human_fall_flat", nome: "Human Fall Flat", descricao: "Um jogo de plataforma com física divertida e desajeitada. Resolva quebra-cabeças em cenários flutuantes controlando um personagem instável, sozinho ou com até 4 amigos no modo multijogador."},
]

let linhasProcessadas = dados.map(n => `
        <tr class="linhas">
            <td>${n.id_aplicativo}</td>
            <td>${n.nome}</td>
            <td>${n.descricao}</td>
        </tr>
    `).join("")

tabelaCorpo.innerHTML = linhasProcessadas

let cardsProcessados = dados.map(n => `
        <div class="card">
            <div class="card-img">
                <img class="img" src="./../img/${n.img}.png">
            </div>
            <div class="card-content">
                <h2>${n.nome}</h2>
                <p>${n.descricao}</p>
                <a href="https://apps.apple.com/br/app/roblox/id${n.id_aplicativo}">Baixe agora!</a>
            </div>
        </div>
    `).join("")

containerCard.innerHTML = cardsProcessados */