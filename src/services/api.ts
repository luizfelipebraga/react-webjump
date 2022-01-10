import axios from 'axios';

export const api = axios.create({ baseURL: "http://localhost:8888/api/V1/categories" });
export const apiImages = axios.create({ baseURL: "http://localhost:8888/media/" });