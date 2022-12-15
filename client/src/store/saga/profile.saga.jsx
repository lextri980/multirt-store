import {
  getProfileApi,
  updateAvatarApi,
  updatePasswordApi,
  updateProfileApi,
} from "api/profile.api";
import {
  GETTING_PROFILE,
  UPDATING_AVATAR,
  UPDATING_PASSWORD,
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
  updateAvatarFail,
  updateAvatarSuccess,
  updatePasswordFail,
  updatePasswordSuccess,
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

function* workerUpdatePasswordSaga({ payload }) {
  try {
    const response = yield call(updatePasswordApi, payload);
    yield delay(500);
    yield put(updatePasswordSuccess(response.data));
    yield toast.success(response.data.message);
  } catch (error) {
    yield put(updatePasswordFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}

function* workerUpdateAvatarSaga({ payload }) {
  try {
    const response = yield call(updateAvatarApi, payload);
    yield delay(5000);
    yield put(updateAvatarSuccess(response.data));
    yield toast.success(response.data.message);
  } catch (error) {
    yield put(updateAvatarFail(error.response.data));
    yield toast.error(error.response.data.message);
  }
}


function* watcherProfileSaga() {
  yield takeEvery(GETTING_PROFILE, workerProfileSaga);
}

function* watcherUpdateProfileSaga() {
  yield takeLatest(UPDATING_PROFILE, workerUpdateProfileSaga);
}

function* watcherUpdatePasswordSaga() {
  yield takeLatest(UPDATING_PASSWORD, workerUpdatePasswordSaga);
}

function* watcherUpdateAvatarSaga() {
  yield takeLatest(UPDATING_AVATAR, workerUpdateAvatarSaga);
}

export const profileSaga = [
  fork(watcherProfileSaga),
  fork(watcherUpdateProfileSaga),
  fork(watcherUpdatePasswordSaga),
  fork(watcherUpdateAvatarSaga)
];
