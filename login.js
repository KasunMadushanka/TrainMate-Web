var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./database').db_connection;
var sql = require('mssql');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

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

app.post('/login.js', urlencodedParser, function(req, res) {

    var email= req.body.email;
    var password= req.body.password;

    var request = new sql.Request(connection);

    request.query('select * from customer where name = ${email} ', function(err, rs) {
        console.dir(rs);
    });
    console.log(response);
    res.end(JSON.stringify(response));
})
