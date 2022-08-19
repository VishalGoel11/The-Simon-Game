var bool = false;
var b=0;
var k=0;
var answer1=document.getElementById("right");
var answer2=document.getElementById("wrong");
var audio= new Audio('87631833.mp3');
var audio1= new Audio('wronganser.mp3');
var pogo1 = function () {
    bool=true;
    if (bool === true) {
        var head = document.getElementById("heading");
        head.innerHTML = "Game is started";
        bool=true;
    }
}
var pogo2=()=>{
        bool=false;
        var head = document.getElementById("heading");
        head.innerHTML = "Game is Ended";
}

var btn4 = function () {
    var a = Math.random();
    var number = Math.round(10 * a);
    if(bool===true){
    if (number === 1 || number===2 || number===3 || number===4 || number===5) {
        audio.play();
        confirm("Hurray!, you clicked right button");
        k++;
        
        answer1.innerHTML=k;
        answer1.style.color.innerHTML="green";
    }else {
        audio1.play();
        confirm("Better luck next Time");
        
        b++;
        answer2.innerHTML=b;
        answer2.style.color.innerHTML="red";
    }
}else{
    alert("You have not started the game");
}
}
var btn1 = function () {
    var a = Math.random();
    if(bool===true){
    var number = Math.round(10 * a);
    if (number === 3 || number==6 || number==9 || number===1 || number===7) {
        audio.play();
        confirm("Hurray!, you clicked right button");
        
        k++;
        answer1.innerHTML=k;
        answer1.style.color.innerHTML="green";
    } else {
        audio1.play();
        confirm("Better luck next Time");
        b++;
        
        answer2.innerHTML=b;
        answer2.style.color.innerHTML="red";
    }}else{
    alert("You have not started the game");
}
}
var btn2 = function () {
    var a = Math.random();
    var number = Math.round(10 * a);
    if(bool===true){
        
    if (number === 1 || number===2 || number===3 || number===4 || number===5) {
        audio.play();
        confirm("Hurray!, you clicked right button");
        
        k++;
        answer1.innerHTML=k;
        answer1.style.color.innerHTML="green";
    } else {
        audio1.play();
        confirm("Better luck next Time");
        b++;
        
        answer2.innerHTML=b;
        answer2.style.color.innerHTML="red";
    }}else{
    alert("You have not started the game");
}
}
var btn3 = function () {
    var a = Math.random();
    var number = Math.round(10 * a);
    if(bool===true){
    if (number === 1 || number===2 || number===3 || number===4 || number===5) {
        audio.play();
        confirm("Hurray!, you clicked right button");
        k++;
        answer1.innerHTML=k;
        answer1.style.color.innerHTML="green";
    }
    else {
        audio1.play();
        confirm("Better luck next Time");
        b++;
        
        answer2.innerHTML=b;
        answer2.style.color.innerHTML="red";
    }}else{
    alert("You have not started the game");
}
}
