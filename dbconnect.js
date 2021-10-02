const mysql = require('mysql2');

let db = mysql.createConnection({
    host: 'yourhost',
    user: 'your_user',
    password: 'your_password',
    database: 'db_testnode'
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
