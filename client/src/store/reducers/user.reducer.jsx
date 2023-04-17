import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "constants/actions/user.const";

const initState = {
  users: [],
  pageInfo: null,
  loading: false,
  message: null,
};

function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        users: payload.data,
        pageInfo: payload.pageInfo,
        loading: false,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        users: [],
        pageInfo: null,
        loading: false,
      };

    default:
      return state;
  }
}

export default userReducer;
