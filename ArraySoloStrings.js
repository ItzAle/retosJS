//Dado un array de numeros y strings imprime un array solamente los strings
// Esta mal
let numerList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let strings = ["hola", "adios"];
for (let i = 0; i < strings.length; i++) {
  console.log(strings[i]);
}
// Esta bien
let soloString = [];
let arrays = ['buenas' , 1 , 3 , false, 'malas']
for (let i = 0; i < arrays.length; i++){
  if(typeof arrays[i] == 'string')
  soloString.push(arrays[i])
}

console.log(soloString)