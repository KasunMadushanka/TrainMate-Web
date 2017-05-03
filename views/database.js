var express = require('express');
var mssql = require('mssql');


/*var conn = mysql.createPool({
    multipleStatements: true,
    connectionLimit:50,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trainmate'
});*/

var conn = {
    user: 'kasun@trainmate073',
    password: 'Trainmate123',
    server: 'trainmate07.database.windows.net',
    database: 'trainmate07',
    options: {
        encrypt: true
    }
}


module.exports = conn;