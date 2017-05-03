<% include ../database.js %>


var q = conn.query('select * from trinline', function (err, results))
console.log(results);