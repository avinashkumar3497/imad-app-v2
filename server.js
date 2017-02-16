var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var ctr=0;
app.use(morgan('combined'));
var articles={/*has objects inside object*/
    'article-one':{
        title:' Article-one|Avinash',
        heading:'Article One',
        date:'feb 13,2017',
        content:    `
                    <p>
                        This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. 
                        </p>
                     <p>
                        This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. 
                    </p>
                     <p>
                        This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. This is the content of my first article, that is article one. 
                    </p>`
    },
   'article-two':{
       title:' Article-two|Avinash',
        heading:'Article Two',
        date:'feb 14,2017',
        content:    `//used back-quote instead of single quote
                    <p>
                    This is the content of the article-two.
                    </p>`
   },
   'article-three':{
        title:' Article-three|Avinash',
        heading:'Article three',
        date:'feb 15,2017',
        content:    `//used back-quote instead of single quote
                    <p>
                    This is the content of the article-three.
                    </p>`
   }
};                //used back-quote instead of single quote in artcle-one 
function createTemplate(data)      //used back-quote instead of single quote
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <h3>
            ${heading}
            </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`
;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/counter', function (req, res) {
    ctr++;
  res.send(ctr.toString());
});
app.get('/:articleName',function(req,res)     //: is the feature of the morgan
{  //articleName = article-one
    //article[articleName]={} content object for object one
    articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]/* array with named index(text instead of numbers)*/));});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var names=[];
app.get('/submit-name/:name',function()
{
    //get the name from the request
    var name=req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
