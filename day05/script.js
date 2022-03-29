const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];

let resposta = prompt(
  "Deseja adicionar uma comida na sua lista de compras? Responda 'sim' ou 'não'."
);
while (resposta != "sim" && resposta != "não") {
  alert(`Operação não reconhecida!`);
  resposta = prompt(
    "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
  );
}
while (resposta == "sim") {
  let comida = prompt("Qual comida você deseja inserir?");
  let categoria = prompt(
    "Qual categoria ela se encaixa: frutas, laticinios, congelados ou doces?"
  );
  if (categoria == "frutas") {
    frutas.push(comida);
  }

  if (categoria == "laticinios") {
    laticinios.push(comida);
  }
  if (categoria == "congelados") {
    congelados.push(comida);
  }
  if (categoria == "doces") {
    doces.push(comida);
  }
  resposta = prompt("Deseja adicionar uma comida na sua lista de compras?");
}

alert(
  `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`
);
