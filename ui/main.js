window.onload=function()
{
var button= document.getElementById('counter');
console.log('Loaded!');    //print the "Loaded!" in console, which you can see through the google chrome inspect element feature(developer tool)
//change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='WELCOME TO MY WEBSITE';
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
var submit1=document.getElementById('submit_cmt');
submit1.onmouseover=function()
{
    var cmtInput=document.getElementById('cmt');
    var cmt=cmtInput.value;
    //make a request to the server and send the name
    //Capture the list of names and render it as a list
                var request= new XMLHttpRequest();   // object 'request' created
            //Capture the response and store it in a variable
            request.onreadystatechange=function()
            {
                if(request.readyState===XMLHttpRequest.DONE)
                {
                    if(request.status===200)
                    {
                        var cmts=request.responseText;
                        cmts=JSON.parse(names);
                        var list='';
                        for(var i=0;i<cmts.length;i++)
                        {
                            list+='<li>' + cmts[i] + '</li>';
                        }
                         var ui=document.getElementById('cmt_list');
                        ui.innerHTML=list; 
                    }
                }
            };
            //Make the request
             request.open('GET','http://avinashkumar3497.imad.hasura-app.io/submit-comments?cmt=' + cmt,true); /*. It will make the request and will get get us the response from http://avinashkumar3497.imad.hasura-app.io/counter*/
            request.send(null);     
             
};
var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    //make a request to the server and send the name
    //Capture the list of names and render it as a list
                var request= new XMLHttpRequest();   // object 'request' created
            //Capture the response and store it in a variable
            request.onreadystatechange=function()
            {
                if(request.readyState===XMLHttpRequest.DONE)
                {
                    if(request.status===200)
                    {
                        var names=request.responseText;
                        names=JSON.parse(names);
                        var list='';
                        for(var i=0;i<names.length;i++)
                        {
                            list+='<li>' + names[i] + '</li>';
                        }
                         var ui=document.getElementById('namelist');
                        ui.innerHTML=list; 
                    }
                }
            };
            //Make the request
             request.open('GET','http://avinashkumar3497.imad.hasura-app.io/submit-name?name=' + name,true); /*. It will make the request and will get get us the response from http://avinashkumar3497.imad.hasura-app.io/counter*/
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
};