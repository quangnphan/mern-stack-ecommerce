import axios from "axios";

const baseURL = `https://mern-stack-ecommerce-qelv.onrender.com/api/ecom`;

export default axios.create({
    baseURL: baseURL,
    headers: {
      "Content-type": "application/json"
    }
});