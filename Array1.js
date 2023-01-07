// Lista de numeros imprimir por consola el mayor

let numbersList = [7, 2, 3, 6, 5, 4, 1, 8, 9, 1337];
let maxNumber = numbersList[0];
for (let i = 0; i < numbersList.length; i++) {
  // console.log(i)
  if (numbersList[i] > maxNumber) {
    maxNumber = numbersList[i];
  }
}

console.log(maxNumber);
