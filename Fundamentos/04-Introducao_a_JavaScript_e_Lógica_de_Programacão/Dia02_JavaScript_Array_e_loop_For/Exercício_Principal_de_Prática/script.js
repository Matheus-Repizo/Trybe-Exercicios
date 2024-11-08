//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers1.length; i += 1) {
    soma += numbers1[i];
}
console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma1 = 0;
for (let i = 0; i < numbers2.length; i += 1) {
    soma1 += numbers2[i];
}
let media = soma1 / numbers2.length;
console.log(media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let number3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma2 = 0;
for (let i = 0; i < number3.length; i += 1) {
    soma2 += number3[i];
}
let media1 = soma2 / number3.length;
if (media1 > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers4[0];
for (let indice = 0; indice < numbers4.length; indice += 1) {
    if (numbers4[indice] > maiorNumero) {
        maiorNumero = numbers4[indice];
    } else {
    }
}
console.log(maiorNumero);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;
for (let i = 0; i < numbers5.length; i += 1) {
    if (numbers5[i] % 2 !== 0) {
        impares += 1;
    }
}
if (impares === 0) {
    console.log("Nenhum valor encontrado");
} else {
    console.log(impares);
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers6 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers6[0];
for (let indice = 0; indice < numbers6.length; indice += 1) {
    if (numbers6[indice] < menorNumero) {
        menorNumero = numbers6[indice];
    } else {
    }
}
console.log(menorNumero);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let arrayEmpty = [];

for (let indice = 1; indice <= 25; indice += 1) {
    arrayEmpty.push(indice);
}
console.log(arrayEmpty);

// tilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let arrayEmpty2 = [];

for (let indice = 1; indice <= 25; indice += 1) {
    arrayEmpty2.push(indice);
};
for (let iDiv = 0; iDiv < arrayEmpty2.length; iDiv += 1) {
    console.log(arrayEmpty2[iDiv] / 2);

};



