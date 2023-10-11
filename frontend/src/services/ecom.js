import http from "../helper.js";

const EcomDataService = {
  getAll: (search) => {
    const url = search ? `/products?search=${search}` : '/products';
    return http.get(url);
  },
  getProductsByCategory: (category) => http.get(`/products/${category}`),
  getProduct: (id) => http.get(`/product/${id}`),
  createOrder: (data) => http.post("/order", data),
  createStripePayment: (data) => http.post("/post_payment", data),
};

export default EcomDataService;
