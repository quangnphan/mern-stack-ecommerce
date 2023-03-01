let orders

class OrdersDAO {
    static async injectDB(conn) {
        if (orders) {
            return
        }
        try {
            orders = await conn.db(process.env.ECOM_NS).collection("ecom_orders");
        } catch (e) {
            console.error(`Failure to connect to a collection in ordersDAO: ${e}`);
        }
    };

    static async addOrder(date, order, purchaser) {
        try {
            if (!orders) {
                throw new Error("Orders collection has not been initialized")
            }
            const orderDetail = {
                date: date,
                order: order,
                user: purchaser,
            }
            return await orders.insertOne(orderDetail)
        } catch (e) {
            console.error(`Failure to post order: ${e}`);
            return { error: e}
        }
    }
}
export default OrdersDAO;