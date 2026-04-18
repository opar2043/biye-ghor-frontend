import axios from "axios";

const api = axios.create({
  baseURL: "https://matrimony-backend-tan.vercel.app/",
  // baseURL: "http://localhost:5000/",
});

export default api;