import ProductsDAO from "../dao/ProductsDAO.js";

export default class ProductsController {
    static async apiGetProducts(req, res, next) {
        const page = req.query.page ? parseInt(req.query.page, 10) : 0
        const productsPerPage = req.query.productsPerPage ? parseInt(req.query.productsPerPage, 10) : 20
        let filters = {}
        if (req.query.title) {
            filters.title = req.query.title
        }
        const { productsList, totalNumProducts } = await ProductsDAO.getProducts({
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
}