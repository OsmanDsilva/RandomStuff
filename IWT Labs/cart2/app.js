function fin(){

var i1 = document.getElementById('one').value;
var i2 = document.getElementById('two').value;
var i3 = document.getElementById('three').value;
var i4 = document.getElementById('four').value;
var i5 = document.getElementById('five').value;

var p1=500;
var p2=700;
var p3=100;
var p4=250;
var p5=400;

var f1=i1*p1;
var f2=i2*p2;
var f3=i3*p3;
var f4=i4*p4;
var f5=i5*p5;

var fina=f1+f2+f3+f4+f5;

document.getElementById('final1').innerHTML=fina;
//document.getElementById('final1').innerHTML=f1;
//document.getElementById('final2').innerHTML=f2;
//document.getElementById('final3').innerHTML=f3;
//document.getElementById('final4').innerHTML=f4;
//document.getElementById('final5').innerHTML=f5;

}
