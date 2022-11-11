import { loginApi } from "api/auth.api";
import { LOGINNING } from "constants/actions/auth.const";
import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";
import {
call,
delay,
fork,
put, takeLatest
} from "redux-saga/effects";
import { loginFail, loginning, loginSuccess } from "store/actions/auth.action";

function* workerLoginSaga({payload}) {
  try {
    const response = yield call(loginApi, payload);
    console.log(response)
    if (response.status === 200) {
      localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, response.data.token)
      yield delay(500);
      yield put(loginSuccess(response.data));
    }
  } catch (error) {
    console.log(error)
    yield put(loginFail(error?.data?.message));
  }
}

function* watcherLoginSaga() {
  yield takeLatest(LOGINNING, workerLoginSaga);
}

export const authSaga = [fork(watcherLoginSaga)];
