import {
  GETTING_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
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
      return {
        ...state,
        loading: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload.data,
        loading: false,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload.data,
        loading: false,
      };

    case UPDATE_PROFILE_FAIL:
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
