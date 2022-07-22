var valores = [5, 8, 10, 22, 45, 38];

function busca(num) {
    for(i = 0; i < 6; i++) {
        if (num == valores[i]) {
            return i;
        }
    }
    return -1;
}

console.log(busca(10));
console.log(busca(50));

function buscaBin(num) {
    let inicio, meio, fim;
    inicio = 0;
    fim = 6;
    let passos = 0;
    
    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        passos += 1;
        if (num == valores[meio]) {
            console.log("Encontrei em " + passos + " passos.");
            return meio;
        }
        else {
            if (num > valores[meio]) {
                inicio = meio + 1;
            } 
            else {
                fim = meio - 1;
            }
        }
    }
    console.log("Não encontrei em " + passos + " passos.");
    return - 1;
}

console.log(buscaBin(10));
console.log(buscaBin(50));