let array = ['hola', 'casa', 'tejado' , 1 , 2 , 'patata']
function toOnlyStringArray(array){
  let soloString= [];
  for (let item of array) {
    if(typeof item == 'string'){
      soloString.push(item);
    }
    
  }
  return soloString
}
console.log(toOnlyStringArray(array))


