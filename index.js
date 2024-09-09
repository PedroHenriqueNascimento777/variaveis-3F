let idade = 18;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Pedro Henrique Nascimento";

console.log(
  "Meu nome é " +
    nomeCompleto +
    ", nascido no ano de " +
    anoNascimento +
    " e no ano atual " +
    anoAtual +
    " completo " +
    idade +
    " anos",
);

anoAtual = anoAtual + 1;
console.log(anoAtual);

idade = idade + 1;
console.log(idade);

//Agência de viagens Atenas, Oslo, Paris, Nova York, Cancun

const listaDeDestinos = new Array(
  "Atenas",
  " Oslo",
  " Paris",
  " Nova Yorke",
  " Cancun",
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push(" Coronel Vivida");
listaDeDestinos.push(" Guarulhos");
listaDeDestinos.push(" Madrid");
listaDeDestinos.push(" Wasshington DC");

console.log(listaDeDestinos);

const idadeComprador = 17;

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  console.log("Destinos disponiveis: " + listaDeDestinos);
} else {

  console.log("Comprador menor de idade");
  console.log("Infelizmente não podemos vender para menores de idade");
}
