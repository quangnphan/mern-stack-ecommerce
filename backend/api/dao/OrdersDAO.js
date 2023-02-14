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

    static async addOrder(date, order) {
        try {
            if (!orders) {
                throw new Error("Orders collection has not been initialized")
            }
            const orderDetail = {
                date: date,
                order: order,
            }
            return await orders.insertOne(orderDetail)
        } catch (e) {
            console.error(`Failure to post order: ${e}`);
            return { error: e}
        }
    }
}
export default OrdersDAO;