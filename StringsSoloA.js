//Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.
let words = ["verde", "azul", "rojo", "amarillo"];
let wordsA = [];
for (let i = 0; i < words.length; i++) {
  if (words[i][0] == "a") {
    wordsA.push(words[i]);
  }
}
console.log(wordsA);