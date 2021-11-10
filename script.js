const buttonLogin = document.querySelector("#button-login");
const emailLogin = document.querySelector("#email-login");
const passwordLogin = document.querySelector("#password-login");
const textArea = document.querySelector("#textarea");
const counter = document.querySelector("#counter");
const agreementCheckbox = document.querySelector("#agreement");
const submitButton = document.querySelector("#submit-btn");
const sectionFamily = document.querySelector("#section-family");
let numberOfCharacters = 0;
let saveCount = textArea.maxLength;

function checkTryber() {
  if (emailLogin.value === "tryber@teste.com" && passwordLogin.value === "123456") {
    window.alert("Olá, Tryber!");
  } else {
    window.alert("Email ou senha inválidos.");
  }
}

buttonLogin.addEventListener("click", checkTryber);

submitButton.addEventListener("click", function (event) {
  const sectionInfo = document.querySelector("#section-info");
  const inputName = document.querySelector("#input-name");
  const inputLastname = document.querySelector("#input-lastname");
  const inputEmail = document.querySelector("#input-email");
  const selectHouse = document.querySelector("#house");
  const radiosFamily = document.querySelectorAll(".radios-family");
  event.preventDefault();
  sectionInfo.innerHTML = "";
  sectionInfo.innerHTML += `<span>Nome: ${inputName.value} ${inputLastname.value}</span> <br />`;
  sectionInfo.innerHTML += `<span>Email: ${inputEmail.value}</span> <br />`;
  sectionInfo.innerHTML += `<span>Casa: ${selectHouse.value}</span> <br />`;
  sectionFamily.innerHTML = "";
  sectionFamily.innerHTML = "<p>Qual sua família?</p>";
  for (let index = 0; index < radiosFamily.length; index += 1) {
    if (radiosFamily[index].checked === true) {
      sectionFamily.innerHTML += "<span>Família: " + radiosFamily[index].value + "</span> <br />";
    }
  }
});

submitButton.addEventListener("click", function () {
  const formLabelContent = document.querySelector("#form-label-content");
  const checkboxContents = document.querySelectorAll(".subject");
  formLabelContent.innerHTML = "";
  formLabelContent.innerHTML = "<p>Qual conteúdo você está com mais vontade de aprender?</p>";
  formLabelContent.innerHTML += "<span id='checkboxs-selected'>Matérias:  </span>";
  const checboxsSelected = document.querySelector("#checkboxs-selected");
  for (let index = 0; index < checkboxContents.length; index += 1) {
    if (checkboxContents[index].checked === true) {
      checboxsSelected.innerHTML += "<span>" + checkboxContents[index].value + ', ' + "</span>";
    }
  }
});

submitButton.addEventListener("click", function () {
  const sectionEvaluation = document.querySelector("#section-evaluation");
  const radiosEvaluation = document.querySelectorAll(".radios-evaluation");
  sectionEvaluation.innerHTML = "";
  sectionEvaluation.innerHTML = "<p>Como você avalia a Trybewarts?</p>";
  for (let index = 0; index < radiosEvaluation.length; index += 1) {
    if (radiosEvaluation[index].checked === true) {
      sectionEvaluation.innerHTML += "<span>Avaliação: " + radiosEvaluation[index].value + "</span> <br />";
    }
  }
  const sectionTextArea = document.querySelector("#section-textarea");
  sectionTextArea.innerHTML = "";
  sectionTextArea.innerHTML = "<p>Observações: </p>";
  sectionTextArea.innerHTML += "<span>" + textArea.value + "</span>";
});

agreementCheckbox.addEventListener("click", function () {
  if (agreementCheckbox.checked === true) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
});

textArea.addEventListener("keyup", function () {
  for (let index = 0; index < textArea.value.length; index += 1) {
    numberOfCharacters += 1; 
  }
  saveCount -= numberOfCharacters;
  counter.innerText = saveCount;
  numberOfCharacters = 0;
  saveCount = textArea.maxLength;
});
