console.log("Aqui é meu JS rodando.")

const inptNome = document.getElementById("inptNome")
const inptSenha = document.getElementById("inptSenha")
const btnEnviar = document.getElementById("btnEnviar")
const lblId = document.getElementById("lblId")

const inptN1 = document.getElementById("inptN1")
const inptN2 = document.getElementById("inptN2")

const btnNM = document.getElementById("btnNM")
const btnSom = document.getElementById("btnSom")
const btnSub = document.getElementById("btnSub")
const btnMul = document.getElementById("btnMul")
const btnDiv = document.getElementById("btnDiv")
const btnLimpar = document.getElementById("btnLimpar")

// Função anônima
btnEnviar.onclick = function(){
    console.log("Teste")
    console.log(inptNome.value)
    console.log(inptSenha.value)

    if(validate(inptNome.value) && validate(inptSenha.value)){
        alert("SUCESSO!")
        lblId.innerHTML = "SUCESSO!"
        window.location.href="./paginas/paginaInicial.html"
    }
    else{
        alert("ERRO!")
        lblId.innerHTML = "ERRO!"
    }
}

function validate(texto){
    if(texto == ""){
        return false
    }
    return true
}

// Função maior
btnNM.onclick = function(){
    const n1 = Number(inptN1.value)
    const n2 = Number(inptN2.value)

    if (n1 > n2) {
        inptN1.style.backgroundColor = "yellowGreen"
        inptN2.style.backgroundColor = "red"
        alert("O 1º número é maior.")
    }
    else if (n1 < n2) {
        inptN2.style.backgroundColor = "yellowGreen"
        inptN1.style.backgroundColor = "red"
        alert("O 2º número é maior.")
    }
    else{
        inptN1.style.backgroundColor = "yellow"
        inptN2.style.backgroundColor = "yellow"
        alert("Os dois números são iguais.")
    }
}

// Função soma
btnSom.onclick = function(){
    const n1 = Number(inptN1.value)
    const n2 = Number(inptN2.value)

    alert(n1+n2)
}

// Função subtração
btnSub.onclick = function(){
    const n1 = Number(inptN1.value)
    const n2 = Number(inptN2.value)

    alert(n1-n2)
}

// Função multiplicação
btnMul.onclick = function(){
    const n1 = Number(inptN1.value)
    const n2 = Number(inptN2.value)

    alert(n1*n2)
}

// Função divisão
btnDiv.onclick = function(){
    const n1 = Number(inptN1.value)
    const n2 = Number(inptN2.value)

    alert(n1/n2)
}

// Função limpar
btnLimpar.onclick = function(){
    inptNome.value = ""
    inptSenha.value = ""

    inptN1.value = ""
    inptN2.value = ""

    inptN1.style.backgroundColor = "white"
    inptN2.style.backgroundColor = "white"
}