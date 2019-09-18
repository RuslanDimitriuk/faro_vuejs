let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let connection = mysql.createConnection(
    {
        host: "localhost",
        port: '8889',
        user: "root",
        database: "faromebel",
        password: "12345"
    }
);

connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

connection.query("SELECT * FROM product WHERE id=1",
    function(err, results, fields) {
        console.log(err);
        console.log(results); // собственно данные
        // console.log(fields); // мета-данные полей
    });

let app = express();
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.listen(8080);