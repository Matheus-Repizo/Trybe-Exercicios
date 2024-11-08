let cabeçalho = document.createElement('h1');
cabeçalho.innerText = ' Exercício 5.2 - JavaScript DOM ';
document.body.appendChild(cabeçalho);

let principal = document.createElement('main');
principal.className = 'main-content';
document.body.appendChild(principal);

let section1 = document.createElement('section');
section1.className = 'center-content';
principal.appendChild(section1);

let paragrafo = document.createElement('p');
paragrafo.innerHTML = 'Serei um grande Desenvolvedor renomado!'
section1.appendChild(paragrafo);

let section2 = document.createElement('section');
section2.className = 'left-content';
principal.appendChild(section2);

let section3 = document.createElement('section');
section3.className = 'right-content';
principal.appendChild(section3);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200 ';
image.className = 'small-image';
section2.appendChild(image);

let listaNaoOrdenada = document.createElement('ul')
section3.appendChild(listaNaoOrdenada);

let conteudoDaListaUl = ['Um','Dois','Três','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez'];
for( let i = 0; i < conteudoDaListaUl.length; i += 1) {
    let lista = conteudoDaListaUl[i];

    let listaNaoOrdenadaItens = document.createElement('li');
    listaNaoOrdenadaItens.innerText = lista
    listaNaoOrdenada.appendChild(listaNaoOrdenadaItens);
};

for(let i = 1; i <=3; i += 1){
    let conteudoH3 = document.createElement('h3');
    conteudoH3.innerText = 'Sucesso';
    principal.appendChild(conteudoH3);
}
let titulo = document.querySelector('h1');
titulo.className = 'title';

let tagsH3 = document.getElementsByTagName('h3');
for(let i = 0; i < tagsH3.length; i += 1) {
    tagsH3[i].className = 'description' 
};
let selectorSection2 = document.getElementsByClassName('left-content')[0];
principal.removeChild(selectorSection2);

let selectorSection3 = document.getElementsByClassName('right-content')[0];
selectorSection3.style.marginRight = 'auto'

let selectorSection1 = document.getElementsByClassName('center-content')[0];
selectorSection1.parentNode.style.backgroundColor = 'green'
 
let selectorUl = document.getElementsByTagName('ul')[0];
selectorUl.lastChild.remove();
selectorUl.lastChild.remove();
