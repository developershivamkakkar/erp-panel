import axios from "axios";
const api = axios.create({
  baseURL: "http://dsms.localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// 🔹 Add tenant token automatically before every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("tenant_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
