// Obter os elementos dos inputs
const nomeInput = document.getElementById("nome");
const corInput = document.getElementById("cor");
const idadeInput = document.getElementById("idade");
const cidadeInput = document.getElementById("cidade");


// Adicionar evento de "keydown" para o input de nome
nomeInput.addEventListener("keydown", function(event) {
if (event.keyCode === 13) {
let nome = nomeInput.value;
let cor = corInput.value;
alert("Olá " + nome + "!");
}
});

// Adicionar evento de "keydown" para o input de cor
corInput.addEventListener("keydown", function(event) {
if (event.keyCode === 13) {
let nome = nomeInput.value;
let cor = corInput.value;
alert("Olá sua cor favorita é " + cor + "!");
}
});

// Adicionar evento de "keydown" para o input de idade
idadeInput.addEventListener("keydown", function(event) {
if (event.keyCode === 13) {
let nome = nomeInput.value;
let cor = corInput.value;
let idade = idadeInput.value;
alert("Olá sua idade é " + idade +"!");
}
});

// Adicionar evento de "keydown" para o input de cidade
cidadeInput.addEventListener("keydown", function(event) {
if (event.keyCode === 13) {
let nome = nomeInput.value;
let cor = corInput.value;
let idade = idadeInput.value;
let cidade = cidadeInput.value;
alert("Olá sua cidade é " + cidade + "!");
}
});

