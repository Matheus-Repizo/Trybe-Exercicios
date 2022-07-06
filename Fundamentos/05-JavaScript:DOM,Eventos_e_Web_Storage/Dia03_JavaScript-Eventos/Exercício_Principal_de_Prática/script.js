function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

//   // Escreva seu código abaixo.
//   🚀 Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createDaysOfTheMonth() {
  let daysAdd = document.getElementById("days");

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let daysList = decemberDaysList[i];
    let daysLi = document.createElement("li");
    daysLi.innerText = daysList;

    if (daysList === 24 || daysList === 31) {
      daysLi.className = "day holiday";
      daysAdd.appendChild(daysLi);
    } else if (daysList === 4 || daysList === 11 || daysList === 18) {
      daysLi.className = "day friday";
      daysAdd.appendChild(daysLi);
    } else if (daysList === 25) {
      daysLi.className = "day holyday friday";
      daysAdd.appendChild(daysLi);
    } else {
      daysLi.className = "day";
      daysAdd.appendChild(daysLi);
    }
  }
}
createDaysOfTheMonth();
// Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function createButtonHoliday(ButtonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newbutton = document.createElement("button");
  let buttonID = "btn-holiday";

  newbutton.innerHTML = ButtonName;
  newbutton.id = buttonID;
  buttonContainer.appendChild(newbutton);
}
createButtonHoliday("Feriados");

// Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function mudaCorFeriados() {
  let backgroundColor = "rgb(238,238,238";
  let setColor = "red";
  let holidays = document.getElementsByClassName("holiday");
  let selectorBtn = document.getElementById("btn-holiday");

  selectorBtn.addEventListener("click", function () {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === setColor) {
        holidays[i].style.backgroundColor = backgroundColor;
      } else {
        holidays[i].style.backgroundColor = setColor;
      }
    }
  });
}
mudaCorFeriados();

// Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function createButtonFriday(ButtonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newbutton = document.createElement("button");
  let buttonID = "btn-friday";

  newbutton.innerHTML = ButtonName;
  newbutton.id = buttonID;
  buttonContainer.appendChild(newbutton);
}
createButtonFriday("Sexta-Feira");

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

function mudaTextFriday(fridaysArray) {
  let newtext = "Ihulll,Sexta-Feira!Bora tomar Uma!!";
  let fridays = document.getElementsByClassName("friday");
  let selectorBtn = document.getElementById("btn-friday");

  selectorBtn.addEventListener("click", function () {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== newtext) {
        fridays[i].innerText = newtext;
      } else {
        fridays[i].innerHTML = fridaysArray[i];
      }
    }
  });
}
let decemberFridays = [4, 11, 18, 25];
mudaTextFriday(decemberFridays);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function zoom() {
  let days = document.querySelector("#days");
  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
}

function tirazoom() {
  let days = document.querySelector("#days");
  days.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}
zoom();
tirazoom();

// Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function tarefas(taskName) {
  let taskContainers = document.querySelector(".my-tasks");
  let newTask = document.createElement("span");

  newTask.innerHTML = taskName;
  taskContainers.appendChild(newTask);
}
tarefas("Cozinhar");

// Exercício 8:
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Copiar
// * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function legend(cor) {
    let taskContainers = document.querySelector(".my-tasks");
    let newLegend = document.createElement("div");
    let newLegendClass = 'task'
    
    newLegend.className = newLegendClass
    newLegend.style.backgroundColor = cor;
    taskContainers.appendChild(newLegend);
  }
legend("red");

// Exercício 9:
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function selectionTask() {
    let selectorTask = document.getElementsByClassName('task selected');
    let tasks = document.querySelector('.task');
    tasks.addEventListener('click', function(event){
        if (selectorTask.length === 0) {
            event.target.className = 'task selected'
        } else {
            event.target.className = 'task'
        }
    })
};
selectionTask();


// Exercício 10:
// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)


function setDayColor() {
    let selectorTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let tasks = document.querySelector('.task');
    let taskColor = tasks.style.backgroundColor;

    days.addEventListener('click', function(event) {
        let applicationColorTarget = event.target.style.color;
        if(selectorTask.length > 0 && applicationColorTarget !== taskColor) {
            let color = selectorTask[0].style.backgroundColor;
            event.target.style.color = color;
        }else if (applicationColorTarget === taskColor) {
            event.target.style.color = 'rgb(119,119,119)'
        }
        })
    };
setDayColor();

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.

function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    });
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  }
  
  addNewTask();



