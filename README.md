# Curso JavaScript Básico
Curso de javaScript Básico da formação de Desenvolvedor Laravel Full-Stack da TreinaWeb.

####Tipos primitivos

#####Boolean
true ou false

> Obs: alguns valores podem ser equivalentes a true ou false como por exemplo:
0, -0, null, undefined, NaN, e ''(string vazia) todos equivalem a false.
Já qualquer outro valor, até mesmo '0' e 'false' equivalem a true por não serem string vazia.

#####Undefined e Null
Esses dois tipos indicam a ausência de valor.

#####Number
Usado para armazenar valores numéricos desde números inteiros até números flutuantes.

> 15 ou 1255.63 até números muito grandes como 2.998e10.

#####Strings
As Strings são usadas para representar textos. Sempre que quisermos um texto teremos que incluir aspas entre o texto, duplas ou simples.

> "Olá, está é uma string" ou 'Olá, está é uma string', porém em alguns casos em que houver aspas simples em meio
a palavra se recomenda utilizar a aspas duplas: "Mc Donals's".

#####Symbols
Novo tipo primitivo, tipo de dado que é único e imutável. Podendo ser utilizado como identificador de propriedades de objetos e etc.

> var sym1 = Symbol();


####Operadores

#####Operadores Lógicos
Normalmente usados para trabalhar com o tipo Boolean.

- '&&' significa E.
- '||' significa OU.

#####Operadores Aritméticos
Eles são usados com números para que possamos fazer cálculos.

- '+' Adição ou Concatenação de strings ('a'+'b' = 'ab')
- '-' Subtração.
- '*' Multiplicação.
- '/' Divisão.
- '%' Módulo.
- '**' Potenciação.
- '++' ou '--' Incremento e Decremento respectivamente. 

#####Operadores de Igualdade e Relacionais
Serve para comparar se dois valores são ou não iguais, retornando 'true' para se forem iguais e 'false' caso sejam diferentes ou apenas para checar se valor é maior ou menor que o outro.

> Obs: '!' é um operador que indica a negação, então a junção de '!=' significa não igual.

- '==' checa se valores são iguais.
- '!=' checa se valores não são iguais.
- '===' checa se valores são iguais e do mesmo tipo, ou seja, idênticos.
- '!==' checa se valores não são iguais e ter certeza que são diferentes.
- '>' checa se valor anterior é maior que o posterior 5 > 2. //true
- '>=' checa se valor anterior é maior ou igual ao posterior 5 >= 5. //true
- '<' checa se valor anterior é menor que o posterior 2 < 3. //true
- '<=' checa se valor anterior é menor ou igual ao posterior 2 <= 2. //true


> Obs2: Dar preferência para utilização de '===' ou '!==' na checagem, garantindo uma maior confiabilidade.
>E é possível comparar também letras e não apenas números, exemplo: 'a' < 'z'. //true

####Operadores Unários
São aqueles que recebem apenas um valor para funcionar.

- '-' pode ser usado para enverter o valor de um número: -3
- '!' inverte os valores do tipo Boolean: !true = false.
- 'typeof' serve para descobrir o tipo de algum valor: typeof 3 = Number.

####Operador Ternário
Ele recebe três valores e serve para verificarmos uma condição. O primeiro parâmetro é a condicional, o segundo é o valor caso 
a condicional seja verdadeira e o terceiro valor caso a condição seja falsa.

> (3 > 1) ? ('É maior') : ('É menor')