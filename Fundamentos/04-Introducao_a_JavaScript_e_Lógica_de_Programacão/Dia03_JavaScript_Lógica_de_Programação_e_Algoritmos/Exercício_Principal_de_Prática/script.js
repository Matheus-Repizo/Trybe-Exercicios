// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede!
// Recomendamos que você utilize o debugger ou o console.log() durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o debugger, acesse nosso conteúdo sobre isso.
// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// // ! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.


let word = 'tryber';
let letter = ''

for (let i = 0; i < word.length; i += 1) {
    letter += word[word.length - 1 - [i]]

} console.log(letter)


//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = ''

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maiorPalavra.length)
        maiorPalavra = array[i]
}
console.log(maiorPalavra);

let array2 = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array2[0];

for (let i = 0; i < array2.length; i += 1) {
    if (array2[i].length < menorPalavra.length)
        menorPalavra = array2[i]
}
console.log(menorPalavra);

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorNumeroPrimo = 0;

for (let indice = 2; indice <= 50; indice += 1) {
    let nPrimo = true;
    for (let index = 2; index < indice; index += 1) {
        if ((indice % index) === 0) {
            nPrimo = false;
        }
    }
    if (nPrimo) {
        maiorNumeroPrimo = indice
    }
} console.log(maiorNumeroPrimo);
