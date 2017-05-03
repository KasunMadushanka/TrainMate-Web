var express = require('express');
var router = express.Router();
//var db = require('./controllers/admin/getLines.js')


/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('admin/login');
});

router.get('/index', function (req, res, next) {
    res.render('admin/index');
});

router.get('/station', function (req, res, next) {
    res.render('admin/station');
});

router.get('/contributors', function (req, res, next) {
    res.render('admin/contributors');
});

router.get('/test', function (req, res, next) {
    res.render('admin/database');
});

module.exports = router;
