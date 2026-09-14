console.log("JS Rodando")

const tabelaCorpo = document.getElementById("tabelaCorpo")

fetch("http://localhost/meusite/back/")
.then(response => response.json())
.then(data => populate(data))

function populate(data){
    let response = data.map(item => `
        <tr>
            <td>${item.nome}</td>
            <td>${item.senha}</td>
        </tr>
    `).join("")

    tabelaCorpo.innerHTML = response
}