// udar cor de fundo do header quando o scrool for acionado
const header = document.querySelector('.site-header');

window.addEventListener('scroll', function() {
  const scrolled = window.scrollY > 0; // Verifica se o scroll vertical ocorreu

  if (scrolled) {
    header.style.backgroundImage = 'linear-gradient(45deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, .6) 100%)';
  } else {
    header.style.backgroundImage = ''; // Reverte para a cor de fundo padrão quando o scroll é resetado
  }
});

// // validação do botão enviar:

// const btnlogin = document.querySelector('#btnlogin');
// const email = document.querySelector('#emailLogin');
// const senha = document.querySelector('#senha');

// function validacaoEmail() {
//   const emailInvalido = email.value.length < 10 || email.value.length > 50;
//   const senhaInvalida = senha.value.length < 6 || senha.value.length > 20;
//   if (emailInvalido || senhaInvalida) {
//     return false;
//   }
// }

// btnlogin.addEventListener('click', (event) => {
//   event.preventDefault();
//   const validacao = validacaoEmail();
//   if (validacao === false) {
//     alert('Email ou senha inválidos.');
//   } else {
//     alert('Olá, Tryber!');
//   }
//   email.value = '';
//   senha.value = '';
// });

// // inserindo os radios de avalização
// // id=avaliation
// const radioBox = document.querySelector('#avaliation');

// function radiosAvaliacao() {
//   for (let i = 0; i <= 10; i += 1) {
//     const labelOpt = document.createElement('label');
//     labelOpt.innerHTML = i;
//     labelOpt.htmlFor = i;
//     const rateOpt = document.createElement('input');
//     rateOpt.type = 'radio';
//     rateOpt.name = 'rate';
//     rateOpt.value = i;
//     rateOpt.id = i;
//     rateOpt.className = 'rate';
//     radioBox.appendChild(rateOpt);
//     radioBox.appendChild(labelOpt);
//   }
// }

// radiosAvaliacao();

// // 18. Habilite o botão "Enviar" após a validação do checkbox//
// const agreementCheckbox = document.getElementById('agreement');
// const sendButton = document.getElementById('submit-btn');

// function validateFormSubmit() {
//   if (agreementCheckbox.checked === true) {
//     sendButton.disabled = false;
//   } else {
//     sendButton.disabled = true;
//   }
// }
// validateFormSubmit();

