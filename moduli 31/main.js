//var cars = ['mercedes','audi','bmw']
//var i;
//var text="";
//for( var i = 0; i < cars.length; i++) {
   // text += cars[i] + " "
//}

//console.log(text)

//var j;
//var text2= "";
//for (j=1; j<=6;j++){
   // text2+=j+ "";
//}

//console.log(text2)

//var person = {
    //firstname:"Dokleat",
    //surname:"Reka",
    //Age:"13"

//}
//text3 = "  "


//var x;

//text3 = "  "
//for(x in person){
  //  text3 += person[x]+ "  "
//} 


//console.log(text3)

 //var students=['Olt','Dion','Tian']
//var y;

//for(y of person){
//    document.write(y,"<br>")
//}

//var txt=('Dokleat')
//var o;
//for(o of txt){
    // console.log(x)

   // document.write(x + "<br>")
//}

//let n = 0;

//do{
  // n+=1;
   //console.log(n)   
//}while (n<5)

//let e=0;
//let r=0;

//while(e<3){
    //e++
    //r+=e
//}

//console.log(e)
//console.log(e)

//var ekip=['Real madrid','Barcelona','Arsenal'];
//var q;
//var text2 = "  ";
//for(q=0;q<ekip.length;q++){
  //  console.log(cars[q])
//}

var students =['Dion','Artian','Diar']

var name_input=document.getElementById("name_input")

var btn=document.getElementById("btnAdd")
var btnShow=document.getElementById("btnShow")
for(var i=0;i<students.length;i++){
    showstudent=[student[i]]
}

btnAdd.onclick=function(){
    students.push(name_input.value)
}
btnShow.onclick=function(){
    for (var i=0;i<students.length;i++){
        document.write(students[i]+"<br>")
    }
}


