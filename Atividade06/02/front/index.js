console.log("JS Rodando")

const tabelaCorpo = document.getElementById("tabelaCorpo")

fetch("http://localhost/meusite/back/listar.php")
.then(response => response.json())
.then(data => populate(data))

function populate(data){
    if (!data || data.length === 0) {
        tabelaCorpo.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center;">Sem dados</td>
            </tr>
        `
        return
    }

    let response = data.map(item => `
        <tr>
            <td>${item.nome}</td>
            <td>${item.senha}</td>
        </tr>
    `).join("")

    tabelaCorpo.innerHTML = response
}