import { loginApi, registerApi } from "api/auth.api";
import {
  LOGINNING,
  LOGOUT_REQUEST,
  REGISTERING,
} from "constants/actions/auth.const";
import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";
import { toast } from "react-toastify";
import { push } from "redux-first-history";
import { call, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  loginFail,
  loginSuccess,
  logoutSuccess,
  registerFail,
  registerSuccess,
} from "store/actions/auth.action";

function* workerLoginSaga({ payload }) {
  try {
    const response = yield call(loginApi, payload);
    if (response.status === 200) {
      yield delay(500);
      localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      yield put(loginSuccess(response.data));
      yield put(push("/dashboard"));
      yield toast.success(response.data.message);
    }
  } catch (error) {
    yield put(loginFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerRegisterSaga({ payload }) {
  try {
    const response = yield call(registerApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(registerSuccess(response.data));
      yield toast.success(response.data.message);
    }
  } catch (error) {
    yield put(registerFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerLogoutSaga() {
  localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
  localStorage.removeItem("user");
  yield delay(500);
  yield put(logoutSuccess());
  yield put(push("/dashboard"));
  yield toast.success("Logout successfully");
}

function* watcherLoginSaga() {
  yield takeLatest(LOGINNING, workerLoginSaga);
}

function* watcherRegisterSaga() {
  yield takeLatest(REGISTERING, workerRegisterSaga);
}

function* watcherLogoutSaga() {
  yield takeLatest(LOGOUT_REQUEST, workerLogoutSaga);
}

export const authSaga = [
  fork(watcherLoginSaga),
  fork(watcherRegisterSaga),
  fork(watcherLogoutSaga),
];
