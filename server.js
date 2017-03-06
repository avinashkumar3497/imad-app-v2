var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
  user:'avinashkumar3497',
  database:'avinashkumar3497',
  host:'db.imad.hasura-app.io',
  port:'5432',
  password:process.env.DB_PASSWORD     //it helps cloud.imad.hasura.io in recognising the new variable DB_PASSWORD
};
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
        <hr/>
        <div class='footer'>
           Comment Here --- <input type='text' id='cmt' placeholder='name'></input>
                            <input type='submit' id='submit_cmt' value='submit'></input>
        <ui id='cmt_list'></ui>                    
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>`
;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//create the pool somewhere globally so its lifetime
//lasts for as long as your app is running
var pool=new Pool(config);
app.get('/test-db',function(req,res){
    //make a select request
    //return a response with the results
    pool.query('SELECT*FROM test',function(err,result){
    if(err){
        res.status(500).send(err.tostring());
    }    else{
        res.send(JSON.stringify(result));
    }
});
});
app.get('/counter', function (req, res) {
    ctr++;
  res.send(ctr.toString());
});
var names=[];
app.get('/submit-name',function(req,res)    // URL:/submit-name?name=xxxxxx
{
    //get the name from the request
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
                        var comments=[];
                app.get('/submit-comments',function(req,res)    // URL:/submit-name?name=xxxxxx
                {
                    //get the name from the request
                    var cmt=req.query.cmt;
                    comments.push(cmt);
                    res.send(JSON.stringify(comments));
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
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
