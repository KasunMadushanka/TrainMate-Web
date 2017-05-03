//import ../../database.js
//
//
//conn.getConnection(function (error, tempCont) {
//    if (!!error) {
//        tempCont.release();
//        console.log('Error');
//    } else {
//        console.log('Connceted!');
//        tempCont.query("select * from trinline", function (error, results) {
//            tempCont.release();
//            if (!!error) {
//                console.log('Error in query');
//            } else {
//                console.log(results);
//                res.render('admin/station', { blogpost: blogpost,
//                    title: 'title',
//                    author: '2014',
//                    content: 'sad',
//                    date: '234'
//                });
//                //res.render('admin/station', data: {title: blogpost.title,author: blogpost.author,content: blogpost.content,date: blogpost.date});
//                //res.render('admin/station', data: res.locals.results);
//            }
//        });
//    }
//});

//
//var express = require('express');
//var mysql = require('mysql');
//
//
//var conn = mysql.createPool({
//    connectionLimit:50,
//    host: 'localhost',
//    user: 'root',
//    password: '',
//    database: 'trainmate'
//});
//
//conn.query("select * from trinline", function (error, results) {
//        if (!!error) {
//            console.log('Error in query');
//        } else {
//            console.log(results);
//            res.render('admin/station', data: results);
//        }
//});