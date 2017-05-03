var express = require('express');
var mysql = require('mysql');


var config = {
    user: 'kasun@trainmate07',
    password: 'Trainmate123',
    server: 'trainmate07.database.windows.net',
    database: 'trainmate07',
    options: {
        encrypt: true
    }
}


module.exports = config;