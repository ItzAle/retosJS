const words = ["verde", "azul", "rojo", "amarillo"];
function selectOnlyStringWithA(stringList){
    let startsWithA = [];
    stringList.forEach(element => {
        if (element[0] == 'a'){
            startsWithA.push(element);
        }
    });
    return startsWithA;
}
console.log(selectOnlyStringWithA(words))