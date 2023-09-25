// tipos de função

// função declarativa
function funcao1(){
    console.log("Sou uma função declarativa");
}

funcao1();

// expressões de funções
// com nomeação
var funcao2 = function nomeDaFuncao2(){
    console.log("Sou uma expressão de função");
};

funcao2();

//sem nomeação
var funcao3 = function(){
    console.log("Sou uma expressão de função não nomeada");
};

funcao3();

var funcao4 = () => {console.log("Sou uma arrow function")};
funcao4();
