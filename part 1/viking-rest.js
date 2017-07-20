var express = require('express');
const fs=require('fs');

var app = express();
var bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    var allowedOrigins = [
        'http://localhost:3001',
    ];

    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // Website you wish to allow to connect
    /*res.setHeader('Access-Control-Allow-Origin', "http://"+CONSTANTS.CONFIG.APACHE_HOST+':'+CONSTANTS.CONFIG.APACHE_PORT);*/

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/modifyFile', function (req, res) {
   let text = req.body.text;
   let email = req.body.email;
   let content = "the email of the user is: "+email+" and the coment is "+text;
   fs.writeFile("/test.txt", content, function(err) {
        if(err) {
            res.status(500).jsonp({Message:"Error"});
            return console.log(err);
        }

        console.log("The file was saved!");
        res.status(200).jsonp({Message:"The file was saved!"});
    });  
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port   
   console.log("Viking service rest app listening at http://%s:%s", host, port)
})