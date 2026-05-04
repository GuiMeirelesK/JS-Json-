/**
 * Buscar elementos na árvores DOM
 */
const header = document.getElementsByTagName("header");
console.log(header)
const tecnologiasSection = document.getElementById("tecnologias.web");
console.log(tecnologiasSection)
const lista = document.getElementsByClassName("lista")
console.log(lista)

//Comandos Modernos
const li = document.querySelector("li");
console.log(li)
const itensDaLista = document.querySelectorAll("ul li");
console.log(itensDaLista)
/**
 * Criar Elementos
 */
let nav = document.createElement("nav");
document.querySelector("body")
    .appendChild(nav);
const body = document.querySelector("body");
const main = document.querySelector("main");
body.insertBefore(nav,main);

/**
 * Atualizar Elementos
 */
const section = document.querySelector("tecnologias.web");
const ul = document.querySelector("ul");
let h2 = document.createElement("h2");
h2.innerText= "Tecnologias Webb"
h2.lang = "pr-BR";
h2.setAttribute("title", "Tecnologias Web");
h2.setAttribute("class", "subtitulo");

let listaNumeros = document.createElement(ul);
for (let i=0; i<0; i++){
    let li= document.createElement("li");

}
/**
 * Excluir Elementos
 */
const footer = document.querySelector("footer");
let footerRemovido = body.removeChild(footer);
console.log(footerRemovido);

/**
 * Apaga todos os itens da lista
 */
itensDaLista.forEach((d) => d.remove());

/**
 * Navegar elementos DOM
 */

//Navegar de um elemento para seu elemento pai
console.log(main.parentNode);

//Navegar para o próximo elemento irmão
console.log(main.nextElementSibling);

//Navegar para o elemento irmão anterior
console.log(main.previousElementSibling);

//Navegar para o primeiro elemento filho
console.log(body.firstElementChild);

//Navegar para o último elemento filho
console.log(body.lastElementChild);

//Obter todos os elementos filhos
let listaElementos = body.children;
console.log(listaElementos);