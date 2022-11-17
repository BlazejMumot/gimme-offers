import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7076/",
  timeout: 1000,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default instance;
