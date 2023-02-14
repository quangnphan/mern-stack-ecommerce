import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import ProductsDAO from "./api/dao/ProductsDAO.js"
import OrdersDAO from "./api/dao/OrdersDAO.js"

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.ECOM_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 5000,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack);
    process.exit(1);
})
.then(async client => {
    await ProductsDAO.injectDB(client); 
    await OrdersDAO.injectDB(client);
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
})