import stripe from "stripe";
import dotenv from 'dotenv';

dotenv.config();

const stripeAPI = stripe(process.env.STRIPE_SECRET_KEY);

class PaymentsDAO {
    static async createPayment(amount) {
        try {
            return await stripeAPI.paymentIntents.create({
                amount: amount*100,
                currency: "usd",
            })            
        } catch (e) {
            console.error(`Failure to create payment: ${e}`);
            return { error: e}
        }
    }
}
export default PaymentsDAO;