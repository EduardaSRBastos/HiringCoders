let txt = "";
function funcao(value, index, array) {
    if (index % 2 == 0) {txt += value};
}
function xpto (x) {
        x.forEach(funcao);
        return txt;
}
console.log (xpto([0, 1, 1, 2, 3, 5]));

/////////////////////////////////////////

//exercício 4 e 5 feito em papel

/////////////////////////////////////////

var exemplo = "A";
outro = "A";
function minhaFuncao( ){
var exemplo = "B";
return exemplo;
}
function minhaFuncao2( ){
outro = "B";
return outro;
}
console.log(exemplo);
console.log(minhaFuncao( ));
console.log(outro);
console.log(minhaFuncao2( ));
console.log(outro);

/////////////////////////////////////////

let o = {one:1,two:2,three:3};
for(let p in o) console.log(p);

/////////////////////////////////////////

function XPTO(quantos) {
    const x = ["AB", "BC", "CD", "DE"];
    str = " ";
    for (i = quantos -1; i >=0; i--) {
    str += " " + x[i]; }
    return str;
}
console.log(XPTO(4))

/////////////////////////////////////////

let total_divida = 1400;
function atualizar_divida(valor_recebido){
total_divida -= valor_recebido;
return total_divida;
}
for(var i=0;i<12;i++){
console.log(atualizar_divida(70));
}
console.log("pagou: " + (1400-560));

/////////////////////////////////////////
var str = "123456789";
var p = /[^5-7]/g;
var resultado = str.match(p);
console.log(resultado)