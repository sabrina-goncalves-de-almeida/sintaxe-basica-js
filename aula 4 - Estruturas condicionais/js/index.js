/*
var jogador1 = 1;
var jogador2 = 0;
var placar;

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log("Jogadores são válidos") : console.log("Jogadores inválidos");;

if(jogador1 != -1){
    if(jogador1 > 0 && jogador2 == 0){
        console.log("Jogador 1 marcou ponto!");
        placar = jogador1 > jogador2;
    } else if(jogador2 > 0 && jogador1 == 0){
        console.log("Jogador 2 marcou ponto!");
        placar = jogador2 > jogador1;
    } else {
        console.log("Ninguém marcou ponto!");
    }
}

switch (placar){
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 venceu!");
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 venceu!");
        break;
    default:
        console.log("Empatou!");
}

var array = ["array 1", "array 2", "array 3", "array 4", "array 5"];
var object = {
    propriedade1: "valor1",
    propriedade2: "valor2",
    propriedade3: "valor3"
};

// for
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);    
}

//for in
for(let i in array){
    console.log(i);
}

for(i in object){
    console.log(i);
}

//for of
for(i of array){
    console.log(i);
}

for(i of object.propriedade1){
    console.log(i);
}
*/
var a = 0;
var b = 0;

while(a < 10){
    a++;
    console.log(a);
}

do {
    b++;
    console.log(b);
} while (b < 10);

