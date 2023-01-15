import ProductsDAO from "../dao/ProductsDAO.js";

export default class ProductsController {
    static async apiGetProducts(req, res, next) {
        const page = req.query.page ? parseInt(req.query.page, 10) : 0
        const productsPerPage = req.query.productsPerPage ? parseInt(req.query.productsPerPage, 10) : 20
        let filters = {}
        if (req.query.category) {
            filters.category = req.query.category
        }
        else if (req.query.sku) {
            filters.sku = req.query.sku
        }             
        const { productsList, totalNumProducts,} = await ProductsDAO.getProducts({
            filters,
            page,
            productsPerPage,
        })
        
        let response = {
            products: productsList,
            page: page,
            filters: filters,
            total_results: totalNumProducts,
        }
        res.json(response)
    }

    static async apiGetProductById(req, res, next) {
        try {
          let id = req.params.id || {}
          let product = await ProductsDAO.getProductByID(id)
          if (!product) {
            res.status(404).json({ error: "Not found" })
            return
          }
          res.json(product)
        } catch (e) {
          console.log(`api, ${e}`)
          res.status(500).json({ error: e })
        }
      }
}