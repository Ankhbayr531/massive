// massive/array -> []
var a = 5;
// var massiveName = [];
var b = ['ankhaa', 12, true, null, 56, false, 'Ujin']; 
console.log(b);
// index -> element/utga-iin ezleh bairshliin dugaar
// index -> 0 ees ehelne
// length -> massive dotorh elementiin too
console.log(b[0]); // massive iin hamgiin ehnii utga
console.log(b.length);
console.log(b[b.length-1]); // massive iin hamgiin suuliin utga
b[0]="Anu";
console.log(b[0]);
for ( var i=0; i<=b.length-1; i++){
    console.log(b[i]);
}
// 0
var c = [12, 69, 24, 12, 16];
console.log(c[0]+c[c.length-1]);
// 1
var d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var niilber=0;
var urjver=1;
for( var i=0; i<=d.length-1; i ++){
    niilber=niilber+d[i];
    urjver=urjver*d[i];
}
console.log(niilber);
console.log(urjver);
// 2
for( var i=0; i<=c.length-1; i ++){
    if( c[i]%2 == 0){
        console.log(c[i]+"tegsh");
    }else{
        console.log(c[i]+"sondgoi");
    }
}
// 3 
for( var i=0; i<=c.length-1; i ++){
    if(c[i]%2 == 0){
        console.log("tegsh: "+c[i]);
    }else{
        console.log("sondgoi: "+c[i]);
    }
}
// chnage color project
var colors =['black', 'red', 'purple', 'yellow', 'brown'];
var i = -1;
var body = document.getElementsByTagName('body')[0];
var up;
var autoBtn = document.querySelector('.autoBtn');
var stopBtn = document.querySelector('.stopBtn');
var i1 = document.getElementsByTagName('button')[0];
console.log(body);
function changeColor(){
    mode();
}
function colorBack(){
    if(i<=0){
        i = colors.length;
    }else{

    }
    i--;
    body.style.backgroundColor=colors[i];
}
function auto(){
    mode();
    up = setTimeout(auto, 2000);
    autoBtn.disabled = true;
    if(autoBtn.disabled = true){
        stopBtn.disabled = false;
    }
}
// scope -> global var
function stop(){
    clearTimeout(up);
    stopBtn.disabled = true;
    if(stopBtn.disabled = true){
        autoBtn.disabled = false;
    }
}
// setTimeout -> yamar neg code heden secundiin daraa ajilahiig tohiruulna 
// clearTimeout -> setTimeout iig zogsoono
function hello(){
    console.log('hello');
}
setTimeout(hello, 3000);
function mode(){
    i++
    body.style.backgroundColor=colors[i];
    if(i >= colors.length-1){
        i = -1;
    }
}
i1.innerText=colors[i];