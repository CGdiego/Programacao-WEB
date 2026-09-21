let jogos = [
    {
        "nome": "Minecraft",
        "desenvolvedor": "Mojang Studios",
        "publicadora": "Xbox Game Studios",
        "ano": 2009
    },
    {
        "nome": "The Legend of Zelda: Breath of the Wild",
        "desenvolvedor": "Nintendo EPD",
        "publicadora": "Nintendo",
        "ano": 2017
    },
    {
        "nome": "Pokémon Red & Blue",
        "desenvolvedor": "Game Freak",
        "publicadora": "Nintendo",
        "ano": 1996
    },
    {
        "nome": "Elden Ring",
        "desenvolvedor": "FromSoftware",
        "publicadora": "Bandai Namco Entertainment / FromSoftware",
        "ano": 2022
    },
    {
        "nome": "Hollow Knight",
        "desenvolvedor": "Team Cherry",
        "publicadora": "Team Cherry",
        "ano": 2017
    },
    {
        "nome": "Roblox",
        "desenvolvedor": "Roblox Corporation",
        "publicadora": "Roblox Corporation",
        "ano": 2004
    }
];

const tabelaCorpo = document.getElementById("tabelaCorpo");

let respostaMap = jogos.map(item => `
    <tr>
        <td>${item.nome}</td>
        <td>${item.desenvolvedor}</td>
        <td>${item.publicadora}</td>
        <td>${item.ano}</td>
    </tr>
`).join("");

tabelaCorpo.innerHTML = respostaMap;
