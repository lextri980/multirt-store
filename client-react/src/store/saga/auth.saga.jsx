import { loginApi } from "api/auth.api";
import { LOGINNING } from "constants/actions/auth.const";
import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";
import { push } from "redux-first-history";
import { call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { loginFail, loginSuccess } from "store/actions/auth.action";

function* workerLoginSaga({ payload }) {
  try {
    const response = yield call(loginApi, payload);
    if (response.status === 200) {
      localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      yield delay(500);
      yield put(loginSuccess(response.data));
      yield put(push("/dashboard"));
    }
  } catch (error) {
    yield put(loginFail(error.response.data));
  }
}

function* watcherLoginSaga() {
  yield takeLatest(LOGINNING, workerLoginSaga);
}

export const authSaga = [fork(watcherLoginSaga)];
