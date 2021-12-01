var num1 = prompt("Pon el primer numero");
var num2 = prompt("Pon el segundo numero");
var num3 = prompt("Pon el tercero numero");

//1
if (num1 > num2 && num2 > num3 && num1 > num3){
    console.log(num1 + " " + num2 + " " + num3)
}
if (num1 > num2 && num2 < num3 && num1 > num3){
    console.log(num1 + " " + num3 + " " + num2)
}

//2
if (num2 > num3 && num1 > num3 && num2 > num1){
    console.log(num2 + " " + num1 + " " + num3)
}
if (num2 > num3 && num1 < num3 && num2 > num1){
    console.log(num2 + " " + num3 + " " + num1)
}

//3
if (num3 > num1 && num2 > num1 && num3 > num2){
    console.log(num3 + " " + num2 + " " + num1)
}
if (num3 > num1 && num2 < num1 && num3 > num2){
    console.log(num3 + " " + num1 + " " + num2)
}

