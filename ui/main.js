console.log('Loaded!');    //print the "Loaded!" in console, which you can see through the google chrome inspect element feature(developer tool)
//change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='NEW VALUE';
//move the image
var img=document.getElementById(madi);
img.onclick=function()
{
    image.style.marginLeft='100px';
};