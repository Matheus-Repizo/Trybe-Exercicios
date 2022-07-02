// Parte I - Objetos e For/In
// // Usando o objeto abaixo, faça os exercícios a seguir:
// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Bem-vinda, ' + info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info['recorrente'] = 'Sim'
console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for(let value in info) {
    console.log(value);
};

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for(let value in info) {
    console.log(info[value]);
};   

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem:  'Christmas on Bear Mountain, Dells Four Color Comics #178' ,
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  for (let values in info) {
    if (
      values === 'recorrente' &&
      info[values] === 'Sim' &&
      info2[values] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[values] + ' e ' + info2[values]);
    }
  };

//   Usando o objeto abaixo, faça os exercícios a seguir:
// 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".


  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  let livro = leitor.livrosFavoritos[0];
console.log('O Livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + livro['titulo']);

// 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

let livros = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

  leitor.livrosFavoritos.push(livros);
  console.log(leitor);

//   8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
let livros2 = leitor.livrosFavoritos[1];
console.log(leitor.nome + ' tem 2 livros favoritos: ' + livro['titulo'] + ' e ' + livros2['titulo']);
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
