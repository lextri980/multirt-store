import {
LOGINNING,
LOGIN_FAIL,
LOGIN_SUCCESS,
SET_AUTH
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

    case LOGIN_FAIL:
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
