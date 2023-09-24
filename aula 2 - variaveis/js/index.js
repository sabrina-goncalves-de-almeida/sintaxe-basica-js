// Tipos Primitivos

// Booleanos ou boolean

var vOuF = false;
console.log(vOuF,"=", typeof(vOuF));

// Number

var numeroQualquer = 1;
console.log(numeroQualquer,"=", typeof(numeroQualquer));

// String

var textoQualquer = "Sou uma string";
console.log(textoQualquer,"=", typeof(textoQualquer));

// Array

var arrayQualquer = [1, "sou um texto em um array", [2,"sou um texto em array dentro de um array"], function funcaoAoQuadrado(n) { return n * n;},]

console.log(arrayQualquer,"=", typeof(arrayQualquer));

// Function

var funcao = function () {return "Oi"};
console.log(funcao(),"=", typeof(funcao));

// Como declarar variáveis?

var variavel1;
console.log(variavel1, "=", typeof(variavel1));

var variavel2 = "Texto";
variavel2 = "Sabrina";
console.log(variavel2, "=", typeof(variavel2));

let variavel3;
console.log(variavel3, "=", typeof(variavel3));

let variavel4 = "Outro texto";
variavel4 = "Outra pessoa";
console.log(variavel4, "=", typeof(variavel4));

const constante = "Não posso mudar ^w^";
console.log(constante, "=", typeof(constante)); 

var escopoGlobal = "Global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalDaFuncao = "Local";
    console.log(escopoLocalDaFuncao);
}

// console.log(escopoLocalDaFuncao); // essa apresentará um erro, pois não está no escopo da função

escopoLocal();



// Atribuição
var atribuicao = "Var";

// Comparação
var comparacao = 1==2;
console.log(comparacao); // false

var comparacao1 = "1"==1;
console.log(comparacao1); // true

// Comparação Idêntica
var comparacaoIdentica = "1"===1;
console.log(comparacaoIdentica); // false

var comparacaoIdentica1 = 1===1;
console.log(comparacaoIdentica1); // true

// Operadores Aritméticos

// Adição +
var adicao = 1+1;
console.log(adicao);

// Subtração -
var subtracao = 1-1;
console.log(subtracao);

// Multiplicação *
var multiplicacao = 2*3;
console.log(multiplicacao);

// Divisão real /
var divisaoReal = 6/2;
console.log(divisaoReal);

// Divisão inteira %
var divisaoInteira = 5%2;
console.log(divisaoInteira);

// Potenciação **
var pontenciacao = 2**10;
console.log(pontenciacao);

// Operadores relacionais

// < maior que
var maiorQue = 5 < 2;
console.log(maiorQue);

// > menor que
var menorQue = 5 > 2;
console.log(menorQue);

// <= maior ou igual a 
var maiorOuIgual = 5 <= 2;
console.log(maiorOuIgual);

// >= menor ou igual a 
var menorOuIgual = 5 >= 2;
console.log(menorQue);

// Operadoeres lógicos

//&& “e/and”
var e = true && false;
console.log(e);

// || “ou/or”
var ou = true || false;
console.log(ou);

// ! “não/not”
var nao = !false;
console.log(nao);
