import axios from "axios";
import { parseCookies } from "nookies";

export function getAPICliente(ctx: any) {
  const { "parkingauth.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  api.interceptors.request.use((config) => {
    console.log(config);

    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
    console.log("axios.ts", token);
  }

  return api;
}

export const api = getAPICliente();
