import { all } from "redux-saga/effects";
import { authSaga } from "./auth.saga";
import { profileSaga } from "./profile.saga";

function* rootSaga() {
  yield all([...authSaga, ...profileSaga]);
}

export default rootSaga;
