import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
    LOG_IN_FAILURE, LOG_IN_SUCCESS, LOG_IN_REQUEST,
    REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_REQUEST,
} from '../reducers/user';


function logInAPI(data) {
  return axios.post(`/user/login`,data);
}
  
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function registerAPI(data) {
  return axios.post(`/user/register`,data);
}
  
function* register(action) {
  try {
    const result = yield call(registerAPI, action.data);
    yield put({
      type: REGISTER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REGISTER_FAILURE,
      error: err.response.data,
    });
  }
}


function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, register);
}

  
export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchRegister),
  ]);
}