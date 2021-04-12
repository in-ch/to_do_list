import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_REQUEST,
  CONTENT_UPLOAD_FAILURE, CONTENT_UPLOAD_SUCCESS, CONTENT_UPLOAD_REQUEST,
    
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

function contentUploadAPI(data) {
  return axios.post(`/upload/contentUpload`, data);
}
  
function* contentUpload(action) { 
  try {
    const result = yield call(contentUploadAPI, action.data);
    yield put({
      type: CONTENT_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CONTENT_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}


function* watchImgUpload() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, imgUpload);
}

function* watchContentUpload() {
  yield takeLatest(CONTENT_UPLOAD_REQUEST, contentUpload);
}
  
  
export default function* userSaga() {
  yield all([
    fork(watchImgUpload),
    fork(watchContentUpload)
  ]);
}