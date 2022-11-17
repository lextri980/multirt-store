import { getProfileApi } from "api/profile.api";
import { GETTING_PROFILE } from "constants/actions/profile.const";
import { toast } from "react-toastify";
import { call, delay, fork, put, takeEvery } from "redux-saga/effects";
import {
  getProfileFail,
  getProfileSuccess,
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

function* watcherProfileSaga() {
  yield takeEvery(GETTING_PROFILE, workerProfileSaga);
}

export const profileSaga = [fork(watcherProfileSaga)];
