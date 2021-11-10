const buttonLogin = document.querySelector('#button-login');
const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const agreementCheckbox = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

let numberOfCharacters = 0;
let saveCount = textArea.maxLength;

function checkTryber() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', checkTryber);

agreementCheckbox.addEventListener('click', function() {
  if (agreementCheckbox.checked === true) {
    submitButton.removeAttribute('disabled');

  } else {
    submitButton.setAttribute('disabled','disabled');

  }
});

textArea.addEventListener('keyup', function() {
  for (const iterator of textArea.value) {
    numberOfCharacters += 1;
  }
  saveCount -= numberOfCharacters
  counter.innerText = saveCount;
  numberOfCharacters = 0;
  saveCount = textArea.maxLength;
  
});
