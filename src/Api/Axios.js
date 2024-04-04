import axios from "axios";
import { baseURL } from "./Api";
import Cookie from "cookie-universal";

const cookie = Cookie();
const token = cookie.get("e-commerce");

export const Axios = axios.create({
  baseURL: baseURL || "http://localhost:8000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  }
})