var db = require('../../views/database.js');
var sha1 = require('sha1');


status = "";

module.exports = {

    /* GET search page. */
    page: function (req, res) {
        db.query("select * from station order by name", function (err, result) {
            if (err)
                throw err;
            else {
                res.render('blog/trainSearch',{data:result});
            }
        });
    },
    
    
    /* GET register page. */
    register: function (req, res) {
        db.query("select * from station order by name", function (err, result) {
            if (err)
                throw err;
            else {
                res.render('blog/register',{status:status});
                status = "";
            }
        });
    },
    
    
    /* GET best page. */
    best: function (req, res) {
        db.query("select * from station order by name", function (err, result) {
            if (err)
                throw err;
            else {
                res.render('blog/best',{data:result});
            }
        });
    },
    
    
    //insertReq
    
    
    
    /* GET insertLine */
    insertReq : function(req, res){
       var details = req.body ;
       var sha1Password = sha1(details.ps1);
       var query = db.query('INSERT INTO contributors (`email`, `name`, `dob`, `pw`, `contactNo`) VALUES (?,?,?,?,?)',[details.email,details.name,details.dob,sha1Password,details.contactNo], function (err, result) {
            if (err){
                console.log(req.body);
                console.log(query.sql);
            }
            else{
                status = "Request Send Successfully";
                res.render('blog/register',{status:status});
            }
        });
    },
    
    
    /* GET results page. */
    results: function (req, res) {
        var sqlQ1 = "SELECT T1.`arr` as c1 ,T1.`dept` as c2,T1.`dayType` as c3,T2.`arr` as c4, T2.`dayType` as c5 FROM trainstop T1 JOIN trainstop T2 ON T1.t_id = T2.t_id AND T2.s_Id = '"+req.body.end+"' WHERE T1.s_Id = '"+req.body.start+"' and T1.arr< T2.arr order by T1.arr ";
        var sqlQ2 = "SELECT `name` FROM `station` WHERE `s_Id` = '"+req.body.start+"'";
        var sqlQ3 = "SELECT `name` FROM `station` WHERE `s_Id` = '"+req.body.end+"'";
        var query = db.query(sqlQ1+";"+sqlQ2+";"+sqlQ3, function (err, result) {
            if (err)
                throw err;
            else {
                console.log(query.sql);
                res.render('blog/results',{data:result[0],start:result[1],end:result[2]});
            }
        });
    },
    
    //
    /* GET mail validity. */
    check: function (req, res) {
        var sqlQ1 = "SELECT * from contributors WHERE email = '"+req.body.mail+"' ";
        var query = db.query(sqlQ1, function (err, result) {
            if (err)
                throw err;
            else {
                console.log(query.sql);
                var numRows = result.length;
                if (numRows > 0) {
                    res.send("false");
                }
                else{
                    res.send("true");
                }
                
            }
        });
    },
    
}
