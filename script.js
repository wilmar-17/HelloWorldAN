function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
let elemento = document.querySelector("#nome-usuario");
elemento.textContent = nomeUsuario;
}
inserirNome()

let linguagens = ["Javascript", "Python", "C"];
console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C”
const item = document.querySelector("#lista");
item.textContent = linguagens[0];

let estudantes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
const item = document.querySelector("#alunos");
item.textContent = estudantes[0];