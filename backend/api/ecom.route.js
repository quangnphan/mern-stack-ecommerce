import express from "express"
import ProductsCtrl from "./controllers/products.controller.js"

const router = express.Router()

// router.route("/").get((req,res) => res.send("Connect Success"))
router.route("/").get(ProductsCtrl.apiGetProducts)

export default router 