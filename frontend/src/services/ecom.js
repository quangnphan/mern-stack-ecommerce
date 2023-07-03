import http from "../helper.js";

class EcomDataService {
  getAll() {
    return http.get(`/products`);
  }
  getProductsByCategory(category) {
    return http.get(`/products/${category}`);
  }
  getProduct(id) {
    return http.get(`/product/${id}`);
  }
  createOrder(data) {
    return http.post("/order", data);
  }
  createStripePayment(data) {
    return http.post("/post_payment", data);
  }
}

export default new EcomDataService();
