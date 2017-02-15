var button= document.getElementById('counter');
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
button.onclick=function()
{
    var request= new XMLHttpRequest();   // object 'request' created, constructor will be called.
//Capture the response and store it in a variable
request.onreadystatechange=function()
{
    if(request.readyState===XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
            var ctr=request.responseText; //the responseText will give the respose(recieved by the request) in text form
            var span=document.getElementById('count');
            span.innerHTML=ctr.toString();
        }
    }
}
//Make the request
request.open('GET','http://avinashkumar3497.imad.hasura-app.io/counter',true); /*. It will make the request and will get get us the response from http://avinashkumar3497.imad.hasura-app.io/counter*/
request.send(null);
};
/*for the footer botton
var ctr=4;
var button =document.getElementById('counter');
button.onclick=function()
{
    ctr++;
    var span=document.getElementById('count');
    span.innerHTML=ctr.toString();
};*/