import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "./AppConfig";

const api = axios.create({
  baseURL: config.baseUrl,
});

export default api;