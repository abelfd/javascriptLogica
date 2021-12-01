function ex1(a){
    if (a%3 ===0){
        console.log('Es multiple de 3')
    }
    if (a%7 ===0){
        console.log('Es multiple de 7')
    }
    if ((a%3 !== 0) && (a%7 !== 0)){
        console.log('No es multiple de ninguno')
    }
}

ex1(21);

