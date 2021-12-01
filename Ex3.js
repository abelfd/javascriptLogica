var nota = prompt("Pon la nota de tu examen");
switch (true) {
    case (nota >= 0 && nota <= 4.99):
            console.log('Insuficiente')
            break;
    case (nota >= 5 && nota <= 5.99):
            console.log('Suficiente')
            break;
    case (nota >= 6 && nota <= 6.99):
            console.log('Bien')
            break;
    case (nota >= 7 && nota <= 8.99):
            console.log('Notable')
            break;
    case (nota >= 9 && nota <= 10):
            console.log('Excelente')
            break;
}


