const express = require('express');
const app = express();
let db = require('./dbconnect');


app.get('/', (req,res)=> {

    db.query('SELECT * FROM testtable WHERE id = 1', (err,result) => {
        if(err){
          console.log(err);
        }
       else{
           console.log(res[0])
           res.send(res[0].username);
       }
    })
})



app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
