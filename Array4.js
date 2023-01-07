//Dado un array de numeros y strings imprime un array solamente los strings
let array = ['hola', 'casa', 'tejado']
function toOnlyStringArray(array){
  let soloStrings= [];
  for (let item of array) {
    if(typeof item == 'string'){
      soloStrings.push(item);
      console.log(soloStrings)
    }
    return soloStrings
  }
}
toOnlyStringArray(array)
console.log(array)