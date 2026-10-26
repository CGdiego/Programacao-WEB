const tabelaCorpo = document.getElementById("tabelaCorpo");

const elementosTabela = [
    { nome: "Brasil", capital: "Brasília", continente: "América", idioma: "Português", moeda: "Real" },
    { nome: "Japão", capital: "Tóquio", continente: "Ásia", idioma: "Japonês", moeda: "Iene" },
    { nome: "França", capital: "Paris", continente: "Europa", idioma: "Francês", moeda: "Euro" }
];

const elementosProcessados = elementosTabela.map(pais => `
    <tr>
        <td>${pais.nome}</td>
        <td>${pais.capital}</td>
        <td>${pais.continente}</td>
        <td>${pais.idioma}</td>
        <td>${pais.moeda}</td>
    </tr>
`).join("");

tabelaCorpo.innerHTML = elementosProcessados;