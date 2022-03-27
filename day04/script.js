const numeroPensado = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(numeroPensado);
const tentativasTotais = 3;

let numeroDigitado = prompt(
  "Estou pensando em um número de 1 a 10, qual o seu palpite?"
);
let tentativas = 1;

if (numeroDigitado == numeroPensado) {
  alert(`Parabéns você acertou com apenas ${tentativas} tentativa`);
} else {
  while (numeroDigitado != numeroPensado && tentativas < tentativasTotais) {
    numeroDigitado = prompt(
      `Você errou e tem mais ${tentativasTotais - tentativas} tentativas`
    );
    tentativas++;
  }
  if (tentativas == tentativasTotais) {
    alert(
      `Você errou todas as ${tentativas} tentativas, o número era ${numeroPensado}`
    );
  } else {
    alert(`Parabéns você acertou com ${tentativas} tentativas`);
  }
}
