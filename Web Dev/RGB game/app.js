var boxes = document.getElementsByClassName("box1");
var a=[];
var pickedcol;
var clickedcol;

init();

function init(){
    generateRandomColor();
    pickedcol=pickcol();
    document.getElementById('text1').innerHTML=pickedcol;
    for(var i=0;i<6;i++)
    {
        boxes[i].style.background=a[i];
    }
    checkfn();
}

function generateRandomColor(){
    for(var i=0;i<6;i++)
    a.push(randomColor());
    return;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

function checkfn(){
    for(var i = 0; i < 6; i++){
        boxes[i].addEventListener("click", function(e){
                 clickedcol = this.style.backgroundColor;
                if(clickedcol === pickedcol){
                            alert("Correct");
                            } else {
                                alert("Try Again");    
                    }
        });
    }
}

function pickcol()
{
    var num = Math.floor(Math.random() * 6);
	return a[num];
}
