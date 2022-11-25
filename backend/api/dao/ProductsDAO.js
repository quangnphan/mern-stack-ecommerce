import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let products

class ProductsDAO {
    static async injectDB(conn)  {
        if (products) {
            return
        }
        try {
            products = await conn.db(process.env.ECOM_NS).collection("movies")
        } catch (e) {
            console.error(`Failure to connect to a collection in productsDAO: ${e}`);
        }
    };

    static async getProducts({
        filters = null,
        page = 0,
        productsPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("title" in filters) {
                query = { $text: { $search: filters["title"]}
            }
        }}
        let cursor
    
        try {
            cursor = await products
            .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { productsList: [], totalNumProducts: 0 }
        }

        //limit page
        const limitCursor = cursor.limit(productsPerPage).skip(productsPerPage * page)

        // const productsList = await cursor.toArray()
        const productsList = await limitCursor.toArray()
        const totalNumProducts = await products.countDocuments(query)

        return { productsList, totalNumProducts}
    }

    


}

export default ProductsDAO;
