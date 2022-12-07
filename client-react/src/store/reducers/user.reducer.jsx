import {
  GETTING_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
} from "constants/actions/user.const";

const initState = {
  users: [],
  count: null,
  loading: false,
  message: null,
};

function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case GETTING_USER:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        users: payload.data,
        count: payload.count,
        loading: false,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        users: [],
        count: null,
        loading: false,
      };

    default:
      return state;
  }
}

export default userReducer;
