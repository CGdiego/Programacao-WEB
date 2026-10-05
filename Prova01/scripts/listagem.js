const tabelaCorpo = document.getElementById("tabelaCorpo");

let elementosTabela = [
    { nome: "Brasil", capital: "Brasília", continente: "América", idioma: "Português", moeda: "Real" },
    { nome: "Japão", capital: "Tóquio", continente: "Ásia", idioma: "Japonês", moeda: "Iene" },
    { nome: "França", capital: "Paris", continente: "Europa", idioma: "Francês", moeda: "Euro" }
];

let elementosProcessados = elementosTabela.map(n => `
    <tr>
        <td>${n.nome}</td>
        <td>${n.capital}</td>
        <td>${n.continente}</td>
        <td>${n.idioma}</td>
        <td>${n.moeda}</td>
    </tr>
`).join("");

tabelaCorpo.innerHTML = elementosProcessados;