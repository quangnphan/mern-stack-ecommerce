import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/api/ecom",
    headers: {
      "Content-type": "application/json"
    }
  });