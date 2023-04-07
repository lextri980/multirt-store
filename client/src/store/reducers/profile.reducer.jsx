import {
  DELETE_AVATAR_FAIL,
  DELETE_AVATAR_SUCCESS,
  DELETING_AVATAR,
  GETTING_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  UPDATE_AVATAR_FAIL,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATING_AVATAR,
  UPDATING_PASSWORD,
  UPDATING_PROFILE,
} from "constants/actions/profile.const";

const initState = {
  profile: null,
  loading: false,
};

function profileReducer(state = initState, { type, payload }) {
  switch (type) {
    case GETTING_PROFILE:
    case UPDATING_PROFILE:
    case UPDATING_PASSWORD:
    case UPDATING_AVATAR:
    case DELETING_AVATAR:
      return {
        ...state,
        loading: true,
      };

    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_AVATAR_SUCCESS:
    case DELETE_AVATAR_SUCCESS:
      return {
        ...state,
        profile: payload.data,
        loading: false,
      };

    case UPDATE_PROFILE_FAIL:
    case UPDATE_PASSWORD_FAIL:
    case UPDATE_AVATAR_FAIL:
    case DELETE_AVATAR_FAIL:
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case GET_PROFILE_FAIL:
      return {
        ...state,
        profile: null,
        loading: false,
      };

    default:
      return state;
  }
}

export default profileReducer;
