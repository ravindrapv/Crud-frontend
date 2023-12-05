// src/services/api.js
import axios from "axios";

const baseURL = "https://product-crud-api-auth-production.up.railway.app";

const api = axios.create({
  baseURL,
});

export default api;
