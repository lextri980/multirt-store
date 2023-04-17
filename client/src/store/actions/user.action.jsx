import {
  GET_USER_REQUEST,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
} from "constants/actions/user.const";

export const getUserRequest = (param) => ({
  type: GET_USER_REQUEST,
  payload: param,
});

export const getUserSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});

export const getUserFail = (error) => ({
  type: GET_USER_FAIL,
  payload: error,
});
