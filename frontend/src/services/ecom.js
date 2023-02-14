import http from "../helper.js";

class EcomDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  find(query, by = "category", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }
  get(id) {
    return http.get(`/product/${id}`);
  }
  createOrder(data) {
    return http.post("/order", data);
  }
}

export default new EcomDataService();
