import OrdersDAO from "../dao/OrdersDAO.js"

class OrdersController {
    static async apiPostOrder(req, res, next) {
       try {
           const order = req.body.order
           const date = new Date()

           const OrderResponse = await OrdersDAO.addOrder(
               date,
               order,
           )
           res.json({
               status: "success"
           })
           console.log(order);
       } catch (e) {
           res.status(500).json({ error: e.message})
       }
    }
}

export default OrdersController;