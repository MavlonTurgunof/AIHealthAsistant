import axios from "axios";

const request = axios.create({
  baseURL: "https://api.kasimovstudio.uz/api/v1",
});

export default request;
