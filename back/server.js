let express = require('express');
let bodyParser = require('body-parser');
let db = require('./dbConnection');


// db.query("SELECT * FROM product WHERE id=2",
//     function(err, results, fields) {
//         console.log(err);
//         console.log(results); // собственно данные
//         console.log(fields); // мета-данные полей
//     });



let app = express();
app.get('/', (req, res) => {
    let data = null;
    db.query("SELECT * FROM product",
        function(err, results, fields) {
            res.send(results);
        });
});
app.listen(8081);