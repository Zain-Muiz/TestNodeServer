const mysql = require('mysql2');

let db = mysql.createConnection({
    host: 'istetkmce.in',
    user: 'ezitmxze_test',
    password: 'beat@2021',
    database: 'ezitmxze_testnode'
});

db.connect ((error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Connected To DB");
    }
})

module.exports = db;
