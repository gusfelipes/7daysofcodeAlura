const tecnologias = [];
let tecnologia;

const capitalize = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.substr(1);
};

let area = prompt(
  "Qual área da programação você quer ingressar? FrontEnd ou BackEnd?"
);
if (area.toUpperCase().match("FRONTEND")) {
  tecnologias.push(capitalize(prompt("Você quer aprender React ou Vue?")));
} else {
  tecnologias.push(capitalize(prompt("Você quer aprender Java ou C#?")));
}

let segundaArea = prompt(
  `Você quer continuar se especializando em ${capitalize(
    area
  )} ou trocar para Fullstack?`
);
if (segundaArea.toUpperCase().match(area.toUpperCase())) {
  alert(`Legal que você quer se especializar em ${capitalize(segundaArea)}`);
} else {
  alert(`Legal que você quer ser ${capitalize(segundaArea)}`);
}

tecnologia = prompt(
  "Tem mais alguma tecnologia que você gostaria de aprender?"
);
tecnologias.push(capitalize(tecnologia));
while (tecnologia !== "nao" && tecnologia !== "não") {
  tecnologia = prompt(
    `Que Legal que você quer aprender ${capitalize(
      tecnologia
    )},Tem mais alguma tecnologia que você gostaria de aprender?`
  );
  tecnologias.push(capitalize(tecnologia));
}
tecnologias.pop();
console.log(tecnologias);

if (segundaArea.toUpperCase().match(area.toUpperCase())) {
  alert(
    `Essas são as tecnologias que você quer estudar para se especilizar em ${capitalize(
      segundaArea
    )}: ${tecnologias}`
  );
} else {
  alert(
    `Essas são as tecnologias que você quer estudar para se tornar ${capitalize(
      segundaArea
    )}: ${tecnologias}`
  );
}
