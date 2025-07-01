function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
let elemento = document.querySelector("#nome-usuario");
elemento.textContent = nomeUsuario;
}
inserirNome()

let linguagens = ["Javascript", "Python", "C"];{
let item = document.querySelector("#lista");
item.textContent = linguagens[0];
}

let estudantes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];{
let item = document.querySelector("#alunos");
item.textContent = estudantes[1];   
}
