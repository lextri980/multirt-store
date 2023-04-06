import apiAxios from "config/axios";
import { url } from "constants/service.const";

export const loginApi = async (data) => {
  return await apiAxios.post(`${url}/auth/login`, data);
};

export const registerApi = async (data) => {
  return await apiAxios.post(`${url}/auth/register`, data);
};
