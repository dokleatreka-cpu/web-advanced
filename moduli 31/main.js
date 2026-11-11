var cars = ['mercedes','audi','bmw']
var i;
var text="";
for( var i = 0; i < cars.length; i++) {
    text += cars[i] + " "
}

console.log(text)

var j;
var text2= "";
for (j=1; j<=6;j++){
    text2+=j+ "";
}

console.log(text2)

var person = {
    firstname:"Dokleat",
    surname:"Reka",
    Age:"13"

}
text3 = "  "


var x;

text3 = "  "
for(x in person){
    text3 += person[x]+ "  "
} 


console.log(text3)