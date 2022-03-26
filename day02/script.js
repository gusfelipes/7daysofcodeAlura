const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual a sua idade?");
const linguagemProgramacao = prompt(
  "Qual linguagem de programação você está estudando?"
);

alert(
  `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}!`
);

const resposta = prompt(
  `Você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`
);

if (resposta == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (resposta == 2) {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
