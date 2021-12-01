var x = prompt("Pon un numero");
var valor = 0;
while (valor !== x){
    valor++;
    if (valor%2 === 0){
        console.log("Es parell " + valor)
    }
    else if (valor%2 !== 0){
        console.log("Es senar " + valor)
    }
    break;
}

