class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

class Player extends User {
    constructor(name, age, game) {
        super(name, age);
        this.game = game;
    }
}

const pessoa = new User("Eduarda", 22);
console.log(pessoa);
const jogador = new Player("Eduarda", 22, "Animal Crossing");
console.log(jogador);