import { getUserApi } from "api/user.api";
import { GETTING_USER } from "constants/actions/user.const";
import { toast } from "react-toastify";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import { getUserFail, getUserSuccess } from "store/actions/user.action";

function* workerGetUserSaga({payload}) {
  try {
    //fetch api here
    const response = yield call(getUserApi, payload);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    //handle error
    yield put(getUserFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* watcherGetUserSaga() {
  yield takeEvery(GETTING_USER, workerGetUserSaga);
}

export const userSaga = [fork(watcherGetUserSaga)];
