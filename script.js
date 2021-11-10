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
  const sectionFamily = document.querySelector('#section-family');
  const radiosFamily = document.querySelectorAll('.radios-family');
  event.preventDefault();
  sectionInfo.innerHTML = '';
  sectionInfo.innerHTML += '<span>Nome: ' + inputName.value + ' ' + inputLastname.value + '</span> <br />';
  sectionInfo.innerHTML += '<span>Email: ' + inputEmail.value + '</span> <br />';
  sectionInfo.innerHTML += '<span>Casa: ' + selectHouse.value + '</span> <br />';
  sectionFamily.innerHTML = '';
  sectionFamily.innerHTML = '<p>Qual sua família?</p>';
  for (const iterator of radiosFamily) {
    if (iterator.checked === true) {
      sectionFamily.innerHTML += '<span>Família: ' + iterator.value + '</span> <br />';
    } 
  }
});

submitButton.addEventListener('click', function(event) {
  const formLabelContent = document.querySelector('#form-label-content');
  const checkboxContents = document.querySelectorAll('.subject');
  formLabelContent.innerHTML = '';
  formLabelContent.innerHTML = '<p>Qual conteúdo você está com mais vontade de aprender?</p>';
  formLabelContent.innerHTML += "<span id='checboxsSelected'>Matérias:  </span>";
  const checboxsSelected = document.querySelector('#checboxsSelected');
  for (const iterator of checkboxContents) {
    if (iterator.checked === true) {
      checboxsSelected.innerText += ' ' + iterator.value + ',';
    } 
  }
});

submitButton.addEventListener('click', function(event) {
  const sectionEvaluation = document.querySelector('#section-evaluation');
  const radiosEvaluation = document.querySelectorAll('.radios-evaluation');
  sectionEvaluation.innerHTML = '';
  sectionEvaluation.innerHTML = '<p>Como você avalia a Trybewarts?</p>';
  for (const iterator of radiosEvaluation) {
    if (iterator.checked === true) {
      sectionEvaluation.innerHTML += '<span>Avaliação: ' + iterator.value + '</span>';
    }
  }

  const sectionTextArea = document.querySelector('#section-textarea');
  sectionTextArea.innerHTML = '';
  sectionTextArea.innerHTML = '<p>Observações: </p>';
  sectionTextArea.innerHTML += '<span>' + textArea.value + '</span>';
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
