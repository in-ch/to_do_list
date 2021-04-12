import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
    UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_REQUEST,
} from '../reducers/upload';


function imgUploadAPI(data) {
  return axios.post(`/upload/imgUpload`, data);
}
  
function* imgUpload(action) { 
  try {
    const result = yield call(imgUploadAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}


function* watchImgUpload() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, imgUpload);
}
  
  
export default function* userSaga() {
  yield all([
    fork(watchImgUpload),
  ]);
}