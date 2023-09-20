import axios from "axios";

const api = axios.create({
  baseURL: "http://84.38.184.99:9999/api/",
});

export default api;
