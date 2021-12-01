var text = "vf6545fg4556h74";
var num = text.replace(/[^0-9]/gi, "");
var sum = 0;
for (var i = 0; i < num.length; i++){
    sum += Number(num.charAt(i))
}