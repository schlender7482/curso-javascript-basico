//Declaração de variáveis.

var age = 25;
//é diferente
var Age = 25;
//O JavaScript é Case Sensitive ou seja as variáveis 'age' e 'Age' são diferentes.

//Exemplo de if.
var n1 = 3;
var n2 = 5;

if (n1 <= n2) {
    console.log('n1 é menor que n2.');
} else {
    console.log('n1 não é menor que n2.');
}

//Exemplo de if ternário
//(n1 <= n2) ? console.log('n1 é menor que n2.') : console.log('n1 não é menor que n2.');

//Desafio par ou ímpar
var numero = 2;
if ((numero % 2) === 0) {
    console.log('Número par.');
} else {
    console.log('Número ímpar.');
}

//Desafio do segundo maior.
function segundoMaior(numeros) {
    let maior = numeros[0];
    let segundoMaior = numeros[0];

    for (numero of numeros) {
        if (numero > maior) {
            maior = numero;
        }
    }
    for (numero of numeros) {
        if (numero > segundoMaior && numero < maior) {
            segundoMaior = numero;
        }
    }
    return segundoMaior;
}
segundoMaior([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Desafio do objeto.
function meuObjeto(a, b) {
   return {
       largura: a,
       comprimento: b,
       perimetro: (2*(a+b)),
       area: (a*b)
   }
}
meuObjeto(4, 5);

function getDiaSemana(dataString) {
    let dateArray = dataString.split('-');

    return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
}
getDiaSemana('2010-11-10');

function diferenca(m, n) {
    let array = m.concat(n);
    for (let num of array) {
        if (m.indexOf(num) === -1 || n.indexOf(num) === -1) {
            console.log(num);
        }
    }
}
diferenca([2, 4, 5, 9], [2, 4, 11, 12]);


function quantidade(objetos) {
    let soma = 0;
    for (let i = 0; i <= objetos.length - 1; i++) {
        objetos[i].x === objetos[i].y ? soma++ : null;
    }
    return soma;
}

function ordenacao(jogadores) {
    jogadores.sort((a, b) => {
        return b['placar'] - a['placar'];
    });
    jogadores.forEach(function (jogador) {
        console.log(jogador.nome+" "+jogador.placar);
    });
}

let teste = [
    {nome: 'amy', placar: 100},
    {nome: 'david', placar: 100},
    {nome: 'heraldo', placar: 50},
    {nome: 'aakansha', placar: 75},
    {nome: 'aleksa', placar: 150},
];
ordenacao(teste);

function operacao(segInt, segFloat, segString) {
    let priInt = 4;
    let priFloat = 3.17;
    let priString = "JavaScript - ";

    console.log(priInt+parseInt(segInt));
    console.log(priFloat+parseFloat(segFloat));
    console.log(`${priString}${segString.toString()}`);
}
operacao(7, 5.32, 'Básico');