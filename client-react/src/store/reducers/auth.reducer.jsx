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
  success: false,
  message: null,
  error: null,
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
        success: payload.success,
        message: payload.message,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: payload.success,
        message: payload.message,
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
      return {
        ...state,
        loading: false,
        success: payload.success,
        error: payload.message,
      };

    default:
      return state;
  }
}

export default authReducer;
