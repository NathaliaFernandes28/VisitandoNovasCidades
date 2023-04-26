const Turista = prompt("E aí Turista, qual é o seu nome? ");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)");

while (continuar === "sim") {
  let cidade = prompt("Qual o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "Nome do Turista : " +
    Turista +
    "\nNúmeros de Cidades Visitadas : " +
    contagem +
    "\nCidade Visitadas :\n " +
    cidades
);
