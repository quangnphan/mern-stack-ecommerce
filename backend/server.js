import express from "express";
import cors from "cors";
import ecom from "./api/ecom.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ecom", ecom)
app.use("*", (req,res) => res.status(404).json({ error: "not found"}))

export default app;