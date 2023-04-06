import apiAxios from "config/axios";
import { url } from "constants/service.const";


export const getUserApi = async (param) => {
  return await apiAxios.get(`${url}/user/list/${param}`);
}