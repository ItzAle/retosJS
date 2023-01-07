// Dado un array de números imprime por consola la suma de todos los que sean pares.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    numbers.push(suma[i]);
    suma = suma + numbers[i];
  }
}
console.log(suma);