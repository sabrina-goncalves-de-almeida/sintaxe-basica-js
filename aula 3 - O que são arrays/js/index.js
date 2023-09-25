// O que são vetores ou arrays?
/*
// Como declarar um array
let array = ["string", 1, true];
console.log(array);

// Pode declarar vários tipos de dados diferentes
let array2 = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
console.log(array2);

// forEach() - itera o array
array2.forEach(function(item, index){console.log(item,index)});

// push() - adiciona um item ao final do array
array2.push("Novo item");
console.log(array2);

// pop() - exclui um item do final do array
array2.pop(array2);
console.log(array2);

// shift() - excluir item no começo do array
array2.shift(array2);
console.log(array2);

// unshift() - adiciona item no começo do array
array2.unshift("Novo item no início");
console.log(array2);

// indexOf() - retorna ao índice de valor definido
console.log(array2.indexOf(true));

// splice() - remover ou substituir um índice de valor
array2.splice(0, 3);
console.log(array2);

// slice() - retorna uma parte de um array existente
let novoArray = array2.slice(0, 3);
console.log(novoArray);
*/
var object = {
    string: "string",
    number: 1,
    bool: true,
    array: ["array"],
    objectInternal: {
        objectInterno: "Objeto interno"
    }
};
console.log(object);
console.log(object.objectInternal);
console.log(object.bool);

// Desestruturação

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

// Outra forma de desestruturação
var {string, bool, objectInternal} = object;
console.log(string, bool, objectInternal);
