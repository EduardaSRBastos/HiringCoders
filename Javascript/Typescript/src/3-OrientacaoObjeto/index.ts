//class
class User {
    public name;
    public age;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Player extends User {
    public game;
    constructor(name: string, age: number, game: string) {
        super(name, age);
        this.game = game;
    }

    jogoAtual() {
        return `Estou a jogar ${this.game}`;
    }

    static horas() {
        return Date();
    }
}

class Jogo {
    private nome;
    constructor(nome: string) {
        this.nome = nome;
    }

    jogoNome() {
        return `O nome do jogo é ${this.nome}`;
    }
}

//interface
interface IJogoDescricao {
    descricao: string,
    jogoNomeDescricao(): string
}

class JogoDescricao extends Jogo implements IJogoDescricao {
    public descricao;
    constructor(nome: string, descricao: string) {
        super(nome);

        this.descricao = descricao;
    }
    jogoNomeDescricao() {
        return `A descricao do jogo é ${this.descricao}`;
    }
}

const userP = new User("Eduarda", 22);
console.log(userP);
const jogador = new Player("Eduarda", 22, "Animal Crossing");
console.log(jogador);
console.log(jogador.jogoAtual());
console.log(Player.horas());
const animalC = new Jogo("Animal Crossing");
console.log(animalC);
const animalD = new JogoDescricao("Animal Crossing", "Jogo fofo com animais falantes!");
console.log(animalD);

type TJogoDescricao = {
    descricao: string,
    jogoNomeDescricao(): string
}

type TJogoDescricao2 = {
    descricao: string,
    jogoNomeDescricao(): string
}

type TJogoDescricaoCompleto = TJogoDescricao & TJogoDescricao2;

const obj: IJogoDescricao = {
    descricao: "descrição do jogo",
    jogoNomeDescricao() {
        return "123";
    }
}

type jogoAssertion = {
    nome: string,
    descricao: string
}

let jogo2 = {} as jogoAssertion;
let jogo = <jogoAssertion>{};
jogo.nome = "Pokémon Go";
jogo.descricao = "Jogo online de apanhar pokémons pelo mapa real.";