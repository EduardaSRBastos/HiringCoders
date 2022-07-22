var elementos = [];
var topo = -1;
const MAX = 10;

function push(num) {
    if(topo <MAX) {
        topo += 1;
        elementos[topo] = num;
    }
    else {
        console.log("Pilha está cheia.");
    }
}

function vazia() {
    return topo === -1;
}

function pop() {
    if(topo != -1) {
        let num = elementos[topo];
        topo -= 1;
        return num;
    }
    else {
        console.log("Pilha está vazia!");
    }
}

push(28);
console.log(elementos);

console.log(pop());

var numDecimal = 10;
var resto;

console.log("Empilhar pilha...");
while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = parseInt(numDecimal / 2);
}

console.log("Desempilhar pilha...");
while (!vazia()) {
    console.log(pop());
}