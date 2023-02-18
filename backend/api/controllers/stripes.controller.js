import PaymentsDAO from "../dao/PaymentsDAO.js";

class StripesController {
  static async apiPostPayment(req, res, next) {
    try {
      const amount = req.body.total;
      //    console.log(`total:`, amount)

      const paymentIntent = await PaymentsDAO.createPayment(amount);
      //    console.log(paymentIntent);
      res.status(201).json({ clientSecret: paymentIntent.client_secret });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

export default StripesController;
