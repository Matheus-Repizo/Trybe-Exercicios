// Crie um irmão para elementoOndeVoceEsta.
let sectionPai = document.getElementById('pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.innerText='Irmao do Elemento Onde Você esta!'
sectionPai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.

let sectionFilhos1 = document.getElementById('elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.innerText = 'Filho do Elemento Onde Você está!';
sectionFilhos1.appendChild(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.
let sectionPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.innerText = 'Filho do Primeiro Filho do Filho';
sectionPrimeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.
let proximoFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling
console.log(proximoFilho)