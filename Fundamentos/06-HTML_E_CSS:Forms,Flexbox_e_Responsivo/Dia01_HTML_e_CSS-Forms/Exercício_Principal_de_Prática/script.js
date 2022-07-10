window.onload = function () {
  const clearBtn = document.querySelector("#btn-clear");
  clearBtn.addEventListener("click", clearAction);
  let btnSend = document.getElementById("btn-send");
  btnSend.addEventListener("click", minEMaxCharacteres);
  const agreement = document.querySelector("#checkbox2");
  agreement.addEventListener("change", enableSubmit);
};

function minEMaxCharacteres(event) {
  event.preventDefault();
  const validation = validationInput();
  if (validation === false) {
    alert("Dados inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}
function validationInput() {
  const email = document.querySelector("#email-adreess").value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector("#name-user").value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector("#text-area").value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  } else {
    return true;
  }
}

function clearAction() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}

function enableSubmit() {
  const submitBtn = document.querySelector("#btn-send");
  const agreement = document.querySelector("#checkbox2");
  submitBtn.disabled = !agreement.checked;
}
