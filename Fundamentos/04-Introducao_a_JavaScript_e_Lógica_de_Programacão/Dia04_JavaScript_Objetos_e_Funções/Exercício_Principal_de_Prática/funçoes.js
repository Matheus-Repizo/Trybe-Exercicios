// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

function verificaPalindromo(palavra) {
    let reverse = palavra.split("").reverse().join("");
    if (palavra.toLowerCase() === reverse.toLowerCase()) {
        return true;
    }
    return false;
}
console.log(verificaPalindromo("BoB"));

// - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function maiorNumeroDeCaracteresDoArrayPosition(array) {
    let maiorNumeroDeCaracteres = Math.max.apply(null, array);
    for (let value in array) {
        if (maiorNumeroDeCaracteres === array[value]) {
            return value;
        }
    }
}
console.log(
    maiorNumeroDeCaracteresDoArrayPosition([10, 500, 100, 2, 3, 10000])
);

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function menorNumeroDoArrayPosition(array) {
    let menorIndice = 0;
    for (let value in array) {
        if (array[menorIndice] > array[value]) {
            menorIndice = value;
        }
    }
    return menorIndice;
}
console.log(menorNumeroDoArrayPosition([10, 500, 10, 4, 3, 10000]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function nomescomMaisCaracteres(array) {
    let totalDeCaracteresDeNomes = [];
    for (nomes in array) {
        totalDeCaracteresDeNomes.push(array[nomes].length);
    }
    let maiorNumeroDeCaracteres = Math.max.apply(null, totalDeCaracteresDeNomes);
    for (let value in totalDeCaracteresDeNomes) {
        if (maiorNumeroDeCaracteres === totalDeCaracteresDeNomes[value]) {
            return array[value];
        }
    }
}
console.log(
    nomescomMaisCaracteres([
        "José",
        "Lucas",
        "Nádia",
        "Fernanda",
        "Cairo",
        "Joana",
    ])
);

// - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function numbersRepeat(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}

console.log(numbersRepeat([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somaNumerosNaturais(numeroNatural) {
    let counter = 0;
    for (let i = 0; i <= numeroNatural; i += 1) {
        counter += i;
    }
    return counter;
}

console.log(somaNumerosNaturais(5));

// - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split("");
    fimPalavra = fimPalavra.split("");
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
        if (
            palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]
        ) {
            controle = false;
        }
    }
    return controle;
}
console.log(verificaFimPalavra('joaofernando', 'fernan'));
