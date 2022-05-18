var prim = 100;
var seg = 50;
var nome = "Eduarda";
var apelido = "Bastos";
var tabuada = 7;
var certo = false;
var numSorteado = 5;
var numPossivel = 0;

var resultado = prim * seg;
console.log(resultado);

var resultado = prim - seg;
console.log(resultado);

var nomeCompleto = nome + " " + apelido;
console.log(nomeCompleto);

// 10 == "10": true; 10 === "10": false
if (nome === "Eduarda") { 
    console.log("O nome está correto!");
} else if(nome === "Bastos") {
    console.log("Também é aceite.");
} else {
    console.log("O nome não é Eduarda.");
}

switch (nome) {
    case "Eduarda":
        console.log("O nome está correto!");
        break;
    case "Bastos":
        console.log("Também é aceite.");
        break;   
    default:
        console.log("O nome não é o correto.");
        break;     
}

for (var i = 1; i <= 10; i++) {
    console.log("Valor de " + tabuada + " x " + i + " = " + (tabuada * i));
}

while (!certo) {
    numPossivel += 1;
    if(numSorteado === numPossivel) {
        certo = true;
        console.log("Valor encontrado: " + numPossivel);
    } else {
        console.log("Valor não encontrado: " + numPossivel);
    }
}

function soma(operadorA, operadorB) {
    var resultadoS = operadorA + operadorB;
    return resultadoS;
}

var resultadoSoma = soma(1, 2);
var resultadoSomaB = soma(10, 59);

console.log(resultadoSoma);
console.log(resultadoSomaB);

function ola(nome) {
    console.log("Olá. Eu sou a " + nome);
}

ola("Eduarda");

class Matematica {
    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematica();
resultado = instanciaMatematica.soma(4, 7);
console.log(resultado);