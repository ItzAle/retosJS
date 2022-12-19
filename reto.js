// Lista de numeros imprimir por consola el mayor

let numbersList= [7,2,3,6,5,4,1,8,9,1337];
let maxNumber = numbersList[0];  
for (let i= 0 ; i< numbersList.length; i++){
    // console.log(i)
    if (numbersList[i] >maxNumber) {
        maxNumber=numbersList[i]
    }
}

console.log(maxNumber)

// Dado un array de números imprime por consola la suma de todos los que sean pares.

let numbers = [1,2,3,4,5,6,7,8,9];
let suma = 0;
for(let i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 == 0) {
        numbers.push(suma[i]);
        suma = suma + numbers[i]
    }
}
    console.log(suma)

 //Dado un array de numeros y strings imprime un array solamente los strings

    let numerList = [1,2,3,4,5,6,7,8,9]
    let strings = ['hola' , 'adios']
    for(let i=0; i<strings.length; i++){
        console.log(strings[i]);
    }

//Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.
    let words= ["verde" , "azul" , "rojo" , "amarillo"];
    let wordsA= [];
    for (let i=0; i<words.length; i++){
        if (words[i][0] == 'a'){
            wordsA.push(words[i]);
        }
    }
    console.log(wordsA)