
let sectionPai = document.getElementById('pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.innerText='Irmao do Elemento Onde Você esta!'
sectionPai.appendChild(irmaoElementoOndeVoceEsta);



let sectionFilhos1 = document.getElementById('elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.innerText = 'Filho do Elemento Onde Você está!';
sectionFilhos1.appendChild(filhoElementoOndeVoceEsta);


let sectionPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.innerText = 'Filho do Primeiro Filho do Filho';
sectionPrimeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.


const pai = document.getElementById('pai');

    for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
      const currentChildren = pai.childNodes[index];
      if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
      }
    }

    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();