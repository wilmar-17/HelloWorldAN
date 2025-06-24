function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome")
let elemento = document.querySelector("#nomeUsuario");
elemento.textContent = nomeUsuario;
}
inserirNome();
