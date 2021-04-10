import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
    UPLOAD_FAILURE, UPLOAD_SUCCESS, UPLOAD_REQUEST,
} from '../reducers/upload';


function imgUploadAPI(data) {
  return axios.get(`/upload/imgUpload`);
}
  
function* imgUpload(action) { 
  try {
    const result = yield call(imgUploadAPI, action.data);
    yield put({
      type: UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}


function* watchImgUpload() {
    yield takeLatest(UPLOAD_REQUEST, imgUpload);
}
  
  
export default function* userSaga() {
  yield all([
    fork(watchImgUpload),
  ]);
}