import {
  GETTING_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
} from "constants/actions/profile.const";

const initState = {
  profile: null,
  loading: false,
  message: null,
};

function profileReducer(state = initState, { type, payload }) {
  switch (type) {
    case GETTING_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload.data,
        loading: false,
        message: payload.message,
      };

    case GET_PROFILE_FAIL:
      return {
        ...state,
        profile: null,
        loading: false,
        message: payload.message,
      };

    default:
      return state;
  }
}

export default profileReducer;
