"use strict";

//Objeto de usuario
let usuario = {
    email:"josea2gmail.com",
    senha:"123"
}

// getElementById() busca por meio o id do elemento.
const botaoLogin = document.getElementById("btnLogin");

//Atrelar um evento ao botão utilizando a função
//addEventListener(e)
    botaoLogin.addEventListener("click", function(evento){
        evento.preventDefault();
        console.log("Quem executou o evento: ", evento.target.textContent)
        console.log("Cliquei!");


        //Criando o inicio da validacao!
        //Recuperando os campos email e senha
        const emailTxt = document.getElementById("email").value;
        const senhaTxt = document.getElementById("senha").value;

        if (emailTxt === usuario.email && senhaTxt === usuario.senha) {
            window.location.href = "./detalhes.html";
        } else {
            alert("Nome de usuário ou senha incorretos!");
            window.location.href = "./index.html";
        }

    });
;//Colocar dentro da {} a ação EVENTO "botao login apertado"






// console.log("btnLogin");

// alert("Olá Mundo!")


// //Capturando o elemento emm tempo de execução
// //.getElementById pega o elemento id (coloque "nome do id")
// var logo = document.getElementById("marca");

// //textContent coloque o tome que escolheu, no meio da ToggleEvent, que aparece p usuario.
// //logo.textContent = "Conecta Campus Alterado";

// //atrelando um evento ao logo
// logo.addEventListener("click", function () {
//   //mudando o texto do logo
//   logo.textContent = "Conecta Campus Alterado";
//   logo.href = "#";
// });


// // // TODO v0.5: selecionar #botao-menu, #menu-principal e .icone-menu.
// // // TODO v0.5: alternar a classe menu-aberto e atualizar aria-expanded.

// // // Atualiza o ano do rodapé quando o elemento existe.
// // const anoAtual = document.querySelector("[data-ano-atual]");
// // if (anoAtual) {
// //   anoAtual.textContent = new Date().getFullYear();
// // }

// // // Mantém a interação de orientação criada na versão anterior.
// // const botaoOrientacao = document.querySelector("#botao-orientacao");
// // const painelOrientacao = document.querySelector("#painel-orientacao");

// // if (botaoOrientacao && painelOrientacao) {
// //   botaoOrientacao.addEventListener("click", () => {
// //     const estavaOculto = painelOrientacao.hidden;
// //     painelOrientacao.hidden = !estavaOculto;
// //     botaoOrientacao.setAttribute("aria-expanded", String(estavaOculto));
// //     botaoOrientacao.textContent = estavaOculto
// //       ? "Ocultar orientação"
// //       : "Mostrar orientação";
// //   });
// // }

// // // Seleciona o formulário e os campos usados na validação.
// // const formulario = document.querySelector("#formulario-contato");

// // if (formulario) {
// //   const nome = document.querySelector("#nome");
// //   const email = document.querySelector("#email");
// //   const assunto = document.querySelector("#assunto");
// //   const mensagem = document.querySelector("#mensagem");

// //   const erroNome = document.querySelector("#erro-nome");
// //   const erroEmail = document.querySelector("#erro-email");
// //   const erroAssunto = document.querySelector("#erro-assunto");
// //   const erroMensagem = document.querySelector("#erro-mensagem");
// //   const mensagemStatus = document.querySelector("#mensagem-status");

// //   formulario.addEventListener("submit", (evento) => {
// //     evento.preventDefault();

// //     let formularioValido = true;

// //     // Limpa o resultado da tentativa anterior.
// //     erroNome.textContent = "";
// //     erroEmail.textContent = "";
// //     erroAssunto.textContent = "";
// //     erroMensagem.textContent = "";
// //     mensagemStatus.textContent = "";

// //     nome.classList.remove("campo-invalido");
// //     email.classList.remove("campo-invalido");
// //     assunto.classList.remove("campo-invalido");
// //     mensagem.classList.remove("campo-invalido");

// //     if (nome.value.trim().length < 3) {
// //       erroNome.textContent = "Digite um nome com pelo menos 3 caracteres.";
// //       nome.classList.add("campo-invalido");
// //       formularioValido = false;
// //     }

// //     const emailDigitado = email.value.trim();
// //     if (!emailDigitado.includes("@") || !emailDigitado.includes(".")) {
// //       erroEmail.textContent = "Digite um e-mail válido.";
// //       email.classList.add("campo-invalido");
// //       formularioValido = false;
// //     }

// //     if (assunto.value === "") {
// //       erroAssunto.textContent = "Selecione um assunto.";
// //       assunto.classList.add("campo-invalido");
// //       formularioValido = false;
// //     }

// //     if (mensagem.value.trim().length < 10) {
// //       erroMensagem.textContent = "Escreva uma mensagem com pelo menos 10 caracteres.";
// //       mensagem.classList.add("campo-invalido");
// //       formularioValido = false;
// //     }

// //     if (formularioValido) {
// //       mensagemStatus.textContent = "Dados validados. A sugestão está pronta para envio.";
// //       mensagemStatus.className = "mensagem-status sucesso";
// //       formulario.reset();
// //       nome.focus();
// //     } else {
// //       mensagemStatus.textContent = "Revise os campos indicados antes de continuar.";
// //       mensagemStatus.className = "mensagem-status erro";
// //     }
// //   });
// // }
// /*Usar o navegador sem internet. tem td a biblioteca, da para puxar com document. (toda a doc/biblioteca do java)


// */
// //Criar um Tamplate string (juntar td) . envolver toda a linha com ´(backticks), tiar as "" e + e envolver tds as variaveis com ${}, (Interpolacao de variaveis)
// //const - Const é uma constante e a partir do momento que vc é atribuído com valor, não podemos mais mudar.
// //console.log(`Nome: ${nome} ${sobrenome} Idade: ${idade}`);

// // //Concatenação simples
// // console.log("Nome: "+nome+" "+sobrenome+" Idade: "+idade);

// /*1. Tipos Primitivos (Imutáveis)
//     String: Sequência de caracteres para representar textos (ex: "Olá mundo").
//     let nome = "Jr";
//     console.log(typeof nome);

//     Number: Representa números inteiros ou de vírgula flutuante (ex: 42, 3.14).
//     let nr = 0;
//     console.log(typeof nr);

//     Boolean: Valores lógicos verdadeiro ou falso (true ou false).
//     let ligado = true;
//     console.log(typeof ligado);

//     Undefined: Variável declarada à qual ainda não foi atribuído um valor.
//     let sobrenome;
//     console.log(typeof sobrenome);

//     Null: Representa a ausência intencional de qualquer valor.(null, é um bug do JS. Sempre representado por object)
//     let vazio = null;
//     console.log(typeof vazio);

//     BigInt: Para representar números inteiros maiores do que o limite seguro do Number.
//     Symbol: Cria valores únicos e imutáveis, geralmente usados como chaves de propriedades.
    
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


// contém = CONTeúdo  igual == igual: ===.
// console.log(5 === "5"); // false (número vs string)
// console.log(10 === 10); // true (mesmo valor e mesmo tipo)

// Exercício guiado: Recuperando o menu e guardando em ARRAY

// //Declaração de variáveis let,var const inicias em JS!
// //  var nome = "José";
// // let sobrenome = "das Couves";
// // const idade = 53;



// //Diferenças de var/let/cosnt

// //const - const é uma constante e a partir do momento que é atribuido um valor, não podemos mais mudar!

// //var - O var é o tipo mais antigo, dito global, seu escopo não respeita nenhuma estrutura!

// //let - Veio para substituir o var, o escopo respita todas as estruturas.

// // var nome = "José";

// // if(true){
// //    var nome = "Antonio";
// //     console.log(nome);
// // }

// // console.log(nome);


// Passo 1: Criação de um array chamado 'menu'
// Cada elemento dentro dos colchetes [] é um objeto delimitado por chaves {}
// Representando os dados extraídos dos links do HTML (texto visível e o arquivo de destino)

// Criando um array de frutas:
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

// */