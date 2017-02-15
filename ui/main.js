
var ctr=4;
console.log('Loaded!');    //print the "Loaded!" in console, which you can see through the google chrome inspect element feature(developer tool)
//change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='NEW VALUE';
//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';//...
}
img.onclick=function()
{
    var interval=setInterval(moveRight,100);
};
//for the footer botton
var button =document.getElementById('counter');
button.onclick=function()
{
    ctr++;
    var span=document.getElementById('count');
    span.innerHTML=ctr.toString();
};