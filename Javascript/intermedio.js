let nome = "Eduarda";
let apelido = "Bastos";
let profissao = "Estudante";

console.log("Olá, eu sou a " + nome + " " +
 apelido + " e a minha profissão é " + profissao);

 console.log(`Olá, eu sou a ${nome} ${apelido} e a minha profissão é ${profissao}.`);

 ////////////////////////////////////////////////////////////////////////

 let isValid = true;

 function verify(isValid) {
     if(isValid) {
         return true;
     } else {
         return false;
     }
 }
 console.log(verify(isValid));

 const result = isValid ? true : false;
 console.log(result);
 let zero = 0;
 const numResultado = zero > 0 ? 0 : -1;
console.log(numResultado);

///////////////////////////////////////////////////////////////////////////

function soma(x, y) {
    return x + y;
}
console.log(soma(3, 5));

const multiplicacao = function(x, y) {
    return x * y;
}
console.log(multiplicacao(7, 4));

const divisao = (x, y) => {
    return x / y;
}
console.log(divisao(8, 4));

const objeto = () => ({
    nome: "Eduarda", 
    apelido: "Bastos"
});
console.log(objeto);

//////////////////////////////////////////////////////////////////////////////
let lista = [1, 2, 5];
let listaIncluir = [3, 4];

for (let i = 0; i < listaIncluir.length; i++) {
    for(let j = 0; j < lista.length; j++) {
        if(lista[j] >= listaIncluir[i]) {
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }
}
console.log(lista);
const listResult = [1, 2, ...listaIncluir, 5];
console.log(listResult);


let arr = ["a", "b", "c"];
//let arr2 = arr;
let arr2 = [...arr];

arr2.push("d");

console.log(arr2);
console.log("Arr: " + arr);
console.log(`Arr2 = ${arr2}`);

////////////////////////////////////////////////////////////////////////

const pessoa = {
    nome: "Eduarda",
    apelido: "Bastos",
    idade: 22,
    profissao: "estudante"
};

console.log(pessoa);

//let{nome, apelido, idade, profissao} = pessoa;
nome = pessoa.nome;
apelido = pessoa.apelido;
let idade = pessoa.idade;
profissao = pessoa.profissao;

console.log(nome, apelido, idade, profissao);


const cp = "Meu código postal é 5000-567";
const regex = new RegExp("[0-9]{4}-[0-9]{3}");

console.log(cp);
console.log(cp.match(regex));

//////////////////////////////////////////////////////////////////

