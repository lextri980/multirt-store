import {
  LOGINNING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTERING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_AUTH,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "constants/actions/auth.const";

export const setAuth = (data) => ({
  type: SET_AUTH,
  payload: data,
});

export const loginning = (data) => ({
  type: LOGINNING,
  payload: data,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const registering = (data) => ({
  type: REGISTERING,
  payload: data,
});

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
