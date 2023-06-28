import http from "../helper.js";

class EcomDataService {
  getAll() {
    return http.get(`/products`);
  }
  getProductByCategory(category) {
    return http.get(`/products/${category}`);
  }
  get(id) {
    return http.get(`/product/${id}`);
  }
  createOrder(data) {
    return http.post("/order", data);
  }
  createStripePayment(data) {
    return http.post("/payment", data);
  }
}

export default new EcomDataService();
