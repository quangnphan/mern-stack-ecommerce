import express from "express";
import cors from "cors";
import ecom from "./api/ecom.route.js";
import Stripe from "stripe";

const stripeSecret = new Stripe(
  "sk_test_51MbEP2J0BezhDIqMM57Nk4XZzesmZWeErdI2l4j7ZIg8TwiSItnnqdPJNYRiX4EQAUNfGittqjoeH2TkcNgjChl000VbfMVSk9"
);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ecom", ecom);
app.post("/api/payment/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripeSecret.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
