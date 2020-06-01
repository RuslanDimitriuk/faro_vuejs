let express = require('express');
let bodyParser = require('body-parser');
let db = require('./dbConnection');
const app = express();
// const productRouter = express.Router();
const productController = require("./controllers/productController.js");

// productRouter.use("/", function(request, response){
//     response.send("Все товары");
// });
// сопоcтавляем роутер с конечной точкой "/users"
// app.use("/products", productRouter);



app.get('/all', productController.getProducts);
app.get('/living_room', productController.getLivingRoom);
app.get('/bedRoom', productController.getBedroom);
app.get('/dining_room', productController.getDiningRoom);
app.get('/textile', productController.getTextile);
app.get('/accessories', productController.getAccessories);
app.get('/mattress', productController.getMattress);
app.get('/product', productController.getProduct);
app.get('/hit_product', productController.getHitProduct);

app.listen(8081);
