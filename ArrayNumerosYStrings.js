//Dado un array de numeros y strings imprime un array solamente los strings
let array2 = [1, 'hola', 2 , 'adios', 3];
const strings2 = array2.filter(element => typeof element === 'string');

console.log(strings2)
