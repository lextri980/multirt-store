import {
  LOGINNING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTERING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_AUTH,
} from "constants/actions/auth.const";

const initState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_AUTH:
      return {
        user: payload,
        isAuthenticated: true,
        loading: false,
      };

    case LOGINNING:
    case REGISTERING:
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
        loading: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default authReducer;
