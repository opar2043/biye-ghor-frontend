import axios from "axios";

const api = axios.create({
  baseURL: "https://matrimony-backend-tan.vercel.app/",
});

export default api;