import axios from "axios";
import { API } from "../env";

export const api = axios.create({ baseURL: API.ADDRESS });
// export const apiImages = axios.create({ baseURL: "http://localhost:8888" });
