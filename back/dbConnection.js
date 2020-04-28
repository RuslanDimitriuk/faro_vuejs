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



module.exports = connection;