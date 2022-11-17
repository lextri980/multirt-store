import apiAxios from "config/axios";
import { url } from "constants/service.const";

export const getProfileApi = async (data) => {
  return await apiAxios.get(`${url}/user/profile`, data);
};

export const updateProfileApi = async (data) => {
  return await apiAxios.post(`${url}/user/profile/update`, data);
};
