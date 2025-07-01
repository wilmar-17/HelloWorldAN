function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
let elemento = document.querySelector("#nome-usuario");
elemento.textContent = nomeUsuario;
}
inserirNome()

let linguagens = ["Javascript", "Python", "C"];{
let item = document.querySelector("#lista");
item.textContent = linguagens[2];
}


let estudantes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
const item = document.querySelector("#alunos");
item.textContent = estudantes[0];