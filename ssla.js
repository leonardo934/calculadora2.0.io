var blolquinhoSoma = document.getElementById('somar') 
var botaoSomar = document.getElementById('btsoma')

botaoSomar.addEventListener('click', function () {

    blolquinhoSoma.style.display = 'block'
    blolquinhoSub.style.display = 'none'
    blolquinhoMul.style.display = 'none'
    blolquinhoDiv.style.display = 'none'
})


var blolquinhoSub = document.getElementById('sub') 
var botaoSub = document.getElementById('btsub')

botaoSub.addEventListener('click', function () {

    blolquinhoSub.style.display = 'block'
    blolquinhoSoma.style.display = 'none'
    blolquinhoMul.style.display = 'none'
    blolquinhoDiv.style.display = 'none'
})



var blolquinhoMul = document.getElementById('mul') 
var botaoMul = document.getElementById('btmul')

botaoMul.addEventListener('click', function () {

    blolquinhoMul.style.display = 'block'
    blolquinhoSub.style.display = 'none'
    blolquinhoSoma.style.display = 'none'
    blolquinhoDiv.style.display = 'none'
})




var blolquinhoDiv = document.getElementById('div') 
var botaoDiv = document.getElementById('btdiv')

botaoDiv.addEventListener('click', function () {

    blolquinhoDiv.style.display = 'block'
    blolquinhoSub.style.display = 'none'
    blolquinhoMul.style.display = 'none'
    blolquinhoSoma.style.display = 'none'
})




//------------------------------------------------------------------------------------------\\




let btsomar = document.getElementById("btsomar")


btsomar.addEventListener("click", function () {

    let valor1Soma = document.getElementById("valor1Soma")
    valor1Soma = valor1Soma.value

    let valor2Soma = document.getElementById("valor2Soma")
    valor2Soma = valor2Soma.value

    if (valor1Soma < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor2Soma < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor1Soma == 0) {
        return alert("Não pode ser 0")
    } else if (valor2Soma == 0) {
        return alert("Não pode ser 0")
    } else {
        let soma = Number(valor1Soma) + Number(valor2Soma)
        resultadoSoma = document.getElementById("resultadoSoma")
        resultadoSoma.innerHTML = soma
    }



})

let btSub = document.getElementById("btSub")

btSub.addEventListener("click", function () {
    let valor1Sub = document.getElementById("valor1Sub")
    valor1Sub = valor1Sub.value

    let valor2Sub = document.getElementById("valor2Sub")
    valor2Sub = valor2Sub.value


    if (valor1Sub < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor2Sub < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor1Sub == 0) {
        return alert("Não pode ser 0")
    } else if (valor2Sub == 0) {
        return alert("Não pode ser 0")
    } else {

        let Sub = Number(valor1Sub) - Number(valor2Sub)
        let resultadoSub = document.getElementById("resultadoSub")
        resultadoSub.innerHTML = Sub
    }


})

let btMul = document.getElementById("btMul")

btMul.addEventListener("click", function () {

    let valor1Mul = document.getElementById("valor1Mul")
    valor1Mul = valor1Mul.value

    let valor2Mul = document.getElementById("valor2Mul")
    valor2Mul = valor2Mul.value

    if (valor1Mul < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor2Mul < 0) {
        return alert("Não pode colocar Número negativo")
    } else {
        let Mul = Number(valor1Mul) * Number(valor2Mul)

        let resultadoMul = document.getElementById("resultadoMul")
        resultadoMul.innerHTML = Mul
    }
})
let btDiv = document.getElementById("btDiv")

btDiv.addEventListener("click", function () {
    let valor1Div = document.getElementById("valor1Div")
    valor1Div = valor1Div.value

    let valor2Div = document.getElementById("valor2Div")
    valor2Div = valor2Div.value


    if (valor1Div < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor2Div < 0) {
        return alert("Não pode colocar Número negativo")
    } else if (valor1Div == 0) {
        return alert("Não pode ser 0")
    } else if (valor2Div == 0) {
        return alert("Não pode ser 0")
    } else {
        let Div = Number(valor1Div) - Number(valor2Div)

        let resultadoDiv = document.getElementById("resultadoDiv")
        resultadoDiv.innerHTML = Div
    }



})



let limpar = document.getElementById("limpar")

limpar.addEventListener("click", function () {
document.getElementById("valor1Soma").value =""
document.getElementById("valor2Soma").value =""
document.getElementById("resultadoSoma").innerHTML =""
//---------------------------------------------
document.getElementById("valor1Sub").value =""
document.getElementById("valor2Sub").value =""
document.getElementById("resultadoSub").innerHTML =""
//---------------------------------------------
document.getElementById("valor1Mul").value =""
document.getElementById("valor2Mul").value =""
document.getElementById("resultadoMul").innerHTML =""
//---------------------------------------------
document.getElementById("valor1Div").value =""
document.getElementById("valor2Div").value =""
document.getElementById("resultadoDiv").innerHTML =""



})