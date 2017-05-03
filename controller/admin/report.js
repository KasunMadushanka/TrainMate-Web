var db = require('../../views/database.js');

var request = require('request');


var status = "";
var stops = {};
var trainId = "No Train Seleceted! ";


module.exports = {
    
    
    
    /* GET Line Table page. */
    Page : function(req, res){
            db.query("select * from train; SELECT s_Id,name FROM `station`  where `s_Id` not in (select `s_Id` from trainstop where `t_id` = (SELECT `trainId` FROM `train` WHERE concat(trainId,' : ',Name)= '"+trainId+"')) order by s_Id;",[1,2], function (err, result) {
                if (err)
                    throw err;
                else {
                    if(req.session.user){
                        res.render('admin/report',{data:result[0] , status:status, Stops:stops, tId: trainId, Stations:result[1], userName:req.session.user, img:req.session.image, pos:req.session.pos});
                        status = "";
                        stops = {};
                        trainId = "No Train Seleceted! ";
                    }
                    if(req.cookies.user){
                        res.render('admin/report',{data:result[0] , status:status, Stops:stops, tId: trainId, Stations:result[1], userName:req.cookies.user, img:req.cookies.image, pos:req.cookies.pos});
                        status = "";
                        stops = {};
                        trainId = "No Train Seleceted! ";
                    }
                    else{
                        res.render('admin/login',{msg:"none"});
                    }

                }
            });
    },
    
    
    /* GET Train Schdule Report Page. */
    GetreportSchedule : function(req, res){
       var query = db.query("SELECT `id`,`dayType`, `arr`, `dept`,s.* FROM `trainstop` as ts inner join station as s on ts.`s_Id` = s.s_Id where `t_id` = (SELECT `trainId` FROM `train` WHERE concat(trainId,' : ',Name)= '3005 : Chilaw - Colombo Fort')", function (err, result) {
            if (err) {
                console.log(req.body);
            } else {
                
                
                var objs = [];
                for (var i = 0;i < result.length; i++) {
                    objs.push({"id": result[i].s_Id,"name":result[i].name,"arr":result[i].arr,"dept":result[i].dept});
                }
                
                var x = JSON.stringify(objs);
                var xStr = '"trainStops":'+x+'';
                
                console.log(xStr);
                
                var data = {
                        template:{"shortid":'BynN_cl0l'},
                        data:{"trainStops":x}
                    }
                    var options = {
                        uri:'http://localhost:8001/api/report',
                        method:'POST',
                        headers: 'Content-Type: application/json',
                        json:true, body: data
                    }
                    request(options).pipe(res);  
            }
        });
    },


}



