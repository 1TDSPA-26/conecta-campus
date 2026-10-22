// "use strict";


// // TODO v0.5: selecionar #botao-menu, #menu-principal e .icone-menu.
// // TODO v0.5: alternar a classe menu-aberto e atualizar aria-expanded.

// // Atualiza o ano do rodapé quando o elemento existe.
// const anoAtual = document.querySelector("[data-ano-atual]");
// if (anoAtual) {
//   anoAtual.textContent = new Date().getFullYear();
// }

// // Mantém a interação de orientação criada na versão anterior.
// const botaoOrientacao = document.querySelector("#botao-orientacao");
// const painelOrientacao = document.querySelector("#painel-orientacao");

// if (botaoOrientacao && painelOrientacao) {
//   botaoOrientacao.addEventListener("click", () => {
//     const estavaOculto = painelOrientacao.hidden;
//     painelOrientacao.hidden = !estavaOculto;
//     botaoOrientacao.setAttribute("aria-expanded", String(estavaOculto));
//     botaoOrientacao.textContent = estavaOculto
//       ? "Ocultar orientação"
//       : "Mostrar orientação";
//   });
// }

// // Seleciona o formulário e os campos usados na validação.
// const formulario = document.querySelector("#formulario-contato");

// if (formulario) {
//   const nome = document.querySelector("#nome");
//   const email = document.querySelector("#email");
//   const assunto = document.querySelector("#assunto");
//   const mensagem = document.querySelector("#mensagem");

//   const erroNome = document.querySelector("#erro-nome");
//   const erroEmail = document.querySelector("#erro-email");
//   const erroAssunto = document.querySelector("#erro-assunto");
//   const erroMensagem = document.querySelector("#erro-mensagem");
//   const mensagemStatus = document.querySelector("#mensagem-status");

//   formulario.addEventListener("submit", (evento) => {
//     evento.preventDefault();

//     let formularioValido = true;

//     // Limpa o resultado da tentativa anterior.
//     erroNome.textContent = "";
//     erroEmail.textContent = "";
//     erroAssunto.textContent = "";
//     erroMensagem.textContent = "";
//     mensagemStatus.textContent = "";

//     nome.classList.remove("campo-invalido");
//     email.classList.remove("campo-invalido");
//     assunto.classList.remove("campo-invalido");
//     mensagem.classList.remove("campo-invalido");

//     if (nome.value.trim().length < 3) {
//       erroNome.textContent = "Digite um nome com pelo menos 3 caracteres.";
//       nome.classList.add("campo-invalido");
//       formularioValido = false;
//     }

//     const emailDigitado = email.value.trim();
//     if (!emailDigitado.includes("@") || !emailDigitado.includes(".")) {
//       erroEmail.textContent = "Digite um e-mail válido.";
//       email.classList.add("campo-invalido");
//       formularioValido = false;
//     }

//     if (assunto.value === "") {
//       erroAssunto.textContent = "Selecione um assunto.";
//       assunto.classList.add("campo-invalido");
//       formularioValido = false;
//     }

//     if (mensagem.value.trim().length < 10) {
//       erroMensagem.textContent = "Escreva uma mensagem com pelo menos 10 caracteres.";
//       mensagem.classList.add("campo-invalido");
//       formularioValido = false;
//     }

//     if (formularioValido) {
//       mensagemStatus.textContent = "Dados validados. A sugestão está pronta para envio.";
//       mensagemStatus.className = "mensagem-status sucesso";
//       formulario.reset();
//       nome.focus();
//     } else {
//       mensagemStatus.textContent = "Revise os campos indicados antes de continuar.";
//       mensagemStatus.className = "mensagem-status erro";
//     }
//   });
// }



//Comentário de linha
/**
 * Comentário de bloco
 */

//Declaração de variáveis let,var const inicias em JS!
//  var nome = "José";
// let sobrenome = "das Couves";
// const idade = 53;

// //Concatenação simples
// console.log("Nome: "+nome+" "+sobrenome+" Idade: "+idade);

// //Template String + Interpolação, usando backticks
// console.log(`Nome: ${nome} ${sobrenome} Idade: ${idade}`);

//Diferenças de var/let/cosnt

//const - const é uma constante e a partir do momento que é atribuido um valor, não podemos mais mudar!

//var - O var é o tipo mais antigo, dito global, seu escopo não respeita nenhuma estrutura!

//let - Veio para substituir o var, o escopo respita todas as estruturas.

// var nome = "José";

// if(true){
//    var nome = "Antonio";
//     console.log(nome);
// }

// console.log(nome);

// // 1. Tipos Primitivos (Imutáveis)
// //     string: Sequência de caracteres para representar textos (ex: "Olá mundo").
//         let nome = "Jr";
//         console.log(typeof nome);
// //     number: Representa números inteiros ou de vírgula flutuante (ex: 42, 3.14).
//         let nr = 0;
//         console.log(typeof nr);
// //     boolean: Valores lógicos verdadeiro ou falso (true ou false).
//         let ligado = true;
//         console.log(typeof ligado);
// //     undefined: Variável declarada à qual ainda não foi atribuído um valor.
//         let sobrenome;
//         console.log(typeof sobrenome);
// //     null: Representa a ausência intencional de qualquer valor.
//         let vazio = null;
//         console.log(typeof vazio);
// //     bigInt: Para representar números inteiros maiores do que o limite seguro do Number.
// //     symbol: Cria valores únicos e imutáveis, geralmente usados como chaves de propriedades.

// let nome1 = "Maria";       // String
// let idade = 30;           // Number
// let ativo = true;         // Boolean
// let dados;                // Undefined
// let vazios = null;         // Object (um erro histórico do JS)

// console.log(typeof nome1);  // "string"
// console.log(typeof idade); // "number"
// console.log(typeof ativo); // "boolean"[cite: 1]
// console.log(typeof dados); // "undefined"[cite: 1]
// console.log(typeof vazios); // "object" (cuidado: o null retorna object por herança antiga)[cite: 1]

// // Número comum ultrapassando o limite seguro (perde precisão)
// let numeroNormal = 9007199254740991 + 5; 
// console.log(numeroNormal); // Resultado impreciso

// // Usando BigInt com a letra 'n' no final
// let numeroGrande = 9007199254740991n;
// let resultado = numeroGrande + 5n;

// console.log(resultado); // 9007199254740996n (precisão exata)
// console.log(typeof resultado); // "bigint"



// console.log(5 === "5"); // false (número vs string)
// console.log(10 === 10); // true (mesmo valor e mesmo tipo)

// // Exemplo: Regras para dirigir
// let idade2 = 18;
// let temCarteira = true;
// let estaBebado = false;

// // Operador E (&&) e NÃO (!)
// if (idade2 >= 18 && temCarteira && !estaBebado) {
//     console.log("Pode dirigir!");
// } else {
//     console.log("Não pode dirigir!");
// }

// // Exemplo: Descanso
// let fimDeSemana = true;
// let feriado = false;

// // Operador OU (||)
// if (fimDeSemana || feriado) {
//     console.log("Dia de descanso!");
// } else {
//     console.log("Dia de trabalho!");
// }

//Exercício guiado: Recuperando o menu e guardando em ARRAY


// Passo 1: Criação de um array chamado 'menu'
// Cada elemento dentro dos colchetes [] é um objeto delimitado por chaves {}
// Representando os dados extraídos dos links do HTML (texto visível e o arquivo de destino)

//Criando um array de frutas:
// let frutas = ["maçã","banana","laranja"];
// console.log(frutas[2]);
// //Sobrepondo valores no array
// frutas[2] = "uva";
// console.log(frutas[2]);
// //adicionar valores no array
// frutas.push("goiaba")
// console.log(frutas);

// //Retornando o tamanho do array
// console.log(frutas.length);

// for (let x = 0; x < frutas.length; x++) {
//     console.log(frutas[x]);
// }




// Passo 1: Criação de um array chamado 'menu'
// Cada elemento dentro dos colchetes [] é um objeto delimitado por chaves {}
// Representando os dados extraídos dos links do HTML (texto visível e o arquivo de destino)
let menu = [
    { texto: "Início", url: "index.html" },
    { texto: "Locais", url: "locais.html" },
    { texto: "Acessibilidade", url: "detalhes.html" },
    { texto: "Contato", url: "contato.html" },
    { texto: "Integrantes", url: "integrantes.html" }
];


let carro = {
    cor:"Vermelho",
    placa:"XJF-5F90",
    rodizio:true
}
console.log(carro.cor);
console.log(carro.placa);
console.log(carro.rodizio);

// Passo 2: Utilização da estrutura de repetição 'for...of'
// A variável 'link' vai representar um objeto diferente do array 'menu' a cada volta do loop
for (let link of menu) {
    
    // Passo 3: Utilização de Template Strings (crases ` `) e interpolação (${...})
    // Acessamos as propriedades do objeto atual usando a notação de ponto (link.texto e link.url)
    console.log(`Página: ${link.texto} -> Link: ${link.url}`);
}









