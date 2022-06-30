// Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
//  Crie uma função que mude a cor do quadrado vermelho para branco.
//  Crie uma função que corrija o texto da tag <h1>.
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function inclusaoDeTexto(text) {
  let texto = document.getElementsByTagName("p");
  texto[1].innerText = text;
  return;
}

inclusaoDeTexto(
  "Eu me vejo um Profissional bem sucedido e muito remunerado na área da Programação. Mas antes de tudo ajudando várias pessoas com os meus projetos!"
);

function alteraçãoDeBackgroundMain(color) {
  let backgroundMain = document.getElementsByClassName("main-content");
  backgroundMain[0].style.backgroundColor = color;
  return;
}
alteraçãoDeBackgroundMain("rgb(76,164,109)");

function alteraçãoDeBackgroundSection(color) {
  let backgroundSection = document.getElementsByClassName("center-content");
  backgroundSection[0].style.backgroundColor = color;
  return;
}
alteraçãoDeBackgroundSection("White");

function correçãoDeH1(text) {
  let titulosH1 = document.getElementsByTagName("h1");
  titulosH1[0].innerText = text;
  return;
}
correçãoDeH1("Exercício 5.1 - JavaScript");

function paragrafosMaiusculos() {
  let paragrafos = document.getElementsByTagName("p");
  for(let i = 0; i < paragrafos.length; i +=1) {
    paragrafos[i].innerHTML = paragrafos[i].innerHTML.toUpperCase();
  }
}
paragrafosMaiusculos();

function showTags() {
    let conteudo = document.getElementsByTagName("p");
    for(let i = 0; i < conteudo.length; i +=1) {
     console.log(conteudo[i].innerHTML)
  }
}
  showTags();