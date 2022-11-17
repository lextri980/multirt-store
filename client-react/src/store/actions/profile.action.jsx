import {
  GETTING_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATING_PROFILE,
} from "constants/actions/profile.const";

export const gettingProfile = () => ({
  type: GETTING_PROFILE,
});

export const getProfileSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  payload: data,
});

export const getProfileFail = (error) => ({
  type: GET_PROFILE_FAIL,
  payload: error,
});

export const updatingProfile = (data) => ({
  type: UPDATING_PROFILE,
  payload: data,
});

export const updateProfileSuccess = (data) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: data,
});

export const updateProfileFail = (error) => ({
  type: UPDATE_PROFILE_FAIL,
  payload: error,
});
