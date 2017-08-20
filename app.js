var sql = require('mysql');


var db = sql.createConnection({
    host: "localhost",
    database: "system",
    user: "root",
    password: "root",
    
});


db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log ('MySQL Connected...');
}) ;

