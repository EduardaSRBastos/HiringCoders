//void e never
function a() {}
function b() {}
function principal() { //:void - redundante
    const valorA = a();
    const valorB = b()
}
principal();

function funcaoNuncaRetorna(): never {
    throw new Error("Erro Nunca.");
}
const erro = funcaoNuncaRetorna();

//type alias, unio e intersection
type Pessoa = {
    nome: string,
    apelido: string,
    idade?: number
};

const Eduarda: Pessoa = {
    nome: "Eduarda",
    apelido: "Bastos",
    idade: 22
};

// | == ||
type logLevel = "info" | "error" | "debug";

function logMessage(message: string, level: logLevel) {
    console.log(`[${level}] - ${message}`);
}
logMessage("Uma mensagem erro", "error");
logMessage("Uma mensagem info", "info");
logMessage("Uma mensagem debug", "debug");

type About = {
    bio: string,
    interests: string[]
};

type Profile = Pessoa & About;

const utilizador: Profile = {
    nome: "Eduarda",
    apelido: "Bastos",
    idade: 22,
    bio: "Olá, sou estudante.",
    interests: ["gato", "música"]
}

type composedProfile = Pessoa & {log: logLevel;}