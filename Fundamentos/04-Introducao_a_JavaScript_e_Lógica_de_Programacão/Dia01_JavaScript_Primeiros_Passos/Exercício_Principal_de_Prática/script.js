// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a1 = 50;
const b1 = 30;

console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);
console.log(a1 % b1);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const a2 = 25;
const b2 = 30;

if (a2 > b2) {
  console.log(a2);
} else {
  console.log(b2);
}
//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const a3 = 100;
const b3 = 30;
const c3 = 70;

if (a3 > b3 && a3 > c3) {
  console.log(a3);
} else if (b3 > a3 && b3 > c3) {
  console.log(b3);
} else {
  console.log(c3);
}
//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const a4 = -3;

if (a4 >= 1) {
  console.log("Positive");
} else if (a4 <= -1) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

const ladoA = 0;
const ladoB = 0;
const ladoC = -10;
const somaLados = ladoA + ladoB + ladoC;

if (somaLados === 180) {
  console.log("True");
} else if (somaLados >= 0 && somaLados !== 180) {
  console.log("False");
} else if (somaLados < 0) {
  console.log("Erro");
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

const piecesofChess = "qUEEN";
const movements = ["Horizontal", "Vertical", "Front", "Back", "Diagonals", "L"];

switch (piecesofChess.toLowerCase()) {
  case "king":
    console.log(movements, "(Rei-> Uma casa apenas para qualquer direção.)");
    break;
  case "queen":
    console.log(
      movements[4],
      movements[0],
      movements[1],
      "(Rainha-> Diagonal, horizontal e vertical.)"
    );
    break;
  case "horse":
    console.log(
      movements.length[-1],
      "(Cavalo -> L pode pular sobre as peças.)"
    );
    break;
  case "bishop":
    console.log(movements[4], "(Bispo-> Diagonal.)");
    break;
  case "tower":
    console.log(
      movements[0],
      movements[1],
      "(Torre -> Horizontal e vertical.)"
    );
    break;
  case "pawn":
    console.log(
      movements[2],
      "(peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.)"
    );
    break;
  default:
    console.log("Erro!! Essa peça não existe");
    break;
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let note = -1;
if (note >= 90 && note <= 100) {
  console.log("A");
} else if (note >= 80 && note < 90) {
  console.log("B");
} else if (note >= 70 && note < 80) {
  console.log("c");
} else if (note >= 60 && note < 70) {
  console.log("D");
} else if (note >= 50 && note < 60) {
  console.log("E");
} else if (note >= 0 && note < 50) {
  console.log("F");
} else {
  console.log("Sua nota não existe!");
}

//🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
//Bonus: use somente um if.

const x = 2;
const y = 3;
const z = 7;
if ((x || y || z) % 2 === 0) {
  console.log("True");
} else {
  console.log("False");
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
//Bonus: use somente um if.

const x1 = 1;
const y1 = 2;
const z1 = 2;
if ((x1 || y1 || z1) % 2 !== 0) {
  console.log("True");
} else {
  console.log("False");
}

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//valorCustoTotal = valorCusto + impostoSobreOCusto
//lucro = valorVenda - valorCustoTotal (lucro de um produto)

const custoProd = 3000.00;
const valorVenda = 4000.00;
let impostoSobreoCusto = 0.20
let custoTotal = custoProd+(custoProd*impostoSobreoCusto)
let lucro = (valorVenda-custoTotal)

if(custoProd < 0 || valorVenda < 0) {
  console.log("Não foi Atribuidos valores de Venda ou Custo Válidos do Produto")
}else{
  console.log("O Lucro foi de",lucro*1000)
}

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as Faixas de impostos, use as seguintes referências:
//INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let salario = 3000.00
let AlqFaixaInss1 = 0.08;
let AlqFaixaInss2 = 0.09;
let AlqFaixaInss3 = 0.11;
let AlqFaixaInss4 = 570.88

let AlqFaixaIR1 = 0;
let AlqFaixaIR2 = 0.075;
let AlqFaixaIR3 = 0.15;
let AlqFaixaIR4 = 0.225;
let AlqFaixaIR5 = 0.27;

if(salario>=0 && salario<=1556.94) {
  let salarioDeduzidoINSS = salario - (salario*AlqFaixaInss1)
 
  if(salarioDeduzidoINSS>=0 && salarioDeduzidoINSS <=1903.98) {
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR1)-0))
  }else if(salarioDeduzidoINSS>1903.98 && salarioDeduzidoINSS<=2826.65){
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR2)-142.80))
  }else if ( salarioDeduzidoINSS>2826.65 && salarioDeduzidoINSS<=3751.05){
    console.log ("O Salário é", salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaInss3)-354.80))
  }else if (salarioDeduzidoINSS>3751.05 && salarioDeduzidoINSS<=4664.68) {
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR4)-636.13))
  }else{
    console.log("O Salário é", salarioDeduzidoINSS - ((salarioDeduzidoINSS*AlqFaixaIR5))-869.36)
  }

} else if(salario> 1556.94 && salario<=2594.92) {
  let salarioDeduzidoINSS = salario - (salario*AlqFaixaInss2)
 
  if(salarioDeduzidoINSS>=0 && salarioDeduzidoINSS <=1903.98) {
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR1)-0))
  }else if(salarioDeduzidoINSS>1903.98 && salarioDeduzidoINSS<=2826.65){
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR2)-142.80))
  }else if ( salarioDeduzidoINSS>2826.65 && salarioDeduzidoINSS<=3751.05){
    console.log ("O Salário é", salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaInss3)-354.80))
  }else if (salarioDeduzidoINSS>3751.05 && salarioDeduzidoINSS<=4664.68) {
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR4)-636.13))
  }else{
    console.log("O Salário é", salarioDeduzidoINSS - ((salarioDeduzidoINSS*AlqFaixaIR5))-869.36)
  }
}else if(salario> 2594.92 && salario <= 5189.82) {
  let salarioDeduzidoINSS = salario - (salario*AlqFaixaInss3)
 
  if(salarioDeduzidoINSS>=0 && salarioDeduzidoINSS <=1903.98) {
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR1)-0))
  }else if(salarioDeduzidoINSS>1903.98 && salarioDeduzidoINSS<=2826.65){
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR2)-142.80))
  }else if ( salarioDeduzidoINSS>2826.65 && salarioDeduzidoINSS<=3751.05){
    console.log ("O Salário é", salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaInss3)-354.80))
  }else if (salarioDeduzidoINSS>3751.05 && salarioDeduzidoINSS<=4664.68) {
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR4)-636.13))
  }else{
    console.log("O Salário é", salarioDeduzidoINSS - ((salarioDeduzidoINSS*AlqFaixaIR5))-869.36)
  }
}else {
  let salarioDeduzidoINSS = salario - (salario*AlqFaixaInss4)
 
  if(salarioDeduzidoINSS>=0 && salarioDeduzidoINSS <=1903.98) {
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR1)-0))
  }else if(salarioDeduzidoINSS>1903.98 && salarioDeduzidoINSS<=2826.65){
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR2)-142.80))
  }else if ( salarioDeduzidoINSS>2826.65 && salarioDeduzidoINSS<=3751.05){
    console.log ("O Salário é", salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaInss3)-354.80))
  }else if (salarioDeduzidoINSS>3751.05 && salarioDeduzidoINSS<=4664.68) {
    console.log("O Salário é",salarioDeduzidoINSS-((salarioDeduzidoINSS*AlqFaixaIR4)-636.13))
  }else{
    console.log("O Salário é", salarioDeduzidoINSS - ((salarioDeduzidoINSS*AlqFaixaIR5))-869.36)
  }
}