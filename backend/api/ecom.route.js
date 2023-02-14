import express from "express"
import ProductsCtrl from "./controllers/products.controller.js"
import OrdersCtrl from "./controllers/orders.controller.js"

const router = express.Router()

// router.route("/").get((req,res) => res.send("Connect Success"))
router.route("/").get(ProductsCtrl.apiGetProducts)
router.route("/product/:id").get(ProductsCtrl.apiGetProductById)

router
    .route("/order")
    .post(OrdersCtrl.apiPostOrder)


export default router 