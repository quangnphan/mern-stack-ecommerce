import stripe from "stripe";
// const stripeAPI = stripe(process.env.STRIPE_SECRET_KEY);
const stripeAPI = stripe("sk_test_51MbEP2J0BezhDIqMM57Nk4XZzesmZWeErdI2l4j7ZIg8TwiSItnnqdPJNYRiX4EQAUNfGittqjoeH2TkcNgjChl000VbfMVSk9");

class PaymentsDAO {
    static async createPayment(amount) {
        try {
           
            return await stripeAPI.paymentIntents.create({
                amount: amount*100,
                currency: "usd",
            })            
        } catch (e) {
            console.error(`Failure to post order: ${e}`);
            return { error: e}
        }
    }
}
export default PaymentsDAO;