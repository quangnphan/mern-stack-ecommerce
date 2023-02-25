import axios from "axios";

const baseURL = `http://mernstack-ecommerce-03q21.netlify.app/api/ecom`;

export default axios.create({
    baseURL: baseURL,
    headers: {
      "Content-type": "application/json"
    }
});