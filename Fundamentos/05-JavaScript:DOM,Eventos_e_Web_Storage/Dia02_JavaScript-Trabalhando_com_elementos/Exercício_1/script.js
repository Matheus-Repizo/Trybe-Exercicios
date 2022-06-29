// arquivo script.js

//Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 
const father = elementoOndeVoceEsta.parentElement;
father.style.color = "green";

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? 
const firstElementChildChild = elementoOndeVoceEsta.firstElementChild;
firstElementChildChild.innerText = "Filhotinho"

//Acesse o primeiroFilho a partir de pai.
const first_Child = father.firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. 
const first_Child2 = elementoOndeVoceEsta.previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
 const text = elementoOndeVoceEsta.nextSibling;

 //Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta. 
 const terceiroFilho = elementoOndeVoceEsta.nextElementSibling

 // 8. Agora acesse o terceiroFilho a partir de pai.
 const terceiroFilho2 = father.lastElementChild.previousElementSibling;