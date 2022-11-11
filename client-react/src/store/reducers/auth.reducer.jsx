const initState = {
  data: [],
  loading: false,
  message: null,
}

function authReducer(state = initState, { type, payload }) {

  switch (type) {
    case 1:
      return {
        ...state
      }

    default:
      return state
  }
}

export default authReducer