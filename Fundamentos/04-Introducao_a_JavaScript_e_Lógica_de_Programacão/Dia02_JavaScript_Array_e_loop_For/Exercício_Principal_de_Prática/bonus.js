// // Exercícios Bonus
// Ordene o array numbers em ordem crescente e imprima seus valores;

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numeros.length; i += 1) {
    for (let index2 = 0; index2 < i; index2 += 1) {
        if (numeros[i] < numeros[index2]) {
            let position = numeros[i]
            numeros[i] = numeros[index2]
            numeros[index2] = position
        }
    }
} console.log(numeros);

// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numeros2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numeros2.length; i += 1) {
    for (let index2 = 0; index2 < i; index2 += 1) {
        if (numeros2[i] > numeros2[index2]) {
            let position = numeros2[i]
            numeros2[i] = numeros2[index2]
            numeros2[index2] = position
        }
    }
} console.log(numeros2)


//Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numeros3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplication = [];

for (let i = 0; i < numeros3.length; i += 1) {
    if (i + 1 < numeros3.length) {
        multiplication.push(numeros3[i] * numeros3[i + 1])
    } else {
        multiplication.push(numeros3[i] * 2)
    }
} console.log(multiplication);