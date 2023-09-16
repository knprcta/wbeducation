import axios from "axios";

const api = axios.create({
  baseURL: "http://95.31.7.80:8090/api/",
});

export default api;
