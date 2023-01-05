import http from "../helper.js";

class EcomDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    };

    find(query, by = "category", page = 0) {
        return http.get(`?${by}=${query}&page=${page}`);
      } ;
    
};

export default new EcomDataService();