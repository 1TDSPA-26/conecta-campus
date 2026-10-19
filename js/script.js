// "use strict";


alert("Olá Mundo!")


//Capturando o elemento emm tempo de execução
//.getElementById pega o elemento id (coloque "nome do id")
var logo = document.getElementById("marca");

//textContent coloque o tome que escolheu, no meio da ToggleEvent, que aparece p usuario.
//logo.textContent = "Conecta Campus Alterado";

//atrelando um evento ao logo
logo.addEventListener("click", function () {
  //mudando o texto do logo
  logo.textContent = "Conecta Campus Alterado";
  logo.href = "#";
});


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


