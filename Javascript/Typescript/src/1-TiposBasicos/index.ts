//string
let nome: string;
nome = "Eduarda";

function nomeCompleto(nome: string, apelido: string) {
    return `${nome} ${apelido}`;
}
nomeCompleto("Eduarda", "Bastos");

//number
let idade: number;
idade = 22;

function somaIdade(idadeInicial: number, anosPassados: number) {
    return idadeInicial + anosPassados;
}
somaIdade(22, 9);

//boolean
let estado: boolean;
estado = true;

function statusUser(status: boolean) {
    if(status) {
        return `User ativo.`;
    }
    else {
        return `User não ativo.`;
    }
}
statusUser(estado);

//array
const gatos: string[] = ["Gary", "Chinha", "Napolitana"];

function showGatos(gatos: string[]) {
    return `Os gatos são: ${gatos.join(", ")}`;
}
showGatos(gatos);
console.log(showGatos(gatos));

//tupla
const pets: [string, string, string] = ["Gary", "Chinha", "Napolitana"]

const Gary: [string, number] = ["Gary", 4]
const Chinha: [string, number] = ["Chinha", 3]
const Napolitana: [string, number] = ["Napolitana", 6]

//enum
enum permissoes {
    admin,
    editor = "Editor", 
    comum = "Comum"
};
enum cores {
    yellow = "#FFFF00",
    black = '#000'
}

const admin = {perfil: cores.black, nivel: permissoes.admin};
const user = {perfil: cores.yellow, nivel: permissoes.comum};
console.log(admin);
console.log(user);

//any
let valorNumero; //:any - redundante

valorNumero = 22;
valorNumero = '22';

//unknown
let informacoes: unknown = 1234;
let informacoesCompletas: string;

//null e undefined
let varNula: null;
let varIndefinida: undefined;

//object
let pessoa: object = {
    nome: "Eduarda",
    apelido: "Bastos"
};