var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var https = require('https');
var fs = require('fs');
var app = express();
app.use(bodyParser.json());

var options = {
    key: fs.readFileSync('./keys/privateKey.key'),
    cert: fs.readFileSync('./keys/certificate.crt')
}
https.createServer(options, app).listen(3000);

app.post('/', function(request, response){

    console.log(request.body);
    console.log(typeof request);

    var req = request.body.req;

    if (req == 1){AddUserToDB(request);}
    
});


function AddUserToDB(request){
    con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: '000',
        database: 'sys'});
    
    var query = ""; 

    var userid = request.body.userid;
    var user = request.body.user;
    var name = request.body.name;
    var email = request.body.email;
    var pass = request.body.password;

    con.connect(function(err){
        if(err) throw err;
        console.log("Connected to DB.");
    });


}