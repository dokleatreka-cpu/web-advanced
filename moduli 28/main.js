var button1 = document.getElementById("btn1")

button1.onclick=function(){
    alert("Hello")

}

var button2=document.querySelector('btn1')
button2.onclick=function(){
    alert('hello111')
}

button2.addEventListener("click",function(){
    alert('hellooooo')
})

var button2=document.getElementById('btn2')
var button3=document.getElementById('btn3')
var button4=document.getElementById('btn4')

button2.onmouseover=function(){
    alert('hello')
}

button3.onmouseover=function(){
    alert('hello')
}

button4.onmouseover=function(){
    alert('hello')
}

var button5=document.getElementById("btn5")
var text=document.getElementById('txt1')

button5.onclick=function(){
    text.style.color='red';
    text.style.backgroundColor='blue';
    text.style.fontSize='100px';
    text.style.padding='20px';
    text.style.textAlign='center'
}

