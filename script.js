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

submitButton.addEventListener('click', function(event) {
  const sectionInfo = document.querySelector('#section-info');
  const inputName = document.querySelector('#input-name');
  const inputLastname = document.querySelector('#input-lastname');
  const inputEmail = document.querySelector('#input-email');
  const selectHouse = document.querySelector('#house');

  //-----------------------------------------------------------
  const sectionFamily = document.querySelector('#section-family');
  const radioFrontend = document.querySelector('#radio-frontend');
  const radioBackend = document.querySelector('#radio-backend');
  const radioFullStack = document.querySelector('#radio-fullStack');

  //-----------------------------------------------------------
  const formLabelContent = document.querySelector('.form-label-content');
  event.preventDefault();

  //-----------------------------------------------------------
  sectionInfo.innerHTML = '';
  sectionInfo.innerHTML += '<span>Nome: ' + inputName.value + ' ' + inputLastname.value + '</span> <br />';
  sectionInfo.innerHTML += '<span>Email: ' + inputEmail.value + '</span> <br />';
  sectionInfo.innerHTML += '<span>Casa: ' + selectHouse.value + '</span> <br />';

  //-----------------------------------------------------------
  sectionFamily.innerHTML = '';
  sectionFamily.innerHTML = '<p>Qual sua família?</p>';
  if (radioFrontend.checked === true) {
    sectionFamily.innerHTML += '<span>Família: ' + radioFrontend.value + '</span> <br />';

  } else if (radioBackend.checked === true) {
    sectionFamily.innerHTML += '<span>Família: ' + radioBackend.value + '</span> <br />';
    
  } else if (radioFullStack.checked === true) {
    sectionFamily.innerHTML += '<span>Família: ' + radioFullStack.value + '</span> <br />';
    
  } else {
    sectionFamily.innerHTML += '<span>Família: ' + '</span> <br />';
  }
  
});

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
