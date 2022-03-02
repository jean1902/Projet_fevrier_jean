let mysql = require('mysql');
let db =mysql.createConnection({
    host:'localhost' ,
    user :'root',
    password:'',
    database:"bd_tourisme"
})

module.exports =db;