let db = require('./../dbConnection');

exports.getProducts = function(req, res){
    db.query("SELECT * FROM faromebel.faromebel_prod",
        function(err, results, fields) {
            results.forEach(element => {
                element.img = element.img.split(', ');
            });
            res.send(JSON.stringify(results));
        });
};

exports.getLivingRoom = function(req, res) {
    db.query("SELECT * FROM faromebel.faromebel_prod where type = 'living_room'",
        function(err, results, fields) {
            results.forEach(element => {
                element.img = element.img.split(', ');
            });
            res.send(JSON.stringify(results));
        });
};

exports.getBedroom = function(req, res)  {
    db.query("SELECT * FROM faromebel.faromebel_prod where type = 'bedroom'",
        function(err, results, fields) {
            results.forEach(element => {
                element.img = element.img.split(', ');
            });
            res.send(JSON.stringify(results));
        });
};

exports.getDiningRoom = function (req, res) {
    db.query("SELECT * FROM faromebel.faromebel_prod where type = 'dining_room'",
        function(err, results, fields) {
            results.forEach(element => {
                element.img = element.img.split(', ');
            });
            res.send(JSON.stringify(results));
        });
};

exports.getTextile = function(req, res) {
    db.query("SELECT * FROM faromebel.faromebel_prod where type = 'textile'",
        function(err, results, fields) {
            results.forEach(element => {
                element.img = element.img.split(', ');
            });
            res.send(JSON.stringify(results));
        });
};

exports.getAccessories = function(req, res) {
    db.query("SELECT * FROM faromebel.faromebel_prod where type = 'accessories'",
        function(err, results, fields) {
            results.forEach(element => {
                element.img = element.img.split(', ');
            });
            res.send(JSON.stringify(results));
        });
};
exports.getMattress = function(req, res) {
    db.query("SELECT * FROM faromebel.faromebel_prod where type = 'mattress'",
        function(err, results, fields) {
            results.forEach(element => {
                element.img = element.img.split(', ');
            });
            res.send(JSON.stringify(results));
        });
};
exports.getHitProduct = function(req, res) {
    db.query("SELECT * FROM faromebel.faromebel_prod where price_sale != ''",
        function(err, results, fields) {
            results.forEach(element => {
                element.img = element.img.split(', ');
            });
            res.send(JSON.stringify(results));
        });
};

exports.getProduct = function(req, res) {
    db.query(`SELECT * FROM faromebel.faromebel_prod where id = ${req.query.id};`,
        (err, results, fields) => {
            results.forEach(element => {
                element.img = element.img.split(', ');
            });
            let data = results[0];
            db.query(`SELECT * FROM faromebel.parameters_product where param_id = ${req.query.id};`,
                (err, results, fields) => {
                   data.param = results[0];

                    res.send(data);
                });

        });
};