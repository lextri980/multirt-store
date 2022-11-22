import { getProfileApi, updateProfileApi } from "api/profile.api";
import {
  GETTING_PROFILE,
  UPDATING_PROFILE,
} from "constants/actions/profile.const";
import { toast } from "react-toastify";
import {
  call,
  delay,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  getProfileFail,
  getProfileSuccess,
  updateProfileFail,
  updateProfileSuccess,
} from "store/actions/profile.action";

function* workerProfileSaga() {
  try {
    const response = yield call(getProfileApi);
    yield delay(500);
    yield put(getProfileSuccess(response.data));
  } catch (error) {
    yield put(getProfileFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerUpdateProfileSaga({ payload }) {
  try {
    const response = yield call(updateProfileApi, payload);
    yield delay(500);
    localStorage.setItem("user", JSON.stringify(response.data.data));
    yield put(updateProfileSuccess(response.data));
    yield toast.success(response.data.message);
  } catch (error) {
    yield put(updateProfileFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* watcherProfileSaga() {
  yield takeEvery(GETTING_PROFILE, workerProfileSaga);
}

function* watcherUpdateProfileSaga() {
  yield takeLatest(UPDATING_PROFILE, workerUpdateProfileSaga);
}

export const profileSaga = [
  fork(watcherProfileSaga),
  fork(watcherUpdateProfileSaga),
];
